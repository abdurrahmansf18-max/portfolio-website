"use client"

import { useLanguage } from "@/lib/language-context"
import { MapPin, GraduationCap, Briefcase, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const { t, isRTL } = useLanguage()

  const highlights = [
    {
      icon: MapPin,
      label: isRTL ? "أنقرة، تركيا" : "Ankara, Türkiye",
    },
    {
      icon: GraduationCap,
      label: isRTL
        ? "جامعة أوستيم التقنية"
        : "Ostim Technical University",
    },
    {
      icon: Briefcase,
      label: isRTL ? "شركة Rakort (تدريب 1 سنة)" : "Rakort (1 Year Internship)",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
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
                  "inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border text-sm",
                  isRTL && "flex-row-reverse"
                )}
              >
                <item.icon size={16} className="text-primary" />
                <span className="text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {t.about.bio.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Project Link */}
          <div className="mt-10 p-6 bg-muted/30 rounded-xl border border-border">
            <div
              className={cn(
                "flex items-start gap-4",
                isRTL && "flex-row-reverse text-right"
              )}
            >
              <div className="p-3 bg-primary/10 rounded-lg">
                <ExternalLink size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {isRTL ? "مشروع عميل حقيقي" : "Real Client Project"}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {isRTL
                    ? "تم تطوير وبيع موقع ويب احترافي لعميل حقيقي"
                    : "Developed and sold a professional website for a real client"}
                </p>
                <a
                  href="https://www.ergunnakliyatevdeneve.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 text-primary hover:underline",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  ergunnakliyatevdeneve.com
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
