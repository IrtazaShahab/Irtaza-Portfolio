/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All portfolio imagery is served from /public — no remote hosts needed,
    // so images render locally and in production without a CDN dependency.
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
