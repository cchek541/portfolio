import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { contact } from '../content.ts'
import { useContent, useLang } from '../lang.ts'

export function AppShell() {
  const c = useContent()
  const { lang, setLang } = useLang()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo?.(0, 0)
  }, [pathname])

  const links = [
    { to: '/', label: c.nav.overview },
    { to: '/work/tomyo', label: c.nav.tomyo },
    { to: '/work/capstone', label: c.nav.capstone },
    { to: '/demo', label: c.nav.demo },
    { to: '/evidence', label: c.nav.evidence },
  ]

  return (
    <div className="flex min-h-svh flex-col bg-ink text-paper">
      <header className="sticky top-0 z-20 border-b border-line bg-ink/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3">
          <NavLink to="/" className="font-medium tracking-tight">
            {c.hero.name}
            <span className="ml-2 hidden text-sm text-muted sm:inline">
              {c.hero.eyebrow.split(' · ')[0]}
            </span>
          </NavLink>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
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
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
              className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted transition hover:border-accent hover:text-accent"
              lang={lang === 'en' ? 'ko' : 'en'}
            >
              {c.langSwitch}
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-sm text-muted">
          <p className="font-mono text-xs">© 2026 {c.hero.fullName}</p>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${contact.email}`} className="hover:text-accent">
              {contact.email}
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="hover:text-accent">
              GitHub
            </a>
            {contact.linkedin && (
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}
