import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import AiGazeStudioLink from "@/components/ai-gaze/AiGazeStudioLink";
import AiGazeStudioEmbed from "@/components/ai-gaze/AiGazeStudioEmbed";
import {
  aiGazeStats,
  aiGazeInsights,
  aiGazeDeliverables,
  aiGazeApplications,
  aiGazePricing,
} from "@/lib/ai-gaze";
import { ArrowRight, Check, Eye, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Gaze™ | Predictive Eye Tracking",
  description:
    "AI Gaze™ predicts visual attention on packaging, shelves, and ads with 92% accuracy — heat maps, gaze path, and branded reports without hardware eye-tracking.",
};

export default function AiGazePage() {
  return (
    <>
      <PageHero
        eyebrow="Advanced Methods · Predictive Eye Tracking"
        title={
          <>
            AI Gaze<span className="text-gradient-amber">™</span>
          </>
        }
        subtitle="See what gets attention in the first 3 seconds. Upload creatives, packs, and ads — get heat maps, hot spots, gaze path, and client-ready reports without hardware eye-tracking."
        actions={
          <>
            <AiGazeStudioLink label="Launch Studio" />
            <Link href="#pricing" className="btn-secondary">
              View Pricing <ArrowRight size={16} />
            </Link>
          </>
        }
        stats={aiGazeStats.map((s) => ({
          value: s.val,
          label: s.label,
          accent: s.accent,
        }))}
      />

      <section id="features" className="section-py-compact page-content">
        <div className="content-grid-2 items-start gap-10 lg:gap-14">
          <div className="section-stack-sm">
            <SectionHeader
              label="Attention Workspace"
              title="Not a static heatmap — a living creative QA studio"
              subtitle="Scientifically grounded predictive modelling for pre-attentive vision — a fraction of the cost of hardware eye-tracking research."
              titleSize="md"
            />
            <ul className="list-spaced list-bullet">
              {aiGazeDeliverables.map((item) => (
                <li key={item} className="text-body-sm">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-body-sm italic">
              Custom pack / shelf studies and insight workshops available on request.
            </p>
          </div>
          <div className="highlight-panel section-stack-sm">
            <div className="flex items-center gap-2.5">
              <Eye size={20} className="text-[var(--amber)]" aria-hidden />
              <p className="text-title">How AI Gaze™ works</p>
            </div>
            <p className="text-body-sm">
              Trained on thousands of real eye-tracking sessions, the model predicts salience using visual
              drivers that capture attention: edges, colour contrast, intensity, and faces — simulating first-glance
              vision in ~3 seconds.
            </p>
            <AiGazeStudioLink variant="secondary" size="sm" label="Open studio" />
          </div>
        </div>
      </section>

      <section className="section-py-compact section-flow flow-tint-amber !pb-8 md:!pb-10">
        <div className="page-content">
          <SectionHeader
            label="Why First Glance"
            title="If attention fails in 3 seconds, the creative fails"
            subtitle="Use AI Gaze™ before you print, shelf, or spend media — so hierarchy matches intent."
            className="mb-10"
          />
          <div className="content-grid-3">
            {aiGazeInsights.map((item) => (
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

      <section className="section-py-compact page-content !pt-8 md:!pt-10">
        <SectionHeader
          label="Built For"
          title="Where teams use AI Gaze™"
          subtitle="From pack shots to planograms to paid media — the same attention lens across stimuli."
          className="mb-10"
        />
        <div className="content-grid-2 lg:grid-cols-3 gap-6">
          {aiGazeApplications.map((app) => (
            <div key={app.title} className="pillar-link">
              <h3 className="text-title mb-2" style={{ color: app.accent }}>
                {app.title}
              </h3>
              <p className="text-body-sm">{app.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="section-py-compact section-flow flow-tint-purple">
        <div className="page-content">
          <SectionHeader
            label="Pricing"
            title="Choose how your team uses AI Gaze™"
            subtitle="Transparent SaaS plans · Custom research retainers available on request"
            className="mb-10"
          />
          <div className="content-grid-3 gap-6 items-stretch">
            {aiGazePricing.map((plan) => (
              <div
                key={plan.name}
                className={`feature-card relative flex flex-col ${
                  plan.featured ? "ring-1 ring-[var(--amber)]/50 bg-[rgba(232,168,32,0.08)]" : ""
                }`}
              >
                {plan.featured && (
                  <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-[0.12em] px-2 py-1 rounded-full bg-gradient-to-r from-[#f5c842] to-[#e8a820] text-[#0a1f4a] font-bold">
                    Popular
                  </span>
                )}
                <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-[var(--teal)] mb-3">
                  {plan.name}
                </p>
                <p className="font-display font-black text-3xl text-white leading-none mb-1">
                  {plan.price}
                  <span className="text-sm font-semibold text-slate-400 ml-1">{plan.period}</span>
                </p>
                <p className="text-body-sm mb-5 mt-3">{plan.blurb}</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-body-sm text-slate-300">
                      <Check size={15} className="text-[var(--teal)] shrink-0 mt-0.5" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.name === "Enterprise" ? (
                  <a href="mailto:sunil@elastictree.com" className="btn-secondary w-full justify-center">
                    Talk to Sales
                  </a>
                ) : (
                  <AiGazeStudioLink
                    variant={plan.featured ? "primary" : "secondary"}
                    size="sm"
                    label={plan.featured ? "Choose Growth" : "Start Starter"}
                    className="w-full justify-center"
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-body-sm text-slate-500 mt-8">
            Prices in INR · Annual billing discounts on Growth &amp; Enterprise · Custom pack / shelf studies quoted
            separately
          </p>
        </div>
      </section>

      <section className="section-py-compact border-t border-white/[0.06] section-flow flow-tint-teal">
        <div className="page-content max-w-xl section-stack-sm">
          <Sparkles size={28} className="text-[var(--amber)] opacity-80" aria-hidden />
          <h2 className="font-display font-black text-display-md text-white">
            If hierarchy is wrong at first glance, media spend amplifies the mistake.
          </h2>
          <p className="text-lead max-w-lg">
            AI Gaze™ isn&apos;t just a heatmap — it&apos;s your roadmap to clearer attention for packs, shelves, and
            campaigns.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <AiGazeStudioLink label="Launch Studio" />
            <a href="mailto:sunil@elastictree.com" className="btn-secondary">
              Contact Sales <ArrowRight size={16} />
            </a>
          </div>
          <p className="text-body-sm text-slate-400">
            Launch Studio → sign in → AI Gaze dashboard
          </p>
        </div>
      </section>

      <section
        id="studio"
        className="scroll-mt-24 section-py-compact border-t border-white/[0.06] section-flow flow-tint-blue"
      >
        <div className="page-content">
          <AiGazeStudioEmbed autoFocus />
        </div>
      </section>
    </>
  );
}
