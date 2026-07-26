import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaLeaf } from 'react-icons/fa'
import Sparkles from '../components/Sparkles.jsx'
import Countdown from '../components/Countdown.jsx'
import GoldDivider from '../components/GoldDivider.jsx'
import { couple, primaryCountdownDate, events } from '../utils/weddingData.js'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-forest"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110 bg-cover bg-center"
      >
        {/*<img
          src="./images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />*/}
      </motion.div> 

      {/* Gradient scrim for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest/85 via-forest/70 to-forest" />
      <div className="absolute inset-0 bg-radial-fade" />

      <Sparkles count={20} />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 pt-10"
      >
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="eyebrow text-gold-light"
        >
          Together With Their Families
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 font-script text-6xl sm:text-8xl md:text-9xl text-ivory drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
        >
          {couple.groom} <span className="text-gold-light">&amp;</span> {couple.bride}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6"
        >
          <GoldDivider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 flex items-center gap-3 text-ivory/90 font-heading tracking-[0.25em] text-xs sm:text-sm uppercase"
        >
          <FaLeaf className="text-gold-light rotate-180" />
          {events[0].date.split(', ')[1]} &mdash; {events[1].date.split(', ')[1]}
          <FaLeaf className="text-gold-light" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10"
        >
          <p className="mb-4 text-ivory/70 text-xs tracking-[0.3em] uppercase font-heading">
            Counting down to the Haldi
          </p>
          <Countdown targetDate={primaryCountdownDate} />
        </motion.div>

        <motion.a
          href="#save-the-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 btn-outline !text-ivory !border-gold/60 hover:!bg-ivory/10"
        >
          Discover Our Story
        </motion.a>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/60"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold-light to-transparent"
        />
      </motion.div>
    </section>
  )
}
