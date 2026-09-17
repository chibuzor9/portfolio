import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { profile } from "../../data/profile";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: FiMail,
    external: false,
  },
  {
    label: "WhatsApp",
    value: profile.phoneDisplay,
    href: profile.whatsapp,
    Icon: FaWhatsapp,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "in/chibuzor-emmanuel",
    href: profile.socials.linkedin,
    Icon: FiLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: `@${profile.handle}`,
    href: profile.socials.github,
    Icon: FiGithub,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-narrow">
        <Reveal>
          <div className="card relative overflow-hidden p-8 sm:p-12">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-[90px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <SectionHeading
                  eyebrow="04 · Contact"
                  title="Let's build something"
                  description="I'm currently open to new opportunities. Whether you have a role, a project or just want to say hi, my inbox is open and I reply quickly."
                />
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={`mailto:${profile.email}`} className="btn-primary">
                    <FiMail size={16} />
                    Say hello
                  </a>
                  <a href={`${import.meta.env.BASE_URL}${profile.resume}`} target="_blank" rel="noreferrer" className="btn-secondary">
                    View resume
                  </a>
                </div>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {channels.map(({ label, value, href, Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-xl border border-border bg-bg-elevated p-4 transition-colors hover:border-accent"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium uppercase tracking-wider text-fg-subtle">{label}</span>
                        <span className="block truncate text-sm font-medium text-fg group-hover:text-accent">{value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
