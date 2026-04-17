import { ToolPage } from "@/lib/types";

const updatedAt = "2026-04-17";

export const tools: ToolPage[] = [
  {
    slug: "bankroll-calculator",
    title: "Crazy Time Bankroll Calculator",
    description:
      "Calculate conservative, balanced, and aggressive bet sizes from a starting bankroll.",
    eyebrow: "Calculator",
    updatedAt,
    calculator: "bankroll",
    quickFacts: [
      { label: "Inputs", value: "Starting bankroll" },
      { label: "Outputs", value: "1%, 2%, and 5% bet plans" },
      { label: "Best with", value: "Bankroll strategy guide" },
      { label: "Launch status", value: "Live" },
    ],
    intro: [
      "This calculator turns a starting bankroll into three clear bet-size lanes so you can decide how much risk fits the session before the wheel starts moving.",
      "It works best when used alongside the bankroll strategy page because the percentages only matter if the rest of the session plan is already defined.",
    ],
    highlights: [
      "Low-risk, balanced, and high-risk suggestions at a glance.",
      "Clean percentage-based logic that mirrors the site plan.",
      "Useful for both short sessions and repeatable daily blocks.",
    ],
    faqs: [
      {
        question: "What bankroll percentage should I use?",
        answer:
          "Most readers start with 1% to 2% total exposure per spin and only go higher if the bankroll clearly supports it.",
      },
      {
        question: "Does this calculator guarantee a safe session?",
        answer:
          "No. It is a planning tool, not a guarantee. Session outcomes still depend on variance.",
      },
      {
        question: "What should I read after using this?",
        answer:
          "The bankroll strategy and session planner pages are the best next steps.",
      },
      {
        question: "Why does this tool matter?",
        answer:
          "Because percentage-based planning stops the session from turning into guesswork.",
      },
    ],
    relatedSlugs: ["crazy-time-bankroll-strategy", "session-planner", "crazy-time-strategy"],
  },
  {
    slug: "bet-size-calculator",
    title: "Crazy Time Bet Size Calculator",
    description:
      "Estimate a steady per-spin stake based on bankroll, risk style, and desired session length.",
    eyebrow: "Calculator",
    updatedAt,
    calculator: "bet-size",
    quickFacts: [
      { label: "Inputs", value: "Bankroll, spins, risk style" },
      { label: "Outputs", value: "Suggested base stake" },
      { label: "Best with", value: "Beginner guide" },
      { label: "Launch status", value: "Live" },
    ],
    intro: [
      "The bet size calculator is designed for readers who know their bankroll but want a clearer default spin size based on how long they expect to play.",
      "It is especially useful for first sessions because it reduces the temptation to improvise after a rough opening stretch.",
    ],
    highlights: [
      "Matches bankroll to session length and risk preference.",
      "Helps beginners turn theory into one starting number.",
      "Pairs well with rules and guide pages.",
    ],
    faqs: [
      {
        question: "Is this different from the bankroll calculator?",
        answer:
          "Yes. The bankroll calculator shows percentage lanes, while this one translates bankroll and session length into a practical default stake.",
      },
      {
        question: "Should I change the suggested stake mid-session?",
        answer:
          "Usually no. Use the output as your base plan and only reassess between session blocks.",
      },
      {
        question: "Who should use this tool most?",
        answer:
          "Beginners and returning players who want a simple base stake without overthinking the math.",
      },
      {
        question: "What should I open next?",
        answer:
          "The guide, rules, and how-it-works pages are the strongest companions.",
      },
    ],
    relatedSlugs: ["crazy-time-guide", "crazy-time-rules", "crazy-time-how-it-works"],
  },
  {
    slug: "session-planner",
    title: "Crazy Time Session Planner",
    description:
      "Build a session rules card using budget, target profit, and stop-loss limits.",
    eyebrow: "Planner",
    updatedAt,
    calculator: "session-planner",
    quickFacts: [
      { label: "Inputs", value: "Budget, target, stop-loss" },
      { label: "Outputs", value: "Session rules card" },
      { label: "Best with", value: "Tips + how-to-win pages" },
      { label: "Launch status", value: "Live" },
    ],
    intro: [
      "This planner converts loose intentions into a session rule set you can actually follow. If you know the budget, the profit goal, and the maximum acceptable loss, the tool can sketch the rest.",
      "That makes it one of the most practical pages on the site because it turns strategy into a ready-to-use checklist.",
    ],
    highlights: [
      "Creates a clear stop, target, and reset structure.",
      "Keeps the session focused even when the wheel gets noisy.",
      "Useful for both conservative and aggressive players.",
    ],
    faqs: [
      {
        question: "What is the best stop-loss for Crazy Time?",
        answer:
          "Many readers begin around 25% to 35% of session bankroll, then adjust after reviewing multiple sessions.",
      },
      {
        question: "Should the target profit be realistic or ambitious?",
        answer:
          "Realistic targets usually support better decisions because they are easier to respect once reached.",
      },
      {
        question: "Why use a session planner at all?",
        answer:
          "Because strategy only works if the session has entry and exit rules, not just bet ideas.",
      },
      {
        question: "What pages pair best with this tool?",
        answer:
          "The tips, bankroll strategy, and how-to-win guides are the strongest matches.",
      },
    ],
    relatedSlugs: ["crazy-time-tips", "crazy-time-bankroll-strategy", "crazy-time-how-to-win"],
  },
  {
    slug: "risk-level-calculator",
    title: "Crazy Time Risk Level Calculator",
    description:
      "Use bankroll, session length, and risk tolerance to classify your current strategy as conservative, balanced, or aggressive.",
    eyebrow: "Calculator",
    updatedAt,
    calculator: "risk-level",
    quickFacts: [
      { label: "Inputs", value: "Bankroll, session length, risk slider" },
      { label: "Outputs", value: "Conservative, balanced, or aggressive" },
      { label: "Best with", value: "Bonus hunt and RTP pages" },
      { label: "Launch status", value: "Live" },
    ],
    intro: [
      "Many players do not realize how aggressive their setup has become until a tool spells it out. This calculator does that by combining bankroll, session length, and self-declared risk tolerance into a simple label.",
      "It is useful before a session starts and after a strategy change when you want to check whether the plan drifted beyond what you intended.",
    ],
    highlights: [
      "Simple scoring model with plain-language output.",
      "Useful before bonus-heavy sessions and after stake changes.",
      "Good bridge between math pages and practical play.",
    ],
    faqs: [
      {
        question: "What does an aggressive result mean?",
        answer:
          "It means your current setup carries more volatility and may need tighter bankroll controls or a shorter session block.",
      },
      {
        question: "Can I use this calculator before choosing a strategy?",
        answer:
          "Yes. It is useful for testing whether a planned setup matches the kind of session you actually want.",
      },
      {
        question: "Why combine session length with risk tolerance?",
        answer:
          "Because risk is not just about stake size. It is also about how long the bankroll needs to survive.",
      },
      {
        question: "Which pages pair best with this tool?",
        answer:
          "The bonus hunt, RTP, and odds pages are the best companions.",
      },
    ],
    relatedSlugs: ["crazy-time-bonus-hunt", "crazy-time-rtp", "crazy-time-odds"],
  },
  {
    slug: "rtp-calculator",
    title: "Crazy Time RTP Calculator",
    description:
      "Estimate expected return range and session runway using bet size, bet type, and session length.",
    eyebrow: "Calculator",
    updatedAt,
    calculator: "rtp",
    quickFacts: [
      { label: "Inputs", value: "Bet size, bet type, session length" },
      { label: "Outputs", value: "Expected return and bankroll runway" },
      { label: "Best with", value: "RTP and probability pages" },
      { label: "Launch status", value: "Live" },
    ],
    intro: [
      "This RTP calculator turns theoretical return into a rough planning model for a single setup. It is not a predictor of next-spin results, but it does help show how different inputs alter the shape of a session.",
      "Use it to compare bet styles, then go back to the RTP and probability guides for context.",
    ],
    highlights: [
      "Compares base-number and bonus-oriented inputs.",
      "Useful for expectation-setting before a session starts.",
      "Extends the main four-tool launch set with a math-first utility.",
    ],
    faqs: [
      {
        question: "Does this tool tell me what I will win today?",
        answer:
          "No. It applies theoretical RTP assumptions to your input, which is useful for planning but not for predicting exact outcomes.",
      },
      {
        question: "Why is this tool useful if it is not precise?",
        answer:
          "Because it helps players understand the relationship between wager size, session length, and expected return.",
      },
      {
        question: "Should I use this before or after the bankroll calculator?",
        answer:
          "Most readers start with bankroll planning first, then use the RTP calculator for added context.",
      },
      {
        question: "What content belongs with this tool?",
        answer:
          "The RTP, odds, and probability pages are the strongest support cluster.",
      },
    ],
    relatedSlugs: ["crazy-time-rtp", "crazy-time-odds", "crazy-time-probability"],
  },
];
