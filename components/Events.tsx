"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Briefcase, ArrowRight } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const eventTypes = [
  {
    icon: Heart,
    id: "mariage",
    label: "Mariages",
    tagline: "Le jour le plus beau de votre vie",
    desc: "Votre mariage dans un écrin de 800m² de pierre de Bordeaux. De l'apéritif au lendemain matin, le Pavillon vous accueille pour une célébration absolument unique.",
    details: [
      "Capacité jusqu'à 190 invités",
      "Privatisation complète du domaine",
      "16 couchages sur place",
      "Chef David pour le repas",
      "Musique jusqu'à 4h du matin",
      "Dès 146€ par personne",
    ],
    accent: "#6B2D3E",
    highlight: "Mariage Signature · 230€/pers.",
    gradientDark:  "linear-gradient(135deg, #1A0810 0%, #2E1018 50%, #1A0810 100%)",
    gradientLight: "linear-gradient(135deg, #F8EEF0 0%, #F0DDE2 50%, #F8EEF0 100%)",
  },
  {
    icon: Briefcase,
    id: "seminaire",
    label: "Séminaires & Événements",
    tagline: "L'excellence au service de l'entreprise",
    desc: "Réunions, séminaires résidentiels, workshops ou cocktails. Le Pavillon offre des espaces modulables avec toute l'infrastructure nécessaire à vos événements professionnels.",
    details: [
      "Grande Salle 100m² · 80 personnes",
      "Salle Voutée · 60 personnes",
      "Salon privatif · 20 personnes",
      "Terrasse extérieure · 150 personnes",
      "Wi-Fi haut débit 10/10",
      "Formule séminaire · 110€/pers.",
    ],
    accent: "#C9A45E",
    highlight: "Devis personnalisé",
    gradientDark:  "linear-gradient(135deg, #14100A 0%, #22180A 50%, #14100A 100%)",
    gradientLight: "linear-gradient(135deg, #F8F2E8 0%, #F0E8D5 50%, #F8F2E8 100%)",
  },
];

const configs = [
  { name: "Banquet", capacity: "190" },
  { name: "Cocktail", capacity: "190" },
  { name: "Conférence", capacity: "80" },
  { name: "U-Shape", capacity: "40" },
];

export default function Events() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const { theme } = useTheme();

  return (
    <section
      id="receptions"
      ref={ref}
      className="py-28 lg:py-40 px-6 overflow-hidden"
      aria-labelledby="events-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="w-10 h-px bg-gold" aria-hidden="true" />
            <span
              className="text-gold text-xs tracking-[0.35em] uppercase"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Réceptions & Événements
            </span>
            <span className="w-10 h-px bg-gold" aria-hidden="true" />
          </motion.div>

          <motion.h2
            id="events-title"
            className="text-4xl lg:text-5xl xl:text-7xl font-light text-text leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Des moments{" "}
            <em className="text-gold italic">inoubliables</em>
            <br />
            dans un cadre d'exception
          </motion.h2>
        </div>

        {/* Two event cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {eventTypes.map((event, i) => (
            <motion.article
              key={event.id}
              className="relative overflow-hidden group cursor-pointer"
              style={{ background: theme === "light" ? event.gradientLight : event.gradientDark }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: event.accent }}
                aria-hidden="true"
              />

              <div className="p-8 lg:p-10">
                {/* Icon + label */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2 rounded-full"
                    style={{
                      background: `${event.accent}20`,
                      border: `1px solid ${event.accent}40`,
                    }}
                  >
                    <event.icon size={16} style={{ color: event.accent }} aria-hidden="true" />
                  </div>
                  <span
                    className="text-xs tracking-[0.3em] uppercase"
                    style={{ fontFamily: "var(--font-jost)", color: event.accent }}
                  >
                    {event.label}
                  </span>
                </div>

                <h3
                  className="text-2xl lg:text-3xl font-light text-text mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {event.tagline}
                </h3>
                <p
                  className="text-stone text-sm leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  {event.desc}
                </p>

                {/* Details list */}
                <ul className="space-y-2 mb-8">
                  {event.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-3 text-text-muted text-sm"
                      style={{ fontFamily: "var(--font-jost)" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: event.accent }}
                        aria-hidden="true"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-dark-border">
                  <span
                    className="text-gold text-sm"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {event.highlight}
                  </span>
                  <div
                    className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-all duration-300 group-hover:gap-3"
                    style={{ fontFamily: "var(--font-jost)", color: event.accent }}
                  >
                    Demander un devis
                    <ArrowRight size={14} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Configurations strip */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 border border-dark-border bg-dark-card/20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {configs.map((cfg, i) => (
            <div
              key={cfg.name}
              className={`p-6 text-center ${i < configs.length - 1 ? "border-r border-dark-border" : ""}`}
            >
              <p
                className="text-gold text-3xl font-light mb-1"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {cfg.capacity}
              </p>
              <p
                className="text-stone text-xs tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {cfg.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
