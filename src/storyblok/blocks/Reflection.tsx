import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import FullBleed from '../../components/FullBleed'
import { renderCaseStudyRichText } from '../richtext'

type ReflectionBlok = SbBlokData & {
  content?: Parameters<typeof renderCaseStudyRichText>[0]
}

export default function Reflection({ blok }: { blok: ReflectionBlok }) {
  if (!blok.content) return null

  return (
    <FullBleed>
      <div
        {...storyblokEditable(blok)}
        className="w-full rounded-[var(--radius-l4)] bg-[var(--color-accent)] px-6 md:px-[168px] py-10 md:py-12 flex flex-col gap-4"
      >
        <p className="text-2xl font-semibold text-[var(--color-accent-ink)]">
          What I'd tell the next person doing this job
        </p>
        <div className="[&_p]:!text-xl [&_p]:!font-normal [&_p]:!leading-7 [&_p]:!text-black">
          {renderCaseStudyRichText(blok.content)}
        </div>
      </div>
    </FullBleed>
  )
}
