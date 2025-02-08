/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible')

const withSerwist = require("@serwist/next").default({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
});

const nextConfig = withSerwist({
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.static.dragonaere.com'
      },
    ],
  },
});

module.exports = withPlausibleProxy()(nextConfig);
