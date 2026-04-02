"use client"

import { useLanguage } from "@/lib/language-context"
import { Github, Linkedin, ArrowDown, Mail, Instagram, Phone } from "lucide-react"
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

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p 
            className="text-lg md:text-xl text-foreground/70 mb-4 animate-slide-up font-medium"
          >
            {t.hero.greeting}
          </p>

          {/* Name - Black text with cyan gradient name like reference */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-gradient">{t.hero.title}</span>
          </h1>

          {/* Typing animation subtitle */}
          <div 
            className="h-10 md:h-12 flex items-center justify-center mb-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-xl md:text-2xl font-semibold text-primary">
              {typingText}
            </span>
            <span className="w-0.5 h-6 md:h-8 bg-primary ml-1 animate-pulse" />
          </div>

          {/* Description - more prominent text */}
          <p 
            className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed text-balance animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            {t.hero.description}
          </p>

          {/* CTA Buttons - matching reference style */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up",
              isRTL && "sm:flex-row-reverse"
            )}
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-white bg-[#06B6D4] hover:bg-[#0891B2] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 text-base"
            >
              {t.hero.contactMe}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#06B6D4] text-[#06B6D4] bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-lg font-semibold hover:bg-[#06B6D4] hover:text-white transition-all duration-300 text-base"
            >
              {t.hero.viewProjects}
            </a>
          </div>

          {/* Social Links - matching reference icons */}
          <div 
            className="flex items-center justify-center gap-6 mt-12 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground/70 hover:text-[#06B6D4] transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <Phone size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdurrahman-el-%C5%9Favvaf-03208b3ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground/70 hover:text-[#06B6D4] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground/70 hover:text-[#06B6D4] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="mailto:abdurrahmansf18@gmail.com"
              className="p-3 text-foreground/70 hover:text-[#06B6D4] transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-[#06B6D4]" />
        </div>
      </div>
    </section>
  )
}
