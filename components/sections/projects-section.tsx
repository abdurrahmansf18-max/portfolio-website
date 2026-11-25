"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import { ExternalLink, Github, CheckCircle2, Sparkles } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Project {
  id: string
  featured?: boolean
  kind: { tr: string; en: string; ar: string }
  title: { tr: string; en: string; ar: string }
  description: { tr: string; en: string; ar: string }
  technologies: string[]
  features: { tr: string[]; en: string[]; ar: string[] }
  images: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: "ergun-nakliyat",
    featured: true,
    kind: {
      tr: "Gerçek Müşteri Sitesi · Aktif",
      en: "Real Client Website · Active",
      ar: "موقع عميل فعلي · نشط",
    },
    title: {
      tr: "Ergün Nakliyat — Evden Eve Taşımacılık",
      en: "Ergün Nakliyat Moving Company",
      ar: "شركة Ergün Nakliyat للنقل",
    },
    description: {
      tr: "Müşterilerin telefonundan tek tıkla arama ve WhatsApp üzerinden fiyat teklifi alabilmesi için hazırladığım kurumsal web sitesi. Kendi VPS sunucumda konteyner altyapısıyla barındırıyor, 1 yıldır kesintisiz yayın ve teknik bakım desteği veriyorum.",
      en: "A live moving company website built to turn visitors into direct phone calls and WhatsApp inquiries. Hosted in a container on my own VPS server with 1 year of continuous uptime and ongoing support.",
      ar: "موقع رسمي لشركة نقل أثاث مصمم لتحويل الزوار إلى مكالمات مباشرة وطلبات تسعير عبر واتساب. مستضاف على خادمي الخاص VPS منذ عام كامل مع صيانة مستمرة.",
    },
    technologies: ["Mobil Uyumlu", "Kendi VPS Sunucumda", "SSL Güvenlik", "Hızlı İletişim"],
    features: {
      tr: [
        "1 yıldır kendi sunucumda kesintisiz yayında ve aktif olarak müşteri alıyor",
        "Telefon ve bilgisayarda saniyeler içinde açılan sade, güven veren tasarım",
        "Hizmetlerin net sunumu ve tek tıkla telefon/WhatsApp yönlendirmesi",
        "Yıllık yenileme ve güncelleme desteğiyle uzun vadeli müşteri ilişkisi",
      ],
      en: [
        "Live on my own VPS server for 1 full year with active customer inquiries",
        "Fast, trustworthy layout optimized for mobile and desktop",
        "Clear service presentation with direct phone & WhatsApp conversion",
        "Ongoing yearly maintenance and direct support",
      ],
      ar: [
        "يعمل على خادمي الخاص منذ عام كامل ويستقبل عملاء فعليين",
        "تصميم سريع وواضح متوافق تماماً مع الجوال والكمبيوتر",
        "عرض منظم للخدمات مع تحويل مباشر للاتصال وواتساب",
        "دعم فني وتحديثات سنوية مستمرة",
      ],
    },
    images: [],
    liveUrl: "https://www.ergunnakliyatevdeneve.com/",
  },
  {
    id: "syncra",
    kind: {
      tr: "Özel Yazılım · Ekip İletişim Sistemi",
      en: "Custom Software · Realtime Platform",
      ar: "برمجية خاصة · منصة تواصل فورية",
    },
    title: {
      tr: "Syncra — Anlık İletişim ve Yönetim Platformu",
      en: "Syncra Team & Community Platform",
      ar: "منصة Syncra للتواصل وإدارة الفرق",
    },
    description: {
      tr: "Sadece tanıtım sitesi değil; işletmelerin kendi içinde kullanabileceği anlık mesajlaşma, oda/ekip yönetimi ve üyelik sistemleri gibi kapsamlı web yazılımları da geliştiriyorum.",
      en: "Beyond business websites, I also engineer complete full-stack web applications with real-time messaging, role management, and secure databases.",
      ar: "إلى جانب المواقع التعريفية، أطور أنظمة ويب متكاملة تشمل المراسلة الفورية وإدارة الفرق والصلاحيات.",
    },
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "Cloudflare"],
    features: {
      tr: [
        "Güvenli kullanıcı girişi ve rol/yetki yönetimi",
        "Anlık mesajlaşma, kanallar ve anket sistemi",
        "Kendi sunucunuzda çalışmaya uygun ölçeklenebilir mimari",
      ],
      en: [
        "Secure authentication and role management",
        "Real-time messaging, channels, and polls",
        "Production-ready containerized server deployment",
      ],
      ar: [
        "تسجيل دخول آمن وإدارة الصلاحيات",
        "مراسلة فورية وقنوات واستطلاعات",
        "بنية جاهزة للتشغيل على الخوادم الخاصة",
      ],
    },
    images: [
      "/Syncra/Screenshot 2026-04-03 204957.png",
      "/Syncra/Screenshot 2026-04-03 205017.png",
      "/Syncra/Screenshot 2026-04-03 205024.png",
      "/Syncra/Screenshot 2026-04-03 205044.png",
      "/Syncra/Screenshot 2026-04-03 205057.png",
    ],
    githubUrl: "https://github.com/abdurrahmansf18-max/Syncra",
  },
  {
    id: "documentation-platform",
    kind: {
      tr: "Özel Yazılım · Yönetim Paneli",
      en: "Custom Software · Admin Panel",
      ar: "برمجية خاصة · لوحة إدارة",
    },
    title: {
      tr: "İçerik ve Kategori Yönetim Paneli",
      en: "Content & Category Management Panel",
      ar: "لوحة إدارة المحتوى والتصنيفات",
    },
    description: {
      tr: "Firmaların kendi ürünlerini, hizmetlerini, görsellerini ve belgelerini teknik bilgi gerekmeden kolayca ekleyip düzenleyebileceği çok dilli yönetim paneli.",
      en: "A multilingual admin dashboard allowing teams to manage categories, articles, search, and media uploads easily without coding.",
      ar: "لوحة تحكم متعددة اللغات تتيح للشركات إضافة وتعديل الخدمات والصور والمستندات بسهولة بدون خبرة برمجية.",
    },
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    features: {
      tr: [
        "Kod bilmeden içerik, kategori ve fotoğraf güncelleme ekranı",
        "Hızlı arama ve düzenli menü yapısı",
        "Türkçe, İngilizce ve Arapça çok dilli yapıya uygun",
      ],
      en: [
        "Easy admin dashboard for content and image updates",
        "Fast search and multi-level category navigation",
        "Multilingual content support (TR / EN / AR)",
      ],
      ar: [
        "لوحة تحكم سهلة لتعديل المحتوى والصور بدون برمجة",
        "بحث سريع وتنظيم متعدد المستويات",
        "دعم متعدد اللغات (العربية والتركية والإنجليزية)",
      ],
    },
    images: [
      "/fastapi_category_management/Screenshot 2026-04-03 202132.png",
      "/fastapi_category_management/Screenshot 2026-04-03 202146.png",
      "/fastapi_category_management/Screenshot 2026-04-03 202155.png",
      "/fastapi_category_management/Screenshot 2026-04-03 202722.png",
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
        "group relative overflow-hidden rounded-3xl border bg-card/95 shadow-[0_20px_50px_rgba(2,6,23,0.22)] transition-all duration-300 hover:-translate-y-1",
        project.featured
          ? "xl:col-span-2 border-emerald-500/45 shadow-[0_0_0_1px_rgba(16,185,129,0.2),0_20px_50px_rgba(2,6,23,0.28)]"
          : isHighlighted
            ? "border-primary/60 animate-highlight-pulse"
            : "border-border/70 hover:border-primary/35"
      )}
    >
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1",
          project.featured
            ? "bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500"
            : "bg-gradient-to-r from-[var(--gradient-primary-start)] via-[var(--gradient-secondary-start)] to-[var(--gradient-primary-end)] opacity-80"
        )}
      />

      {/* Project Header */}
      <div className="p-6 pb-4 sm:p-7 sm:pb-5">
        <div className={cn("flex items-start justify-between gap-3 flex-wrap mb-4", isRTL && "flex-row-reverse")}>
          <div className={cn("flex items-center gap-2 flex-wrap", isRTL && "flex-row-reverse")}>
            {project.featured ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 px-3 py-1 text-xs font-bold text-emerald-400">
                <Sparkles size={13} />
                {t.projects.featuredBadge}
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-semibold text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {kind}
              </span>
            )}
          </div>
          <div className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground shrink-0">
            {project.images.length > 0
              ? `${project.images.length} ${t.projects.screenshotsLabel}`
              : t.projects.liveBadge}
          </div>
        </div>

        <h3 className={cn("text-xl sm:text-2xl font-extrabold tracking-tight text-foreground mb-3", isRTL && "text-right")}>
          {title}
        </h3>
        <p className={cn("max-w-3xl text-muted-foreground text-sm sm:text-[15px] leading-relaxed mb-4", isRTL && "text-right")}>
          {description}
        </p>
      </div>

      {/* Key Benefits */}
      <div className={cn("px-6 sm:px-7 pb-4", isRTL && "text-right")}>
        <p className="text-xs font-bold text-foreground/75 uppercase tracking-wider mb-3">
          {t.projects.keyFeatures}
        </p>
        <ul className={cn("grid gap-2.5", project.featured ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1")}>
          {features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                "flex items-start gap-2.5 rounded-xl border border-border/60 bg-background/40 px-3.5 py-2.5 text-sm text-foreground/90",
                isRTL && "flex-row-reverse text-right"
              )}
            >
              <CheckCircle2 size={16} className={cn("mt-0.5 shrink-0", project.featured ? "text-emerald-400" : "text-primary")} />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className={cn("px-6 sm:px-7 pb-4", isRTL && "text-right")}>
        <div className={cn("flex flex-wrap gap-2", isRTL && "justify-end")}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/15"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Screenshot Gallery */}
      {project.images.length > 0 && (
        <div className="px-6 sm:px-7 pb-4">
          <div className={cn("flex items-center justify-between gap-4 mb-2.5", isRTL && "flex-row-reverse")}>
            <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              {t.projects.gallery}
            </p>
            <p className="text-xs text-muted-foreground">{t.projects.swipeHint}</p>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
            {project.images.map((imagePath, index) => (
              <button
                key={imagePath}
                type="button"
                onClick={() => onOpenImage(imagePath, `${title} (${index + 1})`)}
                className="relative flex-none w-[230px] sm:w-[260px] aspect-[16/10] overflow-hidden rounded-2xl border border-border/60 bg-muted snap-start cursor-zoom-in shadow-md transition-transform duration-300 hover:-translate-y-1"
              >
                <Image
                  src={encodeURI(imagePath)}
                  alt={`${title} ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 230px, 260px"
                  className="object-cover"
                />
                <div className="absolute left-2.5 top-2.5 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold text-white">
                  {index + 1}/{project.images.length}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div
        className={cn(
          "px-6 sm:px-7 py-4 bg-muted/35 border-t border-border/80 flex flex-wrap items-center gap-3",
          isRTL && "flex-row-reverse"
        )}
      >
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 shadow-md",
              project.featured
                ? "bg-emerald-600 hover:bg-emerald-500"
                : "bg-primary hover:opacity-90"
            )}
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
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-border bg-card text-foreground rounded-xl text-sm font-semibold hover:bg-muted transition-colors"
          >
            <Github size={16} />
            {t.projects.viewCode}
          </a>
        )}
        <CopyLinkButton projectNumber={projectNumber} />
      </div>
    </div>
  )
}

function CopyLinkButton({ projectNumber }: { projectNumber: number }) {
  const { t } = useLanguage()
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
        "inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200",
        copied
          ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
          : "border-border/60 bg-background/60 text-muted-foreground hover:border-primary/30 hover:text-primary"
      )}
    >
      {copied ? t.projects.copied : t.projects.copyLink}
    </button>
  )
}

export function ProjectsSection() {
  const { t, isRTL } = useLanguage()
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null)
  const [mounted, setMounted] = useState(false)
  const searchParams = useSearchParams()
  const targetProject = searchParams ? Number(searchParams.get("project")) : null

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <section id="projects" className="py-16 md:py-28 relative overflow-hidden" />
  }

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--gradient-primary-end)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={cn("mb-10 sm:mb-12", isRTL && "text-right")}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-gradient">{t.projects.title}</span>
            </h2>
            <div
              className={cn(
                "w-20 h-1 bg-gradient-to-r from-[var(--gradient-primary-start)] to-[var(--gradient-primary-end)] rounded-full mb-4",
                isRTL && "ml-auto"
              )}
            />
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
              {t.projects.subtitle}
            </p>
          </div>

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
        </div>
      </div>

      {lightbox && (
        <button
          type="button"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          aria-label={t.projects.closePreview}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl border border-border/60 bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-black/80"
            >
              {t.projects.closePreview}
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
              <p className="text-xs text-muted-foreground mt-1">{t.projects.closeHint}</p>
            </div>
          </div>
        </button>
      )}
    </section>
  )
}
