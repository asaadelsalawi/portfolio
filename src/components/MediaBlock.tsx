type Props = {
  /** Text in the middle, for placeholders that stand in for content still to come. */
  label?: string
  fullBleed?: boolean
}

/** Empty frame at 1152:576, used wherever an image or video is still to come. */
export default function MediaBlock({ label, fullBleed }: Props) {
  return (
    <div
      className={
        'aspect-[1152/576] w-full border border-[var(--color-border-default)] rounded-[var(--radius-l4)] flex items-center justify-center px-6 md:px-[120px] py-6 md:py-12' +
        (fullBleed ? ' bg-[var(--color-bg-secondary)]' : '')
      }
    >
      {label && (
        <p className="text-2xl md:text-[32px] font-semibold text-center text-[var(--color-text-disabled,#bcc2d2)]">
          {label}
        </p>
      )}
    </div>
  )
}
