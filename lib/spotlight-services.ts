import { tableShareFeatures } from "@/lib/table-share";

export type SpotlightStat =
  | { label: string; accent: string; val: string }
  | { label: string; accent: string; to: number; suffix?: string };

export type SpotlightService = {
  id: string;
  label: string;
  title: string;
  titleHtml?: boolean;
  subtitle: string;
  features: readonly string[];
  stats: readonly SpotlightStat[];
  accent: string;
  href: string;
  demo?: boolean;
};

export const spotlightServices: SpotlightService[] = [
  {
    id: "table-share",
    label: "Syndicated Platform",
    title: "Table Share®",
    titleHtml: true,
    subtitle:
      "Dish-level eating intelligence across urban India — mapped by occasion, effort, and frequency.",
    features: tableShareFeatures,
    stats: [
      { label: "Households", accent: "#2dd4bf", to: 3468 },
      { label: "Cities", accent: "#38bdf8", to: 16 },
      { label: "Dishes", accent: "#5eead4", to: 400, suffix: "+" },
      { label: "Recall", accent: "#e8a820", val: "1-day" },
    ],
    accent: "#8b5cf6",
    href: "/table-share",
    demo: true,
  },
  {
    id: "ai-gaze",
    label: "Proprietary Tool",
    title: "AI Gaze™",
    subtitle:
      "Predict human visual attention on any packaging, shelf, or ad — 92% accuracy vs. lab eye-tracking, fully remote, no hardware required.",
    features: [
      "Heat maps, gaze sequences, and area-of-interest metrics",
      "Packaging, planogram, and POSM pre-testing in 24 hours",
      "Trained on thousands of real eye-tracking sessions",
      "Fraction of the cost of traditional eye-tracking studies",
    ],
    stats: [
      { label: "Accuracy", accent: "#e8a820", val: "92%" },
      { label: "Turnaround", accent: "#2dd4bf", val: "24 hrs" },
      { label: "Cost vs. Lab", accent: "#38bdf8", val: "–60%" },
      { label: "Setup", accent: "#5eead4", val: "Remote" },
    ],
    accent: "#e8a820",
    href: "/capabilities#advanced-methods",
  },
  {
    id: "sensory",
    label: "Specialist Panels",
    title: "Sensory Science",
    subtitle:
      "Trained descriptive and affective panels for FMCG and F&B — measuring taste, texture, and perception the way people actually experience products.",
    features: [
      "QDA, TDS, CATA, and affective testing protocols",
      "Central location and home-use test (HUT) designs",
      "Recipe reformulation and NPD screening",
      "Fragrance and flavour optimisation with ingredient partners",
    ],
    stats: [
      { label: "Methods", accent: "#2dd4bf", val: "QDA" },
      { label: "Categories", accent: "#38bdf8", val: "FMCG" },
      { label: "Panels", accent: "#5eead4", val: "Trained" },
      { label: "Testing", accent: "#e8a820", val: "HUT" },
    ],
    accent: "#2dd4bf",
    href: "/capabilities#sensory",
  },
  {
    id: "agile",
    label: "Rapid Research",
    title: "Agile Research",
    subtitle:
      "Online qual and quant with rigorous QC — behavioural readouts in days, not weeks, when timelines won't wait for traditional fieldwork.",
    features: [
      "Rapid concept and message screening",
      "Mobile-first surveys with real-time quality checks",
      "Online communities and bulletin-board qual",
      "Multi-language fieldwork across Indian markets",
    ],
    stats: [
      { label: "Turnaround", accent: "#38bdf8", val: "Days" },
      { label: "Modes", accent: "#2dd4bf", val: "Hybrid" },
      { label: "QC", accent: "#e8a820", val: "Strict" },
      { label: "Languages", accent: "#5eead4", val: "6+" },
    ],
    accent: "#38bdf8",
    href: "/capabilities#market-research",
  },
];
