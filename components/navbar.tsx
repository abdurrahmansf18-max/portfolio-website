"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { Menu, X, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Language } from "@/lib/translations"
import { PersonalLogo } from "@/components/logo"

const navLinks = [
  { key: "home", href: "#home" },
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
] as const

const WHATSAPP_URL =
  "https://wa.me/905397389476?text=Merhaba%20Abdurrahman%20Bey%2C%20web%20sitesi%20ve%20yaz%C4%B1l%C4%B1m%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."

const logoNamesByLanguage: Record<Language, string> = {
  tr: "ABDURRAHMAN EL ŞAVVAF",
  en: "ABDURRAHMAN EL SAVVAF",
  ar: "عبد الرحمن الشواف",
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
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/90 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-background/60 backdrop-blur-sm border-b border-border/30"
      )}
    >
      <div className="container mx-auto px-4">
        <div className={cn("flex items-center justify-between h-16 gap-3", isRTL && "flex-row-reverse")}>
          {/* Clean Brand Logo */}
          <a
            href="#home"
            className="text-sm sm:text-base md:text-lg font-bold text-gradient hover:opacity-85 transition-opacity min-w-fit flex items-center gap-2"
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            <PersonalLogo />
            <span className="truncate">{logoNamesByLanguage[language]}</span>
          </a>

          {/* Desktop Navigation */}
          <div className={cn("hidden md:flex items-center gap-6", isRTL && "flex-row-reverse")}>
            <ul className={cn("flex items-center gap-5", isRTL && "flex-row-reverse")}>
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animated-underline"
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors shadow-sm"
            >
              <MessageCircle size={15} />
              {t.nav.whatsappBtn}
            </a>

            {/* Language Switcher */}
            <div className="flex items-center text-xs border border-border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm">
              {languages.map((lang, index) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  className={cn(
                    "px-2.5 py-1.5 font-semibold transition-all duration-200",
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

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold"
              aria-label="WhatsApp"
            >
              <MessageCircle size={14} />
              {t.nav.whatsappBtn}
            </a>
            <button
              type="button"
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
          <ul className="flex flex-col gap-1 px-2 pt-2">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-2.5 px-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                    isRTL && "text-right"
                  )}
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Language Switcher */}
          <div className="flex items-center mt-3 mx-3 text-xs border border-border rounded-lg overflow-hidden w-fit">
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={cn(
                  "px-3.5 py-2 font-semibold transition-all duration-200",
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
