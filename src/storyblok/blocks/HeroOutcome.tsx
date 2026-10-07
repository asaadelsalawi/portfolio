import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import PageHeading, { MetaRow } from '../../components/PageHeading'
import { P } from '../../components/Text'
import { useCaseStudyTitle } from '../CaseStudyTitleContext'

type HeroOutcomeBlok = SbBlokData & {
  headline?: string
  outcome_statement?: string
  role?: string
  timeframe?: string
  company?: string
  team?: string
}

export default function HeroOutcome({ blok }: { blok: HeroOutcomeBlok }) {
  const title = useCaseStudyTitle()
  return (
    <div {...storyblokEditable(blok)} className="w-full">
      <PageHeading title={title} subtitle={blok.headline}>
        <div className="flex flex-col gap-6">
          {blok.outcome_statement && <P>{blok.outcome_statement}</P>}
          <MetaRow
            items={[
              { label: 'Company', value: blok.company },
              { label: 'Role', value: blok.role },
              { label: 'Period', value: blok.timeframe },
              { label: 'Team', value: blok.team },
            ]}
          />
        </div>
      </PageHeading>
    </div>
  )
}
