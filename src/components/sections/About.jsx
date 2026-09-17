import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { profile } from "../../data/profile";

const focus = [
  {
    title: "Full-stack web",
    body: "React, Next.js and Vite on the front; Node.js, Express and PostgreSQL behind it. Typed end to end with TypeScript.",
  },
  {
    title: "APIs & real-time",
    body: "Designing and consuming REST APIs, and building real-time features on WebSockets, including a hand-rolled protocol.",
  },
  {
    title: "Accessibility first",
    body: "Software built with usability in mind. I built an automated WCAG 2.2 evaluator because it matters to me.",
  },
  {
    title: "Data & ML",
    body: "Strengthening data engineering and machine learning fundamentals with Pandas, Polars, scikit-learn and PyTorch.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading eyebrow="01 · About" title="A bit about me" />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-base leading-relaxed text-fg-muted sm:text-lg">
              <p>
                I&apos;m a software engineer who enjoys working across the whole stack, from designing
                responsive interfaces and APIs to working with databases and backend systems. I care about
                software that is reliable, accessible and scales past its first user.
              </p>
              <p>
                Lately I&apos;ve been shipping full-stack products with React, Next.js, Node.js and
                PostgreSQL, going deep on backend architecture and system design, and sharpening my
                engineering fundamentals by solving algorithmic problems.
              </p>
              <p>
                I&apos;m open to{" "}
                {profile.openTo.map((role, i) => (
                  <span key={role}>
                    <span className="font-medium text-fg">{role}</span>
                    {i < profile.openTo.length - 2 ? ", " : i === profile.openTo.length - 2 ? " and " : ""}
                  </span>
                ))}{" "}
                opportunities.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {focus.map((f, i) => (
              <Reveal key={f.title} delay={0.1 + i * 0.06}>
                <article className="card h-full p-5">
                  <h3 className="text-sm font-semibold text-fg">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{f.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
