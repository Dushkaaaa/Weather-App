import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    domains: ["cdn.weatherapi.com"],
  },
};

export default nextConfig;
