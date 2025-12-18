export type BlogTopic = "fastapi" | "python-data" | "other";

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  topic: BlogTopic;
};

// Simple frontmatter parser
function parseFrontmatter(fileContent: string): {
  data: Record<string, string>;
  content: string;
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const frontmatter = match[1];
  const content = match[2];

  const data: Record<string, string> = {};
  frontmatter.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) return;
    data[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
  });

  return { data, content };
}

function inferTopic(slug: string, title: string): BlogTopic {
  const s = `${slug} ${title}`.toLowerCase();

  // Prefer explicit FastAPI detection
  if (s.includes("fastapi")) return "fastapi";

  // Data engineering signals
  if (
    s.includes("python-data") ||
    s.includes("data-engineering") ||
    s.includes("data engineering") ||
    s.includes("etl") ||
    s.includes("pandas") ||
    s.includes("pipeline") ||
    s.includes("duckdb")
  ) {
    return "python-data";
  }

  return "other";
}

// Load markdown files
const posts = Object.entries(
  import.meta.glob("../content/blog/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
})

)
  .map(([filepath, fileContent]) => {
    const { data, content } = parseFrontmatter(fileContent as string);

    const slug =
      data.slug ||
      filepath.split("/").pop()?.replace(".md", "") ||
      "";

    const title = data.title || slug.replace(/[-_]/g, " ");
    const date = data.date || "";
    const excerpt = data.excerpt || "";

    const topic = (data.topic as BlogTopic) || inferTopic(slug, title);

    return {
      title,
      slug,
      date,
      excerpt,
      content: content.trim(),
      topic,
    } satisfies BlogPost;
  })
  .sort((a, b) => {
    const aTime = Date.parse(a.date);
    const bTime = Date.parse(b.date);

    // Posts with invalid/missing dates go to the bottom
    const aValid = !Number.isNaN(aTime);
    const bValid = !Number.isNaN(bTime);

    if (aValid && bValid) return bTime - aTime;
    if (aValid && !bValid) return -1;
    if (!aValid && bValid) return 1;
    return 0;
  });

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
