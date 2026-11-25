"use client"

import { useLanguage } from "@/lib/language-context"
import { Github, Mail, Phone, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_URL =
  "https://wa.me/905397389476?text=Merhaba%20Abdurrahman%20Bey%2C%20web%20sitesi%20ve%20yaz%C4%B1l%C4%B1m%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."

const socialLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: WHATSAPP_URL,
  },
  {
    icon: Phone,
    label: "Telefon",
    href: "tel:+905397389476",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/abdurrahmansf18-max",
  },
  {
    icon: Mail,
    label: "E-posta",
    href: "mailto:abdurrahmansf18@gmail.com",
  },
]

export function Footer() {
  const { t, isRTL } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="py-10 border-t border-border bg-card relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className={cn(
                "flex flex-col md:flex-row items-center justify-between gap-6",
                isRTL && "md:flex-row-reverse"
              )}
            >
              <div className={cn("text-center md:text-left", isRTL && "md:text-right")}>
                <h3 className="text-lg font-bold text-gradient">
                  {isRTL ? "عبد الرحمن رضوان" : "Abdurrahman Rıdvan"}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{t.footer.developer}</p>
              </div>

              <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-xl border border-border bg-background/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-border text-center">
              <p className="text-xs sm:text-sm text-muted-foreground">
                &copy; {currentYear} {isRTL ? "عبد الرحمن رضوان" : "Abdurrahman Rıdvan"} · {t.footer.rights}.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Quick Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-md border-t border-border px-3 py-2.5 grid grid-cols-2 gap-2.5 shadow-[0_-6px_20px_rgba(2,6,23,0.45)]">
        <a
          href="tel:+905397389476"
          className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#06B6D4] text-white text-sm font-bold"
        >
          <Phone size={16} />
          {t.footer.mobileCall}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-sm font-bold"
        >
          <MessageCircle size={16} />
          {t.footer.mobileWhatsapp}
        </a>
      </div>
    </>
  )
}
