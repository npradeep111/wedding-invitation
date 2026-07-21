import ScrollReveal from './ScrollReveal.jsx'
import GoldDivider from './GoldDivider.jsx'

export default function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <ScrollReveal className="flex flex-col items-center text-center gap-4 mb-14">
      {eyebrow && (
        <span className={`eyebrow ${light ? 'text-gold-light' : 'text-gold-dark'}`}>{eyebrow}</span>
      )}
      <h2 className={`section-title ${light ? 'text-ivory' : 'text-forest'}`}>{title}</h2>
      <GoldDivider />
      {subtitle && (
        <p className={`max-w-xl font-body text-sm sm:text-base leading-relaxed ${light ? 'text-ivory/80' : 'text-forest/70'}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  )
}
