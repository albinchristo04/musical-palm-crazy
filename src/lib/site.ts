export const SITE_URL = "https://crazytimestrategy.top";
export const SITE_NAME = "CrazyTimeStrategy.top";

export const affiliateConfig = {
  label: "Stake",
  baseUrl: "https://stake.ac/?c=4GH1nePX",
};

export const primaryNav = [
  { href: "/crazy-time-strategy", label: "Strategy" },
  { href: "/crazy-time-rtp", label: "RTP & Odds" },
  { href: "/bankroll-calculator", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/where-to-play-crazy-time", label: "Where to Play" },
];

export const strategyHubSlugs = [
  "crazy-time-strategy",
  "crazy-time-rtp",
  "crazy-time-bankroll-strategy",
  "best-crazy-time-strategy",
];

export const homepageStats = [
  { value: "20+", label: "Seeded launch pages" },
  { value: "5", label: "Interactive tools" },
  { value: "4", label: "Core internal-link hubs" },
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  sameAs: [],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Educational Crazy Time strategy guides, calculators, RTP explainers, and casino recommendation pages.",
};

export function buildStakeLink(campaign: string, medium = "page") {
  const url = new URL(affiliateConfig.baseUrl);
  url.searchParams.set("utm_source", "site");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}

export function getCanonicalUrl(pathname = "/") {
  return new URL(pathname, SITE_URL).toString();
}

export function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value >= 100 ? 0 : 2,
  }).format(value);
}
