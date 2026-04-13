"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import { ExternalLink, Github, FolderOpen } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

// Project interface
interface Project {
  id: string
  kind: {
    en: string
    tr: string
    ar: string
  }
  title: {
    en: string
    tr: string
    ar: string
  }
  description: {
    en: string
    tr: string
    ar: string
  }
  technologies: string[]
  features: {
    en: string[]
    tr: string[]
    ar: string[]
  }
  images: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: "ergun-nakliyat",
    kind: {
      en: "Commercial Website",
      tr: "Kurumsal Web Sitesi",
      ar: "موقع تجاري",
    },
    title: {
      en: "Ergun Nakliyat Moving Company",
      tr: "Ergun Nakliyat Evden Eve Taşımacılık",
      ar: "شركة إرجون للنقل",
    },
    description: {
      en: "A professional moving company website focused on a clean service presentation, trust, and direct contact conversion.",
      tr: "Hizmet odaklı, güven veren ve doğrudan iletişime yönlendiren profesyonel nakliyat şirketi web sitesi.",
      ar: "موقع شركة نقل احترافي يركز على عرض الخدمات بوضوح وبناء الثقة وتحويل الزوار إلى تواصل مباشر.",
    },
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    features: {
      en: ["Responsive layout", "Service-focused sections", "Contact flow", "Production-ready structure"],
      tr: ["Duyarlı yerleşim", "Hizmet odaklı bölümler", "İletişim akışı", "Üretime hazır yapı"],
      ar: ["تصميم متجاوب", "أقسام مخصصة للخدمات", "مسار تواصل مباشر", "هيكل جاهز للإنتاج"],
    },
    images: [],
    liveUrl: "https://www.ergunnakliyatevdeneve.com/",
  },
  {
    id: "syncra",
    kind: {
      en: "Realtime Platform",
      tr: "Gerçek Zamanlı Platform",
      ar: "منصة فورية",
    },
    title: {
      en: "Syncra Community Server Build",
      tr: "Syncra Topluluk Sunucusu",
      ar: "مشروع Syncra لمجتمع التفاعل",
    },
    description: {
      en: "A full-stack community platform for real-time communication, server management, and team collaboration. Built with FastAPI, Next.js, PostgreSQL, Redis, and Docker, and prepared for global delivery through Cloudflare.",
      tr: "Gerçek zamanlı iletişim, sunucu yönetimi ve ekip iş birliği için geliştirilmiş full-stack topluluk platformu. FastAPI, Next.js, PostgreSQL, Redis ve Docker ile kuruldu; Cloudflare ile küresel yayına hazırlandı.",
      ar: "منصة مجتمع متكاملة للتواصل الفوري وإدارة الخوادم والعمل الجماعي. تم بناؤها باستخدام FastAPI و Next.js و PostgreSQL و Redis و Docker، وجاهزة للنشر العالمي عبر Cloudflare.",
    },
    technologies: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "WebSocket", "Cloudflare", "Docker"],
    features: {
      en: ["Token-based authentication and session handling", "Real-time messaging and WebSocket updates", "Servers, channels, and membership management", "Voice channels, polls, and moderation tools", "Cloudflare edge publishing and secure data flow"],
      tr: ["Token tabanlı kimlik doğrulama ve oturum yönetimi", "Gerçek zamanlı mesajlaşma ve WebSocket güncellemeleri", "Sunucu, kanal ve üyelik yönetimi", "Ses kanalları, anketler ve moderasyon araçları", "Cloudflare edge yayını ve güvenli veri akışı"],
      ar: ["المصادقة المعتمدة على الرموز وإدارة الجلسات", "المراسلة الفورية وتحديثات WebSocket", "إدارة الخوادم والقنوات والعضويات", "قنوات صوتية واستطلاعات وأدوات إشراف", "نشر عبر Cloudflare وتدفق بيانات آمن"],
    },
    images: [
      "/Syncra/Screenshot 2026-04-03 204957.png",
      "/Syncra/Screenshot 2026-04-03 205017.png",
      "/Syncra/Screenshot 2026-04-03 205024.png",
      "/Syncra/Screenshot 2026-04-03 205044.png",
      "/Syncra/Screenshot 2026-04-03 205057.png",
      "/Syncra/Screenshot 2026-04-03 205134.png",
      "/Syncra/Screenshot 2026-04-03 205148.png",
      "/Syncra/Screenshot 2026-04-03 205157.png",
      "/Syncra/Screenshot 2026-04-03 205207.png",
      "/Syncra/Screenshot 2026-04-03 205225.png",
      "/Syncra/Screenshot 2026-04-03 205316.png",
      "/Syncra/Screenshot 2026-04-03 205327.png",
    ],
    githubUrl: "https://github.com/abdurrahmansf18-max/Syncra",
  },
  {
    id: "documentation-platform",
    kind: {
      en: "Admin Dashboard",
      tr: "Yönetim Paneli",
      ar: "لوحة إدارة",
    },
    title: {
      en: "Documentation Platform",
      tr: "Dokümantasyon Platformu",
      ar: "منصة التوثيق",
    },
    description: {
      en: "A multilingual documentation platform with category-based navigation, admin content tools, search, and image management. Built with FastAPI, PostgreSQL, React, TypeScript, and Vite.",
      tr: "Kategori tabanlı gezinme, admin içerik araçları, arama ve görsel yönetimi sunan çok dilli dokümantasyon platformu. FastAPI, PostgreSQL, React, TypeScript ve Vite ile geliştirildi.",
      ar: "منصة توثيق متعددة اللغات توفر تصفحاً قائماً على التصنيفات، وأدوات إدارة المحتوى، والبحث، وإدارة الصور. تم بناؤها باستخدام FastAPI و PostgreSQL و React و TypeScript و Vite.",
    },
    technologies: ["FastAPI", "PostgreSQL", "React", "TypeScript", "Vite"],
    features: {
      en: ["Multi-level category and heading structure", "Admin dashboard for content editing", "Search-friendly public browsing", "Image upload and media handling", "i18n-ready multilingual content support"],
      tr: ["Çok seviyeli kategori ve başlık yapısı", "İçerik düzenleme için admin paneli", "Aramaya uygun public gezinti", "Görsel yükleme ve medya yönetimi", "i18n uyumlu çok dilli içerik desteği"],
      ar: ["هيكل متعدد المستويات للتصنيفات والعناوين", "لوحة تحكم لتعديل المحتوى", "تصفح عام مناسب للبحث", "رفع الصور وإدارة الوسائط", "دعم متعدد اللغات جاهز لـ i18n"],
    },
    images: [
      "/fastapi_category_management/Screenshot 2026-04-03 202132.png",
      "/fastapi_category_management/Screenshot 2026-04-03 202146.png",
      "/fastapi_category_management/Screenshot 2026-04-03 202155.png",
      "/fastapi_category_management/Screenshot 2026-04-03 202722.png",
      "/fastapi_category_management/Screenshot 2026-04-03 202748.png",
      "/fastapi_category_management/Screenshot 2026-04-03 202803.png",
      "/fastapi_category_management/Screenshot 2026-04-03 202829.png",
      "/fastapi_category_management/Screenshot 2026-04-03 202848.png",
      "/fastapi_category_management/Screenshot 2026-04-03 202900.png",
      "/fastapi_category_management/Screenshot 2026-04-03 202911.png",
    ],
    githubUrl: "https://github.com/abdurrahmansf18-max/Fastapi_category_management",
  },
]

