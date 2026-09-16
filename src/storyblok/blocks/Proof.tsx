import { storyblokEditable, type SbBlokData } from '@storyblok/react'
import Reveal from '../../components/Reveal'

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
      <a
        {...storyblokEditable(blok)}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center px-5 py-4 rounded-full bg-black text-white font-semibold w-fit hover:bg-black/80 transition-colors"
      >
        {blok.label || 'View the prototype'} →
      </a>
    </Reveal>
  )
}
