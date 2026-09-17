import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { profile } from "../../data/profile";

const socials = [
  { href: profile.socials.github, label: "GitHub", Icon: FiGithub },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: FiLinkedin },
  { href: profile.socials.twitter, label: "X (Twitter)", Icon: FaXTwitter },
  { href: profile.socials.facebook, label: "Facebook", Icon: FaFacebookF },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container-narrow flex flex-col items-center justify-between gap-4 py-8 text-sm text-fg-subtle sm:flex-row">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <ul className="flex items-center gap-1" aria-label="Social links">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-surface-hover hover:text-accent"
              >
                <Icon size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
