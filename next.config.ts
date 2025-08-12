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
  output: "export",
  reactStrictMode: true,
  // Para GitHub Pages - Como o repositório é fsuknaic.github.io, não precisamos de basePath
  basePath: "",
};

export default nextConfig;
