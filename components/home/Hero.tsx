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
            See What People{" "}
            <span className="text-gradient-amber text-shimmer">Actually Do</span>
          </>
        }
        subtitle="Sensory science, syndicated panels, and field research that reveal how people eat, choose, and act — insight FMCG and food-service brands can move on."
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
