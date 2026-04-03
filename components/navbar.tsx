"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Language } from "@/lib/translations"
import { PersonalLogo } from "@/components/logo"

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const

const logoNamesByLanguage: Record<Language, string> = {
  tr: "ABDURRAHMAN EL ŞAVVAF",
  en: "ABDURRAHMAN EL SHAWAF",
  ar: "عبد الرحمن الشواف",
}

const TypewriterLogo = ({ language }: { language: Language }) => {
  const fullText = logoNamesByLanguage[language]
  const [currentName, setCurrentName] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setCurrentName("")
    setIsDeleting(false)
  }, [language])

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 100

    if (!isDeleting && currentName === fullText) {
      typingSpeed = 2000 // Yazdıktan sonra bekleme
    } else if (isDeleting && currentName === "") {
      typingSpeed = 500 // Sildikten sonra bekleme
    }

    const timer = setTimeout(() => {
      if (!isDeleting && currentName === fullText) {
        setIsDeleting(true)
      } else if (isDeleting && currentName === "") {
        setIsDeleting(false)
      } else {
        setCurrentName(fullText.substring(0, currentName.length + (isDeleting ? -1 : 1)))
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentName, isDeleting, fullText])

  return (
    <a
      href="#home"
      className="text-[15px] sm:text-lg md:text-xl font-bold text-gradient hover:opacity-80 transition-opacity min-w-fit flex items-center gap-1.5"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <PersonalLogo />
      {currentName}
      <span className={cn("animate-pulse text-foreground", language === "ar" ? "mr-0.5" : "ml-0.5")}>|</span>
    </a>
  )
}

export function Navbar() {
  const { language, setLanguage, t, isRTL } = useLanguage()
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
          ? "bg-card/80 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with gradient */}
          <TypewriterLogo language={language} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors animated-underline"
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Switcher with gradient active state */}
            <div className="flex items-center text-sm border border-border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm">
              {languages.map((lang, index) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={cn(
                    "px-3 py-1.5 transition-all duration-300",
                    language === lang.code
                      ? "btn-gradient text-white"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                    index !== languages.length - 1 && language !== lang.code && "border-r border-border"
                  )}
                >
                  {lang.label}
                </button>
              ))}
            </div>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 bg-card/95 backdrop-blur-md rounded-b-xl",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <ul className="flex flex-col gap-2 px-2">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-1 mt-4 mx-2 text-sm border border-border rounded-lg overflow-hidden w-fit">
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={cn(
                  "px-4 py-2 transition-all duration-300",
                  language === lang.code
                    ? "btn-gradient text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  index !== languages.length - 1 && language !== lang.code && "border-r border-border"
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
