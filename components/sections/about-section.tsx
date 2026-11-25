"use client"

import { useLanguage } from "@/lib/language-context"
import { MapPin, GraduationCap, Briefcase, Server, ExternalLink, Download, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function AboutSection() {
  const { t, isRTL } = useLanguage()

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
    {
      icon: Server,
      label: t.about.vpsHighlight,
      gradient: "from-emerald-500 to-cyan-500",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[var(--gradient-secondary-start)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className={cn("mb-10", isRTL && "text-right")}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-gradient">{t.about.title}</span>
            </h2>
            <div
              className={cn(
                "w-20 h-1 bg-gradient-to-r from-[var(--gradient-primary-start)] to-[var(--gradient-primary-end)] rounded-full mb-4",
                isRTL && "ml-auto"
              )}
            />
            <p className="text-muted-foreground text-sm sm:text-base">{t.about.subtitle}</p>
          </div>

          {/* 2-Column Human & Trustworthy Intro */}
          <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-8 items-start", isRTL && "direction-rtl")}>
            {/* Real Photo Card */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-xl">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/abdo4.jpg"
                    alt="Abdurrahman El Şavvaf"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                <div className={cn("p-4 sm:p-5 border-t border-border/60", isRTL && "text-right")}>
                  <p className="text-base font-bold text-foreground">
                    {isRTL ? "عبد الرحمن الشواف" : "Abdurrahman El Şavvaf"}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {t.about.cardRole}
                  </p>
                </div>
              </div>
            </div>

            {/* Bio & Trust Highlights */}
            <div className={cn("lg:col-span-7 space-y-5", isRTL && "text-right")}>
              <div className={cn("flex flex-wrap gap-2.5", isRTL && "justify-end")}>
                {highlights.map((item, index) => {
                  const content = (
                    <>
                      <div className={cn("p-1.5 rounded-full bg-gradient-to-br shrink-0", item.gradient)}>
                        <item.icon size={13} className="text-white" />
                      </div>
                      <span className="text-foreground/90 font-medium">{item.label}</span>
                    </>
                  )

                  const cls = cn(
                    "inline-flex items-center gap-2 px-3 py-2 bg-card/85 rounded-full border border-border/60 text-xs sm:text-sm transition-colors",
                    item.href && "hover:border-primary/50 hover:text-primary",
                    isRTL && "flex-row-reverse"
                  )

                  return item.href ? (
                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
                      {content}
                      <ExternalLink size={11} className="text-primary" />
                    </a>
                  ) : (
                    <div key={index} className={cls}>
                      {content}
                    </div>
                  )
                })}
              </div>

              <div className="space-y-4">
                {t.about.bio.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed text-sm sm:text-base bg-card/60 border border-border/50 rounded-2xl p-4 sm:p-5"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Compact Industry Experience + Subtle CV Button */}
              <div className="p-5 bg-card rounded-2xl border border-border card-glow">
                <div className={cn("flex items-start gap-3.5", isRTL && "flex-row-reverse text-right")}>
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#0EA5E9] shrink-0">
                    <Shield size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-foreground">{t.about.internship.title}</h3>
                    <p className="text-xs sm:text-sm text-primary font-semibold mt-0.5 mb-2">
                      {t.about.internship.company}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                      {t.about.internship.summary}
                    </p>
                    <div className={cn("flex flex-wrap items-center gap-4", isRTL && "flex-row-reverse")}>
                      <a
                        href="https://www.rakort.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:underline"
                      >
                        {t.about.internship.websiteLabel}
                        <ExternalLink size={13} />
                      </a>
                      <a
                        href="/abdurrahman-el-savvaf-cv.pdf"
                        download
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Download size={13} />
                        {t.about.downloadCV}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
