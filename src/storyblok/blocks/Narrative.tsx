import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import GridSplit from '../../components/GridSplit'
import { renderCaseStudyRichText } from '../richtext'

type NarrativeBlok = SbBlokData & {
  heading?: string
  content?: Parameters<typeof renderCaseStudyRichText>[0]
}

export default function Narrative({ blok }: { blok: NarrativeBlok }) {
  const rendered = renderCaseStudyRichText(blok.content)

  return (
    <section {...storyblokEditable(blok)} className="flex flex-col gap-10 w-full">
      <GridSplit
        label={
          blok.heading ? (
            <p className="text-2xl font-semibold text-black">{blok.heading}</p>
          ) : (
            <span />
          )
        }
      >
        {rendered}
      </GridSplit>
    </section>
  )
}
