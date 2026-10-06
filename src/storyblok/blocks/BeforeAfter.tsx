import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import BeforeAfterSlider from '../../components/BeforeAfterSlider'
import Frame, { toneOf } from '../../components/Frame'

type BeforeAfterBlok = SbBlokData & {
  before_src?: string
  before_alt?: string
  after_src?: string
  after_alt?: string
  aspect_ratio?: string // width / height, e.g. "2880/1600"
  tone?: string
}

function parseRatio(value?: string) {
  const [w, h] = (value || '2880/1600').split('/').map(Number)
  return w && h ? w / h : 2880 / 1600
}

// Shared Frame: 74px padding at 1152px (scaled with the width), colour from the CMS.
export default function BeforeAfter({ blok }: { blok: BeforeAfterBlok }) {
  if (!blok.before_src || !blok.after_src) return null
  return (
    <div {...storyblokEditable(blok)} className="w-full">
      <Frame tone={toneOf(blok.tone)}>
        <BeforeAfterSlider
          showLabels={false}
          aspectRatio={parseRatio(blok.aspect_ratio)}
          before={{ src: blok.before_src, alt: blok.before_alt || 'Before' }}
          after={{ src: blok.after_src, alt: blok.after_alt || 'After' }}
        />
      </Frame>
    </div>
  )
}
