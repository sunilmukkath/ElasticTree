export const palleteStats = [
  { val: "QDA", label: "Descriptive", accent: "#2dd4bf" },
  { val: "TDS", label: "Temporal", accent: "#38bdf8" },
  { val: "CATA", label: "Check-all", accent: "#5eead4" },
  { val: "HUT+CLT", label: "Test modes", accent: "#e8a820" },
] as const;

export const palleteFeatures = [
  "Trained descriptive and affective panels for FMCG and F&B",
  "QDA, TDS, CATA, and paired-comparison protocols",
  "NPD screening, reformulation, and benchmark tracking",
  "Central location and home-use test designs with rigorous QC",
] as const;

export const palleteDeliverables = [
  "Sensory profile maps and attribute intensity charts",
  "Temporal dominance and dynamic perception readouts",
  "Product benchmarking and competitive diagnostics",
  "Actionable recommendations for R&D and marketing",
] as const;

export const palleteInsights = [
  {
    title: "Liking isn't enough",
    desc: "Consumers can't always explain why they prefer a product. Descriptive panels reveal the sensory drivers behind choice.",
    accent: "#e8a820",
  },
  {
    title: "Texture changes everything",
    desc: "Mouthfeel, aroma, and aftertaste often decide repeat purchase — especially in foods where small formulation shifts matter.",
    accent: "#38bdf8",
  },
  {
    title: "Time changes perception",
    desc: "TDS captures how dominance shifts across the eating experience — critical for snacks, beverages, and multi-bite products.",
    accent: "#2dd4bf",
  },
] as const;

export const palleteMethods = [
  {
    name: "QDA",
    desc: "Quantitative Descriptive Analysis — attribute intensity profiling by trained panelists",
  },
  {
    name: "TDS",
    desc: "Temporal Dominance of Sensation — how perception evolves bite by bite",
  },
  {
    name: "CATA",
    desc: "Check-All-That-Apply — rapid sensory characterisation at scale",
  },
  {
    name: "Affective",
    desc: "Consumer liking, JAR scales, and preference mapping with target consumers",
  },
  {
    name: "Paired comparison",
    desc: "Head-to-head discrimination for reformulation and parity claims",
  },
  {
    name: "HUT / CLT",
    desc: "Home-use and central location tests in realistic usage contexts",
  },
] as const;

export const palleteUseCases = [
  {
    title: "NPD Screening",
    desc: "Shortlist concepts and prototypes before full-scale launch investment",
    accent: "#e8a820",
  },
  {
    title: "Reformulation",
    desc: "Validate recipe changes without losing the sensory signature consumers expect",
    accent: "#38bdf8",
  },
  {
    title: "Benchmarking",
    desc: "Map your product against category leaders on the attributes that matter",
    accent: "#2dd4bf",
  },
  {
    title: "Claims Support",
    desc: "Evidence for superiority, parity, or sensory differentiation in communication",
    accent: "#5eead4",
  },
] as const;

export const palleteCategories = [
  "Snacks & Savouries",
  "Beverages",
  "Dairy & Ice Cream",
  "Ready-to-Cook",
  "Confectionery",
  "Personal Care",
  "Home Care",
  "Fragrance & Flavour",
] as const;
