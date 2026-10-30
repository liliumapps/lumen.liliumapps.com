import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SiteHead from "../components/Head"

export default function NotFound() {
  return (
    <Layout>
      <section className="section notfound">
        <h1>Page not found</h1>
        <p>That page doesn’t exist.</p>
        <Link className="button" to="/">
          Back home
        </Link>
      </section>
    </Layout>
  )
}

export const Head = () => <SiteHead title="Not found" />
