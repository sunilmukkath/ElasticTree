import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Hidden Ethos Pulse pilot — path-proxied, not marketed
      disallow: ["/ethos-pulse", "/ethos-pulse/"],
    },
    sitemap: "https://www.elastictree.com/sitemap.xml",
  };
}
