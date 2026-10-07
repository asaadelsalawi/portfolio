import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

const STYLE =
  'inline-flex items-center justify-center px-5 py-4 rounded-full bg-black text-white font-semibold w-fit hover:bg-black/80 transition-colors'

type Props = {
  children: ReactNode
  /** Internal route. */
  to?: string
  /** External link. */
  href?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

/** The one pill button: internal link, external link or form button. */
export default function Button({ children, to, href, ...rest }: Props) {
  if (to) {
    return (
      <Link to={to} className={STYLE}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={STYLE}>
        {children}
      </a>
    )
  }
  return (
    <button className={STYLE} {...rest}>
      {children}
    </button>
  )
}
