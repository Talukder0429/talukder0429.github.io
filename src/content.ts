export const email = "arnob_talukder@outlook.com";
export const github = "https://github.com/talukder0429";
export const resumeUrl = "/Arnob_Talukder_Resume.pdf";

export const intro =
  "Senior software engineer at Lucova (Nown POS). I build point-of-sale, campus dining, and AI analytics systems for food service providers.";

export const impact: { value: string; label: string }[] = [
  {
    value: "30% → 0.5%",
    label:
      "unanswered questions after rebuilding text-to-SQL as a Bedrock agent",
  },
  {
    value: "−15%",
    label: "billed CPU after migrating the backend from Java 8 to Java 25",
  },
  {
    value: "−20%",
    label: "CI time from unifying three apps in a pnpm monorepo",
  },
  {
    value: "170+",
    label: "pull requests reviewed while mentoring 2 junior engineers",
  },
];

export type Job = {
  dates: string;
  title: string;
  company: string;
  note?: string;
  groups: { label?: string; bullets: string[] }[];
};

export const jobs: Job[] = [
  {
    dates: "Oct 2021 – Present",
    title: "Senior Software Engineer",
    company: "Lucova Inc. (Nown POS)",
    note: "Promoted from Junior to Intermediate to Senior",
    groups: [
      {
        label: "ai-analytics/",
        bullets: [
          "Architected the AI analytics chat backend in TypeScript with Hono, Drizzle ORM, PostgreSQL, and Redis",
          "Cut LLM token usage 45% per report query by compressing the MySQL schema 85–90%",
        ],
      },
      {
        label: "pos-platform/",
        bullets: [
          "Eliminated menu load delays with two-tier Redis and client-side caching",
          "Rebuilt the Windows POS installer, nearly eliminating install support tickets",
        ],
      },
      {
        label: "leadership/",
        bullets: [
          "Championed the Java 25 and monorepo modernization, convincing skeptical leadership with cost data",
        ],
      },
    ],
  },
  {
    dates: "Feb 2020 – Present",
    title: "Freelance Software Developer",
    company: "Self-Employed",
    groups: [
      {
        bullets: [
          "Chittagong Association of Canada event platform, tracking $8,400+ in yearly ticket sales",
          "React Native QR check-in app and admin dashboard for event payments and attendance",
          "Kennedy Tax & Accounting site rebuild: 65% more visits, 2.5× faster first contentful paint",
        ],
      },
    ],
  },
];

export const project = {
  title: "Star Ocean 3 Item Creation Calculator",
  url: "https://talukder0429.github.io/StarOcean3Tools",
  description:
    "A crafting cost planner that predicts every item cost from team modifiers across 401 items and 7 professions, with O(n) price overlap detection.",
  stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
};

export const stack = [
  "Java",
  "TypeScript",
  "React",
  "Node.js",
  "Hono",
  "Electron",
  "AWS Bedrock",
  "Lambda",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "GitHub Actions",
];

export const about =
  "Off the clock I'm on a road bike when the weather allows, at a board game table with friends, or reading about astrophysics. Kerbal Space Program is still one of my favourite games, and I follow computer hardware closely.";

export type Note = {
  file: string;
  title: string;
  teaser: string;
  sections: { heading: string; body: string[] }[];
};

