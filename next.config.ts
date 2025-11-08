import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },
  trailingSlash: true,
  basePath: "",
};

export default nextConfig;
