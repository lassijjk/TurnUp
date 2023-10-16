import { create } from 'zustand'
import { LanguageFullName } from '../types/language'

interface SettingState {
  language: LanguageFullName
  changeLanguage: (language: LanguageFullName) => void
}

export const useStore = create<SettingState>((set) => ({
  language: (localStorage.getItem('language') as LanguageFullName) || LanguageFullName.ENGLISH,
  changeLanguage: (language: LanguageFullName) => {
    localStorage.setItem('language', language)
    set(() => ({
      language: language,
    }))
  },
}))
