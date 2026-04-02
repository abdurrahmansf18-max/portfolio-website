"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Facebook,
  Send,
} from "lucide-react"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: Phone,
    key: "phone",
    value: "+90 539 738 94 76",
    href: "tel:+905397389476",
    gradient: "from-[#6366F1] to-[#22D3EE]",
  },
  {
    icon: Mail,
    key: "email",
    value: "abdurrahmansf18@gmail.com",
    href: "mailto:abdurrahmansf18@gmail.com",
    gradient: "from-[#A855F7] to-[#F472B6]",
  },
  {
    icon: MapPin,
    key: "location",
    value: "Ankara, Turkiye",
    href: null,
    gradient: "from-[#22C55E] to-[#06B6D4]",
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdurrahman-el-%C5%9Favvaf-03208b3ab/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/abdurrahmansf18-max",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/abdurrahman.sf.75/",
  },
]

export function ContactSection() {
  const { t, isRTL } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {t.contact.subtitle}
              </h3>

              {/* Contact Details with gradients */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item) => (
                  <div
                    key={item.key}
                    className={cn(
                      "flex items-center gap-4 p-4 bg-card rounded-xl border border-border card-glow",
                      isRTL && "flex-row-reverse text-right"
                    )}
                  >
                    <div className={cn(
                      "p-2.5 rounded-lg bg-gradient-to-br",
                      item.gradient
                    )}>
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">
                        {t.contact.info[item.key as keyof typeof t.contact.info]}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-gradient transition-all duration-300"
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

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  {isRTL ? "تابعني على" : "Follow me on"}
                </p>
                <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card rounded-lg border border-border card-glow group"
                      aria-label={social.label}
                    >
                      <social.icon
                        size={20}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl border border-border p-6 card-glow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
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
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white btn-gradient w-full justify-center",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <Send size={18} />
                  {t.contact.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
