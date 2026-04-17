"use client";

import { useState } from "react";
import { ToolKind } from "@/lib/types";
import { formatCurrency } from "@/lib/site";

type ToolWidgetsProps = {
  kind: ToolKind;
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm text-muted">
      <span>{label}</span>
      {children}
    </label>
  );
}

function Card({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <div className="rounded-3xl border border-line/80 bg-white/4 p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-foreground">{value}</p>
      <p className="mt-2 text-sm leading-6 text-muted">{helper}</p>
    </div>
  );
}

function BankrollCalculator() {
  const [bankroll, setBankroll] = useState(250);
  const low = bankroll * 0.01;
  const balanced = bankroll * 0.02;
  const aggressive = bankroll * 0.05;

  return (
    <div className="grid gap-6">
      <Field label="Starting bankroll">
        <input
          type="number"
          min={10}
          value={bankroll}
          onChange={(event) => setBankroll(Number(event.target.value) || 0)}
          className="rounded-2xl border border-line bg-background-soft px-4 py-3 text-foreground outline-none"
        />
      </Field>
      <div className="grid gap-4 md:grid-cols-3">
        <Card label="Low risk" value={formatCurrency(low)} helper="1% total exposure per spin." />
        <Card
          label="Balanced"
          value={formatCurrency(balanced)}
          helper="2% total exposure per spin."
        />
        <Card
          label="Aggressive"
          value={formatCurrency(aggressive)}
          helper="5% total exposure per spin."
        />
      </div>
    </div>
  );
}

function BetSizeCalculator() {
  const [bankroll, setBankroll] = useState(300);
  const [spins, setSpins] = useState(40);
  const [risk, setRisk] = useState("balanced");

  const multiplier = risk === "conservative" ? 0.75 : risk === "aggressive" ? 1.15 : 0.95;
  const baseStake = (bankroll / Math.max(spins, 1)) * multiplier;
  const maxExposure = baseStake * spins;

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Field label="Session bankroll">
          <input
            type="number"
            min={10}
            value={bankroll}
            onChange={(event) => setBankroll(Number(event.target.value) || 0)}
            className="rounded-2xl border border-line bg-background-soft px-4 py-3 text-foreground outline-none"
          />
        </Field>
        <Field label="Planned spins">
          <input
            type="number"
            min={10}
            value={spins}
            onChange={(event) => setSpins(Number(event.target.value) || 0)}
            className="rounded-2xl border border-line bg-background-soft px-4 py-3 text-foreground outline-none"
          />
        </Field>
        <Field label="Risk style">
          <select
            value={risk}
            onChange={(event) => setRisk(event.target.value)}
            className="rounded-2xl border border-line bg-background-soft px-4 py-3 text-foreground outline-none"
          >
            <option value="conservative">Conservative</option>
            <option value="balanced">Balanced</option>
            <option value="aggressive">Aggressive</option>
          </select>
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card
          label="Suggested base stake"
          value={formatCurrency(baseStake)}
          helper="Use this as the boring default stake you can repeat for the full block."
        />
        <Card
          label="Planned turnover"
          value={formatCurrency(maxExposure)}
          helper="Rough total staked across the planned session length."
        />
      </div>
    </div>
  );
}

function SessionPlanner() {
  const [budget, setBudget] = useState(250);
  const [target, setTarget] = useState(80);
  const [stopLoss, setStopLoss] = useState(75);

  const baseStake = Math.min(budget * 0.02, stopLoss / 20);
  const walkAwayRule =
    target > 0
      ? `Stop the session when profit reaches ${formatCurrency(target)}.`
      : "Use a realistic profit target before starting.";

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Field label="Session budget">
          <input
            type="number"
            min={10}
            value={budget}
            onChange={(event) => setBudget(Number(event.target.value) || 0)}
            className="rounded-2xl border border-line bg-background-soft px-4 py-3 text-foreground outline-none"
          />
        </Field>
        <Field label="Target profit">
          <input
            type="number"
            min={10}
            value={target}
            onChange={(event) => setTarget(Number(event.target.value) || 0)}
            className="rounded-2xl border border-line bg-background-soft px-4 py-3 text-foreground outline-none"
          />
        </Field>
        <Field label="Stop-loss">
          <input
            type="number"
            min={10}
            value={stopLoss}
            onChange={(event) => setStopLoss(Number(event.target.value) || 0)}
            className="rounded-2xl border border-line bg-background-soft px-4 py-3 text-foreground outline-none"
          />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card
          label="Default stake"
          value={formatCurrency(baseStake)}
          helper="A steady base number to start the session with."
        />
        <Card
          label="Stop rule"
          value={formatCurrency(stopLoss)}
          helper="End the session if losses reach this level."
        />
        <Card label="Profit rule" value={formatCurrency(target)} helper={walkAwayRule} />
      </div>
    </div>
  );
}

