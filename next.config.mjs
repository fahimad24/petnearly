/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dbw3zep4prcju.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
