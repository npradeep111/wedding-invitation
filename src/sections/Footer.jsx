import { FaLeaf } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal.jsx'
import GoldDivider from '../components/GoldDivider.jsx'
import { couple } from '../utils/weddingData.js'

export default function Footer() {
  return (
    <footer className="relative bg-ivory pt-20 pb-10 px-6 text-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.05]">
        <span className="font-script text-[30vw] text-forest leading-none">PK</span>
      </div>

      <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6">
        <ScrollReveal className="flex items-center gap-3 text-gold">
          <FaLeaf className="text-2xl rotate-180" />
          <span className="eyebrow text-gold-dark">Thank You</span>
          <FaLeaf className="text-2xl" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-script text-5xl sm:text-6xl text-forest">
            {couple.groom} &amp; {couple.bride}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <GoldDivider />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-forest/70 leading-relaxed max-w-lg">
            Your presence, love and blessings mean the world to us. Thank you for being part of
            our journey as we begin this beautiful new chapter of our lives.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4} className="text-xs tracking-[0.3em] uppercase text-forest/40 mt-8">
          Made with love &middot; August 2026
        </ScrollReveal>
      </div>
    </footer>
  )
}