export const notes: Note[] = [
  {
    file: "ai-text-to-sql.md",
    title: "Making an analytics chatbot actually answer",
    teaser:
      "Unanswered questions went from 30% to 0.5% by treating the model like a junior engineer: smaller context, explicit rules, and a way to see its own errors.",
    sections: [
      {
        heading: "Problem",
        body: [
          "Managers ask Nown Dash about their sales in plain English, and the assistant answers by writing SQL against the reporting database. The first pipeline left almost a third of questions unanswered, and the full schema was too large to send with every request.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "Built a generator that reads the live database and writes a compressed schema, 85–90% smaller. The model could only use it once I added a legend for the abbreviations.",
          "Removed legacy and look-alike tables (29 down to 14), with a check that no remaining join path pointed at a removed table.",
          "Wrote the conventions the schema can't show as explicit rules, join paths, and worked examples.",
          "Logged every model call with its prompt, SQL, tokens, latency, and outcome, so failures could be sorted instead of guessed at.",
          "Replaced the fixed pipeline with a tool-using agent on AWS Bedrock that decides when to query, sees the conversation, and gets database errors back so it can fix its own SQL, for up to five rounds.",
        ],
      },
      {
        heading: "Result",
        body: [
          "Unanswered questions fell from 30% to 0.5%, 1 of 218 after the agent shipped. LLM token usage dropped 45% per report query.",
        ],
      },
      {
        heading: "Lesson",
        body: [
          "Answered is not the same as correct. The call logs made the next class of problems visible: questions that returned valid SQL but the wrong answer.",
        ],
      },
    ],
  },
  {
    file: "modernization.md",
    title: "Selling a migration nobody asked for",
    teaser:
      "Leadership didn't see the value in upgrading software that worked. Cost data changed that.",
    sections: [
      {
        heading: "Problem",
        body: [
          "The POS ran on Java 8, an AngularJS client, and an Electron wrapper in a separate repo, with slow builds and manual release steps. Upgrading had no visible feature payoff, so it kept losing to roadmap work.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "Made the case in leadership's terms: billed CPU, CI minutes, and developer hours, instead of developer experience alone.",
          "Shipped it in independent steps so nothing blocked a release: codebase-wide formatting, a front-end build and cache-busting refactor, a pnpm monorepo with the Electron wrapper moved in, a hot-reload dev server, Node 24, and finally Java 8 to Java 25.",
          "Cleared the dependency debt the Java upgrade exposed first, such as Jackson 1.x and commons-lang across 30 files, so the version bump itself stayed small.",
        ],
      },
      {
        heading: "Result",
        body: [
          "CI time down 20%. Billed CPU down 15%, measured in beta with CloudWatch and Glowroot. Releases are fully automated, saving 2 engineer hours each.",
        ],
      },
      {
        heading: "Lesson",
        body: [
          "Engineers argue in developer experience; budgets get approved in dollars. Measure first, then propose.",
        ],
      },
    ],
  },
  {
    file: "menu-caching.md",
    title: "Zero-wait menus at checkout",
    teaser:
      "A two-tier cache that accepts one transaction of staleness so a cashier never waits.",
    sections: [
      {
        heading: "Problem",
        body: [
          "The POS loaded the menu from the backend during transactions, so cashiers waited on the network in the middle of a sale.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "Added two cache tiers: Redis on the backend and the last known menu on the client. Each transaction uses the client copy immediately while the fresh menu loads in the background, a stale-while-revalidate strategy.",
        ],
      },
      {
        heading: "Trade-off",
        body: [
          "A menu edit reaches a terminal one transaction late. A cashier waiting on every sale costs more than one sale on the previous menu, so the delay was worth removing.",
        ],
      },
    ],
  },
];

export const log: { date: string; type: string; message: string }[] = [
  {
    date: "now",
    type: "HEAD",
    message: "Senior Software Engineer, mentoring 2 junior engineers",
  },
  {
    date: "2026-06",
    type: "feat",
    message: "Windows POS installer v3 with electron-builder and NSIS",
  },
  {
    date: "2026-04",
    type: "refactor",
    message: "Java dependency cleanup ahead of the Java 25 upgrade",
  },
  {
    date: "2026-02",
    type: "feat",
    message: "AI chat agent loop: unanswered questions down to 0.5%",
  },
  {
    date: "2025-11",
    type: "init",
    message: "Created the nown-chat AI analytics backend",
  },
  {
    date: "2025-06",
    type: "feat",
    message: "Labor and net sales reports in Nown Dash",
  },
  {
    date: "2025-06",
    type: "build",
    message: "Hot-reload dev server for the POS client",
  },
  {
    date: "2025-05",
    type: "build",
    message: "Migrated the POS to a pnpm monorepo",
  },
  {
    date: "2024-12",
    type: "build",
    message: "Front-end build and cache-busting refactor",
  },
  { date: "2024-05", type: "feat", message: "Loyalty v2 points redemption" },
  {
    date: "2023-08",
    type: "feat",
    message: "FIIT event processing and scheduled meal regulation",
  },
  {
    date: "2023-04",
    type: "style",
    message: "Prettier across the whole codebase",
  },
  { date: "2022-11", type: "ci", message: "Cluster deployment pipeline" },
  {
    date: "2022-06",
    type: "ci",
    message: "First GitHub Actions build and test pipelines",
  },
  { date: "2022-03", type: "feat", message: "Multi-rate tax receipts" },
  {
    date: "2021-10",
    type: "init",
    message: "Joined Lucova as a Junior Software Engineer",
  },
];

export const activity: { count: string; label: string }[] = [
  { count: "1,400+", label: "commits to the POS monorepo" },
  { count: "275", label: "merged pull requests" },
  { count: "170+", label: "teammate pull requests reviewed" },
  { count: "93/96", label: "commits to the CI workflows" },
  { count: "127/137", label: "commits to nown-chat, which I created" },
];
