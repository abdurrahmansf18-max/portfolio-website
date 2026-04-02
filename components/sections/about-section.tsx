"use client"

import { useLanguage } from "@/lib/language-context"
import { MapPin, GraduationCap, Briefcase, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const { t, isRTL } = useLanguage()

  const highlights = [
    {
      icon: MapPin,
      label: t.about.location,
      gradient: "from-[#6366F1] to-[#22D3EE]",
    },
    {
      icon: GraduationCap,
      label: t.about.education,
      gradient: "from-[#A855F7] to-[#F472B6]",
    },
    {
      icon: Briefcase,
      label: t.about.experience,
      gradient: "from-[#22C55E] to-[#06B6D4]",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[var(--gradient-secondary-start)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className={cn("mb-12", isRTL && "text-right")}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t.about.title}</span>
            </h2>
            <div className={cn(
              "w-20 h-1 bg-gradient-to-r from-[var(--gradient-primary-start)] to-[var(--gradient-primary-end)] rounded-full",
              isRTL && "ml-auto"
            )} />
          </div>

          {/* Highlights */}
          <div
            className={cn(
              "flex flex-wrap gap-4 mb-10",
              isRTL && "flex-row-reverse"
            )}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "inline-flex items-center gap-3 px-4 py-2.5 bg-card rounded-full border border-border text-sm card-glow",
                  isRTL && "flex-row-reverse"
                )}
              >
                <div className={cn(
                  "p-1.5 rounded-full bg-gradient-to-br",
                  item.gradient
                )}>
                  <item.icon size={14} className="text-white" />
                </div>
                <span className="text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className={cn("prose prose-lg dark:prose-invert max-w-none", isRTL && "text-right")}>
            {t.about.bio.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Project Link Card */}
          <div className="mt-10 p-6 bg-card rounded-xl border border-border card-glow hover-scale">
            <div
              className={cn(
                "flex items-start gap-4",
                isRTL && "flex-row-reverse text-right"
              )}
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-[var(--gradient-primary-start)] to-[var(--gradient-primary-end)]">
                <ExternalLink size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t.about.realProject}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {t.about.realProjectDesc}
                </p>
                <a
                  href="https://www.ergunnakliyatevdeneve.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 text-gradient font-medium hover:opacity-80 transition-opacity",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  ergunnakliyatevdeneve.com
                  <ExternalLink size={14} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
