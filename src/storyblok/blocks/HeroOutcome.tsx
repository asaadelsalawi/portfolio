import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import Reveal from '../../components/Reveal'

type HeroOutcomeBlok = SbBlokData & {
  headline?: string
  outcome_statement?: string
  role?: string
  timeframe?: string
  company?: string
  team?: string
}

export default function HeroOutcome({ blok }: { blok: HeroOutcomeBlok }) {
  const meta = [
    { label: 'Company', value: blok.company },
    { label: 'Role', value: blok.role },
    { label: 'Period', value: blok.timeframe },
    { label: 'Team', value: blok.team },
  ].filter((m) => m.value)

  return (
    <div {...storyblokEditable(blok)} className="flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-2">
        {blok.headline && (
          <Reveal>
            <p className="text-3xl md:text-[32px] font-semibold text-[var(--color-text-secondary)]">
              {blok.headline}
            </p>
          </Reveal>
        )}
        {blok.outcome_statement && (
          <Reveal>
            <p className="text-xl font-medium text-black">
              {blok.outcome_statement}
            </p>
          </Reveal>
        )}
      </div>
      {meta.length > 0 && (
        <Reveal>
          <div className="flex flex-wrap gap-6 text-base text-[var(--color-text-tertiary)]">
            {meta.map((m) => (
              <p key={m.label}>
                {m.label}: <span className="text-black">{m.value}</span>
              </p>
            ))}
          </div>
        </Reveal>
      )}
    </div>
  )
}
