"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, ExternalLink } from "lucide-react";

export default function Reservation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="reservation"
      ref={ref}
      className="relative py-28 lg:py-40 px-6 overflow-hidden"
      aria-labelledby="reservation-title"
    >
      {/* Dramatic background */}
      <div className="absolute inset-0 z-0 reservation-gradient-bg" />
      {/* Decorative diagonal lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="0" x2="1440" y2="600" stroke="#C9A45E" strokeWidth="0.5" />
        <line x1="0" y1="600" x2="1440" y2="0" stroke="#C9A45E" strokeWidth="0.5" />
        <line x1="720" y1="0" x2="720" y2="600" stroke="#C9A45E" strokeWidth="0.3" />
        <line x1="0" y1="300" x2="1440" y2="300" stroke="#C9A45E" strokeWidth="0.3" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-gold" aria-hidden="true" />
          <span
            className="text-gold text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Réservation
          </span>
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-gold" aria-hidden="true" />
        </motion.div>

        <motion.h2
          id="reservation-title"
          className="text-4xl lg:text-6xl xl:text-7xl font-light text-text leading-tight mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Vivez l'expérience
          <br />
          <em className="text-gold italic">Millésimes</em>
        </motion.h2>

        <motion.p
          className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-12"
          style={{ fontFamily: "var(--font-jost)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Réservez votre séjour, organisez votre événement ou planifiez votre mariage.
          Nathalie et David sont à votre écoute pour créer une expérience sur-mesure.
        </motion.p>

        {/* Main CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <a
            href="https://www.pavillon-des-millesimes.fr/booking/room"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-10 py-5 bg-gold hover:bg-gold-light text-black text-sm tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer min-w-[260px] justify-center"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Réserver en ligne
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
          </a>
          <a
            href="tel:+33760567734"
            className="flex items-center gap-3 px-10 py-5 border border-gold/50 hover:border-gold hover:bg-gold/5 text-gold text-sm tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer min-w-[260px] justify-center"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            <Phone size={14} aria-hidden="true" />
            Appeler directement
          </a>
        </motion.div>

        {/* Contact info strip */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10 border-t border-dark-border"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <Phone size={14} className="text-gold" aria-hidden="true" />
            <div className="text-left">
              <p
                className="text-text text-sm"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                <a href="tel:+33557840540" className="hover:text-gold transition-colors duration-200">
                  05 57 84 05 40
                </a>
              </p>
              <p
                className="text-stone text-xs"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Accueil 9h – 19h
              </p>
            </div>
          </div>

          <div className="w-px h-8 bg-dark-border hidden sm:block" aria-hidden="true" />

          <div className="flex items-center gap-3">
            <Mail size={14} className="text-gold" aria-hidden="true" />
            <div className="text-left">
              <a
                href="mailto:contact@pavillon-des-millesimes.fr"
                className="text-text text-sm hover:text-gold transition-colors duration-200"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                contact@pavillon-des-millesimes.fr
              </a>
              <p
                className="text-stone text-xs"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Réponse sous 24h
              </p>
            </div>
          </div>

          <div className="w-px h-8 bg-dark-border hidden sm:block" aria-hidden="true" />

          {/* Availability info */}
          <div className="text-center sm:text-left">
            <p
              className="text-text text-sm"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Arrivée 15h · Départ 11h
            </p>
            <p
              className="text-stone text-xs"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Fermé 20 déc. → 20 jan.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
