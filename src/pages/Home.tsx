import PageMain from '../components/PageMain'
import CaseBanner from '../components/CaseBanner'
import MediaBlock from '../components/MediaBlock'
import LogoStrip from '../components/LogoStrip'
import TextSection from '../components/TextSection'
import FullBleed from '../components/FullBleed'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { DISPLAY, Lead, TextLink } from '../components/Text'

export default function Home() {
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

      {/* Selected work: full-bleed case study banner */}
      <section id="work">
        <Reveal>
          <FullBleed>
            <CaseBanner
              to="/case-studies/resilience-by-design"
              title="Resilience by Design"
              image="https://www.figma.com/api/mcp/asset/579c5a2f-8ccf-4591-853b-cd71e8e8ef75.png"
              description='Every design team runs on a standard, a shared idea of what "good" means. Building mine was the easy part. Keeping it alive was the real job.'
            />
          </FullBleed>
        </Reveal>
      </section>

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
