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
  },
  {
    key: "devops",
    icon: Cloud,
    skills: ["VPS", "VDS", "Dedicated Servers", "Docker", "Cloudflare"],
  },
  {
    key: "databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    key: "tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Swagger", "Figma"],
  },
  {
    key: "languages",
    icon: Code,
    skills: ["C++", "C"],
  },
]

export function SkillsSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.skills.title}
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.key}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors group"
              >
                <div
                  className={cn(
                    "flex items-center gap-3 mb-4",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon size={20} className="text-primary" />
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
                      className="px-3 py-1 bg-muted text-sm text-muted-foreground rounded-full border border-border hover:border-primary/30 hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Spoken Languages Card */}
            <div className="p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors group">
              <div
                className={cn(
                  "flex items-center gap-3 mb-4",
                  isRTL && "flex-row-reverse"
                )}
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Languages size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t.skills.categories.spoken}
                </h3>
              </div>
              <div
                className={cn("flex flex-wrap gap-2", isRTL && "justify-end")}
              >
                <span className="px-3 py-1 bg-muted text-sm text-muted-foreground rounded-full border border-border">
                  {t.skills.spokenLevels.turkish}
                </span>
                <span className="px-3 py-1 bg-muted text-sm text-muted-foreground rounded-full border border-border">
                  {t.skills.spokenLevels.arabic}
                </span>
                <span className="px-3 py-1 bg-muted text-sm text-muted-foreground rounded-full border border-border">
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
