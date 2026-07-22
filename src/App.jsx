import { useState } from 'react'
import OpeningGate from './components/OpeningGate.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'
import PetalsOverlay from './components/PetalsOverlay.jsx'
import { useLockBodyScroll } from './hooks/useLockBodyScroll.js'

import Hero from './sections/Hero.jsx'
import SaveTheDate from './sections/SaveTheDate.jsx'
import OurStory from './sections/OurStory.jsx'
import Events from './sections/Events.jsx'
//import Gallery from './sections/Gallery.jsx'
import Venue from './sections/Venue.jsx'
import Blessings from './sections/Blessings.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  const [gateOpen, setGateOpen] = useState(true)
  const [hasOpened, setHasOpened] = useState(false)

  useLockBodyScroll(gateOpen)

  const handleOpen = () => {
    setGateOpen(false)
    setHasOpened(true)
  }

  return (
    <div className="relative min-h-screen bg-ivory">
      <OpeningGate isOpen={gateOpen} onOpen={handleOpen} />

      {/* Ambient petals drifting across the whole page */}
      <PetalsOverlay count={8} className="fixed inset-0 z-30" />

      <main className="relative z-10">
        <Hero />
        <SaveTheDate />
        <OurStory />
        <Events />
        {/* <Gallery /> */}
        <Venue />
        <Blessings />
        <Footer />
      </main>

      <MusicPlayer autoStart={hasOpened} />
    </div>
  )
}
