"use client"

import { useLanguage } from "@/lib/language-context"
import { Github, Linkedin, Facebook, Mail, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/abdurrahmansf18-max",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdurrahman-el-%C5%9Favvaf-03208b3ab/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/abdurrahman.sf.75/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:abdurrahmansf18@gmail.com",
  },
]

export function Footer() {
  const { t, isRTL } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border bg-card relative overflow-hidden">
      {/* Subtle gradient decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-[var(--gradient-primary-start)]/5 to-transparent blur-[80px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={cn(
              "flex flex-col md:flex-row items-center justify-between gap-6",
              isRTL && "md:flex-row-reverse"
            )}
          >
            {/* Brand with gradient */}
            <div className={cn("text-center md:text-left", isRTL && "md:text-right")}>
              <h3 className="text-xl font-bold text-gradient">
                {isRTL ? "عبد الرحمن الشواف" : "Abdurrahman El Savvaf"}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {t.footer.developer}
              </p>
            </div>

            {/* Social Links with hover effects */}
            <div className={cn("flex items-center gap-4", isRTL && "flex-row-reverse")}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300 card-glow"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright with heart */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground inline-flex items-center gap-1.5 justify-center flex-wrap">
              &copy; {currentYear} {isRTL ? "عبد الرحمن الشواف" : "Abdurrahman El Savvaf"}. {t.footer.rights}.
              <span className="inline-flex items-center gap-1">
                Built with <Heart size={14} className="text-primary fill-primary animate-pulse" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
