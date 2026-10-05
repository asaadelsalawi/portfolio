import { storyblokEditable, type SbBlokData } from '@storyblok/react'

type PlaceholderBlok = SbBlokData & { label?: string }

// Stand-in for content that is still to come (video, numbers).
export default function Placeholder({ blok }: { blok: PlaceholderBlok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="aspect-[1152/576] w-full bg-[#f1f4f8] border border-[var(--color-border-default)] rounded-[var(--radius-xl)] flex items-center justify-center px-6 md:px-[120px] py-12"
    >
      <p className="text-2xl md:text-[32px] font-semibold text-center text-[var(--color-text-disabled,#bcc2d2)]">
        {blok.label}
      </p>
    </div>
  )
}
