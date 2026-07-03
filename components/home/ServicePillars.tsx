"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SpaceSection from "@/components/ui/SpaceSection";
import SectionBlock from "@/components/ui/SectionBlock";

const pillars = [
  { id: "analytics", title: "Analytics & Brand Research", desc: "Brand tracking, NPS, U&A, MaxDiff, conjoint, segmentation.", href: "/capabilities#analytics" },
  { id: "sensory", title: "Sensory Science", desc: "QDA, TDS, CATA, and affective testing for FMCG & F&B.", href: "/capabilities#sensory" },
  { id: "syndicated", title: "Syndicated Research", desc: "Table Share® — continuous food-consumption tracking across 16 cities.", href: "/table-share" },
  { id: "qualitative", title: "Qualitative & Ethnography", desc: "IDIs, focus groups, online communities, ZMET.", href: "/capabilities#market-research" },
  { id: "impact", title: "Impact & CSR Research", desc: "Baseline, mid-line, and end-line studies with donor-grade reporting.", href: "/capabilities#impact" },
  { id: "ai-gaze", title: "Visual Attention Testing", desc: "AI Gaze™ for packaging and shelf studies.", href: "/capabilities#advanced-methods" },
];

export default function ServicePillars() {
  return (
    <SpaceSection flow="purple">
      <SectionBlock
        label="Capabilities"
        title={<>Six Research <span className="text-gradient-amber">Pillars</span></>}
        subtitle="End-to-end capabilities — from field to findings — inside one team."
      >
        <div className="content-grid-3">
          {pillars.map(({ id, title, desc, href }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
            >
              <Link href={href} className="pillar-link group">
                <span className="text-caption mb-3 block opacity-60">0{i + 1}</span>
                <h3 className="text-title group-hover:text-[var(--teal-bright)] transition-colors">{title}</h3>
                <p className="text-body-sm">{desc}</p>
                <span className="inline-flex items-center gap-1 text-body-sm text-slate-300 group-hover:text-[var(--amber)] transition-colors">
                  Learn more <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionBlock>
    </SpaceSection>
  );
}
