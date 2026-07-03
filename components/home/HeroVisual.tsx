"use client";

import { motion } from "framer-motion";
import NeuralHub from "@/components/ui/abstract/NeuralHub";

const stats = [
  { value: "12+", label: "Years", accent: "#e8a820" },
  { value: "200+", label: "Brands", accent: "#2dd4bf" },
  { value: "800+", label: "Projects", accent: "#38bdf8" },
  { value: "74%", label: "Repeat", accent: "#5eead4" },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0 aspect-square lg:aspect-auto lg:h-[min(520px,42vw)]">
      {/* Glow backdrop */}
      <div className="hero-visual-glow absolute inset-0 rounded-full blur-3xl opacity-60" aria-hidden />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full flex items-center justify-center"
      >
        <NeuralHub className="w-full h-full max-w-[420px] drop-shadow-[0_0_60px_rgba(45,212,191,0.15)]" />
      </motion.div>

      {/* Floating stat chips */}
      {stats.map((s, i) => {
        const positions = [
          "top-[8%] left-[0%] lg:-left-[4%]",
          "top-[6%] right-[0%] lg:-right-[2%]",
          "bottom-[12%] left-[2%] lg:-left-[2%]",
          "bottom-[8%] right-[0%] lg:-right-[4%]",
        ];
        return (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 + i * 0.1, duration: 0.5 }}
            className={`absolute ${positions[i]} hero-stat-chip`}
          >
            <p className="font-display font-black text-lg leading-none" style={{ color: s.accent }}>{s.value}</p>
            <p className="text-caption normal-case mt-1">{s.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
