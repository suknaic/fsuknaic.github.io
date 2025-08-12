import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  crossOrigin: "anonymous",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Para GitHub Pages
  basePath:
    process.env.NODE_ENV === "production" ? "/portfolio-redesign-2025" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/portfolio-redesign-2025/" : "",
};

export default nextConfig;
