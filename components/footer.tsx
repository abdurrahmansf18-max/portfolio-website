"use client"

import { useLanguage } from "@/lib/language-context"
import { Github, Linkedin, Facebook, Mail } from "lucide-react"
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
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={cn(
              "flex flex-col md:flex-row items-center justify-between gap-6",
              isRTL && "md:flex-row-reverse"
            )}
          >
            {/* Brand */}
            <div className={cn("text-center md:text-left", isRTL && "md:text-right")}>
              <h3 className="text-xl font-bold text-foreground">
                Abdurrahman El Savvaf
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {t.footer.developer}
              </p>
            </div>

            {/* Social Links */}
            <div className={cn("flex items-center gap-4", isRTL && "flex-row-reverse")}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Abdurrahman El Savvaf. {t.footer.rights}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
