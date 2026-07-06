"use client";

import { motion } from "framer-motion";
import HoloSphere from "@/components/ui/abstract/HoloSphere";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0 aspect-square lg:aspect-auto lg:h-[min(520px,42vw)]">
      <div
        className="absolute inset-[6%] rounded-full blur-3xl opacity-70 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(45,212,191,0.14) 0%, rgba(56,189,248,0.08) 45%, transparent 70%)",
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full"
      >
        <HoloSphere className="absolute inset-0" />
      </motion.div>
    </div>
  );
}
