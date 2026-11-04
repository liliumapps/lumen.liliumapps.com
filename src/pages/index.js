import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SiteHead from "../components/Head"
import PhoneScreen from "../components/PhoneScreen"
import Faq, { faqJsonLd } from "../components/Faq"
import { features, more, principles, faq } from "../data/content"

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
              Lumen is a file manager for Android that browses, finds, previews, and cleans up, with no account
              and no tracking.
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
            <PhoneScreen name="hero" label="Lumen's home screen: storage, recent files, and file types" eager />
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <p className="eyebrow center">What you get</p>
        <h2 className="center">A file manager that feels like the rest of your phone</h2>
        <div className="bento">
          {features.map(({ screen, eyebrow, title, body }) => (
            <article key={screen} className="feature">
              <div className="feature-media">
                <PhoneScreen name={screen} label={title} />
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
          {more.map(([title, body]) => (
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
          {principles.map(([title, body]) => (
            <div key={title} className="principle">
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq items={faq} />

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

// Structured data so search results can show Lumen as an app.
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Lumen - File manager",
  operatingSystem: "Android",
  applicationCategory: "UtilitiesApplication",
  description: "A private, fast file manager for Android. No account, no tracking.",
  url: "https://lumen.liliumapps.com/",
  image: "https://lumen.liliumapps.com/icon-512.png",
  installUrl: "https://play.google.com/store/apps/details?id=com.liliumapps.lumenfiles",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: { "@type": "Organization", name: "Lilium Apps", url: "https://liliumapps.com" },
}

export const Head = ({ location }) => (
  <SiteHead pathname={location.pathname} jsonLd={[JSON_LD, faqJsonLd(faq)]} />
)
