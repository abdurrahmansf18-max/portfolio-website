"use client"

import { useLanguage } from "@/lib/language-context"
import { Phone, MessageCircle, ArrowDown, CheckCircle2, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { ParticleNetwork } from "@/components/particle-network"

const WHATSAPP_URL =
  "https://wa.me/905397389476?text=Merhaba%20Abdurrahman%20Bey%2C%20i%C5%9Fletmem%20i%C3%A7in%20web%20sitesi%20ve%20yaz%C4%B1l%C4%B1m%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum."

function useTypingAnimation(texts: readonly string[], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 1600) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setDisplayText("")
    setTextIndex(0)
    setIsDeleting(false)
  }, [texts])

  useEffect(() => {
    const currentText = texts[textIndex] ?? ""

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  return displayText
}

export function HeroSection() {
  const { t, isRTL } = useLanguage()
  const typingText = useTypingAnimation(t.hero.typingTexts, 75, 38, 1600)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16"
    >
      <ParticleNetwork />

      <div className="absolute inset-0 -z-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Local Trust Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/85 border border-primary/30 text-xs sm:text-sm font-medium text-primary mb-5 shadow-sm backdrop-blur-sm">
            <MapPin size={14} className="shrink-0" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Greeting */}
          <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-3 font-medium">
            {t.hero.greeting}
          </p>

          {/* Main Value Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-[1.15] text-balance">
            <span className="text-gradient">{t.hero.title}</span>
          </h1>

          {/* Typing Subtitle */}
          <div
            className={cn(
              "h-8 sm:h-10 flex items-center justify-center mb-5",
              isRTL && "flex-row-reverse"
            )}
          >
            <span className="text-base sm:text-xl font-semibold text-primary">
              {typingText}
            </span>
            <span
              className={cn(
                "w-0.5 h-5 sm:h-6 bg-primary animate-pulse",
                isRTL ? "mr-1" : "ml-1"
              )}
            />
          </div>

          {/* Plain-Language Description */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-balance bg-card/55 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-5">
            {t.hero.description}
          </p>

          {/* Primary Action Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12",
              isRTL && "sm:flex-row-reverse"
            )}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 text-sm sm:text-base w-full sm:w-auto"
            >
              <MessageCircle size={19} />
              {t.hero.whatsappCta}
            </a>
            <a
              href="tel:+905397389476"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#06B6D4] hover:bg-[#0891B2] transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 text-sm sm:text-base w-full sm:w-auto"
            >
              <Phone size={18} />
              {t.hero.callCta}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border bg-card/85 backdrop-blur-sm rounded-xl font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200 text-sm sm:text-base w-full sm:w-auto"
            >
              {t.hero.viewProjects}
              <ArrowDown size={16} />
            </a>
          </div>

          {/* 3 Concrete Trust Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {t.hero.trustPoints.map((point, index) => (
              <div
                key={index}
                className={cn(
                  "p-4 sm:p-5 rounded-2xl bg-card/85 backdrop-blur-sm border border-border/70 card-glow",
                  isRTL && "text-right"
                )}
              >
                <div className={cn("flex items-center gap-2.5 mb-2", isRTL && "flex-row-reverse")}>
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                  <h2 className="text-sm sm:text-base font-bold text-foreground">
                    {point.title}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
