import { useEffect, useState } from 'react'
import PageMain from '../components/PageMain'
import CaseBanner from '../components/CaseBanner'
import MediaBlock from '../components/MediaBlock'
import LogoStrip from '../components/LogoStrip'
import TextSection from '../components/TextSection'
import FullBleed from '../components/FullBleed'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { DISPLAY, Lead, TextLink } from '../components/Text'
import { fetchCaseStudyTeasers, type CaseStudyTeaser } from '../storyblok/caseStudies'

export default function Home() {
  // null while loading, then the list (possibly empty).
  const [teasers, setTeasers] = useState<CaseStudyTeaser[] | null>(null)

  useEffect(() => {
    fetchCaseStudyTeasers()
      .then(setTeasers)
      .catch(() => setTeasers([]))
  }, [])

  return (
    <PageMain>
      {/* Hero */}
      <section className="flex flex-col gap-5">
        <Reveal>
          <p className={`${DISPLAY} text-black`}>
            As a design leader, I shape the product direction and build the
            teams that ship delight.{' '}
            <span className="text-[var(--color-text-secondary)]">
              One and a half decades, across recruitment tech, mobility,
              fintech, and payroll.
            </span>
          </p>
        </Reveal>
        <Reveal>
          <Button to="/contact">Get in touch →</Button>
        </Reveal>
      </section>

      {/* Selected work: one full-bleed banner per case study, read from the CMS */}
      {teasers === null || teasers.length > 0 ? (
        <section id="work" className="flex flex-col gap-10">
          {teasers === null ? (
            // Holds the space while loading, so nothing jumps when the banner arrives.
            <FullBleed>
              <div className="w-full min-h-[400px] md:min-h-0 md:aspect-[1392/696] rounded-[var(--radius-xl)] bg-[var(--color-bg-secondary)]" />
            </FullBleed>
          ) : (
            teasers.map((teaser) => (
              <Reveal key={teaser.slug}>
                <FullBleed>
                  <CaseBanner
                    to={`/case-studies/${teaser.slug}`}
                    title={teaser.title}
                    image={teaser.image}
                    tone={teaser.tone}
                    description={teaser.description}
                  />
                </FullBleed>
              </Reveal>
            ))
          )}
        </section>
      ) : null}

      <TextSection
        heading="How I run design"
        size="lg"
        visuals={
          <Reveal>
            <MediaBlock />
          </Reveal>
        }
      >
        <Lead>
          Judgment that doesn't wait to be asked, holds its ground, grows
          people, and wins arguments with evidence, not rank.
        </Lead>
        <TextLink to="/leadership">See the full philosophy →</TextLink>
      </TextSection>

      <TextSection
        id="experience"
        heading="Where I grew my experience"
        size="lg"
        visuals={
          <Reveal>
            <MediaBlock />
          </Reveal>
        }
      >
        <Lead>
          Fourteen years in design, five leading teams, from early stage
          startups to enterprise players
        </Lead>
        <LogoStrip />
        <TextLink to="/experience">See the full experience →</TextLink>
      </TextSection>
    </PageMain>
  )
}
