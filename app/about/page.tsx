import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SpaceSection from "@/components/ui/SpaceSection";
import SectionBlock from "@/components/ui/SectionBlock";
import TeamGrid from "@/components/team/TeamGrid";
import { teamMembers, aboutStats, companyIntro, offices } from "@/lib/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Elastic Tree team — market research practitioners since 2014, serving 250+ clients across India and overseas.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Research Practitioners Since <span className="text-gradient-amber">2014</span></>}
        subtitle={companyIntro.lead}
      />

      <SpaceSection flow="blue">
        <div className="max-w-3xl copy-flow">
          <p className="text-lead">{companyIntro.body}</p>
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
      </SpaceSection>

      <SpaceSection flow="teal">
        <SectionBlock
          label="Meet The Team"
          title={<>Built by <span className="text-gradient-amber">Practitioners</span></>}
          subtitle="Experienced researchers leading analytics, branding, strategy, and field operations."
        >
          <TeamGrid members={teamMembers} columns={4} />
        </SectionBlock>
      </SpaceSection>

      <SpaceSection flow="purple" spacing="tight">
        <SectionBlock
          label="Our Offices"
          title="Chennai & Bengaluru"
          titleSize="md"
          gap="md"
        >
          <div className="content-grid-2 max-w-3xl">
            {offices.map((office) => (
              <div key={office.city} className="flex gap-3">
                <MapPin size={18} className="text-[var(--amber)] mt-1 flex-shrink-0 opacity-80" aria-hidden />
                <div>
                  <p className="text-title mb-1">{office.city}</p>
                  <p className="text-body-sm">{office.address}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>
      </SpaceSection>

      <section className="section-py border-t border-white/[0.06] section-flow flow-tint-teal">
        <div className="page-content max-w-xl section-stack-sm">
          <h2 className="font-display font-black text-display-md text-white">
            Work with a team that knows your category
          </h2>
          <p className="text-body-md">
            From brief to insight — talk to the researchers who will actually run your study.
          </p>
          <Link href="/contact" className="btn-primary btn-glow w-fit">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
