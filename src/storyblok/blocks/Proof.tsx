import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import Reveal from '../../components/Reveal'
import Button from '../../components/Button'

type ProofBlok = SbBlokData & {
  label?: string
  embed_type?: 'prototype' | 'figma' | 'video'
  link?: { url?: string; cached_url?: string }
}

export default function Proof({ blok }: { blok: ProofBlok }) {
  const href = blok.link?.url || blok.link?.cached_url
  if (!href) return null

  return (
    <Reveal className="w-full">
      <div {...storyblokEditable(blok)}>
        <Button href={href}>{blok.label || 'View the prototype'} →</Button>
      </div>
    </Reveal>
  )
}
