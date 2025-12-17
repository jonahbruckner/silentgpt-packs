export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
};

// Simple frontmatter parser
function parseFrontmatter(fileContent: string): { data: Record<string, string>; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content: fileContent };
  }
  
  const frontmatterBlock = match[1];
  const content = match[2];
  
  const data: Record<string, string> = {};
  const lines = frontmatterBlock.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      // Remove surrounding quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      data[key] = value;
    }
  }
  
  return { data, content };
}

// Load all markdown files from src/content/blog
const modules = import.meta.glob('/src/content/blog/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

// Parse all posts
const posts: BlogPost[] = Object.entries(modules).map(([filepath, rawContent]) => {
  const { data, content } = parseFrontmatter(rawContent);
  
  return {
    title: data.title || 'Untitled',
    slug: data.slug || filepath.split('/').pop()?.replace('.md', '') || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    content: content.trim(),
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug);
}
