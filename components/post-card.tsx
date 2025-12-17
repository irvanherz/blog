import { PostMeta } from "@/lib/posts"
import Link from "next/link"

export function PostCard({ post }: { post: PostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <Link className="block group border border-border rounded-sm p-6 hover:border-accent transition-all hover:bg-secondary/5"  href={`/read/${post.slug}`}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <span className="text-lg font-mono font-bold text-foreground hover:text-accent transition-colors group-hover:translate-x-1 transform transition-transform">
            {post.title}
          </span>
          <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{formattedDate}</span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-mono rounded-sm">
            {post.category}
          </span>
          <span className="text-xs font-mono text-accent group-hover:opacity-100 opacity-0 transition-opacity">
            {"→ read"}
          </span>
        </div>
      </div>
    </Link>
  )
}
