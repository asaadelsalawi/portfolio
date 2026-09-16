import { useState } from 'react'
import Header from '../components/Header'
import ContactBar from '../components/ContactBar'
import GridSplit from '../components/GridSplit'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Form behavior (real submission target) still to be defined, see project notes.
    setSent(true)
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col flex-1">
        <Header />
        <main className="flex-1 flex flex-col items-center gap-20 md:gap-32 px-6 md:px-[144px] mt-16 md:mt-[120px] mb-16 md:mb-[120px] w-full">
          <section className="flex flex-col gap-2 w-full">
            <Reveal>
              <h1 className="text-3xl md:text-[32px] font-semibold text-black">
                Get in touch
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-3xl md:text-[32px] font-semibold text-[var(--color-text-secondary)]">
                I'd love to connect and hear your thoughts.
              </p>
            </Reveal>
          </section>

          {sent ? (
            <Reveal className="w-full">
              <section className="w-full">
                <p className="text-3xl md:text-[32px] font-semibold text-black">
                  Great news! Your message has been sent successfully.
                </p>
              </section>
            </Reveal>
          ) : (
            <GridSplit
              label={
                <p className="text-2xl font-semibold text-black">
                  Send me a message
                </p>
              }
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-base font-semibold text-black">
                    Name
                  </span>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Fatima Mohammed"
                    className="w-full rounded-[var(--radius-l4)] border border-[var(--color-border-default)] px-5 py-4 text-base placeholder:text-[var(--color-text-tertiary)] outline-none focus:border-black transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-base font-semibold text-black">
                    Email address
                  </span>
                  <input
                    required
                    type="email"
                    placeholder="e.g. fatima@mohammed.com"
                    className="w-full rounded-[var(--radius-l4)] border border-[var(--color-border-default)] px-5 py-4 text-base placeholder:text-[var(--color-text-tertiary)] outline-none focus:border-black transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-base font-semibold text-black">
                    Message
                  </span>
                  <textarea
                    required
                    rows={6}
                    placeholder="Anything you can imagine"
                    className="w-full h-[184px] resize-none rounded-[var(--radius-l4)] border border-[var(--color-border-default)] px-5 py-4 text-base placeholder:text-[var(--color-text-tertiary)] outline-none focus:border-black transition-colors"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-5 py-4 rounded-full bg-black text-white font-semibold w-fit"
                >
                  Send →
                </button>
              </form>
            </GridSplit>
          )}
        </main>
        <Reveal>
          <ContactBar />
        </Reveal>
      </div>
    </div>
  )
}
