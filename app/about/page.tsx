import { Navbar } from "@/components/navbar"
import { SocialLinks } from "@/components/social-links"
import { DEFAULT_METADATA } from "@/config"
import { title } from "process"

export const metadata = {
  ...DEFAULT_METADATA,
  title: `About | ${DEFAULT_METADATA.title}`
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="max-w-2xl mx-auto px-4 py-8 md:py-16">
        <section className="mb-12">
          <h1 className="text-3xl md:text-5xl font-mono font-bold tracking-tight mb-6 text-accent">About Me</h1>

          <div className="space-y-6 font-mono leading-relaxed text-muted-foreground">
            <p>
              I'm a software engineer passionate about building elegant, performant, and maintainable systems. With a
              focus on full-stack development, I specialize in crafting user-centric applications using modern web
              technologies.
            </p>

            <p>
              My journey in software engineering spans several years working on diverse projects—from real-time
              collaboration tools to data-intensive applications. I believe in writing clean code, thoughtful
              architecture, and continuous learning.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              writing about software engineering practices. This blog is my space to share insights, document learnings,
              and connect with the developer community.
            </p>
          </div>
        </section>

        <section className="mb-12 p-6 border border-border bg-secondary/30">
          <h2 className="text-xl md:text-2xl font-mono font-bold mb-6 text-foreground">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-accent mb-3 text-sm uppercase tracking-widest">Frontend</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• React & Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• State Management</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-accent mb-3 text-sm uppercase tracking-widest">Backend</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Node.js</li>
                <li>• PostgreSQL & MongoDB</li>
                <li>• API Design</li>
                <li>• System Architecture</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-12">
          <h2 className="text-lg md:text-xl font-mono font-bold mb-6 text-foreground">Get in Touch</h2>
          <p className="text-sm md:text-base text-muted-foreground font-mono mb-8">Feel free to reach out through any of these channels:</p>
          <SocialLinks />
        </section>
      </main>
    </div>
  )
}
