/** @type {import('next').NextConfig} */
const generateSitemap = require('./src/scripts/generate-sitemap.js')
const generateRobotsTxt = require("./src/scripts/generate-robots-txt.js")
// const withPlugins = require('next-compose-plugins')
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
//   openAnalyzer: true,
// })

const nextConfig = {
  reactStrictMode: true,

  disableStaticImages: true,

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  images: {
    domains: ["raka.zone", "lh3.googleusercontent.com", "localhost"],
  },

  distDir: process.env.NODE_ENV === "dev" ? "_next" : "build",

  serverRuntimeConfig: {
  },
  publicRuntimeConfig: {
  },
  webpack(config, { isServer }) {
    if (isServer) {
      generateRobotsTxt()
      generateSitemap()

    }
    return config
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
// module.exports = withPlugins([
//   [withBundleAnalyzer],
// ], nextConfig)


