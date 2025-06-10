import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  distDir: "docs",
  basePath: process.env.NODE_ENV === "development" ? "" : "/kb",
};

export default nextConfig;
