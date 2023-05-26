/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    dirs: ['src'],
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
