import Header from '../components/Header'
import ContactBar from '../components/ContactBar'
import GridSplit from '../components/GridSplit'
import Reveal from '../components/Reveal'

type Role = {
  logo: string
  company: string
  title: string
  meta: string
  description: string
}

const roles: Role[] = [
  {
    logo: '/logos/stepstone.svg',
    company: 'StepStone',
    title: 'Product Design Manager',
    meta: 'September 2023 – Present (3 yrs) • Munich, Germany',
    description:
      'Leading and coaching a team of three mid to senior UX designers and a researcher, helping them with personal development, and nurturing a culture of trust and safety.',
  },
  {
    logo: '/logos/deel.svg',
    company: 'Deel',
    title: 'Lead Product Designer & Manager',
    meta: 'November 2022 – August 2023 (9 mos) • Remote',
    description:
      "Hired and led up to 7 designers in Global Payroll, setting the group's design direction.",
  },
  {
    logo: '/logos/cazoo.svg',
    company: 'Cazoo',
    title: 'Design Team Lead',
    meta: 'August 2021 – June 2022 (10 mos) • Munich, Germany',
    description:
      'Set the customer vision for car subscriptions and aligned product and engineering leads across 50-plus people in three locations.',
  },
  {
    logo: '/logos/autoscout24.svg',
    company: 'AutoScout24',
    title: 'Senior Product Designer',
    meta: 'June 2018 – June 2021 (3 yrs) • Munich, Germany',
    description:
      'Rolled out an online car sales flow across 2 million European listings, lifting dealer lead-to-sale conversion by 200 percent.',
  },
  {
    logo: '/logos/bosch.svg',
    company: 'Bosch',
    title: 'Lead User Experience Designer',
    meta: 'November 2015 – May 2018 (2 yrs 6 mos) • Munich, Germany',
    description:
      'Took Endeavour from concept to a working MVP for alpha customers, redefining how large-site security management should work.',
  },
  {
    logo: '/logos/bosch.svg',
    company: 'Bosch',
    title: 'UX Designer',
    meta: 'August 2012 – October 2013 (1 yr 2 mos) • Munich, Germany',
    description:
      'Rolled out a new brand and checkout funnel, lifting conversion by 19 percent.',
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col flex-1">
        <Header />
        <main className="flex-1 flex flex-col gap-20 md:gap-32 px-6 md:px-[144px] mt-16 md:mt-[120px] mb-16 md:mb-[120px] w-full">
          <section className="flex flex-col gap-2">
            <Reveal>
              <h1 className="text-3xl md:text-[32px] font-semibold text-black">
                From designing products to designing organisations.
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-3xl md:text-[32px] font-semibold text-[var(--color-text-secondary)]">
                I became design manager at Cazoo, Deel and StepStone.
              </p>
            </Reveal>
          </section>

          <section className="flex flex-col gap-20">
            {roles.map((role, i) => (
              <GridSplit
                key={i}
                label={
                  <div className="flex flex-col gap-6">
                    <img
                      src={role.logo}
                      alt={role.company}
                      className="h-8 md:h-10 w-auto object-contain object-left"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-2xl font-semibold text-black">
                        {role.title}
                      </p>
                      <p className="text-base text-[var(--color-text-tertiary)]">
                        {role.meta}
                      </p>
                    </div>
                  </div>
                }
              >
                <p className="text-xl font-medium leading-7 text-black">
                  {role.description}
                </p>
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
