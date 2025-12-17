export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background text-foreground transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm font-mono text-muted-foreground">
            &copy; {currentYear} Irvan. All rights reserved.
          </p>
          <p className="text-xs font-mono text-muted-foreground">Crafted with code & curiosity</p>
        </div>
      </div>
    </footer>
  )
}
