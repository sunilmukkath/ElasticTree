import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proof in Practice",
  description:
    "Explore Elastic Tree's research case studies spanning analytics, sensory science, impact research, brand health, and more. Real projects, real results.",
  openGraph: {
    title: "Case Studies | Elastic Tree",
    description:
      "Research, insights, and case studies from 12 years of field and syndicated research.",
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
