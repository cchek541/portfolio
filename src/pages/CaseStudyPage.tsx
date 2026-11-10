import { Link } from 'react-router-dom'
import type { CaseSlug } from '../content.ts'
import { useContent } from '../lang.ts'
import { buttonGhost, Eyebrow, SectionTitle, StatGrid, Tag } from '../components/ui.tsx'

export function CaseStudyPage({ slug }: { slug: CaseSlug }) {
  const c = useContent()
  const cs = c.cases[slug]

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <Link to="/" className="font-mono text-xs text-muted hover:text-accent">
        ← {c.labels.back}
      </Link>
      <div className="mt-8">
        <Eyebrow>{cs.kicker}</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
          {cs.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-paper/85">{cs.summary}</p>
      </div>

      <dl className="mt-10 grid gap-6 border-y border-line py-6 text-sm sm:grid-cols-[auto_auto_1fr] sm:gap-10">
        <div>
          <dt className="font-mono text-xs text-muted uppercase">{c.labels.role}</dt>
          <dd className="mt-1 text-paper">{cs.role}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-muted uppercase">{c.labels.period}</dt>
          <dd className="mt-1 text-paper">{cs.period}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-muted uppercase">{c.labels.stack}</dt>
          <dd className="mt-2 flex flex-wrap gap-1.5">
            {cs.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </dd>
        </div>
      </dl>

      {cs.url && (
        <a href={cs.url} target="_blank" rel="noreferrer" className={`${buttonGhost} mt-6`}>
          {c.labels.liveSite} <span aria-hidden>↗</span>
        </a>
      )}

      <div className="mt-10">
        <StatGrid stats={cs.metrics} />
      </div>

      <div className="mt-14 space-y-12">
        {cs.sections.map((section) => (
          <section key={section.heading}>
            <SectionTitle>{section.heading}</SectionTitle>
            <ul className="mt-5 space-y-3 text-paper/85">
              {section.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed">
                  <span aria-hidden className="mt-0.5 font-mono text-accent">
                    ›
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  )
}
