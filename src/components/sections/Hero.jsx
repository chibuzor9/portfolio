import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";
import { profile } from "../../data/profile";
import Typewriter from "../ui/Typewriter";
import avatar from "../../assets/images/github-avatar.jpg";

const socials = [
  { href: profile.socials.github, label: "GitHub", Icon: FiGithub },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: FiLinkedin },
  { href: profile.socials.twitter, label: "X (Twitter)", Icon: FaXTwitter },
  { href: `mailto:${profile.email}`, label: "Email", Icon: FiMail },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden pt-16">
      {/* Background glow + grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-narrow relative grid items-center gap-12 py-20 md:grid-cols-[1.25fr_1fr] md:gap-8"
      >
        <div>
          <motion.p variants={item} className="font-mono text-sm text-accent">
            Hi, my name is
          </motion.p>

          <motion.h1 variants={item} className="mt-2 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {profile.name}.
          </motion.h1>

          <motion.h2 variants={item} className="mt-2 text-2xl font-bold tracking-tight text-fg-muted sm:text-3xl lg:text-4xl">
            <Typewriter texts={profile.roles} />
          </motion.h2>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View my work
            </a>
            <a href={`${import.meta.env.BASE_URL}${profile.resume}`} target="_blank" rel="noreferrer" className="btn-secondary">
              <FiDownload size={16} />
              Download resume
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-8 flex items-center gap-2" aria-label="Social links">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div variants={item} className="relative mx-auto w-56 sm:w-72 md:w-full md:max-w-xs">
          <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent/5 to-transparent blur-xl" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl">
            <img
              src={avatar}
              alt={`${profile.name}, ${profile.title}`}
              width="460"
              height="460"
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-bg-elevated px-4 py-1.5 font-mono text-xs text-fg-muted shadow-lg">
            @{profile.handle}
          </div>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-fg-subtle transition-colors hover:text-accent md:block"
      >
        <FiArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
}
