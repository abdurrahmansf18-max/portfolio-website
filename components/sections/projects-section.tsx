"use client"

import { useLanguage } from "@/lib/language-context"
import { ExternalLink, Github, FolderOpen } from "lucide-react"
import { cn } from "@/lib/utils"

// Project interface
interface Project {
  id: string
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
  liveUrl?: string
  githubUrl?: string
}

// Sample projects data - can be expanded
const projects: Project[] = [
  {
    id: "ergun-nakliyat",
    title: {
      en: "Ergun Nakliyat Moving Company",
      tr: "Ergun Nakliyat Evden Eve Taşımacılık",
      ar: "شركة إرجون للنقل",
    },
    description: {
      en: "Professional moving company website with modern design, service showcases, and contact system. Delivered as a production-ready solution for a real client.",
      tr: "Modern tasarım, hizmet tanıtımları ve iletişim sistemi içeren profesyonel nakliyat şirketi web sitesi. Gerçek bir müşteri için üretime hazır çözüm olarak teslim edildi.",
      ar: "موقع شركة نقل احترافي بتصميم عصري وعرض الخدمات ونظام اتصال. تم تسليمه كحل جاهز للإنتاج لعميل حقيقي.",
    },
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    features: {
      en: ["Responsive Design", "SEO Optimized", "Contact Form", "Service Pages"],
      tr: ["Duyarlı Tasarım", "SEO Optimize", "İletişim Formu", "Hizmet Sayfaları"],
      ar: ["تصميم متجاوب", "محسّن لمحركات البحث", "نموذج اتصال", "صفحات الخدمات"],
    },
    liveUrl: "https://www.ergunnakliyatevdeneve.com/",
  },
]

function ProjectCard({ project }: { project: Project }) {
  const { t, language, isRTL } = useLanguage()

  const title = project.title[language]
  const description = project.description[language]
  const features = project.features[language]

  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden card-glow">
      {/* Project Header */}
      <div className="p-6 pb-4">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        <p className={cn(
          "text-muted-foreground text-sm leading-relaxed mb-4",
          isRTL && "text-right"
        )}>
          {description}
        </p>
      </div>

      {/* Technologies */}
      <div className={cn("px-6 pb-4", isRTL && "text-right")}>
        <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
          {t.projects.technologies}
        </p>
        <div className={cn("flex flex-wrap gap-2", isRTL && "justify-end")}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className={cn("px-6 pb-4", isRTL && "text-right")}>
        <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
          {t.projects.keyFeatures}
        </p>
        <ul className={cn(
          "space-y-1 text-sm text-muted-foreground",
          isRTL ? "list-none" : "list-disc list-inside"
        )}>
          {features.map((feature, index) => (
            <li key={index} className={cn(isRTL && "flex items-center gap-2 justify-end")}>
              {isRTL && <span className="w-1.5 h-1.5 bg-primary rounded-full" />}
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className={cn(
        "px-6 py-4 bg-muted/30 border-t border-border flex items-center gap-4",
        isRTL && "flex-row-reverse"
      )}>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
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
            className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-card text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors"
          >
            <Github size={16} />
            {t.projects.viewCode}
          </a>
        )}
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const { t, isRTL } = useLanguage()

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
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
    </section>
  )
}
