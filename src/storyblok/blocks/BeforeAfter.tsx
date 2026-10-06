import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import BeforeAfterSlider from '../../components/BeforeAfterSlider'

type BeforeAfterBlok = SbBlokData & {
  before_src?: string
  before_alt?: string
  after_src?: string
  after_alt?: string
  aspect_ratio?: string // width / height, e.g. "2880/1600"
}

function parseRatio(value?: string) {
  const [w, h] = (value || '2880/1600').split('/').map(Number)
  return w && h ? w / h : 2880 / 1600
}

// 1152px frame with 74px padding (74/1152 of the width, so it scales down on
// small screens), light blue background.
export default function BeforeAfter({ blok }: { blok: BeforeAfterBlok }) {
  if (!blok.before_src || !blok.after_src) return null
  return (
    <div {...storyblokEditable(blok)} className="@container w-full">
      <div className="bg-[var(--color-blue-light)] rounded-[var(--radius-l4)] p-[6.4236cqw]">
        <BeforeAfterSlider
          showLabels={false}
          aspectRatio={parseRatio(blok.aspect_ratio)}
          before={{ src: blok.before_src, alt: blok.before_alt || 'Before' }}
          after={{ src: blok.after_src, alt: blok.after_alt || 'After' }}
        />
      </div>
    </div>
  )
}
