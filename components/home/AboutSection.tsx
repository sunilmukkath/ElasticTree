import SpaceSection from "@/components/ui/SpaceSection";
import SectionBlock from "@/components/ui/SectionBlock";
import { aboutStats, companyIntro } from "@/lib/team";

export default function AboutSection() {
  return (
    <SpaceSection flow="blue" id="about" className="scroll-mt-24">
      <SectionBlock
        label="About Us"
        title={<>Research Practitioners Since <span className="text-gradient-amber">2014</span></>}
        subtitle={companyIntro.lead}
      >
        <div className="max-w-3xl copy-flow">
          <p className="text-body-md">{companyIntro.body}</p>
        </div>

        <div className="stat-row mt-12">
          {aboutStats.map((s) => (
            <div key={s.label}>
              <p className="stat-value" style={{ color: s.accent }}>{s.value}</p>
              <p className="stat-label">{s.label}</p>
              <p className="text-body-sm mt-3 max-w-[12rem]">{s.desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>
    </SpaceSection>
  );
}
