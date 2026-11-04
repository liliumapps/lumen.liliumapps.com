const fs = require("fs")
const path = require("path")
const { features, more, faq, facts } = require("./src/data/content")

// Writes, into public/:
// - sitemap.xml (every page except 404s) and robots.txt, which points crawlers
//   at it. Submit https://<site>/sitemap.xml in Google Search Console.
// - llms.txt (https://llmstxt.org): what Lumen is, for AI assistants, from the
//   same words as the home page (src/data/content.js).
exports.onPostBuild = async ({ graphql }) => {
  const { data } = await graphql(`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          googlePlay
          studio
        }
      }
      allSitePage {
        nodes {
          path
        }
      }
    }
  `)
  const meta = data.site.siteMetadata
  const siteUrl = meta.siteUrl
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
  const llms = `# ${meta.title}

> ${meta.title} is a file manager for Android by Lilium Apps. ${meta.description}

${facts.map(f => `- ${f}`).join("\n")}

## Features

${features.map(f => `- ${f.title}: ${f.body}`).join("\n")}
${more.map(([title, body]) => `- ${title}: ${body}`).join("\n")}

## FAQ

${faq.map(([q, a]) => `### ${q}\n\n${a}`).join("\n\n")}

## Links

- [${meta.title} on Google Play](${meta.googlePlay}): install the app
- [Home page](${siteUrl}/): features and screenshots
- [Privacy policy](${siteUrl}/privacy/): what the app does with your information
- [Lilium Apps](${meta.studio}/): the studio that makes ${meta.title}, and its other apps
`
  fs.writeFileSync(path.join("public", "sitemap.xml"), sitemap)
  fs.writeFileSync(path.join("public", "robots.txt"), robots)
  fs.writeFileSync(path.join("public", "llms.txt"), llms)
}
