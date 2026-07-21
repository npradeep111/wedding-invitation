import { motion } from 'framer-motion'
import { FaRegCalendarAlt } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal.jsx'
import GoldDivider from '../components/GoldDivider.jsx'
import { events } from '../utils/weddingData.js'

export default function SaveTheDate() {
  return (
    <section id="save-the-date" className="relative bg-ivory py-24 sm:py-32 px-6 overflow-hidden">
      {/* Decorative background monogram */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <span className="font-script text-[38vw] text-forest leading-none">PK</span>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="eyebrow text-gold-dark">Save The Date</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="section-title mt-4">
            Two Souls, <span className="font-script text-gold text-5xl sm:text-6xl">One</span> Journey
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex justify-center mt-6">
          <GoldDivider />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-6 max-w-xl mx-auto text-forest/70 leading-relaxed">
            With hearts full of joy, we invite you to witness the union of our families as we
            begin our forever &mdash; Celebration and love.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6 sm:gap-8">
          {events.map((event, i) => (
            <ScrollReveal key={event.id} delay={0.2 * (i + 1)}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-2xl p-8 h-full flex flex-col items-center gap-3"
              >
                <FaRegCalendarAlt className="text-3xl text-gold" />
                <h3 className="font-heading text-lg text-forest tracking-wide">{event.name}</h3>
                <p className="font-script text-3xl text-gold-dark">{event.date}</p>
                <p className="text-sm text-forest/60">{event.time}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
