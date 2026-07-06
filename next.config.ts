import type { NextConfig } from "next";
import path from "path";

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
};

export default nextConfig;
