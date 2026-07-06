import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import GazeDeliverableIcon, { gazeVariantFromName } from "@/components/ui/icons/GazeDeliverableIcon";
import {
  BarChart3, FlaskConical, Database, TrendingUp, Search,
  Eye, Zap, Target, BarChart2, ArrowRight,
} from "lucide-react";

const pillars = [
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    color: "#e8a820",
    tagline: "Transform complexity into clarity",
    summary:
      "Advanced quantitative analytics that uncover the 'why' behind human choices, enabling data-driven product and communication decisions.",
    methods: [
      "MaxDiff (Best-Worst Scaling) for feature & claim prioritisation",
      "Conjoint & TURF analysis for product configuration",
      "Segmentation & cluster analysis — psychographic & behavioural",
      "Regression-based driver analysis for KPI improvement",
      "Key driver analysis (KDA) for brand equity and CX",
      "Volumetric forecasting and adoption modelling",
    ],
    usedFor: ["Product development", "Portfolio optimisation", "Ad claim testing", "Pricing research"],
  },
  {
    id: "sensory",
    icon: FlaskConical,
    label: "Sensory Science",
    color: "#2dd4bf",
    tagline: "Science of taste, texture, and perception",
    summary:
      "Specialist sensory evaluation using trained panels and affective testing with real people — purpose-built for FMCG, food & beverage, personal care, and fragrance categories.",
    methods: [
      "Trained descriptive analysis (QDA / Spectrum method)",
      "Affective testing — central location and home-use tests (HUT)",
      "Temporal methods: TDS (Temporal Dominance of Sensations)",
      "CATA / RATA (Check-All-That-Apply / Rate-All-That-Apply)",
      "Sensory shelf-life and stability evaluation",
      "Fragrance / flavour optimisation in partnership with ingredient suppliers",
    ],
    usedFor: ["Recipe reformulation", "Product launch", "NPD screening", "Shelf-life testing"],
  },
  {
    id: "syndicated",
    icon: Database,
    label: "Syndicated Research",
    color: "#38bdf8",
    tagline: "Ready intelligence, shared cost",
    summary:
      "Proprietary multi-client trackers and panels that deliver continuous, cost-efficient intelligence across food-service, media, and FMCG categories.",
    methods: [
      "Table Share® — India's dedicated out-of-home food-service panel (16 cities)",
      "Monthly FMCG household behaviour tracker",
      "Annual media consumption & OTT habits study",
      "Quarterly brand health monitor (sector-specific)",
      "Category trend reports with year-on-year benchmarks",
    ],
    usedFor: ["Market sizing", "Category trends", "Competitive benchmarking", "Entry decisions"],
  },
  {
    id: "impact",
    icon: TrendingUp,
    label: "Impact Research",
    color: "#14b8a6",
    tagline: "Measure what matters beyond profit",
    summary:
      "Specialised social research for CSR programmes, government schemes, and impact organisations — rigorous measurement of social, environmental, and community outcomes.",
    methods: [
      "Community baseline surveys and needs assessments",
      "Government programme evaluation and reach studies",
      "ESG outcome mapping and stakeholder interviews",
      "Beneficiary satisfaction & perception tracking",
      "Social return on investment (SROI) frameworks",
      "Longitudinal impact assessment panels",
    ],
    usedFor: ["CSR reporting", "ESG disclosures", "Government schemes", "NGO impact measurement"],
  },
  {
    id: "market-research",
    icon: Search,
    label: "Market Research",
    color: "#a78bfa",
    tagline: "Full-spectrum behavioural understanding",
    summary:
      "End-to-end primary research across B2C and B2B sectors — from quick dipstick polls to large-scale multi-market studies, delivered with analytical depth.",
    methods: [
      "Usage & Attitude (U&A) studies",
      "Brand health tracking — awareness, consideration, preference, loyalty",
      "Concept & product testing (monadic, sequential, comparative)",
      "Customer Experience (CX) and NPS programmes",
      "Shopper and path-to-purchase research",
      "Qualitative: FGDs, in-depth interviews, ethnography",
    ],
    usedFor: ["Brand strategy", "New category entry", "CX improvement", "Campaign effectiveness"],
  },
];

