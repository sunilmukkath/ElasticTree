"use client";

import { motion } from "framer-motion";
import { MessageSquare, FlaskConical, PresentationIcon } from "lucide-react";
import SpaceSection from "@/components/ui/SpaceSection";
import SectionBlock from "@/components/ui/SectionBlock";

const steps = [
  { num: "01", Icon: MessageSquare, title: "Brief & Design", desc: "Share objectives. We design the right methodology, sample, and tools." },
  { num: "02", Icon: FlaskConical, title: "Data Collection", desc: "Offline, online, or secondary collection with real-time quality checks." },
  { num: "03", Icon: PresentationIcon, title: "Analysis & Report", desc: "Clear visualisations and action recommendations you can act on the same week." },
];

export default function ProcessSteps() {
  return (
    <SpaceSection flow="teal">
      <SectionBlock
        label="How We Work"
        title={<>From Brief to <span className="text-gradient-amber">Insight</span></>}
        titleSize="md"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />

          {steps.map(({ num, Icon, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="py-8 md:py-0 border-t md:border-t-0 border-white/[0.06] first:border-t-0"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="process-step-num">{num}</span>
                <Icon size={18} className="text-slate-400 opacity-80" aria-hidden />
              </div>
              <h3 className="text-title mb-2">{title}</h3>
              <p className="text-body-sm max-w-xs">{desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionBlock>
    </SpaceSection>
  );
}
