import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Elastic Tree's research capabilities: analytics, sensory science, syndicated research, impact studies, market research, AI Gaze™ eye-tracking, and predictive analytics.",
  openGraph: {
    title: "Capabilities | Elastic Tree",
    description:
      "Custom marketing research and advanced methods — from brand health to AI Gaze™ visual attention testing.",
  },
};

export default function CapabilitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
