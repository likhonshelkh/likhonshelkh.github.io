/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['geist'],
  images: {
    domains: ['via.placeholder.com'],
  },
  // Required for static site generation
  // output: 'export', // This can be enabled if you only want static export.
};

module.exports = nextConfig;