/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  disableStaticImages: true,
  images: {
    domains: ["raka.zone", "i.ytimg.com", "assets.website-files.com", "lh3.googleusercontent.com", "localhost"],
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001/api/v1/" // development api
        : "http://localhost:3001/api/v1/", // production api
    serverUrl: process.env.NODE_ENV === "development" ? "http://localhost/" : "http://localhost/",
  }
}

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  }
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
