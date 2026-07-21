import { motion } from 'framer-motion'
import { GiLotus } from 'react-icons/gi'
import SectionHeading from '../components/SectionHeading.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'

const blessings = [
  {
    quote:
      'May your marriage be blessed with love that grows deeper with every passing year, and a home filled with warmth and laughter.',
    from: 'With love, Family',
  },
  {
    quote:
      'Two hearts, one soul — may this beautiful beginning be the first of many joyful chapters together.',
    from: 'With love, Friends',
  },
  {
    quote:
      'Wishing you a lifetime of togetherness, understanding and the kind of love that only grows stronger with time.',
    from: 'With love, Well-wishers',
  },
]

export default function Blessings() {
  return (
    <section id="blessings" className="relative bg-forest py-24 sm:py-32 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-70" />

      <div className="relative max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Blessings"
          title="Words of Love"
          subtitle="A collection of blessings from the hearts of those who love us most."
          light
        />

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {blessings.map((b, i) => (
            <ScrollReveal key={i} delay={0.15 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-panel-dark rounded-2xl p-8 h-full flex flex-col items-center text-center gap-4"
              >
                <GiLotus className="text-3xl text-gold-light" />
                <p className="text-ivory/80 text-sm leading-relaxed italic">&ldquo;{b.quote}&rdquo;</p>
                <span className="font-heading text-xs tracking-[0.2em] uppercase text-gold-light">
                  {b.from}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
