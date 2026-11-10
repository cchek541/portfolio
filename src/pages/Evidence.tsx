import { useContent } from '../lang.ts'
import { EntryList, Eyebrow, SectionTitle } from '../components/ui.tsx'

export function Evidence() {
  const c = useContent()

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <Eyebrow>{c.hero.fullName}</Eyebrow>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-paper">
        {c.labels.evidenceTitle}
      </h1>
      <p className="mt-4 text-muted">{c.labels.evidenceIntro}</p>

      <section className="mt-14">
        <SectionTitle>{c.labels.experience}</SectionTitle>
        <div className="mt-6">
          <EntryList entries={c.experience} />
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle>{c.labels.education}</SectionTitle>
        <div className="mt-6">
          <EntryList entries={c.education} />
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle>{c.labels.languages}</SectionTitle>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {c.languages.map((l) => (
            <div key={l.name} className="rounded-lg border border-line bg-panel p-5">
              <dt className="text-sm text-muted">{l.name}</dt>
              <dd className="mt-1 font-mono text-paper">{l.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14">
        <SectionTitle>{c.labels.volunteer}</SectionTitle>
        <div className="mt-6">
          <EntryList entries={c.volunteer} />
        </div>
      </section>
    </div>
  )
}