function RiskLevelCalculator() {
  const [bankroll, setBankroll] = useState(250);
  const [minutes, setMinutes] = useState(45);
  const [tolerance, setTolerance] = useState(5);

  const bankrollPressure = bankroll < 100 ? 28 : bankroll < 250 ? 18 : 8;
  const score = tolerance * 7 + minutes / 3 + bankrollPressure;
  const profile = score < 55 ? "Conservative" : score < 78 ? "Balanced" : "Aggressive";
  const guidance =
    profile === "Conservative"
      ? "Your current setup leans toward stability and longer survival."
      : profile === "Balanced"
        ? "Your plan is in the middle lane: enough action, but still structured."
        : "Your plan is carrying sharper volatility and needs tighter stop rules.";

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Field label="Session bankroll">
          <input
            type="number"
            min={10}
            value={bankroll}
            onChange={(event) => setBankroll(Number(event.target.value) || 0)}
            className="rounded-2xl border border-line bg-background-soft px-4 py-3 text-foreground outline-none"
          />
        </Field>
        <Field label="Session length (minutes)">
          <input
            type="number"
            min={10}
            value={minutes}
            onChange={(event) => setMinutes(Number(event.target.value) || 0)}
            className="rounded-2xl border border-line bg-background-soft px-4 py-3 text-foreground outline-none"
          />
        </Field>
        <Field label={`Risk tolerance: ${tolerance}/10`}>
          <input
            type="range"
            min={1}
            max={10}
            value={tolerance}
            onChange={(event) => setTolerance(Number(event.target.value))}
            className="accent-accent"
          />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card
          label="Risk profile"
          value={profile}
          helper={guidance}
        />
        <Card
          label="Score"
          value={score.toFixed(0)}
          helper="Higher scores mean the session relies more on volatility tolerance."
        />
      </div>
    </div>
  );
}

function RtpCalculator() {
  const [bankroll, setBankroll] = useState(250);
  const [betAmount, setBetAmount] = useState(5);
  const [spins, setSpins] = useState(40);
  const [betType, setBetType] = useState("balanced");

  const rtp = betType === "numbers" ? 0.965 : betType === "bonus" ? 0.942 : 0.954;
  const turnover = betAmount * spins;
  const expectedReturn = turnover * rtp;
  const theoreticalLoss = turnover - expectedReturn;
  const runway = bankroll / Math.max(betAmount, 0.01);

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Field label="Starting bankroll">
          <input
            type="number"
            min={10}
            value={bankroll}
            onChange={(event) => setBankroll(Number(event.target.value) || 0)}
            className="rounded-2xl border border-line bg-background-soft px-4 py-3 text-foreground outline-none"
          />
        </Field>
        <Field label="Bet amount">
          <input
            type="number"
            min={1}
            step={0.5}
            value={betAmount}
            onChange={(event) => setBetAmount(Number(event.target.value) || 0)}
            className="rounded-2xl border border-line bg-background-soft px-4 py-3 text-foreground outline-none"
          />
        </Field>
        <Field label="Session spins">
          <input
            type="number"
            min={10}
            value={spins}
            onChange={(event) => setSpins(Number(event.target.value) || 0)}
            className="rounded-2xl border border-line bg-background-soft px-4 py-3 text-foreground outline-none"
          />
        </Field>
        <Field label="Bet style">
          <select
            value={betType}
            onChange={(event) => setBetType(event.target.value)}
            className="rounded-2xl border border-line bg-background-soft px-4 py-3 text-foreground outline-none"
          >
            <option value="numbers">Base numbers</option>
            <option value="balanced">Balanced mix</option>
            <option value="bonus">Bonus-heavy</option>
          </select>
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card
          label="Expected return"
          value={formatCurrency(expectedReturn)}
          helper="Theoretical return based on the selected RTP profile."
        />
        <Card
          label="Expected loss"
          value={formatCurrency(theoreticalLoss)}
          helper="Theoretical loss across the planned turnover, not a guaranteed result."
        />
        <Card
          label="Estimated runway"
          value={`${Math.floor(runway)} spins`}
          helper="Approximate number of same-size spins your bankroll can support."
        />
      </div>
    </div>
  );
}

export function ToolWidgets({ kind }: ToolWidgetsProps) {
  return (
    <div className="section-card p-6 md:p-8">
      <div className="mb-6">
        <p className="eyebrow">Interactive Tool</p>
        <h2 className="display-title mt-4 text-3xl font-semibold text-foreground">
          Run the numbers before the session starts
        </h2>
      </div>

      {kind === "bankroll" && <BankrollCalculator />}
      {kind === "bet-size" && <BetSizeCalculator />}
      {kind === "session-planner" && <SessionPlanner />}
      {kind === "risk-level" && <RiskLevelCalculator />}
      {kind === "rtp" && <RtpCalculator />}
    </div>
  );
}
