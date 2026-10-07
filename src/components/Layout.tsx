import type { ReactNode } from 'react'
import Header from './Header'
import ContactBar from './ContactBar'
import Reveal from './Reveal'

/**
 * Frame around every page: one navigation and one footer, identical everywhere.
 * They live outside the page transition, so they do not fade when you switch pages.
 */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col flex-1">
        <Header />
        {children}
        <Reveal>
          <ContactBar />
        </Reveal>
      </div>
    </div>
  )
}
