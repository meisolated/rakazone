const fs = require("fs")

// const crawlableRobotsTxt = `User-agent: *\nAllow: /`

// const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`

function generateRobotsTxt() {
  // Create a non-crawlable robots.txt in non-production environments
  // const robotsTxt = process.env.NODE_ENV === "production" ? crawlableRobotsTxt : uncrawlableRobotsTxt
  const Txt = `
  # -----------------------------------------------------
  # robots.txt file for RakaZone
  # last update "today" xD 5th of September 2022 Rockabye
  # -----------------------------------------------------

  User-agent: Googlebot
  User-agent: AdsBot-Google
  Disallow: /internal_api
  Disallow: /User
  Disallow: /api
  Disallow: /Admin
  Disallow: /404
  Disallow: /401
  Disallow: /Contact

  Host: https://raka.zone
  Sitemap: https://raka.zone/sitemap.xml
  `

  // Create robots.txt file
  fs.writeFileSync("public/robots.txt", Txt)

  console.log(`Generated public/robots.txt`)
}

module.exports = generateRobotsTxt
