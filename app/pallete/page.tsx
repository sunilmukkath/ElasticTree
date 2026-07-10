import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import PalletePreview from "@/components/pallete/PalletePreview";
import {
  palleteStats,
  palleteInsights,
  palleteMethods,
  palleteUseCases,
  palleteDeliverables,
  palleteCategories,
} from "@/lib/pallete";
import { ArrowRight, FlaskConical, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Pallete™ | Elastic Tree",
  description:
    "Pallete™ is Elastic Tree's sensory research platform — trained panels, QDA, TDS, CATA, and affective testing for FMCG and food-service brands.",
};

export default function PalletePage() {
  return (
    <>
      <PageHero
        eyebrow="Sensory Research Platform"
        title={
          <>
            Pallete<span className="text-gradient-amber">™</span>
          </>
        }
        subtitle="Trained descriptive and affective panels that measure taste, texture, and perception — the way people actually experience your product."
        actions={
          <>
            <Link href="/contact" className="btn-primary btn-glow">
              Book a Sensory Study <ArrowRight size={16} />
            </Link>
            <Link href="/capabilities#sensory" className="btn-secondary">
              All Sensory Methods <ArrowRight size={16} />
            </Link>
          </>
        }
        stats={palleteStats.map((s) => ({
          value: s.val,
          label: s.label,
          accent: s.accent,
        }))}
      />

      <section className="section-py-compact page-content">
        <div className="content-grid-2 items-center gap-10 lg:gap-14">
          <div className="section-stack-sm">
            <SectionHeader
              label="Sensory Intelligence"
              title="Not just liking scores — a full sensory map"
              subtitle="Go beyond hedonic ratings: Pallete™ delivers attribute-level profiles, temporal dynamics, and competitive benchmarks your R&D and marketing teams can act on."
              titleSize="md"
            />
            <ul className="list-spaced list-bullet">
              {palleteDeliverables.map((item) => (
                <li key={item} className="text-body-sm">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-body-sm italic">
              Custom protocols available by category, format, and research objective.
            </p>
          </div>
          <PalletePreview />
        </div>
      </section>

      <section className="section-py-compact section-flow flow-tint-purple">
        <div className="page-content">
          <SectionHeader
            label="Why Sensory"
            title="If you can't describe it, you can't defend it"
            subtitle="Formulation decisions need more than preference — they need the language of sensory science."
            className="mb-10"
          />
          <div className="content-grid-3">
            {palleteInsights.map((item) => (
              <div key={item.title} className="feature-card">
                <h3 className="text-title mb-2" style={{ color: item.accent }}>
                  {item.title}
                </h3>
                <p className="text-body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py-compact page-content">
        <SectionHeader
          label="Methods"
          title="The right protocol for every question"
          subtitle="From descriptive profiling to temporal dominance — Pallete™ matches method to your brief, not the other way around."
          className="mb-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {palleteMethods.map((method) => (
            <div key={method.name} className="feature-card">
              <div className="flex items-center gap-2 mb-3">
                <FlaskConical size={16} className="text-[var(--teal)]" aria-hidden />
                <h3 className="text-title !mb-0">{method.name}</h3>
              </div>
              <p className="text-body-sm">{method.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-py-compact section-flow flow-tint-amber">
        <div className="page-content">
          <SectionHeader
            label="Applications"
            title="Where teams use Pallete™"
            subtitle="Sensory evidence for innovation pipelines, reformulation decisions, and competitive positioning."
            className="mb-10"
          />
          <div className="content-grid-2 lg:grid-cols-4 gap-6">
            {palleteUseCases.map((use) => (
              <div key={use.title} className="pillar-link">
                <h3 className="text-title mb-2" style={{ color: use.accent }}>
                  {use.title}
                </h3>
                <p className="text-body-sm">{use.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py-compact section-flow flow-tint-teal">
        <div className="page-content">
          <SectionHeader
            label="Categories"
            title="Built for products people taste, touch, and smell"
            subtitle="FMCG and food-service categories where sensory performance drives repeat purchase."
            className="mb-10"
          />
          <div className="flex flex-wrap gap-2.5">
            {palleteCategories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.06] text-body-sm text-slate-300"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py-compact border-t border-white/[0.06] section-flow flow-tint-teal">
        <div className="page-content max-w-xl section-stack-sm">
          <Sparkles size={28} className="text-[var(--amber)] opacity-80" aria-hidden />
          <h2 className="font-display font-black text-display-md text-white">
            If consumers can't tell the difference, neither can your P&L.
          </h2>
          <p className="text-lead max-w-lg">
            Pallete™ turns subjective experience into structured sensory evidence — so your product decisions are grounded in how people actually perceive what you make.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/contact" className="btn-primary btn-glow">
              Book a Sensory Study <ArrowRight size={16} />
            </Link>
            <Link href="/table-share" className="btn-secondary">
              Explore Table Share® <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
