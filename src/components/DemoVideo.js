import React, { useEffect, useRef } from "react"

/**
 * A short, silent, looping clip of the app in a phone frame, the way a GIF
 * would show it but sharper and a fraction of the size: static/videos/<name>.mp4,
 * with <name>.jpg as its poster (also all that people who ask for less motion
 * see). It loads and plays only while on screen.
 */
export default function DemoVideo({ name, label, eager = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return undefined
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="phone">
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload={eager ? "auto" : "none"}
        poster={`/videos/${name}.jpg`}
        aria-label={label}
        width="720"
        height="1600"
      >
        <source src={`/videos/${name}.mp4`} type="video/mp4" />
      </video>
    </div>
  )
}
