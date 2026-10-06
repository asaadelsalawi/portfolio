import type { ReactNode } from 'react'

/**
 * The one container used for every "visual on a colored field": slider, video,
 * numbers. Keeps color, padding and radius identical everywhere.
 *
 * - tone: a color from the styles page. Static class names, so the build keeps them.
 * - padding: "media" = 74px on all sides, "stats" = 74px sides and 110px top/bottom,
 *   both measured at the 1152px content width and scaled with the width.
 * - radius: tokens from the styles page.
 */
export type FrameTone =
  | 'blue-light'
  | 'blue'
  | 'green-light'
  | 'purple-light'
  | 'lime-light'
  | 'coral-light'

export const FRAME_TONES: Record<FrameTone, string> = {
  'blue-light': 'bg-[var(--color-blue-light)]',
  blue: 'bg-[var(--color-blue)]',
  'green-light': 'bg-[var(--color-green-light)]',
  'purple-light': 'bg-[var(--color-purple-light)]',
  'lime-light': 'bg-[var(--color-lime-light)]',
  'coral-light': 'bg-[var(--color-coral-light)]',
}

const PADDING = {
  media: 'p-[6.4236cqw]',
  stats: 'px-[6.4236cqw] py-[9.5486cqw]',
}

const RADIUS = {
  l: 'rounded-[var(--radius-l)]',
  l2: 'rounded-[var(--radius-l2)]',
  l4: 'rounded-[var(--radius-l4)]',
  xl: 'rounded-[var(--radius-xl)]',
}

export function toneOf(value: string | undefined): FrameTone {
  return value && value in FRAME_TONES ? (value as FrameTone) : 'blue-light'
}

export default function Frame({
  tone = 'blue-light',
  padding = 'media',
  radius = 'l4',
  className = '',
  children,
}: {
  tone?: FrameTone
  padding?: keyof typeof PADDING
  radius?: keyof typeof RADIUS
  className?: string
  children: ReactNode
}) {
  return (
    <div className="@container w-full">
      <div className={`${FRAME_TONES[tone]} ${PADDING[padding]} ${RADIUS[radius]} ${className}`}>
        {children}
      </div>
    </div>
  )
}
