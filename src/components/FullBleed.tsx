import type { ReactNode } from 'react'

export default function FullBleed({ children }: { children: ReactNode }) {
  return (
    <div className="w-full md:w-[calc(100%+240px)] md:-ml-[120px] md:-mr-[120px]">
      {children}
    </div>
  )
}
