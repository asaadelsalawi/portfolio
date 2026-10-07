import { useRef, useState } from 'react'
import FullBleed from './FullBleed'
import { BODY } from './Text'

export type LearningSlide = { headline: string; text: string }

/**
 * Line breaks typed in the CMS only apply from md up. On a phone the column is
 * too narrow for hand-set breaks, so the text just flows.
 */
function Lines({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((part, i) => (
        <span key={i}>
          {i > 0 && (
            <>
              {' '}
              <br className="hidden md:inline" />
            </>
          )}
          {part}
        </span>
      ))}
    </>
  )
}

/**
 * Strong-blue learnings block.
 * - The label stays put; only the two-column row below it changes.
 * - Row: principle left, arrow, action right. From md up the right column starts
 *   exactly where the body text on the page starts (grid of 12, gap 24), so the
 *   block lines up with the text above it. On a phone the two stack and the arrow
 *   points down.
 * - Stepper at the bottom (8px dots, active one a 24px pill).
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
        className="w-full bg-[var(--color-blue)] rounded-[var(--radius-l4)] px-6 md:px-[120px] py-12 min-h-[440px] md:min-h-0 md:aspect-[1392/696] flex flex-col justify-between gap-10"
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
      >
        <p className="text-2xl font-semibold leading-8 text-[var(--color-blue-light)]">{label}</p>

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
              className="w-full shrink-0 snap-start flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-6 items-start text-white"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              <div className="flex flex-col gap-4 md:col-span-6 md:flex-row md:gap-6 md:w-full">
                <p className={`${BODY} font-medium md:flex-1 min-w-0`}>
                  <Lines text={slide.headline} />
                </p>
                {/* Arrow: right on md+ (28px box centers it on the first text line), down on a phone. */}
                <span
                  aria-hidden="true"
                  className="shrink-0 flex items-center md:h-7 text-[32px] md:text-[40px] leading-none font-semibold text-[var(--color-blue-dark)] w-fit"
                >
                  <span className="md:hidden">↓</span>
                  <span className="hidden md:inline">→</span>
                </span>
              </div>
              <p className={`${BODY} font-medium md:col-span-6 min-w-0`}>
                <Lines text={slide.text} />
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-1" role="tablist" aria-label="Choose a learning">
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
    </FullBleed>
  )
}
