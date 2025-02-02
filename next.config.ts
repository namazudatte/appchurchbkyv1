import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["gdeuw1djlgmkbnqy.public.blob.vercel-storage.com"],
    formats: ["image/avif", "image/webp"],
  },
  crossOrigin: "anonymous",
};
module.exports = nextConfig;

export default nextConfig;
