import Header from '../components/Header'
import ContactBar from '../components/ContactBar'
import MediaBlock from '../components/MediaBlock'
import GridSplit from '../components/GridSplit'
import Reveal from '../components/Reveal'

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
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col flex-1">
        <Header />
        <main className="flex-1 flex flex-col gap-20 md:gap-32 px-6 md:px-[144px] mt-16 md:mt-[120px] mb-16 md:mb-[120px] w-full">
          <section className="flex flex-col gap-2">
            <Reveal>
              <h1 className="text-3xl md:text-[32px] font-semibold text-black">
                How I Lead Design
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-3xl md:text-[32px] font-semibold text-[var(--color-text-secondary)]">
                Leadership isn't about having more authority. It's about
                being trusted with judgment, and being willing to use it
                before you have full certainty.
              </p>
            </Reveal>
          </section>

          <section className="flex flex-col gap-20">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col gap-10">
                <GridSplit
                  label={
                    <p className="text-2xl font-semibold text-black">
                      {pillar.title}
                    </p>
                  }
                >
                  {pillar.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-xl font-medium leading-7 text-black"
                    >
                      {paragraph}
                    </p>
                  ))}
                </GridSplit>
                {pillar.withImage && (
                  <Reveal>
                    <MediaBlock />
                  </Reveal>
                )}
              </div>
            ))}
          </section>
        </main>
        <Reveal>
          <ContactBar />
        </Reveal>
      </div>
    </div>
  )
}
