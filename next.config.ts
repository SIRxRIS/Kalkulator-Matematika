import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeFonts: true,
  },
  images: {
    domains: ["fonts.googleapis.com"],
  },
};

export default nextConfig;
