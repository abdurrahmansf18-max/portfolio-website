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
    <div className="group bg-background rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
      {/* Project Image Placeholder */}
      {project.image ? (
        <div className="aspect-video bg-muted overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="aspect-video bg-muted/50 flex items-center justify-center">
          <FolderOpen size={48} className="text-muted-foreground/30" />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">
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
              className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded"
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
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <ExternalLink size={14} />
              {t.projects.viewProject}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
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
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.projects.title}
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
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
              <div className="p-6 bg-muted/30 rounded-full mb-6">
                <FolderOpen size={48} className="text-muted-foreground" />
              </div>
              <p className="text-xl text-muted-foreground">
                {t.projects.placeholder}
              </p>
              <p className="text-sm text-muted-foreground/60 mt-2">
                <code className="px-2 py-1 bg-muted rounded">
                  {"// Coming soon..."}
                </code>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
