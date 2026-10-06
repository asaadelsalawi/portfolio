import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const START_COLOR = '#bcc2d2' // --color-text-disabled
const END_COLOR = '#000000'

/**
 * Scroll-scrubbed text reveal: every word starts light gray and fills to black
 * as the quote moves through the viewport. Tied to scroll position, not to time.
 */
export default function TextReveal({
  text,
  className = '',
  startColor = START_COLOR,
}: {
  text: string
  className?: string
  /** Color the words start with. Defaults to the disabled-text gray. */
  startColor?: string
}) {
  const ref = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const words = gsap.utils.toArray<HTMLElement>('.reveal-word', el)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(words, { color: END_COLOR })
      return
    }

    const ctx = gsap.context(() => {
      gsap.to(words, {
        color: END_COLOR,
        stagger: 0.08,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'bottom 45%',
          scrub: 0.5,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [text, startColor])

  return (
    <p ref={ref} className={className}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="reveal-word" style={{ color: startColor }}>
          {word}{' '}
        </span>
      ))}
    </p>
  )
}
