import { useState } from 'react'

// Drop a logo file at `/contents/logo.png` (or .svg/.jpg). Vite serves that
// folder as the public dir, so it's available at the root path.
const DEFAULT_CANDIDATES = ['/logo.svg', '/logo.png', '/logo.jpg', '/logo.jpeg', '/logo.webp']

export default function Logo({ className = '', src }) {
  const candidates = src ? [src, ...DEFAULT_CANDIDATES] : DEFAULT_CANDIDATES
  const [idx, setIdx] = useState(0)
  const [failed, setFailed] = useState(false)

  const sizeClass = /\bh-\d/.test(className) ? '' : 'h-12'

  if (failed) {
    return (
      <div
        className={`grid aspect-square place-items-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-accent)] ${sizeClass} ${className}`}
        aria-label="Company logo placeholder"
      >
        <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h10M4 17h16" />
        </svg>
      </div>
    )
  }

  return (
    <img
      src={candidates[idx]}
      alt="Company logo"
      onError={() => {
        if (idx + 1 < candidates.length) setIdx(idx + 1)
        else setFailed(true)
      }}
      className={`w-auto object-contain ${sizeClass} ${className}`}
    />
  )
}
