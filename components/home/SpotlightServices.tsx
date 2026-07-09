"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SpaceSection from "@/components/ui/SpaceSection";
import SectionBlock from "@/components/ui/SectionBlock";
import TableShareDemoLink from "@/components/table-share/TableShareDemoLink";
import { spotlightServices, type SpotlightStat } from "@/lib/spotlight-services";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ran = useRef(false);
  return (
    <motion.span
      onViewportEnter={() => {
        if (ran.current) return;
        ran.current = true;
        const start = Date.now();
        const tick = () => {
          const p = Math.min((Date.now() - start) / 2000, 1);
          setVal(Math.floor((1 - Math.pow(1 - p, 3)) * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }}
    >
      {val.toLocaleString()}{suffix}
    </motion.span>
  );
}

function StatValue({ stat }: { stat: SpotlightStat }) {
  if ("val" in stat) return <>{stat.val}</>;
  return <Counter to={stat.to} suffix={stat.suffix} />;
}

export default function SpotlightServices() {
  const [idx, setIdx] = useState(0);
  const active = spotlightServices[idx];

  return (
    <SpaceSection flow="teal" spacing="compact">
      <SectionBlock
        label="Spotlight"
        title={<>Products & Services <span className="text-gradient-amber">in Action</span></>}
        subtitle="Flagship platforms and tools — explore what Elastic Tree is known for."
        gap="md"
      >
        <div className="spotlight-tabs">
          {spotlightServices.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setIdx(i)}
              className="spotlight-tab px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border"
              style={{
                color: i === idx ? active.accent : "rgba(226, 232, 240, 0.75)",
                background: i === idx ? `${active.accent}18` : "rgba(255,255,255,0.03)",
                borderColor: i === idx ? `${active.accent}45` : "rgba(255,255,255,0.08)",
              }}
            >
              {s.title.replace("®", "")}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="highlight-panel home-panel relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-px opacity-60"
              style={{ background: `linear-gradient(90deg, transparent, ${active.accent}, transparent)` }}
              aria-hidden
            />

            <div className="section-stack-sm mb-8">
              <p className="eyebrow-text">{active.label}</p>
              <h3 className="font-display font-black text-display-md text-white">
                {active.titleHtml ? (
                  <>
                    Table&nbsp;Share<sup className="text-gradient-amber text-[0.5em] align-super">®</sup>
                  </>
                ) : (
                  active.title
                )}
              </h3>
              <p className="text-lead max-w-3xl">{active.subtitle}</p>
            </div>

            <div className="content-grid-2 items-start">
              <div className="section-stack-sm">
                <ul className="list-spaced list-bullet">
                  {active.features.map((f) => (
                    <li key={f} className="text-body-sm">{f}</li>
                  ))}
                </ul>
                <div className="home-cta-row flex flex-wrap gap-3 pt-2">
                  {active.demo && <TableShareDemoLink size="sm" label="Explore Demo" />}
                  <Link href="/contact" className="btn-secondary text-sm">
                    Book a Demo <ArrowRight size={15} />
                  </Link>
                  <Link href={active.href} className="btn-secondary text-sm">
                    Know More
                  </Link>
                </div>
              </div>

              <div
                className="rounded-2xl p-5 sm:p-6 section-stack-sm"
                style={{ background: `${active.accent}0a`, border: `1px solid ${active.accent}22` }}
              >
                <div className="stat-row stat-row--inline">
                  {active.stats.map((s) => (
                    <div key={s.label}>
                      <p className="stat-value" style={{ color: s.accent }}>
                        <StatValue stat={s} />
                      </p>
                      <p className="stat-label">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-2 pt-2">
          {spotlightServices.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setIdx(i)}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: i === idx ? 28 : 6,
                background: i === idx ? active.accent : "rgba(255,255,255,0.12)",
              }}
              aria-label={`Show ${s.title}`}
            />
          ))}
        </div>
      </SectionBlock>
    </SpaceSection>
  );
}
