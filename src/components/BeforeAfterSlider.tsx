import { useCallback, useRef, useState } from 'react'

type ImageSpec = {
  src: string
  alt: string
}

type Props = {
  before: ImageSpec
  after: ImageSpec
  /** Starting position of the handle, 0 to 100. Defaults to 50. */
  initial?: number
}

// Left-right arrow glyph for the drag handle, recolored with currentColor.
function DragIcon() {
  return (
    <svg viewBox="0 0 512 512" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M505.7 265.7c3-3 3.1-7.9 .2-11.1l-104-112c-3-3.2-8.1-3.4-11.3-.4s-3.4 8.1-.4 11.3L481.7 252 23.3 252l90.3-90.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-104 104c-3.1 3.1-3.1 8.2 0 11.3l104 104c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L23.3 268l457.4 0-90.3 90.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l104-104z" />
    </svg>
  )
}

export default function BeforeAfterSlider({ before, after, initial = 50 }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(initial)

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = wrapperRef.current?.getBoundingClientRect()
    if (!rect) return
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    e.preventDefault()
    e.currentTarget.setPointerCapture(e.pointerId)
    updateFromClientX(e.clientX)
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.buttons === 0) return
    updateFromClientX(e.clientX)
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const step = e.shiftKey ? 10 : 2
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault()
      setPos((p) => Math.max(0, p - step))
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault()
      setPos((p) => Math.min(100, p + step))
    } else if (e.key === 'Home') {
      e.preventDefault()
      setPos(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setPos(100)
    }
  }

  return (
    <div
      ref={wrapperRef}
      className="relative w-full aspect-[3/2] overflow-hidden rounded-[var(--radius-l4)] border border-[var(--color-border-default)] select-none"
    >
      {/* After image: fills the whole wrapper */}
      <img
        src={after.src}
        alt={after.alt}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before image: clipped to a width that follows the handle */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before.src}
          alt={before.alt}
          draggable={false}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Labels. Shown statically, since a hover-only reveal would not work on touch. */}
      <p className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md text-sm font-semibold text-black">
        before
      </p>
      <p className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md text-sm font-semibold text-black">
        after
      </p>

      {/* Draggable divider. Wider than the visible line so touch has a real target. */}
      <div
        className="absolute inset-y-0 w-10 -ml-5 flex items-center justify-center cursor-col-resize touch-none"
        style={{ left: `${pos}%` }}
        role="slider"
        tabIndex={0}
        aria-label="Compare before and after image"
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onKeyDown={onKeyDown}
      >
        <div className="absolute inset-y-0 left-1/2 -ml-px w-[2px] bg-white" />
        <div className="relative w-10 h-10 rounded-full bg-black text-white flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          <DragIcon />
        </div>
      </div>
    </div>
  )
}
