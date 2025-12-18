import { Navbar } from "@/components/navbar"
import { PostCard } from "@/components/post-card"
import { SocialLinks } from "@/components/social-links"
import { getPosts, getTotalPages } from "@/lib/posts"
import Link from "next/link"

type ArticlePageProps = {
	page: number
}

export function ArticlePage({ page }: ArticlePageProps) {
	const { items, totalPages, totalItems } = getPosts(page)

	return (
		<div className="min-h-screen bg-background text-foreground transition-colors duration-300">
			<Navbar />

			<main className="max-w-2xl mx-auto px-4 py-8 md:py-16">
				{/* Hero Section */}
        <section className="mb-12">
          <div className="mb-12">
            <p className="text-sm md:text-base font-mono text-foreground mb-3 tracking-wider">DEVELOPER & ENGINEER</p>
            <h1 className="text-3xl md:text-4xl font-mono font-bold tracking-tighter mb-6 leading-tight text-foreground">
              I build systems for machines and write stories to understand humans.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-mono leading-relaxed max-w-lg">
              From modern web architecture and performance engineering to life, fear, courage, and unfinished thoughts.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2 md:gap-8 py-8 border-y border-border">
            <div className="text-center">
              <p className="text-xl md:text-3xl font-mono font-bold text-foreground">{totalItems}</p>
              <p className="text-xs md:text-sm font-mono text-muted-foreground mt-1">Articles</p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-3xl font-mono font-bold text-foreground">5+</p>
              <p className="text-xs md:text-sm font-mono text-muted-foreground mt-1">Years Exp</p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-3xl font-mono font-bold text-foreground">∞</p>
              <p className="text-xs md:text-sm font-mono text-muted-foreground mt-1">Learning</p>
            </div>
          </div>
        </section>

				{/* Blog Posts Grid */}
				<section className="mb-8">
					<div className="space-y-6">
						{items.map((post) => (
							<PostCard key={post.slug} post={post} />
						))}
					</div>

					{/* Pagination Info */}
					{totalPages > 1 && (
						<section className="flex items-center justify-between gap-4 pt-8 border-t border-muted">
							<div className="w-1/3 text-left">
								{page !== 1 && (
									<Link href={page == 2 ? '/' : `/page/${page - 1}`}>
										<button
											className="px-4 py-2 font-mono text-sm bg-accent text-background rounded hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
										>
											← Previous
										</button>
									</Link>
								)}
							</div>
							<div className="w-1/3 text-center text-sm text-muted-foreground">
								<span>
									Page {page} of {totalPages}
								</span>
							</div>
							<div className="w-1/3 text-right">
								{page !== totalPages && (
									<Link href={`/page/${page + 1}`}>
										<button
											className="px-4 py-2 font-mono text-sm bg-accent text-background rounded hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
										>
											Next →
										</button>
									</Link>
								)}
							</div>
						</section>
					)}
				</section>
			</main>
		</div>
	)
}
