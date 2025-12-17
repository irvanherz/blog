import { MY_EMAIL, MY_GITHUB, MY_LINKEDIN, MY_X } from "@/config"

export function SocialLinks() {
  const links = [
    { name: "GitHub", url: `https://github.com/${MY_GITHUB}`, icon: "$ " },
    { name: "Twitter", url: `https://twitter.com/${MY_X}`, icon: "@ " },
    { name: "LinkedIn", url: `https://linkedin.com//${MY_LINKEDIN}`, icon: "in " },
    { name: "Email", url: `mailto:/${MY_EMAIL}`, icon: ">> " },
  ]

  return (
    <div className="space-y-3">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors group"
        >
          <span className="text-accent group-hover:translate-x-1 transition-transform inline-block">{link.icon}</span>
          {link.name}
        </a>
      ))}
    </div>
  )
}
