import { Children } from 'react'
import type { ReactNode } from 'react'
import Reveal from './Reveal'

type Props = {
  label: ReactNode
  children: ReactNode
}

export default function GridSplit({ label, children }: Props) {
  const items = Children.toArray(children)

  return (
    <div className="grid grid-cols-12 gap-6 w-full">
      <div className="col-span-12 md:col-span-6">
        <Reveal>{label}</Reveal>
      </div>
      <div className="col-span-12 md:col-span-6 flex flex-col gap-5">
        {items.map((child, i) => (
          <Reveal key={i}>{child}</Reveal>
        ))}
      </div>
    </div>
  )
}
