"use client"

import { useLanguage } from "@/lib/language-context"
import { FolderOpen, ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"

// Project card component for future use
interface Project {
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
}

function ProjectCard({ project }: { project: Project }) {
  const { t, isRTL } = useLanguage()

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden card-glow tilt-card">
      {/* Project Image Placeholder */}
      {project.image ? (
        <div className="aspect-video bg-muted overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-[var(--gradient-primary-start)]/10 to-[var(--gradient-secondary-start)]/10 flex items-center justify-center">
          <FolderOpen size={48} className="text-muted-foreground/30" />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className={cn("flex flex-wrap gap-2 mb-4", isRTL && "justify-end")}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded skill-tag"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gradient font-medium hover:opacity-80 transition-opacity"
            >
              <ExternalLink size={14} className="text-primary" />
              {t.projects.viewProject}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={14} />
              {t.projects.viewCode}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const { t, isRTL } = useLanguage()

  // Empty projects array - ready for future additions
  const projects: Project[] = []

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--gradient-primary-end)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with gradient */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t.projects.title}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--gradient-primary-start)] to-[var(--gradient-primary-end)] rounded-full" />
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          ) : (
            /* Placeholder when no projects */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="p-6 rounded-full bg-gradient-to-br from-[var(--gradient-primary-start)]/10 to-[var(--gradient-secondary-start)]/10 mb-6 animate-glow">
                <FolderOpen size={48} className="text-primary" />
              </div>
              <p className="text-xl text-muted-foreground mb-2">
                {t.projects.placeholder}
              </p>
              <div className="px-4 py-2 bg-card rounded-lg border border-border mt-4">
                <code className="text-sm text-gradient-secondary font-mono">
                  {"// Coming soon..."}
                </code>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
