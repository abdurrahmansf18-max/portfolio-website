"use client"

import { useLanguage } from "@/lib/language-context"
import { MapPin, GraduationCap, Briefcase, ExternalLink, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function AboutSection() {
  const { t, isRTL } = useLanguage()

  const profileImage = "/abdo4.jpg"

  const highlights = [
    {
      icon: MapPin,
      label: t.about.location,
      gradient: "from-[#06B6D4] to-[#0EA5E9]",
    },
    {
      icon: GraduationCap,
      label: t.about.education,
      gradient: "from-[#0EA5E9] to-[#22D3EE]",
      href: "https://www.ostimteknik.edu.tr/",
    },
    {
      icon: Briefcase,
      label: t.about.experience,
      gradient: "from-[#22D3EE] to-[#38BDF8]",
      href: "https://www.rakort.com/",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
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
            {highlights.map((item, index) => {
              const Content = (
                <>
                  <div className={cn(
                    "p-1.5 rounded-full bg-gradient-to-br",
                    item.gradient
                  )}>
                    <item.icon size={14} className="text-white" />
                  </div>
                  <span className="text-muted-foreground font-medium transition-colors group-hover:text-foreground">{item.label}</span>
                </>
              )

              const baseClasses = cn(
                "group inline-flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-2.5 bg-card/80 backdrop-blur-sm rounded-full border border-border/50 text-xs sm:text-sm transition-all duration-300",
                item.href 
                  ? "cursor-pointer hover:bg-accent/20 hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(var(--gradient-primary-start),0.2)]" 
                  : "card-glow",
                isRTL && "flex-row-reverse"
              )

              if (item.href) {
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={baseClasses}
                  >
                    {Content}
                    <ExternalLink size={12} className="opacity-0 -ml-1 transition-all group-hover:opacity-100 group-hover:ml-0 text-primary" />
                  </a>
                )
              }

              return (
                <div
                  key={index}
                  className={baseClasses}
                >
                  {Content}
                </div>
              )
            })}
          </div>

          {/* Professional profile card */}
          <div className={cn("mb-10 flex justify-center", isRTL && "md:justify-end") }>
            <div className="w-full max-w-md overflow-hidden rounded-3xl border border-border/60 bg-card/80 shadow-[0_10px_40px_rgba(2,6,23,0.25)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={profileImage}
                  alt="Abdurrahman El Savvaf profile photo"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
              <div className="p-4 sm:p-5 border-t border-border/60">
                <p className="text-sm font-medium text-foreground">Abdurrahman El Savvaf</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Full Stack Developer | Software Engineering Graduate
                </p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className={cn("prose prose-lg dark:prose-invert max-w-none", isRTL && "text-right")}>
            {t.about.bio.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground/90 leading-relaxed mb-6 p-5 rounded-2xl transition-all duration-500 ease-out hover:bg-card/40 hover:text-foreground hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border hover:border-border/50 border border-transparent cursor-default"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Internship Experience Card */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-card rounded-xl border border-border card-glow">
            <div className={cn("flex items-start gap-4", isRTL && "flex-row-reverse text-right")}>
              <div className="p-3 rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#0EA5E9]">
                <Shield size={24} className="text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                  {t.about.internship.title}
                </h3>
                <p className="text-sm sm:text-base text-primary font-medium mb-3">{t.about.internship.company}</p>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  {t.about.internship.summary}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm sm:text-base text-foreground font-semibold mb-1">{t.about.internship.whatWeDoTitle}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{t.about.internship.whatWeDo}</p>
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-base text-foreground font-semibold mb-1">{t.about.internship.productsTitle}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{t.about.internship.products}</p>
                  </div>
                </div>

                <a
                  href="https://www.rakort.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 mt-5 text-gradient font-medium hover:opacity-80 transition-opacity",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  {t.about.internship.websiteLabel}
                  <ExternalLink size={14} className="text-primary" />
                </a>
              </div>
            </div>
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
