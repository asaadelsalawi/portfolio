import Header from '../components/Header'
import ContactBar from '../components/ContactBar'

function Swatch({ name, varName }: { name: string; varName: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full aspect-square rounded-[var(--radius-l2)] border border-[var(--color-border-default)]"
        style={{ backgroundColor: `var(${varName})` }}
      />
      <p className="text-sm font-medium text-black">{name}</p>
      <p className="text-sm text-[var(--color-text-tertiary)]">{varName}</p>
    </div>
  )
}

function TypeRow({
  label,
  sample,
  spec,
  className,
}: {
  label: string
  sample: string
  spec: string
  className: string
}) {
  return (
    <div className="flex flex-col gap-3 py-6 border-b border-[var(--color-border-default)]">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-sm font-semibold text-black">{label}</p>
        <p className="text-sm text-[var(--color-text-tertiary)]">{spec}</p>
      </div>
      <p className={className}>{sample}</p>
    </div>
  )
}

export default function Styles() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col flex-1">
        <Header />
        <main className="flex-1 flex flex-col gap-20 md:gap-32 px-6 md:px-[144px] mt-16 md:mt-[120px] mb-16 md:mb-[120px] w-full">
          <section className="flex flex-col gap-4 w-full">
            <p className="text-sm font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">
              Internal — not linked in navigation
            </p>
            <h1 className="text-3xl md:text-[32px] font-semibold text-black">
              Style Reference
            </h1>
            <p className="text-xl font-medium leading-7 text-[var(--color-text-secondary)]">
              Live documentation of the tokens actually defined in{' '}
              <code className="text-base bg-[var(--color-bg-secondary)] px-1.5 py-0.5 rounded">
                index.css
              </code>{' '}
              and the type sizes actually used across the site's components.
            </p>
          </section>

          <section className="flex flex-col gap-8 w-full">
            <h2 className="text-2xl font-semibold text-black">Core colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <Swatch name="Ink (text)" varName="--color-ink" />
              <Swatch name="Text secondary" varName="--color-text-secondary" />
              <Swatch name="Text tertiary" varName="--color-text-tertiary" />
              <Swatch name="Background secondary" varName="--color-bg-secondary" />
              <Swatch name="Border default" varName="--color-border-default" />
            </div>
          </section>

          <section className="flex flex-col gap-8 w-full">
            <h2 className="text-2xl font-semibold text-black">
              Color library — 5 families × 3 steps
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
              {['lime', 'coral', 'green', 'blue', 'purple'].map((family) => (
                <div key={family} className="flex flex-col gap-6">
                  <Swatch name={`${family} light`} varName={`--color-${family}-light`} />
                  <Swatch name={family} varName={`--color-${family}`} />
                  <Swatch name={`${family} dark`} varName={`--color-${family}-dark`} />
                </div>
              ))}
            </div>
            <p className="text-sm text-[var(--color-text-tertiary)]">
              Accent = lime, accent-ink = lime-dark. Used on the closing "what
              I'd tell the next person" panel in case studies.
            </p>
          </section>

          <section className="flex flex-col gap-2 w-full">
            <h2 className="text-2xl font-semibold text-black mb-6">Typography</h2>
            <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
              Font: Plus Jakarta Sans. Sizes below are mobile → desktop where
              they differ.
            </p>
            <TypeRow
              label="Page title / thesis headline"
              spec="text-3xl → 32px, semibold"
              className="text-3xl md:text-[32px] font-semibold text-black"
              sample="Resilience by Design"
            />
            <TypeRow
              label="Pull quote"
              spec="text-2xl → 32px, semibold"
              className="font-semibold text-2xl md:text-[32px] leading-normal text-black"
              sample='"Losing your best people that way often means you did it right, not wrong."'
            />
            <TypeRow
              label="Body paragraph"
              spec="text-xl / 20px, medium, leading-7"
              className="text-xl font-medium leading-7 text-black"
              sample="You can't write 'good taste' into one. It gets passed on by example."
            />
            <TypeRow
              label="Meta / labels"
              spec="text-base / 16px"
              className="text-base text-[var(--color-text-tertiary)]"
              sample="Company: StepStone   Role: Design Manager"
            />
            <TypeRow
              label="Small print"
              spec="text-sm / 14px"
              className="text-sm text-[var(--color-text-tertiary)]"
              sample="Caption or footnote text"
            />
            <TypeRow
              label="Test-page display (experimental, /test only)"
              spec="text-4xl → 64px, semibold"
              className="text-4xl md:text-[64px] font-semibold leading-tight"
              sample="Leadership isn't about"
            />
          </section>

          <section className="flex flex-col gap-8 w-full">
            <h2 className="text-2xl font-semibold text-black">Radii</h2>
            <div className="flex flex-wrap gap-8">
              {[
                { name: 'l', varName: '--radius-l', px: '8px' },
                { name: 'l2', varName: '--radius-l2', px: '10px' },
                { name: 'l4', varName: '--radius-l4', px: '12px' },
              ].map((r) => (
                <div key={r.name} className="flex flex-col items-center gap-2">
                  <div
                    className="w-24 h-24 bg-[var(--color-bg-secondary)] border border-[var(--color-border-default)]"
                    style={{ borderRadius: `var(${r.varName})` }}
                  />
                  <p className="text-sm font-medium text-black">{r.name}</p>
                  <p className="text-sm text-[var(--color-text-tertiary)]">
                    {r.varName} — {r.px}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-4 w-full">
            <h2 className="text-2xl font-semibold text-black">Motion</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-black">
                  Reveal (scroll-in for content blocks)
                </p>
                <p className="text-sm text-[var(--color-text-tertiary)]">
                  Opacity 0→1 + translateY 14px→0, 0.5s, cubic-bezier(0.22,
                  1, 0.36, 1). Staggers up to 6× in 70ms steps when several
                  elements enter the viewport within 220ms of each other.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-black">
                  Page transition
                </p>
                <p className="text-sm text-[var(--color-text-tertiary)]">
                  Fade in 0.4s / fade out 0.2s, both cubic-bezier(0.22, 1,
                  0.36, 1), with an 8px vertical slide.
                </p>
              </div>
            </div>
          </section>
        </main>
        <ContactBar />
      </div>
    </div>
  )
}
