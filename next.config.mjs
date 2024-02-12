/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/diplomat',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/diplomat',
        permanent: true,
        basePath: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'iirmfa.edu.tm',
      // },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
      },
    ],
  },
};

export default nextConfig;
