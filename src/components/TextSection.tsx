import type { ReactNode } from 'react'
import GridSplit from './GridSplit'
import { DISPLAY } from './Text'

/**
 * The one text section: label on the left, paragraphs on the right, optional
 * visuals 40px below. Used for case study sections, leadership pillars,
 * experience stations, imprint, the contact form, home teasers.
 *
 * heading: plain text label. size "lg" is the 32px label used on the home page.
 * label:   custom label (e.g. logo + title) instead of heading.
 */
export default function TextSection({
  heading,
  label,
  size = 'md',
  id,
  visuals,
  children,
}: {
  heading?: ReactNode
  label?: ReactNode
  size?: 'md' | 'lg'
  id?: string
  visuals?: ReactNode
  children: ReactNode
}) {
  const resolvedLabel = label ?? (!heading ? <span /> : (
    <p className={size === 'lg' ? `${DISPLAY} text-black` : 'text-2xl font-semibold text-black'}>
      {heading}
    </p>
  ))
  return (
    <section id={id} className="flex flex-col gap-10 w-full">
      <GridSplit label={resolvedLabel}>{children}</GridSplit>
      {visuals}
    </section>
  )
}
