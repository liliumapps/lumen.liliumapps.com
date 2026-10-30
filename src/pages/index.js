import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SiteHead from "../components/Head"
import DemoVideo from "../components/DemoVideo"

// Each feature has a clip of its own (static/videos/<video>.mp4; see RECORDING.md).
const FEATURES = [
  {
    video: "browse",
    eyebrow: "Browse",
    title: "Every folder, and inside every zip",
    body: "Internal storage, SD cards, and USB drives in lists or grids, with tabs. Open a zip, 7z, or RAR like any folder.",
  },
  {
    video: "search",
    eyebrow: "Search",
    title: "Find anything in seconds",
    body: "Names, paths, and types across all your storage, with filters for size and date. The index stays on your phone.",
  },
  {
    video: "preview",
    eyebrow: "Preview",
    title: "Open it right here",
    body: "PDFs, Word documents, spreadsheets, Markdown, code, e-books, music, and video, without another app.",
  },
  {
    video: "analyze",
    eyebrow: "Free up space",
    title: "See what's using space",
    body: "The largest files, exact duplicates, blurry photos, and what each app keeps. Nothing goes until you review it.",
  },
  {
    video: "photos",
    eyebrow: "Photos and videos",
    title: "A gallery that's also a file manager",
    body: "Every photo by day and month, full screen with a swipe, and the same move, share, and trash as any file.",
  },
  {
    video: "share",
    eyebrow: "Share",
    title: "Your phone's files on your computer",
    body: "Open them in any browser on the same Wi-Fi. Off until you turn it on, and every computer needs your approval.",
  },
]

const MORE = [
  ["Safe by default", "Copy and move with pause and cancel. Conflicts always ask, and the trash has undo."],
  ["Made for your phone", "Light and dark, wallpaper colours, tablets and foldables, and 12 languages."],
  ["Every place, one app", "Phone storage, cards, archives, folders from other apps, and the trash, side by side."],
]

const PRINCIPLES = [
  ["No account", "Nothing to sign up for. Lumen works the moment you open it."],
  ["No ads, no tracking", "No analytics, no ad networks, nothing that watches what you do."],
  ["Your files stay put", "Nothing leaves your phone unless you share it, and then only to whom you choose."],
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
  const play = site.siteMetadata.googlePlay
  return (
    <Layout>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="pill">
              <span>New</span> Copy speed and time left, live in the status bar
            </p>
            <h1>Every file on your phone. Fast, private, and yours.</h1>
            <p className="hero-sub">
              Lumen is a file manager for Android that browses, finds, previews, and cleans up, with no account,
              no ads, and no tracking.
            </p>
            <div className="hero-actions">
              <a className="button light" href={play}>
                Get it on Google Play
              </a>
              <a className="button ghost" href="#features">
                See what it does
              </a>
            </div>
            <p className="hero-note">Free · Android 8 and up · Phones, tablets, and foldables</p>
          </div>
          <div className="hero-media">
            <DemoVideo name="hero" label="Lumen's home screen, opening the photos" eager />
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <p className="eyebrow center">What you get</p>
        <h2 className="center">A file manager that feels like the rest of your phone</h2>
        <div className="bento">
          {FEATURES.map(({ video, eyebrow, title, body }) => (
            <article key={video} className="feature">
              <div className="feature-media">
                <DemoVideo name={video} label={title} />
              </div>
              <div className="feature-text">
                <p className="eyebrow">{eyebrow}</p>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="more">
          {MORE.map(([title, body]) => (
            <div key={title}>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section principles">
        <p className="eyebrow center">Principles</p>
        <h2 className="center">Your files belong to you, not to an app</h2>
        <div className="principle-grid">
          {PRINCIPLES.map(([title, body]) => (
            <div key={title} className="principle">
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Try Lumen today</h2>
        <p>Free on Google Play.</p>
        <a className="button" href={play}>
          Get it on Google Play
        </a>
      </section>
    </Layout>
  )
}

export const Head = () => <SiteHead />
