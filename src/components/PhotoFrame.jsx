import { motion } from 'framer-motion'

/**
 * Ornamental circular/rounded photo frame with a thin gold border and
 * corner flourishes. Used for the bride & groom portraits.
 */
export default function PhotoFrame({ src, alt, className = '', shape = 'arch' }) {
  const radius = shape === 'circle' ? 'rounded-full' : 'rounded-t-[9999px] rounded-b-3xl'

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className={`relative p-2 ${className}`}
    >
      <div className={`absolute inset-0 border-2 border-gold/70 ${radius} pointer-events-none`} />
      <div className={`absolute inset-2 border border-gold/40 ${radius} pointer-events-none`} />
      <div className={`overflow-hidden ${radius} shadow-card w-full h-full`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover aspect-[3/4]"
          loading="lazy"
        />
      </div>
    </motion.div>
  )
}
