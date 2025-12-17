import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dayjs from "dayjs";

const CONTENT_DIR = path.join(process.cwd(), "content/posts");
const OUTPUT_FILE = path.join(process.cwd(), "content/index.json");

type PostIndex = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: Date;
  category?: string;
  tags?: string[];
  published?: boolean;
};

function getMarkdownFiles(dir: string): string[] {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"));
}

function generateIndex(): void {
  const files = getMarkdownFiles(CONTENT_DIR);

  const index: PostIndex[] = files
    .map((file) => {
      const filePath = path.join(CONTENT_DIR, file);
      const raw = fs.readFileSync(filePath, "utf-8");

      const { data } = matter(raw);

      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title,
        excerpt: data.excerpt,
        date: dayjs(data.date).toDate(),
        tags: data.tags,
        category: data.category,
        published: data.published,
      };
    })
    .sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0
      const db = b.date ? new Date(b.date).getTime() : 0
      return db - da
    })


  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2));

  console.log(`✅ index.json generated (${index.length} entries)`);
}

generateIndex();
