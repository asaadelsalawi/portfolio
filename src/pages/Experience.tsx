import Header from '../components/Header'
import ContactBar from '../components/ContactBar'
import GridSplit from '../components/GridSplit'
import Reveal from '../components/Reveal'

type YM = { y: number; m: number } // m: 1-12

type Role = {
  logo?: string
  company: string
  title: string
  start?: YM
  end?: YM | 'today'
  period?: string // used instead of start/end when only years are known
  location?: string
  leadIn?: string
  paragraphs: string[]
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const fmt = ({ y, m }: YM) => `${MONTHS[m - 1]} ${y}`

function duration(totalMonths: number) {
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const parts: string[] = []
  if (years) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`)
  if (months) parts.push(`${months} ${months === 1 ? 'month' : 'months'}`)
  return parts.join(' ')
}

function periodLabel(role: Role) {
  if (role.period) return role.period
  const start = role.start!
  const now = new Date()
  const end: YM =
    role.end === 'today' || !role.end
      ? { y: now.getFullYear(), m: now.getMonth() + 1 }
      : role.end
  const months = (end.y - start.y) * 12 + (end.m - start.m)
  const endText = role.end === 'today' ? 'today' : fmt(end)
  return `${fmt(start)} to ${endText} (${duration(months)})`
}

const roles: Role[] = [
  {
    logo: '/logos/stepstone.svg',
    company: 'StepStone',
    title: 'Product Design Manager',
    start: { y: 2023, m: 9 },
    end: 'today',
    location: 'Munich, Germany',
    paragraphs: [
      'With my team, I set the product strategy for Recruit and paved the way for it to become a product suite. 5,200 customers now use it every month. I led up to nine designers and developed two seniors into leads.',
    ],
  },
  {
    logo: '/logos/deel.svg',
    company: 'Deel',
    title: 'Lead Product Designer & Manager',
    start: { y: 2022, m: 11 },
    end: { y: 2023, m: 8 },
    location: 'Remote',
    paragraphs: [
      "I hired and led up to seven designers in Global Payroll and set the group's design direction.",
    ],
  },
  {
    logo: '/logos/cazoo.svg',
    company: 'Cazoo',
    title: 'Product Design Manager',
    start: { y: 2021, m: 8 },
    end: { y: 2022, m: 6 },
    location: 'Munich, Germany',
    paragraphs: [
      'I led a team that grew from three to five designers, plus a researcher. I set the customer vision for car subscriptions and aligned product and engineering leads across 50-plus people in three locations.',
    ],
  },
  {
    logo: '/logos/autoscout24.svg',
    company: 'AutoScout24',
    title: 'Senior Product Designer',
    start: { y: 2018, m: 6 },
    end: { y: 2021, m: 6 },
    location: 'Munich, Germany',
    paragraphs: [
      'I rolled out an online car sales flow across 2 million European listings and lifted dealer lead-to-sale conversion by 200 percent.',
    ],
  },
  {
    logo: '/logos/bosch.svg',
    company: 'Bosch Security Systems',
    title: 'Lead User Experience Designer',
    start: { y: 2015, m: 11 },
    end: { y: 2018, m: 5 },
    location: 'Munich, Germany',
    paragraphs: [
      'I took Endeavour from concept to a working MVP for alpha customers.',
    ],
  },
  {
    company: 'Skoobe and earlier',
    title: 'UX & Interaction Design',
    period: '2007 to 2015 (8 years)',
    location: 'Munich, Germany',
    paragraphs: [
      'At Skoobe I rolled out a new brand and checkout funnel and lifted conversion by 19 percent. Before that, I worked freelance and at agencies in fintech, health and automotive.',
    ],
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col flex-1">
        <Header />
        <main className="flex-1 flex flex-col gap-20 md:gap-32 px-6 md:px-[144px] mt-16 md:mt-[120px] mb-16 md:mb-[120px] w-full">
          <section className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-2 md:gap-3">
              <Reveal>
                <h1 className="text-3xl md:text-[32px] font-semibold text-black">
                  From designing products to designing organisations.
                </h1>
              </Reveal>
              <Reveal>
                <p className="text-3xl md:text-[32px] font-semibold text-[var(--color-text-secondary)]">
                  I became design manager at Cazoo, Deel and StepStone. B2B is my specialty.
                </p>
              </Reveal>
            </div>
          </section>

          <section className="flex flex-col gap-20">
            {roles.map((role, i) => (
              <GridSplit
                key={i}
                label={
                  <div className="flex flex-col gap-3">
                    {role.logo ? (
                      <img
                        src={role.logo}
                        alt={role.company}
                        className="h-12 md:h-[60px] w-auto object-contain object-left"
                      />
                    ) : (
                      <p className="h-12 md:h-[60px] flex items-center text-xl font-semibold text-black">
                        {role.company}
                      </p>
                    )}
                    <div className="flex flex-col gap-1">
                      <p className="text-2xl font-semibold text-black">
                        {role.title}
                      </p>
                      <p className="text-base text-[var(--color-text-tertiary)]">
                        {periodLabel(role)}
                        {role.location ? ` • ${role.location}` : ''}
                      </p>
                    </div>
                  </div>
                }
              >
                {role.leadIn && (
                  <p className="text-xl font-semibold leading-7 text-black">
                    {role.leadIn}
                  </p>
                )}
                {role.paragraphs.map((text, j) => (
                  <p key={j} className="text-xl font-medium leading-7 text-black">
                    {text}
                  </p>
                ))}
              </GridSplit>
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
