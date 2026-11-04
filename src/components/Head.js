import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// `pathname` gives the page its canonical URL; pages without one (the 404)
// are kept out of search results. `jsonLd` is the page's structured data.
export default function SiteHead({ title, description, pathname, jsonLd }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)
  const meta = site.siteMetadata
  const fullTitle = title ? `${title} · ${meta.title}` : `${meta.title} - File manager`
  const summary = description || meta.description
  const url = pathname && `${meta.siteUrl}${pathname}`
  const image = `${meta.siteUrl}/og-image.png`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={summary} />
      {url ? <link rel="canonical" href={url} /> : <meta name="robots" content="noindex" />}
      <meta name="theme-color" content="#4B54C6" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={summary} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="500" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={summary} />
      <meta name="twitter:image" content={image} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </>
  )
}
