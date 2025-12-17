import { Navbar } from "@/components/navbar"
import { PostCard } from "@/components/post-card"
import { SocialLinks } from "@/components/social-links"
import { getPosts, getTotalPages } from "@/lib/posts"
import Link from "next/link"
import { ArticlePage } from "../../article-page"

interface PageProps {
	params: Promise<{
		page: number
	}>
}

// app/page/[page]/page.tsx
export async function generateStaticParams() {
	return Array.from({ length: getTotalPages() }, (_, i) => ({
		page: String(i + 1),
	}))
}

export default async function Page({ params }: PageProps) {
	const page = Number((await params).page)

	return (
		<ArticlePage page={page} />
	)
}
