import { buildStakeLink } from "@/lib/site";

type StakeCardProps = {
  campaign: string;
  compact?: boolean;
};

export function StakeCard({ campaign, compact = false }: StakeCardProps) {
  return (
    <section className="section-card overflow-hidden border-accent/20 bg-gradient-to-br from-[#23140b] via-[#28180d] to-[#1a110c] p-6">
      <div className={`grid gap-5 ${compact ? "md:grid-cols-[1fr_auto]" : "md:grid-cols-[1.2fr_0.8fr]"}`}>
        <div>
          <p className="eyebrow">Recommended Casino</p>
          <h2 className="display-title mt-4 text-3xl font-semibold text-foreground">
            Stake is the site&apos;s featured place to play Crazy Time
          </h2>
          <div className="body-copy mt-4">
            <p>
              Stake fits the site&apos;s launch brief because it is widely recognized in the live
              casino space, supports crypto-friendly players, and matches the global positioning
              of the content plan.
            </p>
            <p>
              Use the strategy, RTP, and bankroll pages first, then follow through here when you
              want a cleaner path from education to action.
            </p>
          </div>
        </div>

        <div className="section-card flex flex-col justify-between gap-4 border-white/8 bg-white/4 p-5 shadow-none">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-accent">Why it fits</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
              <li>Crypto-friendly setup for flexible bankroll handling</li>
              <li>Good fit for worldwide launch-stage content</li>
              <li>Consistent anchor partner across strategy and review pages</li>
            </ul>
          </div>
          <a
            href={buildStakeLink(campaign, "affiliate")}
            target="_blank"
            rel="noreferrer sponsored"
            className="button-primary text-sm"
          >
            Play Crazy Time on Stake
          </a>
        </div>
      </div>
    </section>
  );
}
