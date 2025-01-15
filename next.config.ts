import type { NextConfig } from "next";

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.samsung.com", "store.storeimages.cdn-apple.com", "*"],
  },
};

export default nextConfig;
