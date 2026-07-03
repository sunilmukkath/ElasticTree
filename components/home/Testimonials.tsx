"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SpaceSection from "@/components/ui/SpaceSection";
import SectionBlock from "@/components/ui/SectionBlock";

const items = [
  {
    quote: "Elastic Tree gave us insight into consumer behaviour we'd never had before. Their AI Gaze work on our packaging redesign directly influenced the final brief — and the new pack outsold the incumbent by 18% in the first quarter.",
    name: "Category Lead", company: "Tier-1 FMCG, Foods Division", accent: "#e8a820", initial: "F",
  },
  {
    quote: "Table Share® syndicated data is genuinely differentiated. Seeing meal occasions, dish-level consumption, and frequency in one platform changed how we prioritise innovation pipelines.",
    name: "Insights Manager", company: "Large QSR Chain, India", accent: "#38bdf8", initial: "Q",
  },
  {
    quote: "Their sensory science team understands product development language. They translate texture and flavour data into actionable R&D briefs — that's rare.",
    name: "R&D Head", company: "Snacking Startup, Series B", accent: "#8b5cf6", initial: "R",
  },
  {
    quote: "We needed impact data for a CSR programme serving 40,000 beneficiaries. Elastic Tree handled the full survey lifecycle and delivered board-ready findings ahead of schedule.",
    name: "CSR Director", company: "National FMCG Conglomerate", accent: "#34d399", initial: "C",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const cur = items[idx];

  return (
    <SpaceSection flow="teal">
      <SectionBlock
        label="Client Voices"
        title={<>What <span className="text-gradient-amber">Clients</span> Say</>}
        titleSize="md"
        gap="md"
      >
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="quote-panel"
              style={{ borderLeftColor: `${cur.accent}60`, borderLeftWidth: 3, borderLeftStyle: "solid" }}
            >
              <blockquote className="text-lead italic !text-slate-200">
                &ldquo;{cur.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="avatar-mark" style={{ color: cur.accent, background: `${cur.accent}18` }}>
                  {cur.initial}
                </div>
                <div>
                  <p className="text-title">{cur.name}</p>
                  <p className="text-body-sm">{cur.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              {items.map((it, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{ width: i === idx ? 28 : 6, background: i === idx ? it.accent : "rgba(255,255,255,0.1)" }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1 ml-auto">
              <button
                onClick={() => setIdx((idx - 1 + items.length) % items.length)}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-[var(--amber)] hover:bg-white/[0.04] transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setIdx((idx + 1) % items.length)}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-[var(--amber)] hover:bg-white/[0.04] transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </SectionBlock>
    </SpaceSection>
  );
}
