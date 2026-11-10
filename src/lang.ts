import { createContext, useContext } from 'react'
import { content, type Content, type Lang } from './content.ts'

export interface LangState {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LangContext = createContext<LangState>({
  lang: 'en',
  setLang: () => {},
})

export function useLang(): LangState {
  return useContext(LangContext)
}

export function useContent(): Content {
  return content[useLang().lang]
}
