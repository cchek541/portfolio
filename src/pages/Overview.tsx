import { Link } from 'react-router-dom'
import { contact } from '../content.ts'
import { useContent } from '../lang.ts'
import { CvLink } from '../components/CvLink.tsx'
import {
  buttonGhost,
  buttonPrimary,
  Eyebrow,
  EntryList,
  SectionTitle,
  StatGrid,
  Tag,
} from '../components/ui.tsx'

export function Overview() {
  const c = useContent()
  const cases = [c.cases.tomyo, c.cases.capstone]

  return (
    <div className="mx-auto max-w-5xl px-5">
      <section className="py-16 sm:py-24">
        <Eyebrow>{c.hero.eyebrow}</Eyebrow>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-paper sm:text-6xl">
          {c.hero.name}
        </h1>
        <p className="mt-1 font-mono text-sm text-muted">{c.hero.fullName}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/90">
          {c.hero.summary}
        </p>
        <p className="mt-3 max-w-2xl text-muted">{c.hero.status}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/work/tomyo" className={buttonPrimary}>
            {c.hero.ctaWork} <span aria-hidden>→</span>
          </Link>
          <a href={`mailto:${contact.email}`} className={buttonGhost}>
            {c.hero.ctaEmail}
          </a>
          <a href={contact.github} className={buttonGhost} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {contact.linkedin && (
            <a href={contact.linkedin} className={buttonGhost} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          <CvLink className={buttonGhost} />
        </div>
      </section>

      <StatGrid stats={c.stats} />

      <section className="py-16">
        <SectionTitle>{c.labels.selectedWork}</SectionTitle>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {cases.map((cs) => (
            <Link
              key={cs.slug}
              to={`/work/${cs.slug}`}
              className="group flex flex-col rounded-lg border border-line bg-panel p-6 transition hover:border-accent/60"
            >
              <Eyebrow>{cs.kicker}</Eyebrow>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-paper">
                {cs.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted">{cs.period}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-paper/80">
                {cs.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {cs.stack.slice(0, 5).map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
              <p className="mt-6 text-sm text-accent">
                {c.labels.viewCase}{' '}
                <span aria-hidden className="inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <SectionTitle>{c.labels.skills}</SectionTitle>
        <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.skills.map((group) => (
            <div key={group.group}>
              <dt className="text-sm text-muted">{group.group}</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="pb-20">
        <SectionTitle>{c.labels.experience}</SectionTitle>
        <div className="mt-6">
          <EntryList entries={c.experience} />
        </div>
      </section>
    </div>
  )
}
