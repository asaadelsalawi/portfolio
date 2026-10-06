import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import NumberBlocks from '../../components/NumberBlocks'
import { toneOf } from '../../components/Frame'

type ItemBlok = SbBlokData & { value?: string; caption?: string }
type NumberBlocksBlok = SbBlokData & { items?: ItemBlok[]; tone?: string }

export default function NumberBlocksBlock({ blok }: { blok: NumberBlocksBlok }) {
  const items = (blok.items ?? [])
    .filter((i) => i.value)
    .map((i) => ({ value: i.value ?? '', caption: i.caption ?? '' }))
  if (items.length === 0) return null
  return (
    <div {...storyblokEditable(blok)} className="w-full">
      <NumberBlocks items={items} tone={toneOf(blok.tone)} />
    </div>
  )
}
