import Reveal from './Reveal'

type Stat = {
  value: string
  label: string
}

export default function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      {stats.map((stat) => (
        <Reveal key={stat.label} className="flex-1">
          <div className="rounded-[var(--radius-l)] bg-[var(--color-bg-secondary)] p-6 flex flex-col gap-1">
            <p className="text-3xl font-semibold text-black">{stat.value}</p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {stat.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
