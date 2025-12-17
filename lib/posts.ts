import { POSTS_PER_PAGE } from "@/config"
import { readFileSync } from "fs"
import matter from "gray-matter"
import path from "path"

export interface PostMeta {
  title: string
  slug: string
  date: string
  category: string
  excerpt: string
  author: string
}

export interface Post extends PostMeta {
  content: string
}

export function getPostList(): PostMeta[] {
  try {
    const indexPath = path.join(process.cwd(), "content/index.json")
    const data = JSON.parse(readFileSync(indexPath, "utf-8"))
    return data || []
  } catch (error) {
    console.error("Error loading posts:", error)
    return []
  }
}

export function getTotalPages(): number {
  const posts = getPostList()
  return Math.ceil(posts.length / POSTS_PER_PAGE)
}

export function getPostDetail(slug: string) {
  try {
    const posts = getPostList()

    const index = posts.findIndex((p) => p.slug === slug)
    if (index === -1) return null

    const meta = posts[index]

    const prev = index > 0 ? posts[index - 1] : null
    const next = index < posts.length - 1 ? posts[index + 1] : null

    const contentPath = path.join(process.cwd(), `content/posts/${slug}.md`)

    const contentRaw = readFileSync(contentPath, "utf-8")
    const { content, data } = matter(contentRaw)

    return {
      ...meta,
      ...data,
      content,
      prev,
      next,
    }
  } catch (error) {
    console.error("Error loading post:", error)
    return null
  }
}

export function getPosts(page: number) {
  try {
     const posts = getPostList()

    const totalItems = posts.length
    const totalPages = Math.ceil(totalItems / POSTS_PER_PAGE)

    const start = (page - 1) * POSTS_PER_PAGE
    const end = start + POSTS_PER_PAGE
    const items = posts.slice(start, end)
    return {
      items,
      page,
      totalPages,
      totalItems,
    }
  } catch (error) {
    console.error("Error loading posts:", error)
    return {
      items: [],
      page,
      totalPages: 0,
      totalItems: 0,
    }
  }
}