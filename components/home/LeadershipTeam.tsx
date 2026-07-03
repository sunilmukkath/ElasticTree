"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SpaceSection from "@/components/ui/SpaceSection";
import SectionBlock from "@/components/ui/SectionBlock";
import TeamGrid from "@/components/team/TeamGrid";
import { teamMembers } from "@/lib/team";

const pedigree = [
  "Nielsen IQ", "Kantar Worldpanel", "IMRB International", "Ipsos India",
  "GfK India", "Mintel", "Euromonitor",
];

export default function LeadershipTeam() {
  return (
    <SpaceSection flow="teal" spacing="loose">
      <div className="section-stack">
        <SectionBlock
          label="The Team"
          title={<>Built by <span className="text-gradient-amber">Practitioners</span></>}
          subtitle="Senior researchers from the world's top insights firms — now working for you directly."
          action={
            <Link href="/about" className="btn-secondary text-sm">
              About Us <ArrowRight size={15} />
            </Link>
          }
        >
          <TeamGrid members={teamMembers} columns={4} />
        </SectionBlock>

        <hr className="divider-subtle" />

        <div>
          <p className="eyebrow-text mb-5">Team Pedigree</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3 max-w-3xl">
            {pedigree.map((org) => (
              <span key={org} className="text-body-sm">{org}</span>
            ))}
          </div>
        </div>

        <div className="cta-glow max-w-2xl section-stack-sm">
          <p className="eyebrow-text relative z-10">Start a Project</p>
          <h2 className="font-display font-black text-display-md text-white relative z-10">
            Ready to Turn Data Into{" "}
            <span className="text-gradient-amber text-shimmer">Decisions?</span>
          </h2>
          <p className="text-body-md relative z-10">
            Whether you need a quick consumer pulse or a full-year tracker — let&apos;s design the right study for your brief.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 relative z-10">
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
