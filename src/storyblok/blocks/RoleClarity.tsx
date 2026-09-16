import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import Reveal from '../../components/Reveal'
import { renderCaseStudyRichText } from '../richtext'

type RoleClarityBlok = SbBlokData & {
  my_contribution?: Parameters<typeof renderCaseStudyRichText>[0]
  team_contribution?: Parameters<typeof renderCaseStudyRichText>[0]
}

export default function RoleClarity({ blok }: { blok: RoleClarityBlok }) {
  return (
    <Reveal className="w-full">
      <div
        {...storyblokEditable(blok)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
      >
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wide">
            My contribution
          </p>
          {renderCaseStudyRichText(blok.my_contribution)}
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wide">
            Team contribution
          </p>
          {renderCaseStudyRichText(blok.team_contribution)}
        </div>
      </div>
    </Reveal>
  )
}
