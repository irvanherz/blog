import { getTotalPages } from "@/lib/posts"
import { ArticlePage } from "../../article-page"
import { Metadata } from "next"
import { DEFAULT_METADATA } from "@/config"

interface PageProps {
	params: Promise<{
		page: number
	}>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { page } = await params
   
  return {
    ...DEFAULT_METADATA,
    title: `Page ${page} | ${DEFAULT_METADATA.title}`,
  }
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
