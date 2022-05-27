/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    domains: ["raka.zone", "i.ytimg.com", "assets.website-files.com", "lh3.googleusercontent.com", "10.69.69.201"],
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://10.69.69.201:3001/api/v1/" // development api
        : "http://raka.zone:9875/api/v1/", // production api
    serverUrl: process.env.NODE_ENV === "development" ? "http://10.69.69.201/" : "https://raka.zone/",
  },
}

module.exports = nextConfig
