import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, sortPostsByDate } from "@/lib/content";
import { formatDisplayDate, getCanonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Crazy Time Blog",
  description:
    "Strategy, beginner, bonus, and math-focused blog posts supporting the core Crazy Time hubs.",
  alternates: {
    canonical: getCanonicalUrl("/blog"),
  },
};

export default function BlogIndexPage() {
  const posts = sortPostsByDate(blogPosts);

  return (
    <>
      <section className="section-spacing">
        <div className="page-shell">
          <div className="section-card p-7 md:p-10">
            <p className="eyebrow">Blog</p>
            <h1 className="display-title mt-5 max-w-4xl text-5xl font-semibold leading-tight text-foreground md:text-6xl">
              Fresh supporting articles for the strategy, beginner, bonus, and math silos
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              These posts extend the hub pages with cluster content aimed at long-tail search,
              internal linking, and launch-stage freshness.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="page-shell grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="section-card flex h-full flex-col gap-4 p-6 transition hover:border-accent/35 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.16em] text-accent">{post.category}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  {formatDisplayDate(post.publishedAt)}
                </p>
              </div>
              <h2 className="display-title text-3xl font-semibold text-foreground">
                {post.title}
              </h2>
              <p className="text-sm leading-7 text-muted">{post.excerpt}</p>
              <span className="mt-auto text-sm font-medium text-accent">Read post</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
