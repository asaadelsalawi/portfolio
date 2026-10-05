import { useEffect, useRef, useState } from 'react'
import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type AlluvialBlok = SbBlokData & { src?: string; title?: string }

// Embeds the standalone diagram page. The page reports its own content height
// (postMessage), so the frame fits both the horizontal and the vertical layout.
export default function AlluvialDiagram({ blok }: { blok: AlluvialBlok }) {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(720)

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.source !== frameRef.current?.contentWindow) return
      if (e.data?.type !== 'embed-height' || typeof e.data.height !== 'number') return
      setHeight(Math.ceil(e.data.height))
      // Layout below this block moved, so scroll triggers need new positions.
      requestAnimationFrame(() => ScrollTrigger.refresh())
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <div {...storyblokEditable(blok)} className="w-full">
      <iframe
        ref={frameRef}
        src={blok.src || '/team-navigation-v5.html'}
        title={blok.title || 'Team navigation 2023 to 2026'}
        className="w-full border-0 bg-white block"
        style={{ height }}
      />
    </div>
  )
}
