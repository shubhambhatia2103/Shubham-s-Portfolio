import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const links = [
  { href: "https://github.com/shubhambhatia2103", label: "GitHub", icon: FaGithub },
  { href: "https://www.linkedin.com/in/shubhambhatia2103/", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://www.instagram.com/6eingshubham/", label: "Instagram", icon: FaInstagram },
  { href: "https://x.com/whoodattboyy", label: "Twitter", icon: FaXTwitter },
];

function Footer() {
  return (
    <footer className="space-y-6 py-8 bg-ink border-t border-line-dark">
      <ul className="flex items-center justify-center gap-6 md:gap-10">
        {links.map(({ href, label, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-2 text-body-dark/80 hover:text-caramel-dark transition-colors duration-200"
            >
              <Icon size={18} />
              <span className="hidden sm:inline font-lato text-sm">{label}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="text-center text-sm text-muted-dark font-lato">
        © {new Date().getFullYear()} Shubham Bhatia. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
