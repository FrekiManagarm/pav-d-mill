"use client";

import { Globe, Link } from "lucide-react";

const footerLinks = {
  Séjours: [
    { label: "Suite Marie-Jeanne", href: "#chambres" },
    { label: "Suite Melchior", href: "#chambres" },
    { label: "Studio Muscadelle", href: "#chambres" },
    { label: "Studio Cabernet", href: "#chambres" },
  ],
  Expériences: [
    { label: "La Table du Pavillon", href: "#table" },
    { label: "Bien-être & SPA", href: "#bien-etre" },
    { label: "Dégustation de vins", href: "#bien-etre" },
    { label: "Balades à vélo", href: "#bien-etre" },
  ],
  Événements: [
    { label: "Mariages", href: "#receptions" },
    { label: "Séminaires", href: "#receptions" },
    { label: "Réceptions privées", href: "#receptions" },
    { label: "Demander un devis", href: "#reservation" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-background px-6 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span
                className="block text-gold-light text-xs tracking-[0.35em] uppercase mb-1"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Pavillon des
              </span>
              <span
                className="block text-text text-2xl font-light tracking-widest"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Millésimes
              </span>
              <span
                className="block text-stone text-xs tracking-widest mt-1"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                & SPA
              </span>
            </div>
            <p
              className="text-stone text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Maison d'exception à Lussac, au cœur des vignobles de Saint-Émilion.
              <br />
              Chambres · Table privée · SPA · Réceptions
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/pavillonmillesimes/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-dark-border hover:border-gold/40 text-stone hover:text-gold transition-all duration-300 cursor-pointer"
                aria-label="Instagram du Pavillon des Millésimes"
              >
                <Globe size={15} aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/pavillondesmillesimes/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-dark-border hover:border-gold/40 text-stone hover:text-gold transition-all duration-300 cursor-pointer"
                aria-label="Facebook du Pavillon des Millésimes"
              >
                <Link size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3
                className="text-gold text-xs tracking-[0.3em] uppercase mb-5"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-stone hover:text-text text-sm transition-colors duration-200 cursor-pointer"
                      style={{ fontFamily: "var(--font-jost)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Address + awards */}
        <div className="pt-8 border-t border-dark-border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <p
              className="text-stone text-sm"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              3 Rue de Lincent · 33570 Lussac · Gironde · France
            </p>
            <p
              className="text-stone text-sm mt-1"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              <a href="tel:+33557840540" className="hover:text-gold transition-colors duration-200">
                05 57 84 05 40
              </a>{" "}
              ·{" "}
              <a href="mailto:contact@pavillon-des-millesimes.fr" className="hover:text-gold transition-colors duration-200">
                contact@pavillon-des-millesimes.fr
              </a>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-gold text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>9.5</span>
              <span className="text-stone text-xs" style={{ fontFamily: "var(--font-jost)" }}>Booking.com</span>
            </div>
            <div className="w-px h-4 bg-dark-border hidden sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <span className="text-gold text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>4.9</span>
              <span className="text-stone text-xs" style={{ fontFamily: "var(--font-jost)" }}>TripAdvisor</span>
            </div>
            <div className="w-px h-4 bg-dark-border hidden sm:block" aria-hidden="true" />
            <span className="text-stone text-xs" style={{ fontFamily: "var(--font-jost)" }}>Vignobles &amp; Découvertes</span>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-stone/50 text-xs"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            © {new Date().getFullYear()} Pavillon des Millésimes & SPA. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            {["Mentions légales", "CGV", "Confidentialité"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-stone/50 hover:text-stone text-xs transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
