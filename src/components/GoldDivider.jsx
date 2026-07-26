/**
 * The recurring ornamental motif of the site: a slender gold line with a
 * hand-drawn botanical flourish at its center. Used as the visual
 * "signature" that ties every section together.
 */
export default function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-xs ${className}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2 L14.2 9.8 L22 12 L14.2 14.2 L12 22 L9.8 14.2 L2 12 L9.8 9.8 Z"
          fill="#C9A227"
          fillOpacity="0.85"
        />
        <circle cx="12" cy="12" r="1.6" fill="#183A2F" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
    </div>
  )
}
