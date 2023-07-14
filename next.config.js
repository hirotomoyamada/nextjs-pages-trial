/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
