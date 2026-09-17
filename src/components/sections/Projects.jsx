import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { featuredProjects, otherProjects } from "../../data/projects";
import { profile } from "../../data/profile";

function ProjectLinks({ project, size = 18 }) {
  return (
    <div className="flex items-center gap-1">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.name} source on GitHub`}
        title="Source code"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-surface-hover hover:text-fg"
      >
        <FiGithub size={size} />
      </a>
      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} live site`}
          title="Live site"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-surface-hover hover:text-fg"
        >
          <FiExternalLink size={size} />
        </a>
      ) : null}
    </div>
  );
}

function FeaturedCard({ project, index }) {
  return (
    <Reveal delay={index * 0.05}>
      <article className="card group relative flex h-full flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-fg-subtle">{String(index + 1).padStart(2, "0")}</span>
            <span className="font-mono text-xs text-fg-subtle">{project.year}</span>
          </div>
          <ProjectLinks project={project} />
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight text-fg sm:text-2xl">
          <a
            href={project.live ?? project.github}
            target="_blank"
            rel="noreferrer"
            className="after:absolute after:inset-0 after:content-[''] group-hover:text-accent transition-colors"
          >
            {project.name}
          </a>
        </h3>
        <p className="mt-1 text-sm font-medium text-fg-muted">{project.subtitle}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-muted sm:text-base">{project.description}</p>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

function CompactRow({ project, index }) {
  return (
    <Reveal delay={index * 0.04} as="li">
      <article className="card group relative grid gap-3 p-5 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-base font-semibold text-fg">
              <a
                href={project.live ?? project.github}
                target="_blank"
                rel="noreferrer"
                className="after:absolute after:inset-0 after:content-[''] group-hover:text-accent transition-colors"
              >
                {project.name}
              </a>
            </h3>
            <span className="font-mono text-xs text-fg-subtle">{project.year}</span>
          </div>
          <p className="mt-1 text-sm text-fg-muted">{project.description}</p>
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative z-10 sm:justify-self-end">
          <ProjectLinks project={project} size={16} />
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="02 · Projects"
            title="Things I've built"
            description="A selection of shipped work and deeper experiments. Every card links to the source, and to the live app where one is deployed."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 md:[&>*:last-child:nth-child(odd)]:col-span-2">
          {featuredProjects.map((p, i) => (
            <FeaturedCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">More projects</h3>
        </Reveal>
        <ul className="mt-5 grid gap-3">
          {otherProjects.map((p, i) => (
            <CompactRow key={p.slug} project={p} index={i} />
          ))}
        </ul>

        <Reveal className="mt-10">
          <a
            href={`${profile.socials.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            See all repositories on GitHub
            <FiArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
