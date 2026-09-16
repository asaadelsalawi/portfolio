type Props = {
  fullBleed?: boolean
}

export default function MediaBlock({ fullBleed }: Props) {
  return (
    <div
      className={
        'aspect-[1152/576] w-full border border-[var(--color-border-default)] rounded-[var(--radius-l4)] flex flex-col items-start justify-end px-6 md:px-[120px] py-6 md:py-12' +
        (fullBleed ? ' bg-[var(--color-bg-secondary)]' : '')
      }
    />
  )
}
