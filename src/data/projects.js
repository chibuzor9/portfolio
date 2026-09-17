/**
 * Projects shown on the portfolio, ordered by how much I want a recruiter to see them.
 * `featured` projects get the large card treatment; the rest are listed compactly.
 * Links were checked on 2026-09-17. `live` is omitted when a deployment is not reachable.
 */
export const projects = [
  {
    slug: "awae7",
    name: "AWAE7",
    subtitle: "Automated Web Accessibility Evaluator",
    description:
      "Full-stack platform that audits any URL or HTML file against WCAG 2.2 using axe-core and Playwright, with optional multi-page crawling. Generates role-specific reports for developers, designers, auditors and end users, plus CSV, JSON and PDF export.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Supabase", "axe-core", "Playwright"],
    github: "https://github.com/chibuzor9/awae7",
    live: "https://awae7.vercel.app/",
    featured: true,
    year: "2026",
  },
  {
    slug: "wireline-inventory",
    name: "Wireline Inventory",
    subtitle: "Inventory management for oil servicing companies",
    description:
      "End-to-end inventory system for wireline operations: typed Express API, Drizzle ORM on Neon Postgres, React + shadcn/ui front end with charts, PDF and Excel export, session auth and transactional email.",
    stack: ["React", "TypeScript", "Express", "Drizzle ORM", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "Vercel"],
    github: "https://github.com/chibuzor9/WirelineInventory",
    live: "https://wireline-inventory.vercel.app",
    featured: true,
    year: "2025",
  },
  {
    slug: "ws-chat",
    name: "ws-chat",
    subtitle: "Chat that never leaves your network",
    description:
      "Self-hosted, on-prem chat server for a LAN. The WebSocket protocol, server and client are all hand-rolled with no framework in between, backed by Postgres through Drizzle. Built to learn what belongs on the wire and what breaks when a socket dies mid-message.",
    stack: ["Node.js", "WebSockets", "PostgreSQL", "Drizzle ORM", "React", "Vite", "Tailwind CSS"],
    github: "https://github.com/chibuzor9/ws-chat",
    featured: true,
    year: "2026",
  },
  {
    slug: "speedometer",
    name: "GPS Speedometer",
    subtitle: "Real-time speed from the browser's Geolocation API",
    description:
      "Progressive web app that watches device GPS coordinates, computes speed with the Haversine formula between fixes and renders it on an animated gauge.",
    stack: ["React", "Vite", "Tailwind CSS", "Geolocation API", "D3"],
    github: "https://github.com/chibuzor9/speedometer",
    featured: false,
    year: "2026",
  },
  {
    slug: "school-disciplinary-record",
    name: "School Disciplinary Record",
    subtitle: "Record keeping for school administrators",
    description:
      "Full-stack CRUD app with an Express + MySQL backend and a React front end using React Router, React Hook Form and Zod validation.",
    stack: ["React", "TypeScript", "Express", "MySQL", "Zod", "Tailwind CSS"],
    github: "https://github.com/chibuzor9/school-disciplinary-record",
    featured: false,
    year: "2024",
  },
  {
    slug: "quickchop",
    name: "quickChop",
    subtitle: "Cross-platform mobile app",
    description:
      "React Native app built on Expo Router with file-based navigation, bottom tabs, Reanimated and gesture handling.",
    stack: ["React Native", "Expo", "TypeScript"],
    github: "https://github.com/chibuzor9/quickChop",
    featured: false,
    year: "2025",
  },
  {
    slug: "notes-app",
    name: "Notes App",
    subtitle: "Angular note-taking app",
    description:
      "Create, edit and organise notes. Built with Angular 16, RxJS and the Angular Router.",
    stack: ["Angular", "TypeScript", "RxJS"],
    github: "https://github.com/chibuzor9/notes-app",
    featured: false,
    year: "2023",
  },
  {
    slug: "expense-tracker",
    name: "Expense Tracker",
    subtitle: "Track income and spending",
    description:
      "Lightweight expense tracker built with React and styled-components on Vite.",
    stack: ["React", "Vite", "styled-components"],
    github: "https://github.com/chibuzor9/expense-tracker",
    featured: false,
    year: "2024",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
