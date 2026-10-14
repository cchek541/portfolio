import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: 'Overview' },
  { to: '/work/tomyo', label: 'TomYo' },
  { to: '/work/capstone', label: 'Capstone' },
  { to: '/demo', label: 'Live demo' },
  { to: '/evidence', label: 'Evidence' },
]

export function AppShell() {
  return (
    <div className="min-h-svh bg-ink text-paper">
      <header className="sticky top-0 z-20 border-b border-line bg-ink/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
          <NavLink to="/" className="font-medium tracking-tight">
            Chingun
            <span className="ml-2 hidden text-sm text-muted sm:inline">
              Software Engineer
            </span>
          </NavLink>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive ? 'text-accent' : 'hover:text-paper'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
