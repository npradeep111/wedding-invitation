import { motion } from 'framer-motion'
import { FaMapMarkedAlt, FaLocationArrow } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { events } from '../utils/weddingData.js'

export default function Venue() {
  return (
    <section id="venue" className="relative bg-beige py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Find Us"
          title="Venue &amp; Directions"
          subtitle="We can't wait to celebrate with you. Tap a card below to get directions straight to the venue."
        />

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {events.map((event, i) => (
            <ScrollReveal key={event.id} delay={0.15 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden glass-panel p-8 flex flex-col items-center text-center h-full"
              >
                <div className="w-14 h-14 rounded-full bg-forest flex items-center justify-center mb-5 shadow-gold">
                  <FaMapMarkedAlt className="text-gold-light text-xl" />
                </div>

                <span className="eyebrow text-gold-dark">{event.name}</span>
                <h3 className="font-heading text-2xl text-forest mt-2">{event.venue}</h3>
                <p className="text-forest/60 text-sm mt-2">{event.date} &middot; {event.time}</p>

                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 btn-gold"
                >
                  <FaLocationArrow size={12} /> Get Directions
                </a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
