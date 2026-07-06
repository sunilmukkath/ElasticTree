"use client";

import { motion } from "framer-motion";
import ConsumerUniverse from "@/components/ui/abstract/ConsumerUniverse";
import MorphBlob from "@/components/ui/abstract/MorphBlob";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0 aspect-square lg:aspect-auto lg:h-[min(520px,42vw)]">
      <MorphBlob
        color="#2dd4bf"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 pointer-events-none"
        size={440}
      />
      <MorphBlob
        color="#e8a820"
        className="absolute top-[42%] left-[58%] -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none animate-float"
        size={260}
      />
      <div className="hero-visual-glow absolute inset-0 rounded-full blur-3xl opacity-60" aria-hidden />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full flex items-center justify-center"
      >
        <ConsumerUniverse className="w-full h-full max-w-[480px] drop-shadow-[0_0_80px_rgba(45,212,191,0.22)]" />
      </motion.div>
    </div>
  );
}
