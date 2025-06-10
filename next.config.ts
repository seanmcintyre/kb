import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  distDir: "docs",
  basePath: "/kb",
  assetPrefix: "/kb",
};

export default nextConfig;
