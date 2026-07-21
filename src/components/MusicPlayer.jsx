import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

/**
 * Floating circular music control, fixed to the bottom-right corner.
 * Autoplay is attempted (muted, most browsers block audible autoplay)
 * and otherwise starts once the visitor opens the invitation gate.
 *
 * Replace /public/music/background.mp3 with your own instrumental track.
 */
export default function MusicPlayer({ autoStart = false }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (autoStart && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch(() => {})
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <audio ref={audioRef} loop preload="none">
        <source src="./music/background.mp3" type="audio/mpeg" />
      </audio>

      {isPlaying && (
        <motion.button
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
          className="w-10 h-10 rounded-full glass-panel-dark flex items-center justify-center text-gold-light hover:text-gold transition-colors"
        >
          {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
        </motion.button>
      )}

      <motion.button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
        transition={isPlaying ? { duration: 8, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="w-12 h-12 rounded-full bg-forest border border-gold/60 shadow-gold flex items-center justify-center text-gold-light"
      >
        {isPlaying ? <FaPause size={14} /> : <FaPlay size={13} className="ml-0.5" />}
      </motion.button>
    </div>
  )
}
