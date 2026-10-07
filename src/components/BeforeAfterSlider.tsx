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
  /** Width / height of the images, e.g. 2880 / 1600. Both images must share it. */
  aspectRatio?: number
  /** Show the before/after pills on top of the images. Turn off to place labels outside. */
  showLabels?: boolean
}

export default function BeforeAfterSlider({ before, after, initial = 50, aspectRatio = 3 / 2, showLabels = true }: Props) {
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
      className="relative w-full select-none"
      style={{ aspectRatio }}
    >
      {/* After image: fills the whole wrapper */}
      <img
        src={after.src}
        alt={after.alt}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before image: same size and position as the after image, only clipped
          from the right. It never rescales or shifts while the handle moves. */}
      <img
        src={before.src}
        alt={before.alt}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      {/* Labels. Shown statically, since a hover-only reveal would not work on touch. */}
      {showLabels && (
        <>
          <p className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-sm font-semibold text-black">
            before
          </p>
          <p className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass text-sm font-semibold text-black">
            after
          </p>
        </>
      )}

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
        <div className="absolute inset-y-0 left-1/2 -ml-px w-[2px] bg-black" />
        <div className="relative w-10 h-10 rounded-full bg-black text-white flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          <span aria-hidden="true" className="text-[28px] leading-none pb-[3px] select-none">
            ↔
          </span>
        </div>
      </div>
    </div>
  )
}
