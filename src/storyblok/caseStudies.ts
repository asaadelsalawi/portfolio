import { getStoryblokApi } from '@storyblok/react'

export type CaseStudyTeaser = {
  slug: string
  title: string
  description: string
  image: string
}

type Block = { component: string; headline?: string }

/**
 * Teasers for the home page, read from the Case Study stories themselves:
 * title = story title, description = subheadline of the hero block,
 * image = "Teaser-Bild" field. A story without a teaser image gets no banner.
 */
export async function fetchCaseStudyTeasers(): Promise<CaseStudyTeaser[]> {
  const { data } = await getStoryblokApi().get('cdn/stories', {
    starts_with: 'case-studies/',
    content_type: 'case_study',
    sort_by: 'first_published_at:desc',
    version: import.meta.env.DEV ? 'draft' : 'published',
    per_page: 25,
  })

  return (data.stories as Array<{ slug: string; name: string; content: Record<string, unknown> }>)
    .filter((s) => typeof s.content?.teaser_image === 'string' && s.content.teaser_image)
    .map((s) => {
      const body = (s.content.body as Block[] | undefined) ?? []
      const hero = body.find((b) => b.component === 'hero_outcome')
      return {
        slug: s.slug,
        title: (s.content.title as string) || s.name,
        description: hero?.headline ?? '',
        image: s.content.teaser_image as string,
      }
    })
}
