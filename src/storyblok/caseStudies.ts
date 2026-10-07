import { getStoryblokApi } from '@storyblok/react'
import { toneOf, type FrameTone } from '../components/Frame'

export type CaseStudyTeaser = {
  slug: string
  title: string
  description: string
  image?: string
  tone: FrameTone
}

type Block = { component: string; headline?: string; image_src?: string; tone?: string }

/**
 * Teasers for the home page, read from the Case Study stories themselves, so the
 * banner can never drift from the case study:
 * - title       = story title
 * - description = subheadline of the hero block
 * - image, tone = the case study's hero image block ("Teaser-Bild" overrides the image)
 */
export async function fetchCaseStudyTeasers(): Promise<CaseStudyTeaser[]> {
  const { data } = await getStoryblokApi().get('cdn/stories', {
    starts_with: 'case-studies/',
    content_type: 'case_study',
    sort_by: 'first_published_at:desc',
    version: import.meta.env.DEV ? 'draft' : 'published',
    per_page: 25,
  })

  return (data.stories as Array<{ slug: string; name: string; content: Record<string, unknown> }>).map(
    (s) => {
      const body = (s.content.body as Block[] | undefined) ?? []
      const hero = body.find((b) => b.component === 'hero_outcome')
      const heroImage = body.find((b) => b.component === 'hero_image')
      const override = typeof s.content.teaser_image === 'string' ? s.content.teaser_image : ''
      return {
        slug: s.slug,
        title: (s.content.title as string) || s.name,
        description: hero?.headline ?? '',
        image: override || heroImage?.image_src || undefined,
        tone: toneOf(heroImage?.tone),
      }
    },
  )
}
