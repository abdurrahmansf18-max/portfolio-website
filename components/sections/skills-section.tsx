"use client"

import { useLanguage } from "@/lib/language-context"
import {
  Server,
  Layout,
  Cloud,
  Database,
  Wrench,
  Code,
  Languages,
} from "lucide-react"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    key: "backend",
    icon: Server,
    skills: ["Python", "FastAPI", "C#", ".NET Core 8", "RESTful API"],
    gradient: "from-[#6366F1] to-[#22D3EE]",
  },
  {
    key: "frontend",
    icon: Layout,
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Next.js",
      "Node.js",
    ],
    gradient: "from-[#A855F7] to-[#F472B6]",
  },
  {
    key: "devops",
    icon: Cloud,
    skills: ["VPS", "VDS", "Dedicated Servers", "Docker", "Cloudflare"],
    gradient: "from-[#22C55E] to-[#06B6D4]",
  },
  {
    key: "databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Firebase"],
    gradient: "from-[#F59E0B] to-[#EF4444]",
  },
  {
    key: "tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Swagger", "Figma"],
    gradient: "from-[#6366F1] to-[#A855F7]",
  },
  {
    key: "languages",
    icon: Code,
    skills: ["C++", "C"],
    gradient: "from-[#EC4899] to-[#F472B6]",
  },
]

export function SkillsSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[var(--gradient-primary-start)]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[var(--gradient-secondary-start)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with gradient */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t.skills.title}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--gradient-primary-start)] to-[var(--gradient-primary-end)] rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.key}
                className="p-6 bg-card rounded-xl border border-border card-glow hover-scale group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={cn(
                    "flex items-center gap-3 mb-4",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <div className={cn(
                    "p-2.5 rounded-lg bg-gradient-to-br transition-all duration-300",
                    category.gradient,
                    "opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  )}>
                    <category.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {
                      t.skills.categories[
                        category.key as keyof typeof t.skills.categories
                      ]
                    }
                  </h3>
                </div>
                <div
                  className={cn("flex flex-wrap gap-2", isRTL && "justify-end")}
                >
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-muted text-sm text-muted-foreground rounded-lg border border-border skill-tag cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Spoken Languages Card */}
            <div className="p-6 bg-card rounded-xl border border-border card-glow hover-scale group">
              <div
                className={cn(
                  "flex items-center gap-3 mb-4",
                  isRTL && "flex-row-reverse"
                )}
              >
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-[#4ADE80] to-[#22D3EE] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <Languages size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t.skills.categories.spoken}
                </h3>
              </div>
              <div
                className={cn("flex flex-wrap gap-2", isRTL && "justify-end")}
              >
                <span className="px-3 py-1.5 bg-muted text-sm text-muted-foreground rounded-lg border border-border skill-tag cursor-default">
                  {t.skills.spokenLevels.turkish}
                </span>
                <span className="px-3 py-1.5 bg-muted text-sm text-muted-foreground rounded-lg border border-border skill-tag cursor-default">
                  {t.skills.spokenLevels.arabic}
                </span>
                <span className="px-3 py-1.5 bg-muted text-sm text-muted-foreground rounded-lg border border-border skill-tag cursor-default">
                  {t.skills.spokenLevels.english}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