function ProjectCard({
  project,
  projectNumber,
  isHighlighted,
  onOpenImage,
}: {
  project: Project
  projectNumber: number
  isHighlighted: boolean
  onOpenImage: (imagePath: string, title: string) => void
}) {
  const { t, language, isRTL } = useLanguage()
  const cardRef = useRef<HTMLDivElement>(null)

  const title = project.title[language]
  const kind = project.kind[language]
  const description = project.description[language]
  const features = project.features[language]

  // Scroll into view and pulse when highlighted via URL
  useEffect(() => {
    if (isHighlighted && cardRef.current) {
      const timer = setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [isHighlighted])

  return (
    <div
      id={`project-${projectNumber}`}
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-3xl border bg-card/95 shadow-[0_20px_60px_rgba(2,6,23,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_80px_rgba(6,182,212,0.12)]",
        isHighlighted
          ? "border-primary/60 shadow-[0_0_0_3px_rgba(6,182,212,0.25),0_20px_60px_rgba(2,6,23,0.25)] animate-highlight-pulse"
          : "border-border/70"
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--gradient-primary-start)] via-[var(--gradient-secondary-start)] to-[var(--gradient-primary-end)] opacity-80" />
      <div className="absolute -top-24 right-[-4rem] h-40 w-40 rounded-full bg-[var(--gradient-primary-end)]/10 blur-3xl transition-transform duration-500 group-hover:scale-125" />

      {/* Project Header */}
      <div className="p-6 pb-4 sm:p-7 sm:pb-5">
        <div className={cn("flex items-start justify-between gap-4 mb-4", isRTL && "flex-row-reverse")}>
          <div className="flex items-center gap-2 flex-wrap">
            {/* Project Number Badge */}
            <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[var(--gradient-primary-start)] to-[var(--gradient-primary-end)] text-[11px] font-bold text-white shadow-[0_4px_12px_rgba(6,182,212,0.35)] shrink-0">
              {projectNumber}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {kind}
            </div>
          </div>
          <div className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[11px] font-medium text-muted-foreground shrink-0">
            {project.images.length > 0 ? `${project.images.length} screenshots` : "Live site"}
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        <p className={cn(
          "max-w-3xl text-muted-foreground text-sm sm:text-[15px] leading-relaxed mb-4 sm:mb-5",
          isRTL && "text-right"
        )}>
          {description}
        </p>
      </div>

      {/* Technologies */}
      <div className={cn("px-6 sm:px-7 pb-4", isRTL && "text-right")}>
        <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
          {t.projects.technologies}
        </p>
        <div className={cn("flex flex-wrap gap-2.5", isRTL && "justify-end")}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/15 shadow-[0_6px_18px_rgba(6,182,212,0.08)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className={cn("px-6 sm:px-7 pb-4", isRTL && "text-right")}>
        <p className="text-xs font-semibold text-foreground/70 uppercase tracking-[0.22em] mb-3">
          {t.projects.keyFeatures}
        </p>
        <ul className="space-y-2.5">
          {features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                "flex items-start gap-3 rounded-xl border border-border/60 bg-background/30 px-3.5 py-3 text-sm text-muted-foreground transition-colors duration-300 hover:border-primary/25 hover:bg-primary/5",
                isRTL && "flex-row-reverse text-right"
              )}
            >
              <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-[var(--gradient-primary-start)] to-[var(--gradient-primary-end)] shrink-0" />
              <span className="font-medium leading-relaxed text-foreground/85">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Screenshot Gallery */}
      {project.images.length > 0 && (
        <div className="px-6 sm:px-7 pb-4">
          <div className={cn("flex items-center justify-between gap-4 mb-3", isRTL && "flex-row-reverse")}>
            <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              {t.projects.gallery}
            </p>
            <p className="text-xs text-muted-foreground">
              {t.projects.swipeHint}
            </p>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
            {project.images.map((imagePath, index) => (
              <button
                key={imagePath}
                type="button"
                onClick={() => onOpenImage(imagePath, `${title} screenshot ${index + 1}`)}
                className="relative flex-none w-[240px] sm:w-[260px] lg:w-[280px] aspect-[16/10] overflow-hidden rounded-2xl border border-border/60 bg-muted snap-start cursor-zoom-in shadow-[0_8px_24px_rgba(2,6,23,0.18)] transition-transform duration-300 hover:-translate-y-1"
              >
                <Image
                  src={encodeURI(imagePath)}
                  alt={`${title} screenshot ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 260px, 280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  {index + 1}/{project.images.length}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className={cn(
        "px-6 sm:px-7 py-4 bg-muted/35 border-t border-border/80 flex flex-wrap items-center gap-3",
        isRTL && "flex-row-reverse"
      )}>
        {/* Copy Link Button */}
        <CopyLinkButton projectNumber={projectNumber} />

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-[0_10px_24px_rgba(6,182,212,0.22)]"
          >
            <ExternalLink size={16} />
            {t.projects.viewProject}
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 border border-border bg-card text-foreground rounded-xl text-sm font-semibold hover:bg-muted transition-colors"
          >
            <Github size={16} />
            {t.projects.viewCode}
          </a>
        )}
      </div>
    </div>
  )
}

function CopyLinkButton({ projectNumber }: { projectNumber: number }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const url = `${window.location.origin}${window.location.pathname}?project=${projectNumber}`
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300",
        copied
          ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
          : "border-border/60 bg-background/60 text-muted-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5"
      )}
      title={`Copy link to Project #${projectNumber}`}
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          #{projectNumber} Link
        </>
      )}
    </button>
  )
}

export function ProjectsSection() {
  const { t, isRTL } = useLanguage()
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null)
  const [mounted, setMounted] = useState(false)
  const searchParams = useSearchParams()
  const targetProject = searchParams ? Number(searchParams.get("project")) : null

  // Fix hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section id="projects" className="py-20 md:py-32 relative overflow-hidden" />
    )
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--gradient-primary-end)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className={cn("mb-12", isRTL && "text-right")}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t.projects.title}</span>
            </h2>
            <div className={cn(
              "w-20 h-1 bg-gradient-to-r from-[var(--gradient-primary-start)] to-[var(--gradient-primary-end)] rounded-full",
              isRTL && "ml-auto"
            )} />
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {projects.map((project, index) => {
                const projectNumber = index + 1
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    projectNumber={projectNumber}
                    isHighlighted={targetProject === projectNumber}
                    onOpenImage={(src, title) => setLightbox({ src, title })}
                  />
                )
              })}
            </div>
          ) : (
            /* Placeholder when no projects */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="p-6 rounded-full bg-gradient-to-br from-[var(--gradient-primary-start)]/10 to-[var(--gradient-secondary-start)]/10 mb-6 animate-glow">
                <FolderOpen size={48} className="text-primary" />
              </div>
              <p className="text-xl text-muted-foreground mb-2">
                Projects coming soon...
              </p>
            </div>
          )}
        </div>
      </div>

      {lightbox && (
        <button
          type="button"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          aria-label="Close image preview"
        >
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl border border-border/60 bg-card shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm hover:bg-black/70"
            >
              Close
            </button>
            <div className="relative w-full h-[70vh] max-h-[80vh] bg-black">
              <Image
                src={encodeURI(lightbox.src)}
                alt={lightbox.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="px-4 py-3 border-t border-border/60 text-left">
              <p className="text-sm font-medium text-foreground">{lightbox.title}</p>
              <p className="text-xs text-muted-foreground mt-1">Click outside or the button to close</p>
            </div>
          </div>
        </button>
      )}
    </section>
  )
}
