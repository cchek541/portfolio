import { cvFiles } from '../content.ts'
import { useContent, useLang } from '../lang.ts'

export function CvLink({ className }: { className: string }) {
  const { lang } = useLang()
  const c = useContent()
  const cv = cvFiles[lang]

  return (
    <a href={cv.href} download={cv.filename} className={className}>
      {c.labels.downloadCv} <span aria-hidden>↓</span>
    </a>
  )
}
