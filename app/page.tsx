import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import HeroMarquee from "@/components/home/HeroMarquee";

const HomeBelowFold = dynamic(() => import("@/components/home/HomeBelowFold"), {
  loading: () => <div className="min-h-[40vh]" aria-hidden />,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroMarquee />
      <HomeBelowFold />
    </>
  );
}
