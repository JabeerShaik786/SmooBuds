import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/SmooBuds",
  assetPrefix: "/SmooBuds/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
