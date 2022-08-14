/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  disableStaticImages: true,
  images: {
    domains: ["raka.zone", "i.ytimg.com", "assets.website-files.com", "lh3.googleusercontent.com", "localhost"],
  },
  distDir: "build",
  publicRuntimeConfig: {
    baseUrl: process.env.NODE_ENV === "development" ? "https://keviv.xyz/" : "https://keviv.xyz/",
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "https://keviv.xyz/api/v1/" // development api
        : "https://keviv.xyz/api/v1/", // production api
    serverUrl: process.env.NODE_ENV === "development" ? "https://raka.zone/" : "https://raka.zone/",
  },
}

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
]

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
