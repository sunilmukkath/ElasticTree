"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SpaceSection from "@/components/ui/SpaceSection";
import SectionBlock from "@/components/ui/SectionBlock";

const items = [
  {
    quote: "An extremely dedicated and friendly team at Elastic Tree has made us very comfortable and their approach to our each and every request has always been taken into consideration. We feel so confident and safe working with Elastic Tree.",
    name: "Alok Robin",
    company: "Takasago",
    accent: "#e8a820",
    initial: "A",
  },
  {
    quote: "There is high involvement from senior research team members, which is good and different from a larger research agency.",
    name: "Pradeep Gangadharan",
    company: "Waycool",
    accent: "#38bdf8",
    initial: "P",
  },
  {
    quote: "Elastic Tree is well integrated with the project. Starting with the project brief to the fragrance houses, all the way to the final leg of consumer interactions.",
    name: "Harsh Arya",
    company: "ITC",
    accent: "#2dd4bf",
    initial: "H",
  },
  {
    quote: "The research I did with Elastic Tree helped in both new product development and communication positioning. The rigour of qualitative insights provided by the team has helped in arriving at suitable brand propositions.",
    name: "Janani Kandaswamy",
    company: "Mangaldeep",
    accent: "#a78bfa",
    initial: "J",
  },
  {
    quote: "The granularity of research and transparency of the organisation set it apart. Was a pleasure working with them.",
    name: "Akash Jain",
    company: "Cosco",
    accent: "#5eead4",
    initial: "A",
  },
  {
    quote: "They deeply immersed themselves in our brand, delving into the intricacies of both the brand and the category. The brand planning and strategic expertise they bring to the table are immeasurable. Working with Team ET has truly been a transformative experience for our brand.",
    name: "Kashyap G",
    company: "Star Health",
    accent: "#8b5cf6",
    initial: "K",
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
