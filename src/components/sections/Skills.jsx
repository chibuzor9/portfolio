import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { skillGroups } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="03 · Skills"
            title="Tools I work with"
            description="The languages, frameworks and infrastructure I reach for most often."
          />
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.05}>
              <div className="card h-full p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
                    >
                      <Icon size={16} aria-hidden="true" className="shrink-0" />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
