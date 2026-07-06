"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SpaceSection from "@/components/ui/SpaceSection";
import SectionBlock from "@/components/ui/SectionBlock";
import SectionHeader from "@/components/ui/SectionHeader";
import { aboutStats, companyIntro } from "@/lib/team";
import { clientNames } from "@/lib/clients";
import { testimonials } from "@/lib/testimonials";

const sortedClients = [...clientNames].sort((a, b) => a.localeCompare(b));

export default function AboutSection() {
  const [idx, setIdx] = useState(0);
  const cur = testimonials[idx];

  return (
    <SpaceSection flow="blue" id="about" className="scroll-mt-24">
      <div className="section-stack">
        <SectionBlock
          label="About Us"
          title={<>A Trusted Research Partner Since <span className="text-gradient-amber">2014</span></>}
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

        <div className="section-stack-md border-t border-white/[0.06] pt-12">
          <SectionHeader
            label="Trusted by"
            title={<>200+ <span className="text-gradient-amber">Brands</span> Worldwide</>}
            subtitle="A selection of brands we've partnered with across India and overseas."
            titleSize="md"
          />

          <div className="highlight-panel p-5 sm:p-6 lg:p-8">
            <div className="client-grid">
              {sortedClients.map((name) => (
                <span key={name} className="client-chip">
                  {name}
                </span>
              ))}
            </div>
            <p className="text-caption normal-case text-center mt-6 opacity-70">
              Representative client list — 200+ brands served since 2014
            </p>
          </div>
        </div>

        <div className="section-stack-md border-t border-white/[0.06] pt-12">
          <SectionHeader
            label="Client Voices"
            title={<>What <span className="text-gradient-amber">Clients</span> Say</>}
            titleSize="md"
          />

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
                {testimonials.map((it, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIdx(i)}
                    className="h-1 rounded-full transition-all duration-300"
                    style={{ width: i === idx ? 28 : 6, background: i === idx ? it.accent : "rgba(255,255,255,0.1)" }}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1 ml-auto">
                <button
                  type="button"
                  onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-[var(--amber)] hover:bg-white/[0.04] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setIdx((idx + 1) % testimonials.length)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-[var(--amber)] hover:bg-white/[0.04] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SpaceSection>
  );
}
