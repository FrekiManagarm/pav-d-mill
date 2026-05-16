"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarBlank, List, Phone, X } from "@phosphor-icons/react";

const links = [
  { label: "Expériences", href: "#experiences" },
  { label: "Chambres", href: "#chambres" },
  { label: "Table", href: "#table" },
  { label: "Bien-être", href: "#bien-etre" },
  { label: "Réceptions", href: "#receptions" },
];

export default function Navigation({ bookingUrl }: { bookingUrl: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSolid(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-30 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between gap-4 rounded-full border px-4 py-3 transition-all duration-300 sm:px-5 ${
          isSolid
            ? "border-ink/10 bg-porcelain/88 text-ink shadow-[0_18px_54px_-34px_rgba(23,24,20,0.45)] backdrop-blur-xl"
            : "border-white/12 bg-white/8 text-porcelain shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-lg"
        }`}
      >
        <a href="#accueil" className="flex min-w-0 flex-col leading-none" onClick={close}>
          <span className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] opacity-70">
            Pavillon des
          </span>
          <span className="mt-1 truncate font-heading text-xl font-semibold">
            Millésimes
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] opacity-[0.72] transition-opacity duration-300 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+33760567734"
            className="hidden h-10 items-center gap-2 rounded-full border border-current/15 px-4 text-sm font-semibold transition-transform duration-300 active:scale-[0.98] sm:inline-flex"
          >
            <Phone size={17} weight="duotone" />
            07 60 56 77 34
          </a>
          <a
            href={bookingUrl}
            className="hidden h-10 items-center gap-2 rounded-full bg-wine px-4 text-sm font-semibold text-white shadow-[0_16px_36px_-24px_rgba(101,38,51,0.9)] transition-transform duration-300 active:scale-[0.98] md:inline-flex"
          >
            <CalendarBlank size={17} weight="duotone" />
            Réserver
          </a>
          <button
            type="button"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-current/15 transition-transform duration-300 active:scale-[0.94] lg:hidden"
          >
            {isOpen ? <X size={20} /> : <List size={21} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: "spring", stiffness: 160, damping: 22 }}
            className="mx-auto mt-3 max-w-[1400px] rounded-[1.5rem] border border-ink/10 bg-porcelain/96 p-4 text-ink shadow-[0_24px_70px_-38px_rgba(23,24,20,0.6)] backdrop-blur-xl lg:hidden"
          >
            <nav className="grid gap-1" aria-label="Navigation mobile">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="rounded-2xl px-4 py-3 font-heading text-3xl transition-colors hover:bg-ink/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={bookingUrl}
                className="mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-wine px-5 text-sm font-semibold text-white"
              >
                <CalendarBlank size={18} weight="duotone" />
                Réserver en direct
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
