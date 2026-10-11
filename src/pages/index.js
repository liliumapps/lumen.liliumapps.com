import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SiteHead from "../components/Head"

// Captions match the store screenshots (branding/apps/lumen-files/store.mjs).
const SCREENS = [
  "Your storage at a glance",
  "Every folder, fast",
  "Find anything in seconds",
  "See what’s using space",
  "Share with your computer over Wi-Fi",
  "Preview photos, videos, and documents",
]

const FEATURES = [
  ["Browse every folder", "Internal storage, SD cards, and USB drives, in list, grid, or details, with tabs for moving files between folders."],
  ["Find anything", "Search names, paths, and extensions across all your storage, with filters for type, size, and date."],
  ["Free up space", "See the largest files, exact duplicates verified by checksum, and empty folders. Nothing is removed until you review it."],
  ["Safe file operations", "Copy, move, compress, and extract with pause, resume, and cancel. Conflicts always ask, and the trash has undo."],
  ["Share with your computer", "Open your phone's files in a browser over Wi-Fi. Off until you turn it on, local network only, and every computer needs your approval."],
  ["Private by design", "No account, no ads, no analytics. Your files never leave your phone unless you share them."],
]

export default function Home() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          googlePlay
        }
      }
    }
  `)
  return (
    <Layout>
      <section className="hero">
        <img className="hero-icon" src="/icon-512.png" alt="" width="112" height="112" />
        <h1>Lumen</h1>
        <p className="hero-tagline">A private, fast file manager for Android.</p>
        <p>No account, no ads, no tracking. Your files stay on your phone unless you choose to share them.</p>
        <a className="button" href={site.siteMetadata.googlePlay}>
          Get it on Google Play
        </a>
      </section>

      <section className="screens" aria-label="Screenshots">
        {SCREENS.map((caption, i) => (
          <img key={caption} src={`/screens/${i + 1}.webp`} alt={caption} width="270" height="480" loading="lazy" />
        ))}
      </section>

      <section id="features" className="section">
        <h2>Everything a file manager should do</h2>
        <div className="grid">
          {FEATURES.map(([title, body]) => (
            <article key={title} className="card">
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <SiteHead />
