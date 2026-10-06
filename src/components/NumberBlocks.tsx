import TextReveal from './TextReveal'

export type NumberItem = { value: string; caption: string }

// On the light-blue frame the default gray start color would almost vanish,
// so the words start as a darker tint and fill to black.
const START = 'rgba(0, 0, 0, 0.28)'

/**
 * Three-up number block. Frame: light blue, 74px left/right and 110px top/bottom
 * at 1152px wide (scaled with the width). Value and caption both use the
 * scroll-scrubbed text reveal.
 */
export default function NumberBlocks({ items }: { items: NumberItem[] }) {
  return (
    <div className="@container w-full">
      <div className="bg-[var(--color-blue-light)] rounded-[var(--radius-l2)] px-[6.4236cqw] py-[9.5486cqw] flex flex-col md:flex-row gap-10 md:gap-6">
        {items.map((item) => (
          <div key={item.value} className="flex-1 min-w-0 flex flex-col gap-4">
            <TextReveal
              text={item.value}
              startColor={START}
              className="text-3xl md:text-[40px] font-semibold leading-normal"
            />
            <TextReveal
              text={item.caption}
              startColor={START}
              className="text-xl font-medium leading-7"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
