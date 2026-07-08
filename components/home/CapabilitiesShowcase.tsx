"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SpaceSection from "@/components/ui/SpaceSection";
import SectionBlock from "@/components/ui/SectionBlock";
import { capabilityOfferings } from "@/lib/capabilities-home";
import { useMotionSafeFade } from "@/lib/motion";

export default function CapabilitiesShowcase() {
  const motionProps = useMotionSafeFade();

  return (
    <SpaceSection flow="purple" id="what-we-do" spacing="compact" className="scroll-mt-24">
      <SectionBlock
        label="Products & Services"
        title={<>The Full Stack of <span className="text-gradient-amber">Behavioural Intelligence</span></>}
        subtitle="Six integrated pillars — from what people eat to what draws their eye — delivered by one specialist team."
        action={
          <div className="hidden sm:block shrink-0">
            <Link href="/capabilities" className="btn-secondary text-sm">
              View all <ArrowRight size={14} />
            </Link>
          </div>
        }
      >
        <div className="highlight-panel home-panel">
          <div className="content-grid-3">
            {capabilityOfferings.map(({ id, title, tag, desc, href, Icon, accent }, i) => (
              <motion.div
                key={id}
                initial={motionProps.initial}
                whileInView={motionProps.whileInView}
                viewport={motionProps.viewport}
                transition={
                  motionProps.transition
                    ? { ...motionProps.transition, delay: i * 0.05 }
                    : undefined
                }
              >
                <Link href={href} className="feature-card group block h-full">
                  <div className="flex gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: `${accent}18`,
                        border: `1px solid ${accent}30`,
                        boxShadow: `0 0 20px ${accent}15`,
                      }}
                    >
                      <Icon size={19} style={{ color: accent }} aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className="text-[0.65rem] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{ color: accent, background: `${accent}14`, border: `1px solid ${accent}28` }}
                        >
                          {tag}
                        </span>
                      </div>
                      <h3 className="text-title group-hover:text-[var(--teal-bright)] transition-colors !mb-2">
                        {title}
                      </h3>
                      <p className="text-body-sm mb-3">{desc}</p>
                      <span className="inline-flex items-center gap-1 text-body-sm text-slate-300 group-hover:text-[var(--amber)] transition-colors">
                        Explore <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center sm:hidden pt-2">
          <Link href="/capabilities" className="btn-secondary text-sm">
            View all capabilities <ArrowRight size={14} />
          </Link>
        </div>
      </SectionBlock>
    </SpaceSection>
  );
}
