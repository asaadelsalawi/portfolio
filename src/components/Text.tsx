import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/** Display text: page titles, thesis lines. Pair black + secondary. */
export const DISPLAY = 'text-3xl md:text-[32px] font-semibold'

/**
 * Body text size. Mobile 14px / 20px, from md up 20px / 28px.
 * One place: change it here and every paragraph, lead and caption follows.
 */
export const BODY = 'text-sm leading-5 md:text-xl md:leading-7'

/** Body paragraph used in every text section. */
export function P({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`${BODY} font-medium text-black ${className}`}>{children}</p>
}

/** Bold lead-in line above a section's body or links. */
export function Lead({ children }: { children: ReactNode }) {
  return <p className={`${BODY} font-semibold text-black`}>{children}</p>
}

/** "See the full ... →" style link. */
export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="text-base font-medium text-black hover:underline w-fit">
      {children}
    </Link>
  )
}
