"use client"

import { useLanguage } from "@/lib/language-context"
import { Github, Linkedin, ArrowDown, Download, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

// Floating tech icons component
function FloatingIcons() {
  const icons = [
    { name: "React", color: "#61DAFB", delay: "0s" },
    { name: "Python", color: "#3776AB", delay: "1s" },
    { name: "TS", color: "#3178C6", delay: "2s" },
    { name: ".NET", color: "#512BD4", delay: "0.5s" },
    { name: "DB", color: "#4ADE80", delay: "1.5s" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <div
          key={icon.name}
          className={cn(
            "absolute w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold opacity-20 dark:opacity-30",
            index === 0 && "top-[20%] left-[10%] animate-float",
            index === 1 && "top-[15%] right-[15%] animate-float-delayed",
            index === 2 && "bottom-[30%] left-[5%] animate-float-slow",
            index === 3 && "top-[40%] right-[8%] animate-float",
            index === 4 && "bottom-[20%] right-[20%] animate-float-delayed"
          )}
          style={{
            backgroundColor: icon.color + "20",
            color: icon.color,
            animationDelay: icon.delay,
          }}
        >
          {icon.name}
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  const { t, isRTL } = useLanguage()

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--gradient-primary-end)]/5 rounded-full blur-[120px] animate-float-slow" />
      </div>

      {/* Floating tech icons */}
      <FloatingIcons />

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Code-like decoration with glow */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border text-sm text-muted-foreground animate-slide-up card-glow">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <code className="font-mono">{"<FullStackDeveloper />"}</code>
          </div>

          {/* Name with gradient */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-gradient">{t.hero.title}</span>
          </h1>

          {/* Subtitle with secondary gradient */}
          <h2 
            className="text-xl md:text-2xl font-medium mb-6 text-gradient-secondary animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t.hero.subtitle}
          </h2>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            {t.hero.description}
          </p>

          {/* Social Links with glow */}
          <div 
            className="flex items-center justify-center gap-4 mb-10 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://github.com/abdurrahmansf18-max"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card hover:bg-muted transition-all duration-300 group card-glow"
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
              className="p-3 rounded-full border border-border bg-card hover:bg-muted transition-all duration-300 group card-glow"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={22}
                className="text-muted-foreground group-hover:text-foreground transition-colors"
              />
            </a>
          </div>

          {/* CTA Buttons with gradient */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up",
              isRTL && "sm:flex-row-reverse"
            )}
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white btn-gradient"
            >
              <Mail size={18} />
              {t.hero.contactMe}
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card text-foreground rounded-lg font-medium hover:bg-muted transition-all duration-300 card-glow"
            >
              <Download size={18} />
              {t.hero.downloadCV}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground transition-colors animated-underline"
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
