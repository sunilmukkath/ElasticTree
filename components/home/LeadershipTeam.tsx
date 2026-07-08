"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SpaceSection from "@/components/ui/SpaceSection";
import SectionBlock from "@/components/ui/SectionBlock";
import TeamGrid from "@/components/team/TeamGrid";
import { teamMembers, offices } from "@/lib/team";

export default function LeadershipTeam() {
  return (
    <SpaceSection flow="teal" spacing="compact">
      <div className="section-stack">
        <SectionBlock
          label="Meet The Team"
          title={<>Researchers You Work With <span className="text-gradient-amber">Directly</span></>}
          subtitle="Senior leaders across analytics, branding, strategy, and field operations — the same people who scope your study run it."
        >
          <TeamGrid members={teamMembers} columns={4} />
        </SectionBlock>

        <hr className="divider-subtle" />

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

        <div className="cta-glow max-w-2xl section-stack-sm">
          <p className="eyebrow-text relative z-10">Start a Project</p>
          <h2 className="font-display font-black text-display-md text-white relative z-10">
            Ready to Turn Data Into{" "}
            <span className="text-gradient-amber text-shimmer">Decisions?</span>
          </h2>
          <p className="text-body-md relative z-10">
            Whether you need a quick behavioural pulse-check or a full-year tracker — let&apos;s design the right study for your brief.
          </p>
          <div className="home-cta-row pt-2 relative z-10">
            <Link href="/contact" className="btn-primary btn-glow">
              Talk to an Expert <ArrowRight size={16} />
            </Link>
            <Link href="/capabilities" className="btn-secondary">
              See All Capabilities
            </Link>
          </div>
        </div>
      </div>
    </SpaceSection>
  );
}
