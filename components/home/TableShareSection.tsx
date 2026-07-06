"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SpaceSection from "@/components/ui/SpaceSection";
import SectionBlock from "@/components/ui/SectionBlock";
import DataVizArt from "@/components/ui/abstract/DataVizArt";
import TableShareDemoLink from "@/components/table-share/TableShareDemoLink";
import { tableShareFeatures } from "@/lib/table-share";

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

const statCounters = [
  { label: "Households", accent: "#2dd4bf", to: 3468, suffix: "" },
  { label: "Cities", accent: "#38bdf8", to: 16, suffix: "" },
  { label: "Dishes", accent: "#5eead4", to: 400, suffix: "+" },
  { label: "Recall", accent: "#e8a820", val: "1-day" },
] as const;

export default function TableShareSection() {
  return (
    <SpaceSection flow="amber">
      <DataVizArt className="ambient-art w-[min(32vw,260px)] h-auto -right-[2%] top-[15%] hidden lg:block opacity-[0.15]" />

      <SectionBlock
        label="Syndicated Platform"
        title={<>Table&nbsp;Share<sup className="text-gradient-amber text-[0.5em] align-super">®</sup></>}
        subtitle="Food consumption intelligence capturing actual, dish-level eating behaviour across urban India — mapped by occasion, effort, and frequency."
        gap="md"
      >
        <div className="content-grid-2 items-start relative z-10">
          <div className="section-stack-sm">
            <ul className="list-spaced list-bullet">
              {tableShareFeatures.map((f) => (
                <li key={f} className="text-body-sm">
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <TableShareDemoLink size="sm" label="Explore Demo" />
              <Link href="/contact" className="btn-secondary text-sm">
                Book a Demo <ArrowRight size={15} />
              </Link>
              <Link href="/table-share" className="btn-secondary text-sm">
                Know More
              </Link>
            </div>
          </div>

          <div className="highlight-panel section-stack-sm">
            <div className="stat-row stat-row--inline">
              {statCounters.map((s) => (
                <div key={s.label}>
                  <p className="stat-value" style={{ color: s.accent }}>
                    {"val" in s ? s.val : <Counter to={s.to} suffix={s.suffix} />}
                  </p>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBlock>
    </SpaceSection>
  );
}
