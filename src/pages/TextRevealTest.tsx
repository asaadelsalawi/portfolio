import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import NumberBlocks from '../components/NumberBlocks'

gsap.registerPlugin(ScrollTrigger)

const TEXT =
  "Leadership isn't about having more authority. It's about being trusted with judgment, and being willing to use it before you have full certainty."

export default function TextRevealTest() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [tab, setTab] = useState<'reveal' | 'team-nav' | 'before-after' | 'numbers'>('reveal')

  useLayoutEffect(() => {
    const headerEl = document.querySelector('header') as HTMLElement | null
    setHeaderHeight(headerEl?.offsetHeight ?? 0)
  }, [])

  useLayoutEffect(() => {
    if (tab !== 'reveal') return

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
  }, [headerHeight, tab])

  return (
    <div className="flex flex-col flex-1 bg-white">

        <div className="flex gap-2 px-6 md:px-[144px] pt-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            onClick={() => setTab('reveal')}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
              tab === 'reveal'
                ? 'bg-black text-white'
                : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-tertiary)]'
            }`}
          >
            Text Reveal
          </button>
          <button
            onClick={() => setTab('team-nav')}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
              tab === 'team-nav'
                ? 'bg-black text-white'
                : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-tertiary)]'
            }`}
          >
            Team Navigation
          </button>
          <button
            onClick={() => setTab('before-after')}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
              tab === 'before-after'
                ? 'bg-black text-white'
                : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-tertiary)]'
            }`}
          >
            Before / After Slider
          </button>
          <button
            onClick={() => setTab('numbers')}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
              tab === 'numbers'
                ? 'bg-black text-white'
                : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-tertiary)]'
            }`}
          >
            Number Blocks
          </button>
        </div>

        {tab === 'reveal' ? (
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
        ) : tab === 'team-nav' ? (
          <main className="flex-1 w-full py-6 px-6 md:px-[144px] bg-white">
            <iframe
              src="/team-navigation-v6.html"
              title="Team Navigation 2023–2026"
              className="w-full border-0 bg-white"
              style={{ height: '80vh' }}
            />
          </main>
        ) : tab === 'numbers' ? (
          <main className="flex-1 w-full px-6 md:px-[144px] bg-white flex flex-col items-center">
            {/* Space above and below, so the scroll-driven reveal can be tried out */}
            <div className="h-[70vh] flex items-center justify-center">
              <p className="text-base text-[var(--color-text-tertiary)]">Scroll down ↓</p>
            </div>
            <div className="w-full max-w-[1152px]">
              <NumberBlocks
                items={[
                  { value: 'Tripled', caption: 'scored design reviews per month, 2025 vs. 2026' },
                  { value: '2.97 → 2.98', caption: 'average design review score, same period' },
                  { value: '+0.45', caption: 'average score gain in follow-up design reviews, 2026' },
                ]}
              />
            </div>
            <div className="h-[70vh]" />
          </main>
        ) : (
          <main className="flex-1 w-full py-16 px-6 md:px-[144px] bg-white flex flex-col gap-4 items-center">
            {/* Frame: 1152px wide, 74px padding on all sides, so the images are 1004px.
                The padding is 74/1152 of the frame width, so it scales down on small screens. */}
            <div className="@container w-full max-w-[1152px]">
              <div className="relative bg-[var(--color-blue-light)] rounded-[var(--radius-l4)] p-[6.4236cqw]">
                <BeforeAfterSlider
                  showLabels={false}
                  aspectRatio={2880 / 1600}
                  before={{ src: '/images/kanban-alt.png', alt: 'Candidate board, previous design' }}
                  after={{ src: '/images/kanban-neu.png', alt: 'Candidate board, new design' }}
                />
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-tertiary)] text-center">
              Drag the handle, or focus it and use the arrow keys.
            </p>
          </main>
        )}
    </div>
  )
}
