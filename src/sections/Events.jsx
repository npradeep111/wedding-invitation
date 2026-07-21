import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaClock, FaExternalLinkAlt } from 'react-icons/fa'
import { GiFlowerPot, GiDiamondRing } from 'react-icons/gi'
import SectionHeading from '../components/SectionHeading.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { events } from '../utils/weddingData.js'

const icons = {
  haldi: GiFlowerPot,
  wedding: GiDiamondRing,
}

export default function Events() {
  return (
    <section id="events" className="relative bg-forest py-24 sm:py-32 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60" />

      <div className="relative max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Wedding Events"
          title="Our Ceremonies"
          subtitle="Two cherished days await &mdash; each one a new tradition, a new blessing, a new memory made together."
          light
        />

        {/* Timeline */}
        <div className="relative mt-16">
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />

          <div className="flex flex-col gap-14 sm:gap-20">
            {events.map((event, index) => {
              const Icon = icons[event.id] ?? GiDiamondRing
              const alignLeft = index % 2 === 0

              return (
                <ScrollReveal key={event.id} delay={0.1}>
                  <div
                    className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-10 ${
                      alignLeft ? '' : 'sm:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 w-full ${alignLeft ? 'sm:text-right' : 'sm:text-left'} text-center`}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="glass-panel-dark rounded-2xl p-7 inline-block w-full sm:max-w-md text-left"
                      >
                        <span className="eyebrow text-gold-light">{`Event ${index + 1 < 10 ? `0${index + 1}` : index + 1}`}</span>
                        <h3 className="font-heading text-2xl text-ivory mt-2">{event.name}</h3>
                        <p className="font-script text-2xl text-gold-light mt-1">{event.date}</p>

                        <div className="mt-4 space-y-2 text-ivory/80 text-sm">
                          <p className="flex items-center gap-2">
                            <FaClock className="text-gold-light shrink-0" /> {event.time}
                          </p>
                          <p className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-gold-light shrink-0" /> {event.venue}
                          </p>
                        </div>

                        <p className="mt-4 text-ivory/60 text-sm leading-relaxed">{event.description}</p>

                        <a
                          href={event.mapsUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 inline-flex items-center gap-2 text-xs font-heading tracking-[0.2em] uppercase text-gold-light hover:text-gold transition-colors"
                        >
                          View on Google Maps <FaExternalLinkAlt size={10} />
                        </a>
                      </motion.div>
                    </div>

                    {/* Center icon node */}
                    <div className="relative shrink-0 z-10">
                      <div className="w-14 h-14 rounded-full bg-forest border-2 border-gold flex items-center justify-center shadow-gold">
                        <Icon className="text-gold-light text-xl" />
                      </div>
                    </div>

                    <div className="flex-1 hidden sm:block" />
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
