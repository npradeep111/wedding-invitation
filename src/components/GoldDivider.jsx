/**
 * The recurring ornamental motif of the site: a slender gold line with a
 * hand-drawn botanical flourish at its center. Used as the visual
 * "signature" that ties every section together.
 */
export default function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-xs ${className}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 2C11 6 8 8 2 8c4 3 7 3 10 1-1 4-4 6-8 8 5 0 9-2 11-5 2 3 6 5 11 5-4-2-7-4-8-8 3 2 6 2 10-1-6 0-9-2-12-6z"
          fill="#C9A227"
          fillOpacity="0.85"
        />
        <circle cx="14" cy="10" r="1.6" fill="#183A2F" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
    </div>
  )
}
