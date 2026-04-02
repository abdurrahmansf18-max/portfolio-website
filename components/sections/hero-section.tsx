"use client"

import { useLanguage } from "@/lib/language-context"
import { Github, Linkedin, ArrowDown, Download, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Code-like decoration */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <code>{"<FullStackDeveloper />"}</code>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-primary font-medium mb-6">
            {t.hero.subtitle}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            {t.hero.description}
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <a
              href="https://github.com/abdurrahmansf18-max"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-background hover:bg-muted hover:border-primary/50 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github
                size={22}
                className="text-muted-foreground group-hover:text-foreground transition-colors"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/abdurrahman-el-%C5%9Favvaf-03208b3ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-background hover:bg-muted hover:border-primary/50 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={22}
                className="text-muted-foreground group-hover:text-foreground transition-colors"
              />
            </a>
          </div>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4",
              isRTL && "sm:flex-row-reverse"
            )}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail size={18} />
              {t.hero.contactMe}
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-background text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Download size={18} />
              {t.hero.downloadCV}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.hero.viewProjects}
              <ArrowDown size={18} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
