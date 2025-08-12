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

  // Para GitHub Pages - Como o repositório é fsuknaic.github.io, não precisamos de basePath
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
