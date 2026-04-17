import Link from "next/link";
import { getRelatedCards } from "@/lib/content";

type RelatedLinksProps = {
  slugs: string[];
  title?: string;
};

export function RelatedLinks({
  slugs,
  title = "Explore next",
}: RelatedLinksProps) {
  const cards = getRelatedCards(slugs);

  if (cards.length === 0) {
    return null;
  }

  return (
    <section className="grid gap-4">
      <div>
        <p className="eyebrow">Internal Links</p>
        <h2 className="display-title mt-4 text-3xl font-semibold text-foreground">{title}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.slug}
            href={`/${card.slug}`}
            className="section-card flex h-full flex-col gap-3 p-5 transition hover:border-accent/35 hover:-translate-y-0.5"
          >
            <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
            <p className="text-sm leading-7 text-muted">{card.description}</p>
            <span className="mt-auto text-sm font-medium text-accent">Open page</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
