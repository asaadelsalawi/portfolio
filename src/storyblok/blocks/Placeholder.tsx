import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import MediaBlock from '../../components/MediaBlock'

type PlaceholderBlok = SbBlokData & { label?: string }

// Stand-in for content that is still to come (video, numbers).
export default function Placeholder({ blok }: { blok: PlaceholderBlok }) {
  return (
    <div {...storyblokEditable(blok)} className="w-full">
      <MediaBlock label={blok.label} fullBleed />
    </div>
  )
}
