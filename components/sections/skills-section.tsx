"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import {
  Smartphone,
  Server,
  Wrench,
  Code2,
  ChevronDown,
  ChevronUp,
  Languages,
} from "lucide-react"
import { cn } from "@/lib/utils"

const serviceIcons = {
  website: Smartphone,
  hosting: Server,
  maintenance: Wrench,
  software: Code2,
} as const

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "FastAPI",
  ".NET Core",
  "PostgreSQL",
  "Docker",
  "Linux VPS",
  "Cloudflare",
]

export function SkillsSection() {
  const { t, isRTL } = useLanguage()
  const [showTech, setShowTech] = useState(false)

  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[380px] h-[380px] bg-[var(--gradient-primary-start)]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[var(--gradient-secondary-start)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className={cn("mb-10 sm:mb-12", isRTL && "text-right")}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-gradient">{t.services.title}</span>
            </h2>
            <div
              className={cn(
                "w-20 h-1 bg-gradient-to-r from-[var(--gradient-primary-start)] to-[var(--gradient-primary-end)] rounded-full mb-4",
                isRTL && "ml-auto"
              )}
            />
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>

          {/* 4 Plain-Language Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {t.services.items.map((item) => {
              const Icon = serviceIcons[item.key as keyof typeof serviceIcons] || Smartphone
              return (
                <div
                  key={item.key}
                  className={cn(
                    "p-6 bg-card rounded-2xl border border-border card-glow transition-all duration-300 hover:-translate-y-0.5",
                    isRTL && "text-right"
                  )}
                >
                  <div className={cn("flex items-start gap-4", isRTL && "flex-row-reverse")}>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#0EA5E9] shrink-0 shadow-md">
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 3-Step Zero-Risk Process */}
          <div className="p-6 sm:p-8 rounded-3xl bg-card/90 border border-primary/25 shadow-lg mb-8">
            <h3 className={cn("text-xl sm:text-2xl font-bold text-foreground mb-6", isRTL && "text-right")}>
              {t.services.processTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {t.services.processSteps.map((s) => (
                <div
                  key={s.step}
                  className={cn(
                    "p-5 rounded-2xl bg-background/60 border border-border/70",
                    isRTL && "text-right"
                  )}
                >
                  <span className="inline-block text-xs font-extrabold tracking-widest px-2.5 py-1 rounded-full bg-primary/15 text-primary mb-3">
                    {s.step}
                  </span>
                  <h4 className="text-base font-bold text-foreground mb-2">{s.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Collapsible Technical Stack (keeps esnaf view uncluttered while showing depth to tech visitors) */}
          <div className="rounded-2xl border border-border/70 bg-card/60 overflow-hidden">
            <button
              type="button"
              onClick={() => setShowTech((prev) => !prev)}
              className={cn(
                "w-full px-5 py-4 flex items-center justify-between gap-3 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors",
                isRTL && "flex-row-reverse"
              )}
            >
              <span>{t.services.techToggleLabel}</span>
              {showTech ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {showTech && (
              <div className={cn("px-5 pb-5 pt-1 border-t border-border/60 space-y-4", isRTL && "text-right")}>
                <div className={cn("flex flex-wrap gap-2 pt-3", isRTL && "justify-end")}>
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-muted text-xs sm:text-sm text-foreground/85 rounded-lg border border-border font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={cn("flex flex-wrap items-center gap-2 pt-2", isRTL && "flex-row-reverse")}>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <Languages size={14} />
                    {t.services.spokenTitle}:
                  </span>
                  {t.services.spokenLevels.map((lang) => (
                    <span
                      key={lang}
                      className="px-2.5 py-1 bg-background/70 text-xs text-muted-foreground rounded-md border border-border"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
