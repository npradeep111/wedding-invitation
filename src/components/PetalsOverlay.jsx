import { useMemo } from 'react'
import { motion } from 'framer-motion'

function Petal({ left, delay, duration, size, rotate, opacity }) {
  return (
    <motion.svg
      className="absolute top-[-5%] pointer-events-none"
      style={{ left: `${left}%`, width: size, height: size, opacity }}
      viewBox="0 0 32 32"
      initial={{ y: '-10vh', rotate: 0 }}
      animate={{ y: '110vh', rotate: rotate }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <path
        d="M16 2C20 8 26 10 30 12c-4 4-10 4-14 10-4-6-10-6-14-10C6 10 12 8 16 2z"
        fill="#D4A373"
        fillOpacity="0.75"
      />
    </motion.svg>
  )
}

/**
 * A soft, continuous shower of gold/rose-gold petals drifting from the
 * top of the viewport. Kept low-opacity and low-density so it reads as
 * ambience rather than noise.
 */
export default function PetalsOverlay({ count = 14, className = '' }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 8,
        size: 14 + Math.random() * 16,
        rotate: 180 + Math.random() * 360,
        opacity: 0.4 + Math.random() * 0.4,
      })),
    [count],
  )

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {petals.map((p) => (
        <Petal key={p.id} {...p} />
      ))}
    </div>
  )
}
