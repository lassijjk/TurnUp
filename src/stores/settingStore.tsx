import { create } from 'zustand'
import { LanguageFullName } from '../types/language'

interface SettingState {
  language: string
  changeLanguage: (language: string) => void
}

export const useStore = create<SettingState>((set) => ({
  language: localStorage.getItem('language') || LanguageFullName.ENGLISH,
  changeLanguage: (language: string) => {
    localStorage.setItem('language', language)
    set(() => ({
      language: language,
    }))
  },
}))
