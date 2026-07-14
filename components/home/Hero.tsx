"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Starfield from "@/components/ui/Starfield";
import HeroVisual from "@/components/home/HeroVisual";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
        <Starfield density={45} />
      </div>
      <div className="relative z-10">
        <PageHero
        variant="home"
        eyebrow="Market Research · Since 2014"
        title={
          <>
            We Watch. We Ask.{" "}
            <span className="text-gradient-amber text-shimmer">We Understand.</span>
          </>
        }
        subtitle="Where curiosity meets consumer truth."
        actions={
          <>
            <Link href="/capabilities" className="btn-primary btn-glow">
              Explore Capabilities <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book a Consultation
            </Link>
          </>
        }
        visual={<HeroVisual />}
        />
      </div>
    </div>
  );
}
