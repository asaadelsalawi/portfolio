import Header from '../components/Header'
import ContactBar from '../components/ContactBar'
import CaseBanner from '../components/CaseBanner'
import MediaBlock from '../components/MediaBlock'
import LogoStrip from '../components/LogoStrip'
import GridSplit from '../components/GridSplit'
import FullBleed from '../components/FullBleed'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col flex-1">
        <Header />
        <main className="flex-1 flex flex-col gap-20 md:gap-32 px-6 md:px-[144px] mt-16 md:mt-[120px] mb-16 md:mb-[120px] w-full">
          {/* Hero */}
          <section className="flex flex-col gap-5">
            <Reveal>
              <p className="text-3xl md:text-[32px] font-semibold text-black">
                As a design leader, I shape the product direction and build
                the teams that ship delight.{' '}
                <span className="text-[var(--color-text-secondary)]">
                  One and a half decades, across recruitment tech, mobility,
                  fintech, and payroll.
                </span>
              </p>
            </Reveal>
            <Reveal>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-4 rounded-full bg-black text-white font-semibold w-fit"
              >
                Get in touch →
              </Link>
            </Reveal>
          </section>

          {/* Selected work — full-bleed case study banner */}
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

          {/* How I run design */}
          <section className="flex flex-col gap-10">
            <GridSplit
              label={
                <p className="text-3xl md:text-[32px] font-semibold text-black">
                  How I run design
                </p>
              }
            >
              <p className="text-xl font-semibold text-black">
                Judgment that doesn't wait to be asked, holds its ground,
                grows people, and wins arguments with evidence, not rank.
              </p>
              <Link
                to="/leadership"
                className="text-base font-medium text-black hover:underline w-fit"
              >
                See the full philosophy →
              </Link>
            </GridSplit>
            <Reveal>
              <MediaBlock />
            </Reveal>
          </section>

          {/* Experience */}
          <section id="experience" className="flex flex-col gap-10">
            <GridSplit
              label={
                <p className="text-3xl md:text-[32px] font-semibold text-black">
                  Where I grew my experience
                </p>
              }
            >
              <p className="text-xl font-semibold text-black">
                Fourteen years in design, five leading teams, from early
                stage startups to enterprise players
              </p>
              <LogoStrip />
              <Link
                to="/experience"
                className="text-base font-medium text-black hover:underline w-fit"
              >
                See the full experience →
              </Link>
            </GridSplit>
            <Reveal>
              <MediaBlock />
            </Reveal>
          </section>
        </main>
        <Reveal>
          <ContactBar />
        </Reveal>
      </div>
    </div>
  )
}
