import { Navbar } from "@/components/navbar"
import { PostCard } from "@/components/post-card"
import { SocialLinks } from "@/components/social-links"
import { getPosts, getTotalPages } from "@/lib/posts"
import Link from "next/link"
import { ArticlePage } from "./article-page"

export default async function Page() {

  return (
    <ArticlePage page={1} />
  )
}
