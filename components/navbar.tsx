"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"
import { Menu, X, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Language } from "@/lib/translations"

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const

export function Navbar() {
  const { language, setLanguage, t, isRTL } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const languages: { code: Language; label: string }[] = [
    { code: "tr", label: "TR" },
    { code: "ar", label: "AR" },
    { code: "en", label: "EN" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            AES
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 text-sm border border-border rounded-md overflow-hidden">
              {languages.map((lang, index) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={cn(
                    "px-2 py-1 transition-colors",
                    language === lang.code
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                    index !== languages.length - 1 && "border-r border-border"
                  )}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-1 mt-4 text-sm border border-border rounded-md overflow-hidden w-fit">
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={cn(
                  "px-3 py-2 transition-colors",
                  language === lang.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  index !== languages.length - 1 && "border-r border-border"
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
