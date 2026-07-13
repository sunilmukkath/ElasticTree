import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "See What People Actually Do",
  description:
    "Elastic Tree reveals how people eat, choose, and act — sensory science, syndicated panels, and field research for FMCG and food-service brands. Since 2014.",
  openGraph: {
    title: "See What People Actually Do | Elastic Tree",
    description:
      "Market research grounded in real life. 200+ brands, 800+ projects, 74% repeat rate.",
  },
};

const HomeBelowFold = dynamic(() => import("@/components/home/HomeBelowFold"), {
  loading: () => <div className="min-h-[40vh]" aria-hidden />,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeBelowFold />
    </>
  );
}
