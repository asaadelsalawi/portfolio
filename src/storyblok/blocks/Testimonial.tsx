import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import Reveal from '../../components/Reveal'

type TestimonialBlok = SbBlokData & {
  quote?: string
  name?: string
  role_company?: string
  photo?: { filename?: string; alt?: string }
}

export default function Testimonial({ blok }: { blok: TestimonialBlok }) {
  return (
    <Reveal className="w-full">
      <div
        {...storyblokEditable(blok)}
        className="rounded-[var(--radius-l4)] bg-[var(--color-bg-secondary)] p-8 flex flex-col gap-6 w-full"
      >
        {blok.quote && (
          <p className="text-xl leading-8 text-black">"{blok.quote}"</p>
        )}
        <div className="flex items-center gap-3">
          {blok.photo?.filename && (
            <img
              src={blok.photo.filename}
              alt={blok.photo.alt || blok.name || ''}
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
          <div>
            {blok.name && <p className="font-semibold text-black">{blok.name}</p>}
            {blok.role_company && (
              <p className="text-sm text-[var(--color-text-tertiary)]">
                {blok.role_company}
              </p>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
