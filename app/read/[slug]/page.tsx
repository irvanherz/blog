import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import { getPostDetail, getPostList } from "@/lib/posts"
import { Metadata } from "next"
import { DEFAULT_METADATA } from "@/config"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { slug } = await params
  const post = await getPostDetail(slug) // build-time fetch

  return {
    ...DEFAULT_METADATA,
    title: post?.title ? `${post.title} | ${DEFAULT_METADATA.title}` : DEFAULT_METADATA.title,
    description: post?.excerpt || DEFAULT_METADATA.description,
  }
}

export function generateStaticParams() {
  const posts = getPostList()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params

  const post = getPostDetail(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Find adjacent posts for navigation
  const prevPost = post.prev
  const nextPost = post.next

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="max-w-2xl mx-auto px-4 py-12 md:py-16">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors mb-12"
        >
          <span>{"←"}</span>
          <span>back to posts</span>
        </Link>

        {/* Post Header */}
        <article>
          <header className="mb-8 pb-8 border-b border-border">
            <h1 className="text-4xl md:text-5xl font-mono font-bold tracking-tight mb-4 text-accent text-pretty">
              {post.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <time className="text-sm font-mono text-muted-foreground">{formattedDate}</time>
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-mono rounded-sm">
                  {post.category}
                </span>
              </div>
            </div>
          </header>

          <div className="prose prose-invert max-w-none mb-16">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }: any) => (
                  <h1 className="text-3xl font-bold mt-8 mb-4 text-accent font-mono" {...props} />
                ),
                h2: ({ node, ...props }: any) => (
                  <h2 className="text-2xl font-bold mt-6 mb-3 text-foreground font-mono" {...props} />
                ),
                h3: ({ node, ...props }: any) => <h3 className="text-lg font-bold mt-4 mb-2 font-mono" {...props} />,
                p: ({ node, ...props }: any) => <p className="mb-4 leading-relaxed font-mono text-sm" {...props} />,
                ul: ({ node, ...props }: any) => <ul className="ml-6 mb-4 list-disc font-mono text-sm" {...props} />,
                li: ({ node, ...props }: any) => <li className="mb-2" {...props} />,
                code: ({ node, inline, ...props }: any) =>
                  inline ? (
                    <code className="bg-secondary/50 px-2 py-1 rounded text-accent font-mono text-xs" {...props} />
                  ) : (
                    <code
                      className="block bg-secondary/50 p-4 rounded-sm overflow-x-auto mb-4 font-mono text-xs"
                      {...props}
                    />
                  ),
                pre: ({ node, ...props }: any) => <pre className="mb-4" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Post Navigation */}
          {(prevPost || nextPost) && (
            <div className="border-t border-border pt-12 mt-16">
              <nav className="grid grid-cols-2 gap-8">
                {prevPost ? (
                  <Link
                    href={`/read/${prevPost.slug}`}
                    className="group flex flex-col gap-2 p-4 rounded-sm border border-border hover:border-accent hover:bg-secondary/5 transition-all"
                  >
                    <span className="text-xs font-mono text-muted-foreground">← Previous</span>
                    <span className="font-mono font-bold text-foreground group-hover:text-accent transition-colors">
                      {prevPost.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <Link
                    href={`/read/${nextPost.slug}`}
                    className="group flex flex-col gap-2 p-4 rounded-sm border border-border hover:border-accent hover:bg-secondary/5 transition-all text-right"
                  >
                    <span className="text-xs font-mono text-muted-foreground">Next →</span>
                    <span className="font-mono font-bold text-foreground group-hover:text-accent transition-colors">
                      {nextPost.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </nav>
            </div>
          )}
        </article>
      </main>
    </div>
  )
}
