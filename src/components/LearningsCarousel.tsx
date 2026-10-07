import { useRef, useState } from 'react'
import FullBleed from './FullBleed'

export type LearningSlide = { headline: string; text: string }

/**
 * Strong-blue learnings block with a swipeable slide track and a stepper.
 * Built from the Figma frame: 1392 x 696 at full bleed, 120px side padding,
 * label in light blue on the left, headline and text in white on the right,
 * stepper (8px dots, active 24px pill) at the bottom.
 */
export default function LearningsCarousel({
  label,
  slides,
}: {
  label: string
  slides: LearningSlide[]
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  function onScroll() {
    const el = trackRef.current
    if (!el || !el.clientWidth) return
    setActive(Math.round(el.scrollLeft / el.clientWidth))
  }

  function goTo(i: number) {
    const el = trackRef.current
    if (!el) return
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
  }

  if (slides.length === 0) return null

  return (
    <FullBleed>
      <div
        className="w-full bg-[var(--color-blue)] rounded-[var(--radius-l4)] px-6 md:px-[120px] py-12 min-h-[480px] md:aspect-[1392/696] flex flex-col justify-end items-center"
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
      >
        <div className="w-full flex flex-col items-center gap-16 md:gap-[240px]">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="w-full flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            tabIndex={0}
            aria-live="polite"
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full shrink-0 snap-start flex flex-col md:flex-row gap-6 items-start"
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}`}
              >
                <p className="text-2xl font-semibold leading-8 text-[var(--color-blue-light)] md:w-[calc(50%-12px)] md:shrink-0">
                  {label}
                </p>
                <div className="flex-1 min-w-0 flex flex-col gap-6 text-white">
                  <p className="text-2xl font-semibold leading-normal">{slide.headline}</p>
                  <p className="text-base leading-6 md:text-xl md:leading-normal font-medium">{slide.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1" role="tablist" aria-label="Choose a learning">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Learning ${i + 1} of ${slides.length}`}
                onClick={() => goTo(i)}
                className={
                  'relative h-2 rounded-full transition-all duration-200 after:absolute after:-inset-y-2 after:-inset-x-0.5 ' +
                  (i === active ? 'w-6 bg-white' : 'w-2 bg-[var(--color-blue-dark)]')
                }
              />
            ))}
          </div>
        </div>
      </div>
    </FullBleed>
  )
}
