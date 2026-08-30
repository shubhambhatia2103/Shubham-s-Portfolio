import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";

const menuItems = [
  { href: "#about", id: "about", text: "About" },
  { href: "#projects", id: "projects", text: "Projects" },
  { href: "#contact", id: "contact", text: "Contact" },
];

function Navbar({ isDark, setIsDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useActiveSection(menuItems.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-navy dark:bg-surface-dark-elevated transition-shadow duration-300 ${
        isScrolled ? "shadow-md shadow-navy/20" : ""
      }`}
    >
      <div className="flex items-center justify-between px-5 py-4 md:px-10 lg:px-20">
        <div className="flex items-center gap-3 lg:gap-5">
          <a href="#">
            <h1 className="text-xl font-bold text-body-dark lg:text-2xl">
              Shubham <span className="text-accent-dark font-cursive">Bhatia</span>
            </h1>
          </a>
          <a
            href="https://drive.google.com/file/d/1V0M9R1j_rNhdKrSEPizKf9BW-aRsBfyG/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="bg-surface-elevated text-navy hover:bg-surface text-xs font-semibold px-2.5 py-1 rounded-full transition-colors duration-200 lg:text-sm lg:px-3"
            >
              Resume
            </button>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-8 font-lato text-body-dark/80">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative py-1 transition-colors duration-200 hover:text-body-dark before:absolute before:bottom-[-4px] before:left-0 before:h-[1.5px] before:bg-accent-dark before:transition-all before:duration-300 before:ease-in-out ${
                activeId === item.id
                  ? "text-body-dark before:w-full"
                  : "before:w-0 hover:before:w-full"
              }`}
            >
              {item.text}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-body-dark/80 hover:bg-white/10 hover:text-body-dark transition-colors duration-200"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="lg:hidden z-50 text-body-dark"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-30 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              className="fixed top-0 right-0 bottom-0 flex flex-col justify-center gap-2 bg-navy dark:bg-surface-dark-elevated w-64 p-8 z-40 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            >
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`py-3 text-lg font-lato border-b border-line-dark transition-colors duration-200 ${
                    activeId === item.id
                      ? "text-accent-dark font-semibold"
                      : "text-body-dark/80"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </a>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
