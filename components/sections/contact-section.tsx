"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CircleCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: Phone,
    key: "phone",
    value: "+90 539 738 94 76",
    href: "tel:+905397389476",
    gradient: "from-[#06B6D4] to-[#0EA5E9]",
  },
  {
    icon: Mail,
    key: "email",
    value: "abdurrahmansf18@gmail.com",
    href: "mailto:abdurrahmansf18@gmail.com",
    gradient: "from-[#0EA5E9] to-[#22D3EE]",
  },
  {
    icon: MapPin,
    key: "location",
    value: "Ankara, Turkiye",
    href: null,
    gradient: "from-[#22D3EE] to-[#38BDF8]",
  },
]

export function ContactSection() {
  const { t, language, isRTL } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const messages = {
    en: {
      sending: "Sending...",
      success: "Your message has been sent successfully. Thank you for your kind message. I will review it carefully and get back to you as soon as possible.",
      error: "Something went wrong. Please try again.",
      configError: "Contact service is not configured yet. Please try again later.",
    },
    tr: {
      sending: "Gonderiliyor...",
      success: "Mesajiniz basariyla gonderildi. Nazik mesajiniz icin tesekkur ederim. En kisa surede inceleyip size geri donus saglayacagim.",
      error: "Bir hata olustu. Lutfen tekrar deneyin.",
      configError: "Iletisim servisi henuz yapilandirilmamis. Lutfen daha sonra tekrar deneyin.",
    },
    ar: {
      sending: "جار الارسال...",
      success: "تم ارسال رسالتك بنجاح. شكراً لرسالتك الكريمة. سأقوم بمراجعتها والرد عليك في أقرب وقت ممكن.",
      error: "حدث خطا ما. يرجى المحاولة مرة اخرى.",
      configError: "خدمة التواصل غير مهيأة بعد. يرجى المحاولة لاحقاً.",
    },
  } as const

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
      setStatusMessage(messages[language].success)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Contact form submit error:", error)
      setSubmitStatus("error")

      if (error instanceof Error && error.message === "SERVER_NOT_CONFIGURED") {
        setStatusMessage(messages[language].configError)
      } else {
        setStatusMessage(messages[language].error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[var(--gradient-primary-start)]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[var(--gradient-secondary-start)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with gradient */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t.contact.title}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--gradient-primary-start)] to-[var(--gradient-primary-end)] rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl">
              {t.contact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {t.contact.subtitle}
              </h3>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item) => (
                  <div
                    key={item.key}
                    className={cn(
                      "flex items-center gap-4 p-4 bg-card rounded-xl border border-border group hover:bg-card/80 transition-all duration-300",
                      isRTL && "flex-row-reverse text-right"
                    )}
                  >
                    {/* Icon with Rotating Glowing Border */}
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shrink-0">
                      {/* Rotating line */}
                      <div className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#06B6D4_360deg)] group-hover:bg-[conic-gradient(from_0deg,transparent_0_270deg,#fff_360deg)] transition-all duration-300" />
                      {/* Inner background */}
                      <div className={cn(
                        "absolute inset-[2px] rounded-[10px] bg-gradient-to-br flex items-center justify-center z-10",
                        item.gradient
                      )}>
                        <item.icon size={20} className="text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">
                        {t.contact.info[item.key as keyof typeof t.contact.info]}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-cyan-400 transition-colors duration-300 block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl border border-border p-4 sm:p-6 card-glow">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-foreground mb-2"
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    minLength={2}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-background border border-border rounded-lg text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-foreground mb-2"
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-background border border-border rounded-lg text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-foreground mb-2"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    minLength={10}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-background border border-border rounded-lg text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base text-white btn-gradient w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <Send size={18} />
                  {isSubmitting ? messages[language].sending : t.contact.form.send}
                </button>

                {submitStatus !== "idle" && (
                  <div
                    className={cn(
                      "text-sm rounded-lg border px-4 py-3",
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
