/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iirmfa.edu.tm',
      },
    ],
  },
};

module.exports = nextConfig;
