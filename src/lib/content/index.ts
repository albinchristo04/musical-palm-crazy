import { blogPosts } from "@/lib/content/blog";
import { guides } from "@/lib/content/guides";
import { tools } from "@/lib/content/tools";
import { BlogPost, GuidePage, ToolPage } from "@/lib/types";

export { blogPosts, guides, tools };

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getContentCardBySlug(slug: string) {
  const guide = getGuideBySlug(slug);
  if (guide) {
    return { slug: guide.slug, title: guide.title, description: guide.description };
  }

  const tool = getToolBySlug(slug);
  if (tool) {
    return { slug: tool.slug, title: tool.title, description: tool.description };
  }

  const post = getBlogPostBySlug(slug);
  if (post) {
    return {
      slug: `blog/${post.slug}`,
      title: post.title,
      description: post.description,
    };
  }

  return undefined;
}

export function getLatestPosts(limit = 6) {
  return [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
}

export function getFeaturedGuides(limit = 4) {
  return guides.slice(0, limit);
}

export function getHighIntentPages() {
  return guides.filter((guide) => guide.stickyCta);
}

export function getRelatedCards(slugs: string[]) {
  return slugs
    .map((slug) => getContentCardBySlug(slug))
    .filter((item): item is NonNullable<ReturnType<typeof getContentCardBySlug>> => Boolean(item));
}

export function getAllSiteRoutes() {
  const guideRoutes = guides.map((guide) => `/${guide.slug}`);
  const toolRoutes = tools.map((tool) => `/${tool.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return ["/", "/blog", ...guideRoutes, ...toolRoutes, ...blogRoutes];
}

export function sortGuidesByTitle(items: GuidePage[]) {
  return [...items].sort((a, b) => a.title.localeCompare(b.title));
}

export function sortPostsByDate(items: BlogPost[]) {
  return [...items].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function sortToolsByTitle(items: ToolPage[]) {
  return [...items].sort((a, b) => a.title.localeCompare(b.title));
}
