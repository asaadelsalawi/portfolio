import { useState } from 'react'
import PageMain from '../components/PageMain'
import PageHeading from '../components/PageHeading'
import TextSection from '../components/TextSection'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { DISPLAY } from '../components/Text'

const FIELD =
  'w-full rounded-[var(--radius-l4)] border border-[var(--color-border-default)] px-5 py-4 text-base placeholder:text-[var(--color-text-tertiary)] outline-none focus:border-black transition-colors'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-base font-semibold text-black">{label}</span>
      {children}
    </label>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Form behavior (real submission target) still to be defined, see project notes.
    setSent(true)
  }

  return (
    <PageMain>
      <PageHeading
        title="Get in touch"
        subtitle="I'd love to connect and hear your thoughts."
      />

      {sent ? (
        <Reveal className="w-full">
          <section className="w-full">
            <p className={`${DISPLAY} text-black`}>
              Great news! Your message has been sent successfully.
            </p>
          </section>
        </Reveal>
      ) : (
        <TextSection heading="Send me a message">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Field label="Name">
              <input required type="text" placeholder="e.g. Fatima Mohammed" className={FIELD} />
            </Field>
            <Field label="Email address">
              <input required type="email" placeholder="e.g. fatima@mohammed.com" className={FIELD} />
            </Field>
            <Field label="Message">
              <textarea
                required
                rows={6}
                placeholder="Anything you can imagine"
                className={`${FIELD} h-[184px] resize-none`}
              />
            </Field>
            <Button type="submit">Send →</Button>
          </form>
        </TextSection>
      )}
    </PageMain>
  )
}
