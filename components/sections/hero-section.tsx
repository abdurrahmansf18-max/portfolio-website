"use client"

import { useLanguage } from "@/lib/language-context"
import { Github, Linkedin, ArrowDown, Download, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

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

// Stats component
function StatsSection() {
  const { t, isRTL } = useLanguage()
  
  const stats = [
    { value: "1+", label: t.stats.experience },
    { value: "5+", label: t.stats.projects },
    { value: "3+", label: t.stats.clients },
  ]

  return (
    <div className={cn(
      "flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-16 border-t border-border/50",
      isRTL && "flex-row-reverse"
    )}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
            {stat.value}
          </div>
          <div className="text-muted-foreground text-sm md:text-base">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  const { t, isRTL } = useLanguage()
  const typingText = useTypingAnimation(t.hero.typingTexts as unknown as string[], 80, 40, 1500)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-primary-start)]/5 via-transparent to-[var(--gradient-secondary-start)]/5 animate-gradient" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--gradient-primary-start)]/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--gradient-secondary-start)]/10 rounded-full blur-[100px] animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-4 animate-slide-up"
          >
            {t.hero.greeting}
          </p>

          {/* Name with gradient */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-gradient">{t.hero.title}</span>
          </h1>

          {/* Typing animation subtitle */}
          <div 
            className="h-10 md:h-12 flex items-center justify-center mb-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-xl md:text-2xl font-medium text-foreground">
              {typingText}
            </span>
            <span className="w-0.5 h-6 md:h-8 bg-primary ml-1 animate-pulse" />
          </div>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up",
              isRTL && "sm:flex-row-reverse"
            )}
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-white btn-gradient text-lg"
            >
              {t.hero.contactMe}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border bg-card text-foreground rounded-lg font-medium hover:bg-muted transition-all duration-300 card-glow text-lg"
            >
              {t.hero.viewProjects}
            </a>
          </div>

          {/* Social Links */}
          <div 
            className="flex items-center justify-center gap-4 mt-8 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="https://github.com/abdurrahmansf18-max"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card hover:bg-muted transition-all duration-300 group card-glow"
              aria-label="GitHub"
            >
              <Github
                size={24}
                className="text-muted-foreground group-hover:text-foreground transition-colors"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/abdurrahman-el-%C5%9Favvaf-03208b3ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card hover:bg-muted transition-all duration-300 group card-glow"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={24}
                className="text-muted-foreground group-hover:text-foreground transition-colors"
              />
            </a>
            <a
              href="mailto:abdurrahmansf18@gmail.com"
              className="p-3 rounded-full border border-border bg-card hover:bg-muted transition-all duration-300 group card-glow"
              aria-label="Email"
            >
              <Mail
                size={24}
                className="text-muted-foreground group-hover:text-foreground transition-colors"
              />
            </a>
          </div>

          {/* Stats */}
          <StatsSection />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
