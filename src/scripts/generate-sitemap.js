const axios = require("axios")
const fs = require("fs")

module.exports = async function generateSitemap() {
  const getAllVideos = `https://raka.zone/internal_api/v1/allVideos`
  const allVideos = await axios.get(getAllVideos).then((res) => res.data.data.data)

  const xmlOpen = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
     xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
     xmlns:xhtml="http://www.w3.org/1999/xhtml" 
     xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
     xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
     xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`
  const xmlClose = `</urlset>`

  const pages = ["/", "/About", "/Contact", "/Wallpapers"]

  const pagesXML = pages
    .map((page) => {
      return `
        <url>
              <loc>https://raka.zone${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
        </url>`
    })
    .join("")

  const videosXML = allVideos
    .map((video) => {
      return `
        <url>
            <loc>https://raka.zone/Watch/${video.videoId}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>`
    })
    .join("")

  const finalXML = xmlOpen + pagesXML + videosXML + xmlClose
  fs.writeFileSync("public/sitemap.xml", finalXML)
  console.log(`Generated public/sitemap.xml`)
}
