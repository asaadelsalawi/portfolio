import type { ReactNode } from 'react'
import { FRAME_TONES, type FrameTone } from './Frame'

/**
 * The big 1392 x 696 field with a product shot: hero of a case study and banner
 * on the home page are the same thing, so they share this. Same color, radius
 * and image placement; the banner just puts text on top.
 */
export default function HeroFrame({
  tone = 'blue-light',
  image,
  alt = '',
  className = '',
  children,
}: {
  tone?: FrameTone
  image?: string
  alt?: string
  className?: string
  children?: ReactNode
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[var(--radius-xl)] ${FRAME_TONES[tone]} ${className}`}
    >
      {image && (
        <img src={image} alt={alt} className="absolute inset-0 w-full h-full object-cover object-top" />
      )}
      {children}
    </div>
  )
}
