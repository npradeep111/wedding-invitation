import { AnimatePresence, motion } from 'framer-motion'
import { FaLeaf } from 'react-icons/fa'
import PetalsOverlay from './PetalsOverlay.jsx'
import { couple } from '../utils/weddingData.js'

/**
 * Full-screen cover shown on first load. Two gilded panels part like a
 * gate to reveal the site beneath, triggered by the "Open Invitation"
 * button.
 */
export default function OpeningGate({ isOpen, onOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          {/* Left panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-y-0 left-0 w-1/2 bg-forest border-r border-gold/40 flex items-center justify-end"
          >
            <GateFiligree flip={false} />
          </motion.div>

          {/* Right panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-y-0 right-0 w-1/2 bg-forest border-l border-gold/40 flex items-center justify-start"
          >
            <GateFiligree flip={true} />
          </motion.div>

          <PetalsOverlay count={10} />

          {/* Center content */}
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col items-center gap-6"
            >
              <span className="eyebrow text-gold-light">The Wedding Of</span>

              <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-ivory leading-tight">
                {couple.groom} <span className="text-gold-light">&amp;</span> {couple.bride}
              </h1>

              <div className="flex items-center gap-3 text-gold-light">
                <FaLeaf className="text-2xl rotate-180" />
                <span className="font-heading tracking-[0.3em] text-xs sm:text-sm uppercase">
                  Together With Our Families
                </span>
                <FaLeaf className="text-2xl" />
              </div>

              <motion.button
                onClick={onOpen}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="mt-6 btn-gold"
              >
                Open Invitation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

function GateFiligree({ flip }) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.35 }}
      transition={{ duration: 1.5 }}
      width="140"
      height="70%"
      viewBox="0 0 140 600"
      className={flip ? 'scale-x-[-1]' : ''}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0C60 60 40 140 90 180C40 220 60 300 10 340C60 380 40 460 90 500C40 540 60 580 10 600"
        stroke="#C9A227"
        strokeWidth="2"
      />
      <circle cx="55" cy="180" r="6" fill="#C9A227" />
      <circle cx="55" cy="500" r="6" fill="#C9A227" />
    </motion.svg>
  )
}
