"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark"

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useState<Theme>("dark")

  useEffect(() => {
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
    document.documentElement.style.colorScheme = "dark"
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => undefined }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
