import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'

const images = [
  { src: './images/gallery1.jpg', alt: 'Pavan & Keerthana — moment one' },
  { src: './images/gallery2.jpg', alt: 'Pavan & Keerthana — moment two' },
  { src: './images/gallery3.jpg', alt: 'Pavan & Keerthana — moment three' },
  { src: './images/gallery4.jpg', alt: 'Pavan & Keerthana — moment four' },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="relative bg-ivory py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments We Treasure"
          subtitle="A few frames from our journey together."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((img, i) => (
            <ScrollReveal key={img.src} delay={0.08 * i}>
              <motion.button
                onClick={() => setActive(img)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-gold/30 shadow-card"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-500" />
                <div className="absolute inset-2 border border-ivory/0 group-hover:border-ivory/40 rounded-lg transition-all duration-500" />
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] bg-forest/90 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={active.src}
              alt={active.alt}
              className="max-h-[85vh] max-w-full rounded-lg shadow-2xl border border-gold/40"
            />
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-6 right-6 w-10 h-10 rounded-full glass-panel-dark flex items-center justify-center text-gold-light hover:text-gold"
            >
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
