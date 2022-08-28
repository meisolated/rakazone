/** @type {import('next').NextConfig} */
const generateRobotsTxt = require("./src/scripts/generate-robots-txt.js")
// const withPlugins = require('next-compose-plugins')
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
//   openAnalyzer: true,
// })

const nextConfig = {
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
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  disableStaticImages: true,
  images: {
    domains: ["raka.zone", "i.ytimg.com", "assets.website-files.com", "lh3.googleusercontent.com", "localhost", "img.youtube.com"],
  },
  distDir: "build",
  publicRuntimeConfig: {
    baseUrl: process.env.NODE_ENV === "development" ? "https://raka.zone/" : "https://raka.zone/",
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "https://raka.zone/internal_api/v1/" // development api
        : "https://raka.zone/internal_api/v1/", // production api
    serverUrl: process.env.NODE_ENV === "development" ? "https://raka.zone/internal_api/" : "https://raka.zone/internal_api/",
  },
  webpack(config, { isServer }) {
    if (isServer) {
      generateRobotsTxt()
    }
    return config
  },
}

module.exports = nextConfig
// module.exports = withPlugins([
//   [withBundleAnalyzer],
// ], nextConfig)


