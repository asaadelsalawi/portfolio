import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '../components/Header'
import ContactBar from '../components/ContactBar'

gsap.registerPlugin(ScrollTrigger)

const TEXT =
  "Leadership isn't about having more authority. It's about being trusted with judgment, and being willing to use it before you have full certainty."

export default function TextRevealTest() {
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>('.reveal-word')

      gsap.to(words, {
        color: '#0b0d12', // matches --color-ink
        stagger: 0.08,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: 0.5,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="w-full max-w-[1440px] flex flex-col flex-1">
        <Header />
        <main className="flex-1 flex flex-col w-full bg-white">
          {/* Spacer so there's room to scroll before the effect starts */}
          <div className="h-[60vh] flex items-center justify-center px-6">
            <p className="text-base text-[var(--color-text-tertiary)]">
              Scroll down ↓
            </p>
          </div>

          <div
            ref={containerRef}
            className="px-6 md:px-[144px] py-[30vh] max-w-[1440px] mx-auto w-full"
          >
            <p className="text-4xl md:text-[64px] font-semibold leading-tight md:leading-[1.15]">
              {TEXT.split(' ').map((word, i) => (
                <span
                  key={i}
                  className="reveal-word"
                  style={{ color: '#bcc2d2' }}
                >
                  {word}{' '}
                </span>
              ))}
            </p>
          </div>

          {/* Spacer so there's room to scroll after the effect ends */}
          <div className="h-[60vh]" />
        </main>
        <ContactBar />
      </div>
    </div>
  )
}
