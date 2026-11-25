"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Phone, Mail, MapPin, Send, CircleCheck, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_URL =
  "https://wa.me/905397389476?text=Merhaba%20Abdurrahman%20Bey%2C%20i%C5%9Fletmem%20i%C3%A7in%20web%20sitesi%20ve%20yaz%C4%B1l%C4%B1m%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."

export function ContactSection() {
  const { t, isRTL } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setStatusMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const payload = (await response.json().catch(() => ({}))) as {
        error?: string
        code?: "SERVER_NOT_CONFIGURED" | "SEND_FAILED"
      }

      if (!response.ok) {
        if (payload.code === "SERVER_NOT_CONFIGURED") {
          throw new Error("SERVER_NOT_CONFIGURED")
        }
        throw new Error(payload.error || "Failed request")
      }

      setSubmitStatus("success")
      setStatusMessage(t.contact.status.success)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Contact form submit error:", error)
      setSubmitStatus("error")

      if (error instanceof Error && error.message === "SERVER_NOT_CONFIGURED") {
        setStatusMessage(t.contact.status.configError)
      } else {
        setStatusMessage(t.contact.status.error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[var(--gradient-primary-start)]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[var(--gradient-secondary-start)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={cn("mb-10 sm:mb-12", isRTL && "text-right")}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-gradient">{t.contact.title}</span>
            </h2>
            <div
              className={cn(
                "w-20 h-1 bg-gradient-to-r from-[var(--gradient-primary-start)] to-[var(--gradient-primary-end)] rounded-full mb-4",
                isRTL && "ml-auto"
              )}
            />
            <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
              {t.contact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {/* Direct WhatsApp & Phone First */}
            <div className="space-y-4">
              <h3 className={cn("text-xl font-bold text-foreground mb-4", isRTL && "text-right")}>
                {t.contact.subtitle}
              </h3>

              {/* Primary WhatsApp Card */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-4 p-5 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/15 transition-all duration-200 group",
                  isRTL && "flex-row-reverse text-right"
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0 text-white shadow-md">
                  <MessageCircle size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-emerald-400">{t.contact.whatsappTitle}</p>
                  <p className="text-base font-bold text-foreground mt-0.5">+90 539 738 94 76</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.contact.whatsappDesc}</p>
                </div>
              </a>

              {/* Direct Call Card */}
              <a
                href="tel:+905397389476"
                className={cn(
                  "flex items-center gap-4 p-4 bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-200",
                  isRTL && "flex-row-reverse text-right"
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#0EA5E9] flex items-center justify-center shrink-0 text-white">
                  <Phone size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">{t.contact.callTitle}</p>
                  <p className="text-base font-semibold text-foreground">0539 738 94 76</p>
                  <p className="text-xs text-muted-foreground">{t.contact.callDesc}</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:abdurrahmansf18@gmail.com"
                className={cn(
                  "flex items-center gap-4 p-4 bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-200",
                  isRTL && "flex-row-reverse text-right"
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#22D3EE] flex items-center justify-center shrink-0 text-white">
                  <Mail size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">{t.contact.info.email}</p>
                  <p className="text-sm sm:text-base font-medium text-foreground">abdurrahmansf18@gmail.com</p>
                </div>
              </a>

              {/* Location Card */}
              <div
                className={cn(
                  "flex items-center gap-4 p-4 bg-card rounded-2xl border border-border",
                  isRTL && "flex-row-reverse text-right"
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#22D3EE] to-[#38BDF8] flex items-center justify-center shrink-0 text-white">
                  <MapPin size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">{t.contact.info.location}</p>
                  <p className="text-sm sm:text-base font-medium text-foreground">{t.about.location}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl border border-border p-5 sm:p-6 card-glow">
              <h4 className={cn("text-lg font-bold text-foreground mb-4", isRTL && "text-right")}>
                {t.contact.formTitle}
              </h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className={cn("block text-xs sm:text-sm font-medium text-foreground mb-1.5", isRTL && "text-right")}
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    minLength={2}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={cn("block text-xs sm:text-sm font-medium text-foreground mb-1.5", isRTL && "text-right")}
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={cn("block text-xs sm:text-sm font-medium text-foreground mb-1.5", isRTL && "text-right")}
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    minLength={10}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white btn-gradient w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <Send size={17} />
                  {isSubmitting ? t.contact.status.sending : t.contact.form.send}
                </button>

                {submitStatus !== "idle" && (
                  <div
                    className={cn(
                      "text-sm rounded-xl border px-4 py-3",
                      submitStatus === "success"
                        ? "bg-emerald-500/10 border-emerald-400/40 text-emerald-300"
                        : "bg-red-500/10 border-red-400/40 text-red-300"
                    )}
                  >
                    <div className={cn("flex items-start gap-2.5", isRTL && "flex-row-reverse text-right")}>
                      {submitStatus === "success" ? (
                        <CircleCheck size={16} className="mt-0.5 shrink-0" />
                      ) : (
                        <span className="mt-0.5 h-2 w-2 rounded-full bg-red-300 shrink-0" />
                      )}
                      <span>{statusMessage}</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
