import { useEffect, useState, type ReactNode } from 'react'
import type { Lang } from '../content.ts'
import { LangContext } from '../lang.ts'

const STORAGE_KEY = 'portfolio-lang'

function initialLang(): Lang {
  try {
    const param = new URLSearchParams(window.location.search).get('lang')
    if (param === 'en' || param === 'ko') return param
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'ko') return saved
  } catch {
    // Storage can be unavailable (private mode); fall back to English.
  }
  return 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignore storage failures.
    }
  }, [lang])

  return <LangContext value={{ lang, setLang }}>{children}</LangContext>
}
