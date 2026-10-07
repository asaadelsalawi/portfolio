import HeroFrame from './HeroFrame'
import Button from './Button'
import type { FrameTone } from './Frame'
import { BODY } from './Text'

type Props = {
  to: string
  title: string
  description: string
  image?: string
  tone?: FrameTone
}

/**
 * Case study teaser on the home page: the case study's hero frame with text on
 * top. On a phone the frame grows with its text (a fixed 2:1 box cut the title off).
 */
export default function CaseBanner({ to, title, description, image, tone }: Props) {
  return (
    <HeroFrame
      tone={tone}
      image={image}
      className="min-h-[400px] md:min-h-0 md:aspect-[1392/696] flex items-end p-6 md:p-[120px]"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0) 35%, rgba(255,255,255,0.65) 100%)',
        }}
      />
      <div className="relative flex flex-col gap-5 max-w-[564px]">
        <p className="text-3xl md:text-[32px] font-semibold text-black">{title}</p>
        <p className={`${BODY} text-black`}>{description}</p>
        <Button to={to}>Read the case study →</Button>
      </div>
    </HeroFrame>
  )
}
