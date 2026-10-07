import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { DISPLAY } from './Text'

/**
 * Title (black) and subtitle (secondary) set as one text block, no gap between
 * them. Optional children (e.g. a meta row) sit 40px below.
 */
export default function PageHeading({
  title,
  subtitle,
  children,
}: {
  title: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="flex flex-col gap-10 w-full">
      <div className="flex flex-col">
        <Reveal>
          <h1 className={`${DISPLAY} text-black`}>{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal>
            <p className={`${DISPLAY} text-[var(--color-text-secondary)]`}>{subtitle}</p>
          </Reveal>
        )}
      </div>
      {children && <Reveal>{children}</Reveal>}
    </section>
  )
}

/** "Label: value" row under a heading. */
export function MetaRow({ items }: { items: { label: string; value?: string }[] }) {
  const shown = items.filter((i) => i.value)
  if (shown.length === 0) return null
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-1 text-base font-medium text-[var(--color-text-tertiary)]">
      {shown.map((i) => (
        <p key={i.label}>
          {i.label}: <span className="font-semibold text-black">{i.value}</span>
        </p>
      ))}
    </div>
  )
}
