import { useMemo } from 'react'
import { motion } from 'framer-motion'

/**
 * Ambient twinkling gold sparkles, scattered randomly within the parent
 * (which must be `relative`). Purely decorative.
 */
export default function Sparkles({ count = 18, className = '' }) {
  const sparks = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 2.5,
      })),
    [count],
  )

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      {sparks.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-gold-light"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            boxShadow: '0 0 6px 2px rgba(228,199,102,0.8)',
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.6, 1.2, 0.6] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
