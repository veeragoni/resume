/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: isProd ? '/resume' : '', // Replace with your repo name
  assetPrefix: isProd ? '/resume/' : '', // Replace with your repo name
}

module.exports = nextConfig