const gazeOutputs = [
  {
    name: "Heat Map",
    desc: "Colour-coded overlay showing relative attention density across the entire stimulus — instantly identifies high- and low-engagement zones.",
  },
  {
    name: "Hot Spot",
    desc: "Isolates the single most-fixated area on the visual, helping you confirm that the primary message or pack design element is landing where intended.",
  },
  {
    name: "Gaze Sequence",
    desc: "Frame-by-frame animation recreating the natural scan path of the human eye, revealing the true order in which elements register.",
  },
  {
    name: "Area of Interest (AoI)",
    desc: "Quantified fixation metrics per defined zone — time-to-first-fixation, total dwell time, visit count — for rigorous cross-stimulus comparison.",
  },
];

const useCases = [
  "Packaging design evaluation & shelf standout testing",
  "In-store planogram and POSM optimisation",
  "Print and digital advertising pre-testing",
  "Website UX and landing page effectiveness",
  "Logo and brand identity review",
  "Menu board and food-service display testing",
];

const aiPillars = [
  {
    icon: Eye,
    title: "AI Gaze™",
    subtitle: "Eye-Tracking Simulation",
    stats: [{ label: "Accuracy", val: "92%" }, { label: "Turnaround", val: "24 hrs" }, { label: "Cost vs. Traditional", val: "–60%" }],
    color: "#e8a820",
    desc: "Elastic Tree's flagship proprietary tool. Using deep learning models trained on thousands of real eye-tracking sessions, AI Gaze™ predicts human visual attention on any uploaded image or design with 92% accuracy — fully remote, no hardware required.",
  },
  {
    icon: Zap,
    title: "AI-Augmented Analytics",
    subtitle: "Faster Insights at Scale",
    stats: [{ label: "Speed Gain", val: "5×" }, { label: "Data Points", val: "100,000+" }, { label: "Quant Modules", val: "12+" }],
    color: "#0ea5e9",
    desc: "Machine-learning models accelerate response quality validation, open-ended text categorisation, and driver analysis — enabling our analysts to focus on interpretation rather than data cleaning.",
  },
  {
    icon: Target,
    title: "Predictive Modelling",
    subtitle: "Decision-Ready Forecasts",
    stats: [{ label: "Accuracy", val: "High" }, { label: "Models", val: "MaxDiff, Conjoint" }, { label: "Output", val: "Priority Scores" }],
    color: "#2dd4bf",
    desc: "Advanced MaxDiff, conjoint analysis, and regression-based driver models translate real human preference data into ranked, simulation-ready product or communication decisions.",
  },
  {
    icon: BarChart2,
    title: "NLP & Text Mining",
    subtitle: "Open-Ended at Scale",
    stats: [{ label: "Languages", val: "6+" }, { label: "Auto-code", val: "Yes" }, { label: "Sentiment", val: "Built-in" }],
    color: "#7c3aed",
    desc: "NLP-powered verbatim coding, sentiment classification, and theme clustering across Tamil, Hindi, English, and other Indian languages — ensuring no qualitative nuance is lost in large-scale quant surveys.",
  },
];

