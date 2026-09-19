import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '../components/Header'
import ContactBar from '../components/ContactBar'

gsap.registerPlugin(ScrollTrigger)

const TEXT =
  "Leadership isn't about having more authority. It's about being trusted with judgment, and being willing to use it before you have full certainty."

export default function TextRevealTest() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useLayoutEffect(() => {
    const headerEl = document.querySelector('header') as HTMLElement | null
    setHeaderHeight(headerEl?.offsetHeight ?? 0)
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>('.reveal-word')

      gsap.to(words, {
        color: '#0b0d12', // matches --color-ink
        stagger: 0.08,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      })
    }, wrapperRef)

    return () => ctx.revert()
  }, [headerHeight])

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="w-full max-w-[1440px] flex flex-col flex-1">
        <Header />
        <main className="flex-1 flex flex-col w-full bg-white">
          {/* Tall scroll track. Its height controls how much scrolling the
              fill animation takes; the text itself stays pinned via native
              CSS sticky until this track's bottom is reached, then it
              scrolls away with the rest of the page. */}
          <div ref={wrapperRef} className="relative" style={{ height: '250vh' }}>
            <div
              className="sticky flex items-center justify-center px-6 md:px-[144px]"
              style={{ top: headerHeight, height: `calc(100vh - ${headerHeight}px)` }}
            >
              <p className="text-4xl md:text-[64px] font-semibold leading-tight md:leading-[1.15] max-w-[1440px]">
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
          </div>
        </main>
        <ContactBar />
      </div>
    </div>
  )
}
