import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import FullBleed from '../../components/FullBleed'
import HeroFrame from '../../components/HeroFrame'
import { toneOf } from '../../components/Frame'

type HeroImageBlok = SbBlokData & { image_src?: string; alt?: string; tone?: string }

// Full-bleed product shot below the title block. Until the image is provided,
// the colored frame from the design is shown empty.
export default function HeroImage({ blok }: { blok: HeroImageBlok }) {
  return (
    <FullBleed>
      <div {...storyblokEditable(blok)}>
        <HeroFrame
          tone={toneOf(blok.tone)}
          image={blok.image_src}
          alt={blok.alt}
          className="aspect-[1392/696]"
        />
      </div>
    </FullBleed>
  )
}
