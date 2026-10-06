import TextReveal from './TextReveal'
import Frame, { type FrameTone } from './Frame'

export type NumberItem = { value: string; caption: string }

// On the light-blue frame the default gray start color would almost vanish,
// so the words start as a darker tint and fill to black.
const START = 'rgba(0, 0, 0, 0.28)'

/**
 * Three-up number block in the shared Frame (74px left/right, 110px top/bottom
 * at 1152px wide, scaled with the width). Value and caption both use the
 * scroll-scrubbed text reveal.
 */
export default function NumberBlocks({
  items,
  tone = 'blue-light',
}: {
  items: NumberItem[]
  tone?: FrameTone
}) {
  return (
    <Frame tone={tone} padding="stats" radius="l2" className="flex flex-col md:flex-row gap-10 md:gap-6">
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
    </Frame>
  )
}
