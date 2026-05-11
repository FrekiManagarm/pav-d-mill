"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "Chambres", href: "#chambres" },
  { label: "La Table", href: "#table" },
  { label: "Bien-être", href: "#bien-etre" },
  { label: "Réceptions", href: "#receptions" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);
  const [hidden, setHidden] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 80);
      setHidden(current > lastScroll.current && current > 300);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12"
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between py-4 lg:py-5 transition-all duration-500 ${
            scrolled
              ? "mt-2 px-6 lg:px-8 rounded-full backdrop-blur-xl border border-dark-border shadow-2xl"
              : ""
          }`}
          style={scrolled ? { background: "color-mix(in srgb, var(--c-black) 85%, transparent)" } : {}}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col leading-none cursor-pointer"
          >
            <span
              className="text-gold-light text-xs tracking-[0.35em] uppercase"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Pavillon des
            </span>
            <span
              className="text-text text-xl lg:text-2xl font-light tracking-widest"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Millésimes
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="text-text-muted hover:text-text text-sm tracking-[0.15em] uppercase transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Theme toggle + Burger */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 text-stone hover:text-gold transition-colors duration-300 cursor-pointer"
              whileTap={{ scale: 0.9 }}
              aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
              title={theme === "dark" ? "Mode clair" : "Mode sombre"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                  transition={{ duration: 0.25 }}
                  className="block"
                >
                  {theme === "dark" ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <a
              href="#reservation"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#reservation");
              }}
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 border border-gold/60 hover:border-gold hover:bg-gold/10 text-gold text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer rounded-full"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Réserver
            </a>
            <button
              className="lg:hidden text-text p-1 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            style={{ background: "color-mix(in srgb, var(--c-black) 96%, transparent)" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="text-text text-3xl font-light tracking-widest cursor-pointer"
                style={{ fontFamily: "var(--font-cormorant)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#reservation"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#reservation");
              }}
              className="mt-4 px-10 py-3 border border-gold text-gold text-sm tracking-[0.3em] uppercase cursor-pointer"
              style={{ fontFamily: "var(--font-jost)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Réserver
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
