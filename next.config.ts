import type { NextConfig } from "next";

const repoName = "Weather-App";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
