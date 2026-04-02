"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { translations, type Language } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("portfolio-language") as Language
    if (stored && ["en", "tr", "ar"].includes(stored)) {
      setLanguageState(stored)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("portfolio-language", language)
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = translations[language]
  const isRTL = language === "ar"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
