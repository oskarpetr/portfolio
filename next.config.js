/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "cdn.sanity.io"],
  },
  swcMinify: false,
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
}

module.exports = nextConfig;