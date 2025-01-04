/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/resume',
  assetPrefix: '/resume/',
}

module.exports = nextConfig

