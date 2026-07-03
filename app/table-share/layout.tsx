import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table Share® — Food Consumption Intelligence",
  description:
    "Table Share® by Elastic Tree: India's food consumption intelligence platform. 3,468 households, 16 cities, 400+ dishes. Explore the interactive dashboard demo.",
  openGraph: {
    title: "Table Share® | Elastic Tree",
    description:
      "Proprietary food intelligence platform capturing what urban India eats — dish by dish, occasion by occasion. Launch the demo dashboard.",
  },
};

export default function TableShareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
