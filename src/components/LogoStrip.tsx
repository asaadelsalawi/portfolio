const companies = [
  { name: 'Bosch', file: 'bosch.svg' },
  { name: 'AutoScout24', file: 'autoscout24.svg' },
  { name: 'Cazoo', file: 'cazoo.svg' },
  { name: 'Deel', file: 'deel.svg' },
  { name: 'StepStone', file: 'stepstone.svg' },
]

export default function LogoStrip() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-8 w-full">
      {companies.map(({ name, file }) => (
        <img
          key={name}
          src={`/logos/${file}`}
          alt={name}
          className="h-6 md:h-7 w-auto object-contain grayscale opacity-70"
        />
      ))}
    </div>
  )
}
