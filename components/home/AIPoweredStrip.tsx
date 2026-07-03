"use client";

import { motion } from "framer-motion";
import { ScanEye, Database, LineChart, Layers, Brain, Zap } from "lucide-react";
import SpaceSection from "@/components/ui/SpaceSection";
import SectionBlock from "@/components/ui/SectionBlock";

const features = [
  { Icon: Database, title: "Table Share®", tag: "Syndicated", desc: "3,468 households tracked dish-by-dish across 16 cities.", accent: "#8b5cf6" },
  { Icon: LineChart, title: "Brand Analytics", tag: "Quant", desc: "MaxDiff, conjoint, segmentation, and driver analysis in decision-ready dashboards.", accent: "#34d399" },
  { Icon: ScanEye, title: "Sensory Science", tag: "FMCG & F&B", desc: "Trained panels with TDS, CATA, and affective testing for product development.", accent: "#2dd4bf" },
  { Icon: Layers, title: "Impact & CSR", tag: "Social", desc: "Baseline-to-endline frameworks with donor-grade reporting.", accent: "#fb923c" },
  { Icon: Brain, title: "AI Gaze™", tag: "Select projects", desc: "Eye-tracking simulation for packaging, shelf, and ad pre-testing.", accent: "#e8a820" },
  { Icon: Zap, title: "Agile Research", tag: "Rapid", desc: "Online qual and quant with rigorous QC — insights in days, not weeks.", accent: "#f472b6" },
];

export default function AIPoweredStrip() {
  return (
    <SpaceSection flow="purple">
      <SectionBlock
        label="Capabilities"
        title={<>Research Tools That <span className="text-gradient-amber">Scale With You</span></>}
        subtitle="Sensory science and syndicated panels first — intelligent methods where they add clarity."
      >
        <div className="content-grid-3">
          {features.map(({ Icon, title, tag, desc, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="feature-card"
            >
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${accent}18`, border: `1px solid ${accent}30`, boxShadow: `0 0 20px ${accent}15` }}
                >
                  <Icon size={18} style={{ color: accent }} aria-hidden />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-3">
                    <h3 className="text-title !mb-0">{title}</h3>
                    <span className="text-caption normal-case tracking-normal">{tag}</span>
                  </div>
                  <p className="text-body-sm">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionBlock>
    </SpaceSection>
  );
}
