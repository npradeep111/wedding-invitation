import { motion } from 'framer-motion'

/**
 * Generic fade + rise scroll-reveal wrapper powered by Framer Motion's
 * whileInView. Wrap any block of content to animate it in as it enters
 * the viewport.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.8,
  className = '',
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
