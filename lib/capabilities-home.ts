import {
  Brain,
  Database,
  Layers,
  LineChart,
  MessageCircle,
  ScanEye,
  type LucideIcon,
} from "lucide-react";

export type CapabilityOffering = {
  id: string;
  title: string;
  tag: string;
  desc: string;
  href: string;
  Icon: LucideIcon;
  accent: string;
};

export const capabilityOfferings: CapabilityOffering[] = [
  {
    id: "analytics",
    title: "Analytics & Brand Research",
    tag: "Quant",
    desc: "Brand tracking, NPS, U&A, MaxDiff, conjoint, segmentation — quantifying the why behind human choices.",
    href: "/capabilities#analytics",
    Icon: LineChart,
    accent: "#5eead4",
  },
  {
    id: "sensory",
    title: "Sensory Science",
    tag: "FMCG & F&B",
    desc: "QDA, TDS, CATA, and affective testing with trained panels for product development.",
    href: "/capabilities#sensory",
    Icon: ScanEye,
    accent: "#2dd4bf",
  },
  {
    id: "syndicated",
    title: "Table Share®",
    tag: "Syndicated",
    desc: "Continuous food-consumption tracking — 3,468 households, dish-by-dish, across 16 cities.",
    href: "/table-share",
    Icon: Database,
    accent: "#8b5cf6",
  },
  {
    id: "qualitative",
    title: "Qualitative & Ethnography",
    tag: "Qual",
    desc: "IDIs, focus groups, online communities, and ZMET — depth behind the numbers and real behaviour in context.",
    href: "/capabilities#market-research",
    Icon: MessageCircle,
    accent: "#38bdf8",
  },
  {
    id: "impact",
    title: "Impact & CSR Research",
    tag: "Social",
    desc: "Baseline, mid-line, and end-line studies with donor-grade reporting frameworks.",
    href: "/capabilities#impact",
    Icon: Layers,
    accent: "#fb923c",
  },
  {
    id: "advanced",
    title: "AI Gaze™ & Agile Research",
    tag: "Advanced",
    desc: "Eye-tracking simulation for shelf and packaging studies — plus rapid online qual and quant with rigorous QC.",
    href: "/ai-gaze",
    Icon: Brain,
    accent: "#e8a820",
  },
];
