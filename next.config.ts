import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config, { isServer }) => {
    // Aggressively merge chunks to reduce HTTP requests
    if (!isServer) {
        config.optimization.splitChunks = {
            ...config.optimization.splitChunks,
            minSize: 200000, 
            maxSize: 500000,
        };
    }
    return config;
  },
};

export default nextConfig;
