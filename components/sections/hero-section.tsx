"use client"

import { useLanguage } from "@/lib/language-context"
import { Download, Linkedin, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { ParticleNetwork } from "@/components/particle-network"

// Typing animation hook
function useTypingAnimation(texts: string[], typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    
    const timeout = setTimeout(() => {
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
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  return displayText
}

export function HeroSection() {
  const { t, isRTL } = useLanguage()
  const typingText = useTypingAnimation(t.hero.typingTexts as unknown as string[], 80, 40, 1500)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Interactive Particle Network Background */}
      <ParticleNetwork />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-16 sm:pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p 
            className="text-base sm:text-lg md:text-xl text-foreground/70 mb-3 sm:mb-4 animate-slide-up font-medium"
          >
            {t.hero.greeting}
          </p>

          {/* Name - Black text with cyan gradient name like reference */}
          <h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-gradient">{t.hero.title}</span>
          </h1>

          {/* Typing animation subtitle */}
          <div 
            className={cn(
              "h-8 sm:h-10 md:h-12 flex items-center justify-center mb-6 sm:mb-8 animate-slide-up",
              isRTL && "flex-row-reverse"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
              {typingText}
            </span>
            <span className={cn("w-0.5 h-5 sm:h-6 md:h-8 bg-primary animate-pulse", isRTL ? "mr-1" : "ml-1")} />
          </div>

          {/* Description - more prominent text */}
          <p 
            className="text-sm sm:text-base md:text-lg text-muted-foreground/90 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-balance animate-slide-up p-4 sm:p-5 rounded-2xl transition-all duration-500 ease-out hover:bg-card/40 hover:text-foreground hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border hover:border-border/50 border border-transparent cursor-default"
            style={{ animationDelay: "0.3s" }}
          >
            {t.hero.description}
          </p>

          {/* CTA Buttons - matching reference style */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slide-up",
              isRTL && "sm:flex-row-reverse"
            )}
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-white bg-[#06B6D4] hover:bg-[#0891B2] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
            >
              {t.hero.contactMe}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#06B6D4] text-[#06B6D4] bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-lg font-semibold hover:bg-[#06B6D4] hover:text-white transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="/abdurrahman-el-savvaf-cv.pdf"
              download
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-primary/60 text-primary bg-card/80 backdrop-blur-sm rounded-lg font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
              aria-label={t.hero.downloadCV}
              title={t.hero.downloadCV}
            >
              <Download size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              {t.hero.downloadCV}
            </a>
          </div>

          {/* Social Links - matching reference icons */}
          <div 
            className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 sm:w-12 h-10 sm:h-12 rounded-xl overflow-hidden flex items-center justify-center shrink-0 hover:scale-110 transition-transform duration-300"
              aria-label="WhatsApp"
            >
              <div className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#06B6D4_360deg)] group-hover:bg-[conic-gradient(from_0deg,transparent_0_270deg,#fff_360deg)] transition-all duration-300" />
              <div className="absolute inset-[2px] rounded-[10px] bg-card flex items-center justify-center z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                <Phone size={18} className="sm:w-[22px] sm:h-[22px]" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/abdurrahman-el-%C5%9Favvaf-03208b3ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 sm:w-12 h-10 sm:h-12 rounded-xl overflow-hidden flex items-center justify-center shrink-0 hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <div className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#06B6D4_360deg)] group-hover:bg-[conic-gradient(from_0deg,transparent_0_270deg,#fff_360deg)] transition-all duration-300" />
              <div className="absolute inset-[2px] rounded-[10px] bg-card flex items-center justify-center z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                <Linkedin size={18} className="sm:w-[22px] sm:h-[22px]" />
              </div>
            </a>
            <a
              href="mailto:abdurrahmansf18@gmail.com"
              className="group relative w-10 sm:w-12 h-10 sm:h-12 rounded-xl overflow-hidden flex items-center justify-center shrink-0 hover:scale-110 transition-transform duration-300"
              aria-label="Email"
            >
              <div className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#06B6D4_360deg)] group-hover:bg-[conic-gradient(from_0deg,transparent_0_270deg,#fff_360deg)] transition-all duration-300" />
              <div className="absolute inset-[2px] rounded-[10px] bg-card flex items-center justify-center z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                <Mail size={18} className="sm:w-[22px] sm:h-[22px]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
