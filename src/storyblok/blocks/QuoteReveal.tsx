import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import TextReveal from '../../components/TextReveal'

type QuoteRevealBlok = SbBlokData & { text?: string }

export default function QuoteReveal({ blok }: { blok: QuoteRevealBlok }) {
  if (!blok.text) return null
  return (
    <div
      {...storyblokEditable(blok)}
      className="w-full flex flex-col items-start justify-end py-12 md:py-20"
    >
      <TextReveal
        text={blok.text}
        className="text-3xl md:text-[40px] font-semibold leading-normal w-full"
      />
    </div>
  )
}
