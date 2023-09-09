import create from 'zustand'

export type Language = 'English' | 'Finnish'

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
