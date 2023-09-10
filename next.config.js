/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.giphy.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
