import Link from "next/link";
import { getContentCardBySlug } from "@/lib/content";
import { buildStakeLink, formatDisplayDate, strategyHubSlugs } from "@/lib/site";
import { BlogPost, GuidePage, ToolPage } from "@/lib/types";
import { FaqList } from "@/components/content/faq-list";
import { RelatedLinks } from "@/components/content/related-links";
import { StakeCard } from "@/components/content/stake-card";
import { ToolWidgets } from "@/components/tools/tool-widgets";

function QuickFacts({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-3xl border border-line/80 bg-white/4 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">{item.label}</p>
          <p className="mt-2 text-base font-semibold text-foreground">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

function Hero({
  eyebrow,
  title,
  description,
  dateLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dateLabel: string;
}) {
  return (
    <section className="section-spacing">
      <div className="page-shell">
        <div className="section-card overflow-hidden p-7 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="display-title mt-5 max-w-3xl text-4xl font-semibold leading-tight text-foreground md:text-6xl">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={buildStakeLink(title.toLowerCase().replace(/\s+/g, "-"), "hero")}
                  target="_blank"
                  rel="noreferrer sponsored"
                  className="button-primary text-sm"
                >
                  Play on Stake
                </a>
                <Link href="/crazy-time-strategy" className="button-secondary text-sm">
                  Read strategy hub
                </Link>
              </div>
            </div>

            <div className="section-card flex flex-col justify-between gap-4 border-white/8 bg-white/4 p-6 shadow-none">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted">Updated</p>
                <p className="mt-3 text-2xl font-semibold text-foreground">{dateLabel}</p>
              </div>
              <div className="grid gap-3 text-sm leading-7 text-muted">
                <p>Strategy-first education with clear affiliate disclosures.</p>
                <p>Built around bankroll management, RTP context, and guided internal linking.</p>
                <p>No live demo embeds. Clean route structure for scaling content over time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BodySections({
  intro,
  sections,
}: {
  intro: string[];
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
}) {
  return (
    <section className="section-spacing pt-0">
      <div className="page-shell grid gap-6">
        <div className="section-card body-copy p-6 md:p-8">
          <p className="eyebrow">Overview</p>
          <div className="mt-5">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {sections.map((section) => (
          <article key={section.title} className="section-card body-copy p-6 md:p-8">
            <h2 className="display-title text-3xl font-semibold text-foreground">{section.title}</h2>
            <div className="mt-5">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <section className="section-spacing pt-0">
      <div className="page-shell">
        <div className="section-card p-6 md:p-8">
          <p className="eyebrow">Key Takeaways</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {items.map((item) => (
              <div key={item} className="rounded-3xl border border-line/80 bg-white/4 p-5">
                <p className="text-sm leading-7 text-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyMobileCta({ slug }: { slug: string }) {
  return (
    <div className="sticky-cta-bar">
      <div>
        <p className="font-medium text-foreground">Ready to play Crazy Time?</p>
        <p className="text-muted">Open Stake after you finish the page.</p>
      </div>
      <a
        href={buildStakeLink(slug, "sticky")}
        target="_blank"
        rel="noreferrer sponsored"
        className="button-primary whitespace-nowrap px-4 py-3 text-sm"
      >
        Open Stake
      </a>
    </div>
  );
}

export function GuidePageView({ guide }: { guide: GuidePage }) {
  const featuredTool = guide.featuredToolSlug
    ? getContentCardBySlug(guide.featuredToolSlug)
    : undefined;
  const relatedSlugs = [...new Set([...strategyHubSlugs, ...guide.relatedSlugs])];

  return (
    <>
      <Hero
        eyebrow={guide.eyebrow}
        title={guide.title}
        description={guide.description}
        dateLabel={formatDisplayDate(guide.updatedAt)}
      />
      <section className="section-spacing pt-0">
        <div className="page-shell grid gap-6">
          <QuickFacts items={guide.quickFacts} />
          <KeyTakeaways items={guide.keyTakeaways} />
        </div>
      </section>
      <BodySections intro={guide.intro} sections={guide.sections} />
      <section className="section-spacing pt-0">
        <div className="page-shell grid gap-6">
          <StakeCard campaign={guide.slug} />
          {featuredTool ? (
            <div className="section-card p-6">
              <p className="eyebrow">Tool To Use Next</p>
              <h2 className="display-title mt-4 text-3xl font-semibold text-foreground">
                <Link href={`/${guide.featuredToolSlug}`}>{featuredTool.title}</Link>
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                {featuredTool.description}
              </p>
            </div>
          ) : null}
          <div className="grid gap-4">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="display-title mt-4 text-3xl font-semibold text-foreground">
                Questions readers ask next
              </h2>
            </div>
            <FaqList items={guide.faqs} />
          </div>
          <RelatedLinks slugs={relatedSlugs} />
        </div>
      </section>
      {guide.stickyCta ? <StickyMobileCta slug={guide.slug} /> : null}
    </>
  );
}

export function BlogPostView({ post }: { post: BlogPost }) {
  const relatedSlugs = [...new Set([...strategyHubSlugs, ...post.relatedSlugs])];

  return (
    <>
      <Hero
        eyebrow={post.category}
        title={post.title}
        description={post.description}
        dateLabel={formatDisplayDate(post.publishedAt)}
      />
      <section className="section-spacing pt-0">
        <div className="page-shell">
          <div className="section-card p-6 md:p-8">
            <p className="eyebrow">Post Summary</p>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-muted">{post.excerpt}</p>
          </div>
        </div>
      </section>
      <BodySections intro={post.intro} sections={post.sections} />
      <section className="section-spacing pt-0">
        <div className="page-shell grid gap-6">
          <StakeCard campaign={`blog-${post.slug}`} compact />
          <div className="grid gap-4">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="display-title mt-4 text-3xl font-semibold text-foreground">
                Related questions
              </h2>
            </div>
            <FaqList items={post.faqs} />
          </div>
          <RelatedLinks slugs={relatedSlugs} />
        </div>
      </section>
    </>
  );
}

export function ToolPageView({ tool }: { tool: ToolPage }) {
  const relatedSlugs = [...new Set([...strategyHubSlugs, ...tool.relatedSlugs])];

  return (
    <>
      <Hero
        eyebrow={tool.eyebrow}
        title={tool.title}
        description={tool.description}
        dateLabel={formatDisplayDate(tool.updatedAt)}
      />
      <section className="section-spacing pt-0">
        <div className="page-shell grid gap-6">
          <QuickFacts items={tool.quickFacts} />
          <div className="section-card body-copy p-6 md:p-8">
            <p className="eyebrow">What this tool does</p>
            <div className="mt-5">
              {tool.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-5 space-y-2 pl-5 text-sm leading-7 text-muted">
              {tool.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
          <ToolWidgets kind={tool.calculator} />
          <StakeCard campaign={tool.slug} compact />
          <div className="grid gap-4">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="display-title mt-4 text-3xl font-semibold text-foreground">
                Tool notes
              </h2>
            </div>
            <FaqList items={tool.faqs} />
          </div>
          <RelatedLinks slugs={relatedSlugs} title="Strategy pages to pair with this tool" />
        </div>
      </section>
    </>
  );
}
