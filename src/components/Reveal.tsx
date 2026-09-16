import { useEffect, useRef, useState } from 'react'

let lastTrigger = 0
let batchIndex = 0

function nextDelay() {
  const now = performance.now()
  if (now - lastTrigger < 220) {
    batchIndex = Math.min(batchIndex + 1, 6)
  } else {
    batchIndex = 0
  }
  lastTrigger = now
  return batchIndex * 70
}

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Reveal({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [delay, setDelay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDelay(nextDelay())
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(14px)',
        transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
