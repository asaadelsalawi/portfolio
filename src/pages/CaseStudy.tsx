import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  useStoryblokState,
  StoryblokComponent,
  getStoryblokApi,
  type ISbStoryData,
} from '@storyblok/react'
import PageMain from '../components/PageMain'
import { CaseStudyTitleContext } from '../storyblok/CaseStudyTitleContext'

type CaseStudyContent = {
  title?: string
  body?: Array<{ _uid: string; component: string }>
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const storySlug = `case-studies/${slug || 'resilience-by-design'}`

  const [story, setStory] = useState<ISbStoryData<CaseStudyContent> | null>(null)
  const [status, setStatus] = useState<'loading' | 'error' | 'ready'>('loading')

  useEffect(() => {
    let cancelled = false
    setStatus('loading')

    getStoryblokApi()
      .get(`cdn/stories/${storySlug}`, {
        version: import.meta.env.DEV ? 'draft' : 'published',
      })
      .then(({ data }) => {
        if (cancelled) return
        setStory(data.story)
        setStatus('ready')
      })
      .catch(() => {
        if (cancelled) return
        setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [storySlug])

  // Enables live, click-to-edit updates when this page is open inside the
  // Storyblok visual editor / preview iframe. No-op outside of it.
  const liveStory = useStoryblokState(story)

  if (status === 'loading') {
    return (
      <div className="flex-1 flex items-center justify-center text-[var(--color-text-tertiary)]">
        Loading case study…
      </div>
    )
  }

  if (status === 'error' || !liveStory) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center px-6">
        <p className="text-xl font-semibold text-black">Case study not found</p>
        <p className="text-[var(--color-text-tertiary)]">
          Couldn't load "{storySlug}" from Storyblok. Check the slug or the
          space's API token.
        </p>
      </div>
    )
  }

  const { title, body } = liveStory.content

  return (
    <PageMain>
      <CaseStudyTitleContext.Provider value={title}>
        {(body ?? []).map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </CaseStudyTitleContext.Provider>
    </PageMain>
  )
}
