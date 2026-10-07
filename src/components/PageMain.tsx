import type { ReactNode } from 'react'

/** The content area of every page: same side gutters, same spacing between blocks. */
export default function PageMain({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1 flex flex-col gap-20 md:gap-32 px-6 md:px-[144px] mt-16 md:mt-[120px] mb-16 md:mb-[120px] w-full">
      {children}
    </main>
  )
}
