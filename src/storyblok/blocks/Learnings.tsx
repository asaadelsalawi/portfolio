import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import LearningsCarousel from '../../components/LearningsCarousel'

type SlideBlok = SbBlokData & { headline?: string; text?: string }
type LearningsBlok = SbBlokData & { label?: string; slides?: SlideBlok[] }

export default function Learnings({ blok }: { blok: LearningsBlok }) {
  const slides = (blok.slides ?? [])
    .filter((s) => s.headline)
    .map((s) => ({ headline: s.headline ?? '', text: s.text ?? '' }))
  return (
    <div {...storyblokEditable(blok)} className="w-full">
      <LearningsCarousel label={blok.label ?? ''} slides={slides} />
    </div>
  )
}
