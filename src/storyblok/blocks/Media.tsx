import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import Reveal from '../../components/Reveal'
import MediaBlock from '../../components/MediaBlock'

type MediaBlok = SbBlokData & {
  asset?: { filename?: string; alt?: string }
  video_url?: string
  caption?: string
}

export default function Media({ blok }: { blok: MediaBlok }) {
  const imageUrl = blok.asset?.filename

  return (
    <Reveal className="w-full">
      <div {...storyblokEditable(blok)} className="flex flex-col gap-3 w-full">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={blok.asset?.alt || blok.caption || ''}
            className="aspect-[1152/576] w-full rounded-[var(--radius-l4)] object-cover"
          />
        ) : blok.video_url ? (
          <video
            src={blok.video_url}
            controls
            className="aspect-[1152/576] w-full rounded-[var(--radius-l4)] object-cover"
          />
        ) : (
          <MediaBlock fullBleed />
        )}
        {blok.caption && (
          <p className="text-sm text-[var(--color-text-tertiary)]">{blok.caption}</p>
        )}
      </div>
    </Reveal>
  )
}
