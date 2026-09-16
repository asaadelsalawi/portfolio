import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Case Studies', to: '/#work' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 flex items-baseline gap-6 px-6 md:px-[144px] py-4 bg-white/70 backdrop-blur-md">
      <Link to="/" className="flex-1 font-semibold text-black leading-none">
        Asaad El Salawi
      </Link>
      <nav className="hidden md:flex flex-1 items-baseline gap-4 whitespace-nowrap leading-none">
        {navItems.map((item) => {
          const isActive =
            (item.to === '/leadership' && location.pathname === '/leadership') ||
            (item.to === '/contact' && location.pathname === '/contact')
          return (
            <Link
              key={item.label}
              to={item.to}
              className={
                isActive
                  ? 'font-medium text-black'
                  : 'font-medium text-[var(--color-text-secondary)] hover:text-black transition-colors'
              }
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
