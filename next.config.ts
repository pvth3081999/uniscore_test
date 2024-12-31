import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.uniscore.com',
      }
    ],
  },
};

export default nextConfig;
