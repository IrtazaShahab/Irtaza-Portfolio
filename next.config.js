/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-chatly-docs.vyro.ai",
      },
      {
        protocol: "https",
        hostname: "cdn.omniultra.imagine.art",
      },
    ],
  },
};

module.exports = nextConfig;

