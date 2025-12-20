import { Navbar } from "@/components/navbar"
import Link from "next/link"

export const metadata = {
  title: "Projects - blog.ivn.my.id",
  description: "Featured projects and work showcasing software development",
  other: {
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
}

export const projects: Project[] = [
  {
    title: "Lomba.asia",
    description:
      "A comprehensive platform where users could discover and participate in a wide range of contests, competitions, and challenges across various domains.",
    technologies: ["PHP", "MySQL", "UX Design"],
    link: "https://web.archive.org/web/20190408225616/http://lomba.asia/",
  },
  {
    title: "Gatotkaca Support Resistance Trendline",
    description:
      "A powerful MT5 indicator that simplifies the detection of support, resistance, and trendlines in the world of trading.",
    technologies: ["MQL5", "Trading Strategies"],
    link: "https://www.mql5.com/en/market/product/85204",
  },
  {
    title: "Literasiin",
    description: "A web-based platform designed as a creative haven for writers and readers, inspired by Wattpad.",
    technologies: ["NestJS", "React", "PostgreSQL"],
    link: "https://literasiin.com",
  },
  {
    title: "Sukalibur",
    description:
      "Trip marketplace that simplifies travel discovery and planning. Built with React, ASP.NET Core, and GraphQL. It leverages pgvector and SBERT for intelligent search and personalized recommendations.",
    technologies: ["React", "ASP.NET Core", "GraphQL", "pgvector", "SBERT"],
    link: "https://github.com/irvanherz/sukalibur",
  },
  {
    title: "use-awaitable-component",
    description:
      "React hook for awaiting component callback. Simplifies handling asynchronous interactions in React components.",
    technologies: ["React", "TypeScript", "Custom Hooks"],
    link: "https://github.com/irvanherz/use-awaitable-component",
  },
  {
    title: "Gourze",
    description:
      "A high-performance course marketplace backend written in Go, designed to empower educators and learners by providing a scalable and efficient infrastructure.",
    technologies: ["Go", "Gin", "GORM"],
    link: "https://github.com/irvanherz/gourze",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="max-w-2xl mx-auto px-4 py-8 md:py-16">
        <section className="mb-12">
          <h1 className="text-3xl md:text-5xl font-mono font-bold tracking-tight mb-4 text-accent">Projects</h1>
          <p className="text-base md:text-lg text-muted-foreground font-mono">
            A selection of projects I've built exploring different technologies and paradigms.
          </p>
        </section>

        <section className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="p-6 border border-border bg-secondary/30 hover:border-accent transition-colors"
            >
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-3">{project.title}</h2>
              <p className="text-muted-foreground font-mono mb-4 leading-relaxed text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-secondary border border-border rounded-sm text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-foreground hover:text-muted-foreground transition-colors underline"
              >
                View Project →
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
