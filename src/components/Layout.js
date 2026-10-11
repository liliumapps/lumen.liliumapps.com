import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          studio
          developerPage
        }
      }
    }
  `)
  const { email, studio, developerPage } = site.siteMetadata
  return (
    <>
      <header className="nav">
        <Link to="/" className="nav-logo" aria-label="Lumen home">
          <img src="/icon-192.png" alt="" width="36" height="36" />
          <span>Lumen</span>
        </Link>
        <nav>
          <a href="/#features">Features</a>
          <Link to="/privacy/">Privacy</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <a className="made-by" href={studio}>
          <img src="/lilium-mark.svg" alt="" width="22" height="22" />
          <span>Made by Lilium Apps</span>
        </a>
        <span>
          <a href={`mailto:${email}`}>{email}</a> · <a href={developerPage}>More apps</a> ·{" "}
          <Link to="/privacy/">Privacy</Link>
        </span>
      </footer>
    </>
  )
}
