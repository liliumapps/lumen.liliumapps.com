import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function SiteHead({ title }) {
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
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={meta.description} />
      <meta name="theme-color" content="#4B54C6" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={`${meta.siteUrl}/og-image.png`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
