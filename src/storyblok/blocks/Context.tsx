import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import Reveal from '../../components/Reveal'
import { renderCaseStudyRichText } from '../richtext'

type ContextBlok = SbBlokData & {
  content?: Parameters<typeof renderCaseStudyRichText>[0]
}

export default function Context({ blok }: { blok: ContextBlok }) {
  return (
    <Reveal className="w-full">
      <section {...storyblokEditable(blok)} className="w-full">
        <div className="text-2xl font-semibold text-black md:max-w-[calc(50%-12px)] [&_p]:!text-2xl [&_p]:!font-semibold">
          {renderCaseStudyRichText(blok.content)}
        </div>
      </section>
    </Reveal>
  )
}
