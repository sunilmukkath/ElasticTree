import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "We Watch. We Ask. We Understand.",
  description:
    "Where curiosity meets consumer truth. Elastic Tree — market research for FMCG and food-service brands since 2014.",
  openGraph: {
    title: "We Watch. We Ask. We Understand. | Elastic Tree",
    description: "Where curiosity meets consumer truth.",
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
