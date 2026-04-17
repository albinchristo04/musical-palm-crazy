import Link from "next/link";
import { buildStakeLink, primaryNav } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-background/85 backdrop-blur-xl">
      <div className="page-shell flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-strong text-sm font-bold text-[#281406] shadow-lg shadow-black/20">
            CT
          </span>
          <div>
            <p className="display-title text-xl font-semibold text-foreground">
              CrazyTimeStrategy.top
            </p>
            <p className="text-sm text-muted">Guides, tools, and bankroll-first playbooks</p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-2 text-sm text-muted">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={buildStakeLink("header-cta", "navigation")}
          target="_blank"
          rel="noreferrer sponsored"
          className="button-primary text-sm"
        >
          Play on Stake
        </a>
      </div>
    </header>
  );
}
