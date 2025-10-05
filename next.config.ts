import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@platformscode/core/dist/core/core.css": path.resolve(process.cwd(), "src/app/empty.css"),
    };
    return config;
  },
};

export default nextConfig;
