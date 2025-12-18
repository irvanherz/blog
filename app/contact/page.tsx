import { Navbar } from "@/components/navbar"
import { MY_EMAIL, MY_GITHUB, MY_LINKEDIN, MY_X } from "@/config"

export const metadata = {
  title: "Contact - blog.ivn.my.id",
  description: "Get in touch with me",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="max-w-2xl mx-auto px-4 py-8 md:py-16">
        <section className="mb-12">
          <h1 className="text-3xl md:text-5xl font-mono font-bold tracking-tight mb-4 text-accent">Contact</h1>
          <p className="text-lg text-muted-foreground font-mono">
            I'd love to hear from you. Reach out through any of the channels below.
          </p>
        </section>

        <section className="space-y-8">
          <div className="p-6 border border-border bg-secondary/30">
            <h2 className="text-2xl font-mono font-bold mb-4 text-foreground">Direct Channels</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-accent mb-2 text-sm uppercase tracking-widest">Email</h3>
                <a
                  href={`mailto:${MY_EMAIL}`}
                  className="text-muted-foreground font-mono hover:text-accent transition-colors break-all"
                >
                  {MY_EMAIL}
                </a>
              </div>

              <div>
                <h3 className="font-bold text-accent mb-2 text-sm uppercase tracking-widest">Twitter / X</h3>
                <a
                  href={`https://twitter.com/${MY_X}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground font-mono hover:text-accent transition-colors"
                >
                  @{MY_X}
                </a>
              </div>

              <div>
                <h3 className="font-bold text-accent mb-2 text-sm uppercase tracking-widest">LinkedIn</h3>
                <a
                  href={`https://linkedin.com/in/${MY_LINKEDIN}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground font-mono hover:text-accent transition-colors"
                >
                  linkedin.com/in/{MY_LINKEDIN}
                </a>
              </div>

              <div>
                <h3 className="font-bold text-accent mb-2 text-sm uppercase tracking-widest">GitHub</h3>
                <a
                  href={`https://github.com/${MY_GITHUB}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground font-mono hover:text-accent transition-colors"
                >
                  github.com/{MY_GITHUB}
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 border border-border bg-secondary/30">
            <h2 className="text-lg font-mono font-bold mb-4 text-foreground">Quick Response</h2>
            <p className="text-sm text-muted-foreground font-mono leading-relaxed">
              {"// "}I typically respond to emails and messages within 24-48 hours. For urgent matters or specific
              collaboration inquiries, feel free to reach out on LinkedIn or Twitter.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
