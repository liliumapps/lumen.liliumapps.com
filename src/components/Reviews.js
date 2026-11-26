import React from "react"
import { utm } from "../utm"

/**
 * Quotes from public reviews (src/data/content.js), each credited to its
 * source, so adding a source is a data change, not a layout one.
 */
export default function Reviews({ items, sources }) {
  return (
    <section id="reviews" className="section reviews">
      <p className="eyebrow center">Reviews</p>
      <h2 className="center">What people say about Lumen</h2>
      <div className="review-grid">
        {items.map(({ source, author, rating, quote, url }) => {
          const from = sources[source]
          return (
            <figure key={`${source}-${author}`} className="review">
              {rating && (
                <p className="review-stars" aria-label={`Rated ${rating} out of 5`}>
                  {"★".repeat(rating)}
                  <span>{"★".repeat(5 - rating)}</span>
                </p>
              )}
              <blockquote>
                <p>“{quote}”</p>
              </blockquote>
              <figcaption>
                <strong>{author}</strong> on{" "}
                <a href={utm(url || from.url, "reviews")} rel="noopener noreferrer">
                  {from.label}
                </a>
              </figcaption>
            </figure>
          )
        })}
      </div>
      <p className="center review-more">
        {Object.values(sources).map(({ label, url }, i) => (
          <React.Fragment key={label}>
            {i > 0 && " · "}
            <a href={utm(url, "more_reviews")}>More reviews on {label}</a>
          </React.Fragment>
        ))}
      </p>
    </section>
  )
}
