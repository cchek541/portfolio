import { useContent } from '../lang.ts'
import { Eyebrow } from '../components/ui.tsx'

export function Demo() {
  const { demo } = useContent()

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <Eyebrow>{demo.kicker}</Eyebrow>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-paper">
        {demo.title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-paper/85">{demo.body}</p>
      <div className="mt-10 rounded-lg border border-dashed border-line bg-panel p-6 font-mono text-sm">
        {demo.planned.map((item) => (
          <p key={item} className="py-1 text-paper/80">
            <span className="text-muted">[ ]</span> {item}
          </p>
        ))}
      </div>
    </div>
  )
}
