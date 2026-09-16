import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import GridSplit from '../../components/GridSplit'
import { renderCaseStudyRichText } from '../richtext'

type AiFluencyBlok = SbBlokData & {
  workflow_title?: string
  description?: Parameters<typeof renderCaseStudyRichText>[0]
  tool_used?: string
  example_asset?: { filename?: string; alt?: string }
}

export default function AiFluency({ blok }: { blok: AiFluencyBlok }) {
  return (
    <section {...storyblokEditable(blok)} className="flex flex-col gap-6 w-full">
      <GridSplit
        label={
          <div className="flex flex-col gap-2">
            {blok.workflow_title && (
              <p className="text-2xl font-semibold text-black">{blok.workflow_title}</p>
            )}
            {blok.tool_used && (
              <p className="text-sm text-[var(--color-text-tertiary)]">
                Tool: <span className="text-black">{blok.tool_used}</span>
              </p>
            )}
          </div>
        }
      >
        {renderCaseStudyRichText(blok.description)}
      </GridSplit>
      {blok.example_asset?.filename && (
        <img
          src={blok.example_asset.filename}
          alt={blok.example_asset.alt || blok.workflow_title || ''}
          className="w-full rounded-[var(--radius-l4)] object-cover"
        />
      )}
    </section>
  )
}
