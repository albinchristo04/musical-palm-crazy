import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { organizationJsonLd, websiteJsonLd } from "@/lib/site";
import "./globals.css";

const headingFont = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crazytimestrategy.top"),
  title: {
    default: "Crazy Time Strategy Guides, Tips & Tools",
    template: "%s | CrazyTimeStrategy.top",
  },
  description:
    "Educational Crazy Time strategy guides, bankroll tools, RTP explainers, and casino recommendations built for smarter session planning.",
  applicationName: "CrazyTimeStrategy.top",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "CrazyTimeStrategy.top",
    title: "Crazy Time Strategy Guides, Tips & Tools",
    description:
      "Learn smarter bankroll management, bonus strategy, RTP basics, and where to play Crazy Time.",
    url: "https://crazytimestrategy.top",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crazy Time Strategy Guides, Tips & Tools",
    description:
      "Strategy hubs, calculators, RTP explainers, and high-intent casino pages for Crazy Time players.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="site-frame">
          <div className="top-strip">
            <p>
              Affiliate disclosure: some links on this site may pay us a commission if
              you open an account. Editorial content remains strategy-first.
            </p>
            <p>18+ only. Play responsibly.</p>
          </div>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
