import Link from "next/link";
import { buildStakeLink } from "@/lib/site";

const footerLinks = [
  { href: "/crazy-time-strategy", label: "Strategy Hub" },
  { href: "/crazy-time-rtp", label: "RTP Guide" },
  { href: "/crazy-time-bankroll-strategy", label: "Bankroll Guide" },
  { href: "/where-to-play-crazy-time", label: "Where to Play" },
  { href: "/blog", label: "Blog" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line/80 bg-black/15">
      <div className="page-shell grid gap-6 py-12 md:grid-cols-[1.2fr_0.8fr]">
        <div className="section-card p-6">
          <p className="eyebrow">Disclosure</p>
          <h2 className="display-title mt-4 text-3xl font-semibold text-foreground">
            Education first, affiliate second
          </h2>
          <div className="body-copy mt-4">
            <p>
              CrazyTimeStrategy.top is built as an educational site. Some links are affiliate
              links and may pay us a commission if you register.
            </p>
            <p>
              The site does not host live gameplay. It focuses on session planning, strategy,
              bankroll management, and platform guidance.
            </p>
            <p>
              18+ only. If gambling stops feeling entertaining, step away and seek local support.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="section-card p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted">Quick links</p>
            <div className="mt-4 grid gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-line/70 bg-white/3 px-4 py-3 text-sm text-muted transition hover:border-accent/40 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="section-card p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted">Primary partner</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Stake is the featured launch partner across the site&apos;s where-to-play and branded
              pages.
            </p>
            <a
              href={buildStakeLink("footer-cta", "footer")}
              target="_blank"
              rel="noreferrer sponsored"
              className="button-secondary mt-4 text-sm"
            >
              Open Stake
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
