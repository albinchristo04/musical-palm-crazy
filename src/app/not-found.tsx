import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-spacing">
      <div className="page-shell">
        <div className="section-card p-7 md:p-10">
          <p className="eyebrow">404</p>
          <h1 className="display-title mt-5 text-5xl font-semibold text-foreground">
            The page you wanted is not in the current launch build
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Try the strategy hub, the blog, or one of the calculators to get back into the site.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="button-primary text-sm">
              Go home
            </Link>
            <Link href="/crazy-time-strategy" className="button-secondary text-sm">
              Open strategy hub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
