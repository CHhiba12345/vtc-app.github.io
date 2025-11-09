import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },
  trailingSlash: true,
  basePath: "", // Vide pour https://vtc.github.io/ ou "/vtc.github.io" pour https://vtc-app.github.io/vtc.github.io/
};

export default nextConfig;
