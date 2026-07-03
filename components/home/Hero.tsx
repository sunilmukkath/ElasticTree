"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Starfield from "@/components/ui/Starfield";
import HeroVisual from "@/components/home/HeroVisual";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden hero-section">
      <Starfield density={45} />
      <div className="hero-orb hero-orb--amber" aria-hidden />
      <div className="hero-orb hero-orb--teal" aria-hidden />
      <div className="hero-orb hero-orb--cyan" aria-hidden />
      <div className="absolute inset-0 grid-cosmic opacity-[0.18] pointer-events-none" aria-hidden />

      <div className="relative z-10 page-content pt-24 pb-12 lg:pt-28 lg:pb-16 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 xl:gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-xl"
          >
            <motion.p variants={staggerItem} className="eyebrow-text mb-5">
              Market Research · Since 2014
            </motion.p>

            <motion.h1
              variants={staggerItem}
              className="font-display font-black text-display-xl text-white mb-6"
            >
              Navigate the{" "}
              <span className="text-gradient-amber text-shimmer">Consumer Universe</span>
            </motion.h1>

            <motion.p variants={staggerItem} className="text-lead mb-10">
              Sensory science, syndicated intelligence, and deep domain expertise —
              insights FMCG and food-service brands act on, not just read.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-3">
              <Link href="/capabilities" className="btn-primary btn-glow">
                Explore Capabilities <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Book a Consultation
              </Link>
            </motion.div>
          </motion.div>

          <div className="hidden sm:block lg:order-last">
            <HeroVisual />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 flex justify-center pb-6 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-2 text-slate-400 animate-scroll-cue">
          <span className="text-caption normal-case">Scroll to explore</span>
          <ChevronDown size={18} />
        </div>
      </motion.div>
    </section>
  );
}
