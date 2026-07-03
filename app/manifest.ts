import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elastic Tree — AI-Powered Market Research",
    short_name: "Elastic Tree",
    description:
      "AI-powered market research: analytics, sensory science, syndicated & impact research.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a1f4a",
    theme_color: "#0a1f4a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "320x58",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
