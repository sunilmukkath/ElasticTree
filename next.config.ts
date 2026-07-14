import type { NextConfig } from "next";
import path from "path";

/** Hidden Ethos Pulse pilot — proxied, not linked from marketing nav. */
const ETHOS_PULSE_ORIGIN =
  process.env.ETHOS_PULSE_ORIGIN?.replace(/\/$/, "") || "https://ethos-pulse.vercel.app";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: "/services", destination: "/capabilities", permanent: true },
      { source: "/ai-capabilities", destination: "/capabilities", permanent: true },
      { source: "/about", destination: "/", permanent: true },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ethos-pulse",
        destination: `${ETHOS_PULSE_ORIGIN}/ethos-pulse`,
      },
      {
        source: "/ethos-pulse/:path*",
        destination: `${ETHOS_PULSE_ORIGIN}/ethos-pulse/:path*`,
      },
    ];
  },
};

export default nextConfig;
