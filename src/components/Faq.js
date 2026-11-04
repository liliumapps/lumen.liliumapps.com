import React from "react"

/**
 * Questions and answers ([question, answer] pairs), open in the page's HTML so
 * search engines and AI assistants can read them; faqJsonLd gives the same
 * pairs as FAQPage structured data.
 */
export default function Faq({ items }) {
  return (
    <section id="faq" className="section faq">
      <p className="eyebrow center">Questions</p>
      <h2 className="center">Frequently asked questions</h2>
      <div className="faq-list">
        {items.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export const faqJsonLd = items => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
})
