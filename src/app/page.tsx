import Link from "next/link";
import { getFeaturedGuides, getLatestPosts, guides, tools } from "@/lib/content";
import { buildStakeLink, homepageStats } from "@/lib/site";

const popularGuides = getFeaturedGuides(4);
const latestPosts = getLatestPosts(6);
const toolPreviews = tools.slice(0, 4);

const contentPillars = [
  {
    title: "Strategy",
    text: "Core money pages and realistic session frameworks built around repeatable betting plans.",
  },
  {
    title: "Math",
    text: "RTP, odds, probability, and variance pages that keep expectations grounded.",
  },
  {
    title: "Bonuses",
    text: "Feature-specific pages covering Coin Flip, Cash Hunt, Pachinko, and Top Slot context.",
  },
  {
    title: "Tools",
    text: "Calculators that turn bankroll and session rules into something practical before play starts.",
  },
];

export default function Home() {
  return (
    <>
      <section className="section-spacing">
        <div className="page-shell">
          <div className="section-card overflow-hidden p-7 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="eyebrow">Launch Build</p>
                <h1 className="display-title mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-foreground md:text-7xl">
                  Crazy Time strategy guides, tips, and tools built around smarter bankroll
                  control
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                  Learn bankroll management, bonus strategy, RTP context, and where to play. The
                  site is built as an educational content hub with practical calculators and a
                  clear path into higher-intent casino pages.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/crazy-time-strategy" className="button-primary text-sm">
                    Read strategy guide
                  </Link>
                  <Link href="/bankroll-calculator" className="button-secondary text-sm">
                    Use calculator
                  </Link>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="section-card grid gap-4 border-white/8 bg-white/4 p-6 shadow-none">
                  <p className="text-sm uppercase tracking-[0.16em] text-muted">Launch snapshot</p>
                  <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                    {homepageStats.map((stat) => (
                      <div key={stat.label} className="rounded-3xl border border-line/80 bg-black/10 p-4">
                        <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                        <p className="mt-2 text-sm text-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-accent/25 bg-gradient-to-br from-accent-soft to-transparent p-6">
                  <p className="text-sm uppercase tracking-[0.16em] text-accent">Primary partner</p>
                  <h2 className="display-title mt-4 text-3xl font-semibold text-foreground">
                    Stake is the featured casino card at launch
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    The launch plan uses a single featured partner rather than a full comparison
                    table. That keeps the CTA flow clean across articles, tools, and branded pages.
                  </p>
                  <a
                    href={buildStakeLink("homepage-featured-card", "homepage")}
                    target="_blank"
                    rel="noreferrer sponsored"
                    className="button-primary mt-5 text-sm"
                  >
                    Try Crazy Time at Stake
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="page-shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contentPillars.map((pillar) => (
            <article key={pillar.title} className="section-card p-6">
              <p className="eyebrow">{pillar.title}</p>
              <p className="mt-4 text-sm leading-7 text-muted">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="page-shell grid gap-6">
          <div>
            <p className="eyebrow">Popular Guides</p>
            <h2 className="display-title mt-4 text-4xl font-semibold text-foreground">
              Start with the four cornerstone pages
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {popularGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/${guide.slug}`}
                className="section-card flex h-full flex-col gap-4 p-6 transition hover:border-accent/35 hover:-translate-y-0.5"
              >
                <p className="text-sm uppercase tracking-[0.16em] text-accent">{guide.eyebrow}</p>
                <h3 className="display-title text-3xl font-semibold text-foreground">
                  {guide.title}
                </h3>
                <p className="text-sm leading-7 text-muted">{guide.description}</p>
                <span className="mt-auto text-sm font-medium text-accent">Open guide</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="page-shell">
          <div className="section-card overflow-hidden p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="eyebrow">Featured Casino</p>
                <h2 className="display-title mt-4 text-4xl font-semibold text-foreground">
                  Launching with one featured Stake card, not a comparison table
                </h2>
                <div className="body-copy mt-5">
                  <p>
                    The brief called for a single featured casino at launch, so the homepage keeps
                    the recommendation simple and consistent.
                  </p>
                  <p>
                    As more affiliate partners are added later, this section can expand into a
                    structured comparison block without changing the overall homepage flow.
                  </p>
                </div>
              </div>

              <div className="section-card flex flex-col gap-4 border-white/8 bg-white/4 p-6 shadow-none">
                <div className="grid gap-3 text-sm leading-7 text-muted">
                  <p>Crypto-friendly setup for globally-oriented launch content.</p>
                  <p>Fits the site&apos;s high-intent pages, article CTAs, and branded review flow.</p>
                  <p>Simple enough to scale while the content library expands over 90 days.</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href={buildStakeLink("homepage-stake-card", "homepage")}
                    target="_blank"
                    rel="noreferrer sponsored"
                    className="button-primary text-sm"
                  >
                    Play on Stake
                  </a>
                  <Link href="/where-to-play-crazy-time" className="button-secondary text-sm">
                    Read where-to-play guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="page-shell grid gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Latest Articles</p>
              <h2 className="display-title mt-4 text-4xl font-semibold text-foreground">
                Fresh blog entries from the strategy clusters
              </h2>
            </div>
            <Link href="/blog" className="button-secondary text-sm">
              View all posts
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="section-card flex h-full flex-col gap-4 p-6 transition hover:border-accent/35 hover:-translate-y-0.5"
              >
                <p className="text-sm uppercase tracking-[0.16em] text-accent">{post.category}</p>
                <h3 className="display-title text-3xl font-semibold text-foreground">
                  {post.title}
                </h3>
                <p className="text-sm leading-7 text-muted">{post.excerpt}</p>
                <span className="mt-auto text-sm font-medium text-accent">Read article</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="page-shell grid gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Tools Preview</p>
              <h2 className="display-title mt-4 text-4xl font-semibold text-foreground">
                Four launch tools plus an RTP estimator in the library
              </h2>
            </div>
            <Link href="/rtp-calculator" className="button-secondary text-sm">
              Open RTP calculator
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {toolPreviews.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="section-card flex h-full flex-col gap-4 p-6 transition hover:border-accent/35 hover:-translate-y-0.5"
              >
                <p className="text-sm uppercase tracking-[0.16em] text-accent">{tool.eyebrow}</p>
                <h3 className="display-title text-3xl font-semibold text-foreground">
                  {tool.title}
                </h3>
                <p className="text-sm leading-7 text-muted">{tool.description}</p>
                <span className="mt-auto text-sm font-medium text-accent">Try tool</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="page-shell">
          <div className="section-card p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="eyebrow">Content Library</p>
                <h2 className="display-title mt-4 text-4xl font-semibold text-foreground">
                  Seeded for launch, structured for the full 90-day publishing plan
                </h2>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">
                  The site already includes seeded money pages, education pages, bonus hubs, tools,
                  and blog posts. The content model is route-driven so new pages can be added fast
                  as the plan expands toward the 150-page target.
                </p>
              </div>
              <div className="rounded-[2rem] border border-line/80 bg-white/4 px-6 py-5 text-center">
                <p className="text-sm uppercase tracking-[0.16em] text-muted">Current seeded pages</p>
                <p className="mt-2 text-4xl font-semibold text-foreground">
                  {guides.length + tools.length + latestPosts.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
