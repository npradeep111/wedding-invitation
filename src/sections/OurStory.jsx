import SectionHeading from '../components/SectionHeading.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import PhotoFrame from '../components/PhotoFrame.jsx'
import { couple } from '../utils/weddingData.js'

export default function OurStory() {
  return (
    <section id="our-story" className="relative bg-beige py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Together As One"
          title="A Love Written in the Stars"
          subtitle="Every love story is beautiful, but ours is our favorite. From a chance meeting to a lifelong promise."
        />

        <div className="grid sm:grid-cols-2 gap-12 sm:gap-10 md:gap-16 max-w-3xl mx-auto">
          <ScrollReveal delay={0.1} className="flex flex-col items-center gap-5">
            <PhotoFrame
              src="./images/groom.jpg"
              alt={`${couple.groom}, the groom`}
              className="w-56 sm:w-64 md:w-72"
            />
            <div className="text-center">
              <span className="eyebrow text-gold-dark">The Groom</span>
              <h3 className="font-heading text-3xl text-forest mt-2">{couple.groom}</h3>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex flex-col items-center gap-5">
            <PhotoFrame
              src="./images/bride.jpg"
              alt={`${couple.bride}, the bride`}
              className="w-56 sm:w-64 md:w-72"
            />
            <div className="text-center">
              <span className="eyebrow text-gold-dark">The Bride</span>
              <h3 className="font-heading text-3xl text-forest mt-2">{couple.bride}</h3>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}