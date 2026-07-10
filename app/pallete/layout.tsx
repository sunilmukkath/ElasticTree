import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pallete™ — Sensory Research Platform",
  description:
    "Pallete™ by Elastic Tree: trained sensory panels, QDA, TDS, CATA, and affective testing for FMCG and F&B product development across India.",
  openGraph: {
    title: "Pallete™ | Elastic Tree",
    description:
      "Sensory science built for product teams — descriptive profiling, temporal analysis, and benchmarking with trained panels.",
  },
};

export default function PalleteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
