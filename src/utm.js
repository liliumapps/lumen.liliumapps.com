// UTM tags for links that leave this site (other Lilium Apps sites, Google
// Play, Reddit, X), so their analytics can tell where a visit came from.
// Apply it where a link is rendered; keep the raw URLs in gatsby-config.js and
// src/data, so canonical URLs, structured data, and llms.txt stay untagged.
// `campaign` names the spot on the page (header, hero, footer, ...).
const SOURCE = "lumen_site"

function utm(url, campaign) {
  const at = url.indexOf("#")
  const base = at < 0 ? url : url.slice(0, at)
  const fragment = at < 0 ? "" : url.slice(at)
  const join = base.includes("?") ? "&" : "?"
  return `${base}${join}utm_source=${SOURCE}&utm_campaign=${campaign}${fragment}`
}

module.exports = { utm }
