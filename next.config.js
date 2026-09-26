/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.static.dragonaere.com'
      },
    ],
  },
  async rewrites() {
    return [
      // Serve the tracker script from your own domain
      {
        source: '/u/script.js',
        destination: 'https://analytics.andrewstill.cloud/script.js',
      },
      {
        source: '/u/api/send',
        destination: 'https://analytics.andrewstill.cloud/api/send',
      },
    ];
  },
};

module.exports = nextConfig;