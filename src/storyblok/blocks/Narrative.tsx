import { storyblokEditable, StoryblokComponent, type SbBlokData } from '@storyblok/react'
import TextSection from '../../components/TextSection'
import { renderCaseStudyRichText } from '../richtext'

type NarrativeBlok = SbBlokData & {
  heading?: string
  visuals?: SbBlokData[]
  content?: Parameters<typeof renderCaseStudyRichText>[0]
}

export default function Narrative({ blok }: { blok: NarrativeBlok }) {
  return (
    <div {...storyblokEditable(blok)} className="w-full">
      <TextSection
        heading={blok.heading}
        visuals={(blok.visuals ?? []).map((visual) => (
          <StoryblokComponent blok={visual} key={visual._uid} />
        ))}
      >
        {renderCaseStudyRichText(blok.content)}
      </TextSection>
    </div>
  )
}
