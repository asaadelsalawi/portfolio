import { storyblokEditable, type SbBlokData } from '@storyblok/react'

type VideoFrameBlok = SbBlokData & {
  video_src?: string
  poster_src?: string
  aspect_ratio?: string // width / height, e.g. "1280/800"
  title?: string
}

function parseRatio(value?: string) {
  const [w, h] = (value || '1280/800').split('/').map(Number)
  return w && h ? w / h : 1280 / 800
}

// Same frame as the before/after slider: light blue, 74px padding at 1152px
// (scaled with the width), the video inside with a hairline border.
export default function VideoFrame({ blok }: { blok: VideoFrameBlok }) {
  if (!blok.video_src) return null
  return (
    <div {...storyblokEditable(blok)} className="@container w-full">
      <div className="bg-[var(--color-blue-light)] rounded-[var(--radius-l4)] p-[6.4236cqw]">
        <video
          src={blok.video_src}
          poster={blok.poster_src || undefined}
          controls
          playsInline
          preload="metadata"
          aria-label={blok.title || 'Prototype video'}
          className="block w-full bg-white border border-[var(--color-border-default)] rounded-[var(--radius-l)]"
          style={{ aspectRatio: parseRatio(blok.aspect_ratio) }}
        />
      </div>
    </div>
  )
}
