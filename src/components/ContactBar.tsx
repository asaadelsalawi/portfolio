import { Link } from 'react-router-dom'
import GridSplit from './GridSplit'

export default function ContactBar() {
  return (
    <footer className="w-full rounded-[var(--radius-l)] bg-white/70 backdrop-blur-md pt-4 pb-8 px-6 md:px-[140px] flex flex-col gap-16">
      <GridSplit label={<p className="font-semibold text-black">That's not the end</p>}>
        <p className="text-[var(--color-text-secondary)]">
          I'm looking forward to hearing from you. You can reach me on the
          following channels
        </p>
        <div className="flex flex-wrap gap-6 text-[var(--color-text-secondary)]">
          <a
            href="https://www.linkedin.com/in/asaadelsalawi/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn →
          </a>
          <a
            href="mailto:hello@elsalawi.de"
            className="hover:text-black transition-colors"
          >
            E-Mail →
          </a>
          <Link to="/imprint" className="hover:text-black transition-colors">
            Imprint →
          </Link>
        </div>
      </GridSplit>
      <p className="flex-1 font-semibold text-[72px] leading-none tracking-[0.72px] text-[#bcc2d2] opacity-25 whitespace-nowrap overflow-hidden">
        Asaad El Salawi — Design Leader
      </p>
    </footer>
  )
}
