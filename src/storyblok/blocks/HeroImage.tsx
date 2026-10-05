import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import FullBleed from '../../components/FullBleed'

type HeroImageBlok = SbBlokData & { image_src?: string; alt?: string }

// Full-bleed product shot below the title block. Until the image is provided,
// the light-lime frame from the design is shown empty.
export default function HeroImage({ blok }: { blok: HeroImageBlok }) {
  return (
    <FullBleed>
      <div
        {...storyblokEditable(blok)}
        className="w-full aspect-[1392/696] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-lime-light)]"
      >
        {blok.image_src && (
          <img
            src={blok.image_src}
            alt={blok.alt || ''}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </FullBleed>
  )
}
