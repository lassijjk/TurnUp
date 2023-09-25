import create from 'zustand'
import { Language } from '../types/language.ts'

interface SettingState {
  language: Language
  changeLanguage: (language: Language) => void
}

export const useStore = create<SettingState>((set) => ({
  language: (localStorage.getItem('language') as Language) || 'English',
  changeLanguage: (language: Language) => {
    localStorage.setItem('language', language)
    set(() => ({
      language: language,
    }))
  },
}))
