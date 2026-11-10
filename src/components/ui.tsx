import type { ReactNode } from 'react'
import type { Entry, Stat } from '../content.ts'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
      {children}
    </p>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-muted uppercase">
      <span>{children}</span>
      <span aria-hidden className="h-px flex-1 bg-line" />
    </h2>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-line bg-panel px-2 py-0.5 font-mono text-xs text-paper/85">
      {children}
    </span>
  )
}

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <dl
      className={`grid gap-px overflow-hidden rounded-lg border border-line bg-line ${
        stats.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'
      }`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="bg-panel px-4 py-4">
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-mono text-xl font-medium text-paper">
            {stat.value}
          </dd>
          <dd className="mt-1 text-xs leading-snug text-muted">{stat.label}</dd>
        </div>
      ))}
    </dl>
  )
}

export function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ol className="space-y-8">
      {entries.map((entry) => (
        <li
          key={entry.title + entry.period}
          className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:gap-6"
        >
          <p className="font-mono text-xs text-muted sm:pt-1">{entry.period}</p>
          <div>
            <h3 className="font-medium text-paper">{entry.title}</h3>
            <p className="text-sm text-accent">{entry.org}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-paper/80">
              {entry.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden className="text-accent">
                    ›
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}

export const buttonPrimary =
  'inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-ink transition hover:bg-accent/85'
export const buttonGhost =
  'inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-paper transition hover:border-accent hover:text-accent'
