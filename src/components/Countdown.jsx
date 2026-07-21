import { AnimatePresence, motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown.js'

function TimeBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl glass-panel-dark flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -22, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="font-heading text-2xl sm:text-3xl text-gold-light tabular-nums"
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-ivory/70 font-body">
        {label}
      </span>
    </div>
  )
}

/**
 * Live countdown to the given target date, styled for use on a dark
 * (forest green) background.
 */
export default function Countdown({ targetDate }) {
  const { days, hours, minutes, seconds, isPast } = useCountdown(targetDate)

  if (isPast) {
    return (
      <p className="font-script text-3xl text-gold-light">Forever begins now &hearts;</p>
    )
  }

  return (
    <div className="flex items-center gap-3 sm:gap-5">
      <TimeBlock value={days} label="Days" />
      <TimeBlock value={hours} label="Hours" />
      <TimeBlock value={minutes} label="Minutes" />
      <TimeBlock value={seconds} label="Seconds" />
    </div>
  )
}

