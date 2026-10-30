import React from "react"

/**
 * A screenshot of the app in a phone: static/screens/<name>.webp (1080 × 2424,
 * as the phone takes it, demo status bar and all), drawn in a thin-bezelled
 * body with a camera hole and side buttons, all in CSS so it scales cleanly.
 */
export default function PhoneScreen({ name, label, eager = false }) {
  return (
    <div className="phone">
      <div className="phone-body">
        <span className="phone-button power" aria-hidden="true" />
        <span className="phone-button volume" aria-hidden="true" />
        <div className="phone-screen">
          <img
            src={`/screens/${name}.webp`}
            alt={label}
            width="1080"
            height="2424"
            loading={eager ? "eager" : "lazy"}
            decoding="async"
          />
          <span className="phone-camera" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
