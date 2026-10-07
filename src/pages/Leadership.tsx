import MediaBlock from '../components/MediaBlock'
import PageMain from '../components/PageMain'
import PageHeading from '../components/PageHeading'
import TextSection from '../components/TextSection'
import Reveal from '../components/Reveal'
import { P } from '../components/Text'

const pillars = [
  {
    title: 'Hold the bar',
    body: [
      "My read on quality isn't a gut feeling. It's tested constantly against real work and against other senior people who've seen as much of it as I have. When I sense a problem early, I've learned not to wait for more proof, waiting has cost me more than acting ever has.",
      'Some lines don\'t move under pressure. I cut scope before I cut quality; a small thing done well beats a big thing built on shaky ground. I don\'t accept "keeping people busy" as a reason to build something nobody needs. And when the business and one person\'s comfort genuinely conflict, the business wins. I try to stay human about it, but I won\'t pretend the line isn\'t there.',
    ],
    withImage: false,
  },
  {
    title: 'Grow people',
    body: [
      "I bring people in close at first, then loosen my grip as trust is earned, pointing at what's missing rather than handing over the answer, keeping enough pressure that comfort never turns into coasting. I've grown three designers into lead roles this way.",
      "The same honesty carries into 1:1s. People bring me what's actually on their mind, and I answer without sugarcoating, including my own doubts, not just theirs. I've found people calm down not because I sound confident, but because I give them something real to hold onto.",
    ],
    withImage: true,
  },
  {
    title: 'Work beyond my team',
    body: [
      "With senior stakeholders outside my own line, I lead with evidence over hierarchy, bringing data and reasoning to the table before asking for buy-in, regardless of rank. That same instinct drives me to fix things nobody's asked me to fix: spotting a broken way of working early, building the case for change myself, and proposing it before waiting for permission.",
      "It shapes how I hire, too. A polished portfolio can hide a lot, so I push past it and dig into the reasoning behind the craft and product decisions. That's usually where a great designer separates from a good one.",
    ],
    withImage: true,
  },
  {
    title: 'Use AI',
    body: [
      "AI is already part of how my team works, from surfacing evidence with confidence scores attached, to generating supporting visuals and interactions in minutes. I want designers owning nearly all of the frontend build themselves. The one thing AI doesn't replace is judgment: deciding which idea is actually right for the user still takes a person.",
    ],
    withImage: true,
  },
]

export default function Leadership() {
  return (
    <PageMain>
      <PageHeading
        title="How I Lead Design"
        subtitle="Leadership isn't about having more authority. It's about being trusted with judgment, and being willing to use it before you have full certainty."
      />

      <section className="flex flex-col gap-20">
        {pillars.map((pillar) => (
          <TextSection
            key={pillar.title}
            heading={pillar.title}
            visuals={
              pillar.withImage && (
                <Reveal>
                  <MediaBlock />
                </Reveal>
              )
            }
          >
            {pillar.body.map((paragraph, i) => (
              <P key={i}>{paragraph}</P>
            ))}
          </TextSection>
        ))}
      </section>
    </PageMain>
  )
}