const stickyNav = [
  ...pillars.map((p) => ({ id: p.id, label: p.label })),
  { id: "advanced-methods", label: "Advanced Methods" },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title={<>Research Rooted in <span className="text-gradient-amber">Human Behaviour</span></>}
        subtitle="A comprehensive range of custom marketing research services — from product optimisation and brand health to AI-powered visual attention testing — designed to uncover how people really think, choose, and act."
      />

      <div className="sticky top-16 z-40 border-b border-white/[0.06] bg-[rgba(10,31,74,0.94)] backdrop-blur-xl">
        <div className="page-content overflow-x-auto">
          <div className="flex gap-1 py-3 whitespace-nowrap">
            {stickyNav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-1.5 rounded-full text-caption normal-case tracking-normal font-medium transition-all text-slate-300 hover:text-white border border-white/[0.06]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="page-content section-py">
        <div className="section-stack">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <section key={pillar.id} id={pillar.id} className="scroll-mt-28 section-stack-sm">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
                  <div className="lg:col-span-2 section-stack-sm">
                    <div className="flex items-center gap-3">
                      <Icon size={20} style={{ color: pillar.color }} aria-hidden />
                      <h2 className="text-subtitle !mb-0">{pillar.label}</h2>
                    </div>
                    <p className="text-caption normal-case" style={{ color: pillar.color }}>
                      {pillar.tagline}
                    </p>
                    <p className="text-body-md copy-measure">{pillar.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {pillar.usedFor.map((tag) => (
                        <span
                          key={tag}
                          className="text-caption normal-case tracking-normal px-2.5 py-1 rounded-full border border-white/[0.06]"
                          style={{ color: pillar.color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-3 section-stack-sm">
                    <p className="text-caption">Methods & Approaches</p>
                    <ul className="list-spaced list-bullet">
                      {pillar.methods.map((method) => (
                        <li key={method} className="text-body-sm">
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <section id="advanced-methods" className="scroll-mt-28 section-py section-flow flow-tint-purple border-t border-white/[0.06]">
        <div className="page-content section-stack">
          <SectionHeader
            label="Advanced Methods"
            title="Tools That Support Clearer Research"
            subtitle="We adopt intelligent methods — eye-tracking simulation, text coding, predictive modelling — where they genuinely sharpen insight, not as a default for every project."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-14">
            {aiPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="section-stack-sm">
                  <div className="flex items-start gap-3.5">
                    <Icon size={20} style={{ color: pillar.color }} className="mt-0.5 flex-shrink-0" aria-hidden />
                    <div>
                      <h3 className="text-subtitle !mb-1">{pillar.title}</h3>
                      <p className="text-caption normal-case">{pillar.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-body-md copy-measure">{pillar.desc}</p>
                  <div className="stat-row">
                    {pillar.stats.map((s) => (
                      <div key={s.label}>
                        <p className="stat-value text-[1.25rem]" style={{ color: pillar.color }}>{s.val}</p>
                        <p className="stat-label">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="section-stack pt-4">
            <SectionHeader
              label="AI Gaze™"
              title="Four Deliverables"
              subtitle="When visual attention is the research question, AI Gaze™ delivers four complementary outputs."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {gazeOutputs.map((output) => (
                <div key={output.name} className="group section-stack-sm">
                  <GazeDeliverableIcon
                    variant={gazeVariantFromName(output.name)}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div>
                    <h3 className="text-title">{output.name}</h3>
                    <p className="text-body-sm">{output.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="section-stack-sm pt-2">
              <SectionHeader
                title="Where Clients Apply AI Gaze™"
                titleSize="md"
              />
              <div className="content-grid-2 max-w-3xl gap-y-4">
                {useCases.map((uc) => (
                  <div key={uc} className="flex items-start gap-3 text-body-sm">
                    <span className="bullet-dot" aria-hidden />
                    {uc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py text-left border-t border-white/[0.06] section-flow flow-tint-teal">
        <div className="page-content max-w-xl section-stack-sm">
          <h2 className="font-display font-black text-display-md text-white leading-tight">
            Have a research challenge in mind?
          </h2>
          <p className="text-body-md copy-measure">
            Our team will propose the right methodology — qual, quant, or a hybrid — tailored to your timeline and budget. Send us a visual stimulus and we can run a sample AI Gaze™ analysis too.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Discuss Your Project <ArrowRight size={18} />
            </Link>
            <Link href="/capabilities#advanced-methods" className="btn-secondary">
              Explore AI Gaze™
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
