const fs = require("fs")
const path = require("path")

// Writes public/sitemap.xml (every page except 404s) and public/robots.txt,
// which points crawlers at it. Submit https://<site>/sitemap.xml in Google
// Search Console.
exports.onPostBuild = async ({ graphql }) => {
  const { data } = await graphql(`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
      allSitePage {
        nodes {
          path
        }
      }
    }
  `)
  const siteUrl = data.site.siteMetadata.siteUrl
  const urls = data.allSitePage.nodes
    .map(node => node.path)
    .filter(p => !/^\/(404|dev-404-page)/.test(p))
    .sort()
    .map(p => `  <url><loc>${siteUrl}${p}</loc></url>`)
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`
  const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
  fs.writeFileSync(path.join("public", "sitemap.xml"), sitemap)
  fs.writeFileSync(path.join("public", "robots.txt"), robots)
}
