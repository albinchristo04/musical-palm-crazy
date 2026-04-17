import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePageView, ToolPageView } from "@/components/content/page-views";
import { getGuideBySlug, getToolBySlug, guides, tools } from "@/lib/content";
import { getCanonicalUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [...guides, ...tools].map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  const tool = getToolBySlug(slug);
  const entry = guide ?? tool;

  if (!entry) {
    return {};
  }

  return {
    title: entry.title,
    description: entry.description,
    alternates: {
      canonical: getCanonicalUrl(`/${slug}`),
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: getCanonicalUrl(`/${slug}`),
    },
  };
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (guide) {
    return <GuidePageView guide={guide} />;
  }

  const tool = getToolBySlug(slug);

  if (tool) {
    return <ToolPageView tool={tool} />;
  }

  notFound();
}
