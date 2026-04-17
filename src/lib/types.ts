export type QuickFact = {
  label: string;
  value: string;
};

export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type GuidePage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  category: string;
  updatedAt: string;
  intro: string[];
  quickFacts: QuickFact[];
  keyTakeaways: string[];
  sections: ArticleSection[];
  faqs: FaqItem[];
  relatedSlugs: string[];
  featuredToolSlug?: string;
  stickyCta?: boolean;
};

export type ToolKind =
  | "bankroll"
  | "bet-size"
  | "session-planner"
  | "risk-level"
  | "rtp";

export type ToolPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  updatedAt: string;
  calculator: ToolKind;
  quickFacts: QuickFact[];
  intro: string[];
  highlights: string[];
  faqs: FaqItem[];
  relatedSlugs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  intro: string[];
  sections: ArticleSection[];
  faqs: FaqItem[];
  relatedSlugs: string[];
};

export type CardItem = {
  slug: string;
  title: string;
  description: string;
};
