import { FaqItem } from "@/lib/types";

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <article key={item.question} className="section-card p-5">
          <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
        </article>
      ))}
    </div>
  );
}
