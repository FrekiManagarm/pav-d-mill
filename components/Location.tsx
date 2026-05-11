"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Car, Plane, Train } from "lucide-react";

const distances = [
  { icon: MapPin, label: "Saint-Émilion", value: "9 km", sub: "Village médiéval UNESCO" },
  { icon: Car, label: "Bordeaux", value: "40 km", sub: "Centre-ville" },
  { icon: Plane, label: "Aéroport Bordeaux", value: "45 km", sub: "Mérignac" },
  { icon: Train, label: "Gare SNCF / TGV", value: "13 km", sub: "Connexion Paris 2h" },
];

const nearby = [
  "Château La Grande Clotte",
  "Dune du Pilat",
  "Bassin d'Arcachon",
  "Vallée de la Dordogne",
  "Golf (11 km)",
  "Périgord Noir",
];

export default function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 lg:py-40 px-6 overflow-hidden relative"
      aria-labelledby="location-title"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 location-gradient-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Info */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="w-10 h-px bg-gold" aria-hidden="true" />
              <span
                className="text-gold text-xs tracking-[0.35em] uppercase"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Nous trouver
              </span>
            </motion.div>

            <motion.h2
              id="location-title"
              className="text-4xl lg:text-5xl font-light text-text leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Au cœur des
              <br />
              <em className="text-gold italic">vignobles</em> de
              <br />
              Saint-Émilion
            </motion.h2>

            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p
                className="text-text-muted leading-relaxed mb-1"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                3 Rue de Lincent
              </p>
              <p
                className="text-text-muted leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                33570 Lussac, Gironde — France
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+33557840540"
                  className="text-cream hover:text-gold transition-colors duration-200 text-sm"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  05 57 84 05 40
                </a>
                <span className="text-dark-border">·</span>
                <a
                  href="tel:+33760567734"
                  className="text-cream hover:text-gold transition-colors duration-200 text-sm"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  07 60 56 77 34
                </a>
              </div>
              <a
                href="mailto:contact@pavillon-des-millesimes.fr"
                className="block mt-2 text-stone hover:text-gold transition-colors duration-200 text-sm"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                contact@pavillon-des-millesimes.fr
              </a>
            </motion.div>

            {/* Distances */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              {distances.map((d) => (
                <div
                  key={d.label}
                  className="flex items-start gap-3 p-4 border border-dark-border bg-dark-card/20"
                >
                  <d.icon size={14} className="text-gold mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p
                      className="text-text text-sm"
                      style={{ fontFamily: "var(--font-jost)" }}
                    >
                      {d.label}
                    </p>
                    <p
                      className="text-gold text-lg font-light leading-none"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {d.value}
                    </p>
                    <p
                      className="text-stone text-[10px] tracking-wide mt-0.5"
                      style={{ fontFamily: "var(--font-jost)" }}
                    >
                      {d.sub}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Map visual + nearby */}
          <div>
            {/* Decorative map placeholder */}
            <motion.div
              className="relative aspect-square border border-dark-border bg-dark-card/20 mb-8 overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* SVG map representation */}
              <svg viewBox="0 0 500 500" className="w-full h-full" aria-label="Localisation schématique du Pavillon des Millésimes" role="img">
                <defs>
                  <radialGradient id="mapGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1E1A12" />
                    <stop offset="100%" stopColor="#0C0A07" />
                  </radialGradient>
                </defs>
                <rect width="500" height="500" fill="url(#mapGrad)" />
                {/* Roads */}
                <path d="M0,250 Q150,240 250,250 Q350,260 500,250" stroke="#2A2418" strokeWidth="12" fill="none" />
                <path d="M250,0 Q245,150 250,250 Q255,350 250,500" stroke="#2A2418" strokeWidth="8" fill="none" />
                <path d="M0,380 Q200,370 350,300 Q420,265 500,240" stroke="#221E14" strokeWidth="6" fill="none" />
                {/* Vineyards pattern */}
                {Array.from({ length: 8 }).map((_, row) =>
                  Array.from({ length: 8 }).map((_, col) => (
                    <rect
                      key={`${row}-${col}`}
                      x={30 + col * 55}
                      y={30 + row * 55}
                      width="40"
                      height="30"
                      fill="none"
                      stroke="#1E1C12"
                      strokeWidth="0.5"
                      opacity="0.6"
                    />
                  ))
                )}
                {/* Saint-Émilion dot */}
                <circle cx="380" cy="230" r="8" fill="#C9A45E" opacity="0.7" />
                <circle cx="380" cy="230" r="14" fill="none" stroke="#C9A45E" strokeWidth="0.5" opacity="0.4" />
                <text x="395" y="222" fill="#C9A45E" fontSize="11" fontFamily="serif" opacity="0.8">St-Émilion</text>
                {/* Pavillon dot */}
                <circle cx="250" cy="250" r="10" fill="#C9A45E" />
                <circle cx="250" cy="250" r="20" fill="none" stroke="#C9A45E" strokeWidth="1" opacity="0.5" />
                <circle cx="250" cy="250" r="30" fill="none" stroke="#C9A45E" strokeWidth="0.5" opacity="0.3" />
                <text x="265" y="244" fill="#FAF8F4" fontSize="10" fontFamily="sans-serif">Pavillon des</text>
                <text x="265" y="258" fill="#C9A45E" fontSize="10" fontFamily="serif" fontStyle="italic">Millésimes</text>
                {/* Distance line */}
                <line x1="260" y1="250" x2="368" y2="232" stroke="#C9A45E" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.4" />
                <text x="295" y="238" fill="#8B7A6A" fontSize="9" fontFamily="sans-serif">9 km</text>
                {/* Bordeaux */}
                <circle cx="60" cy="310" r="6" fill="#8B7A6A" opacity="0.6" />
                <text x="70" y="305" fill="#8B7A6A" fontSize="10" fontFamily="sans-serif" opacity="0.7">Bordeaux</text>
                <text x="70" y="318" fill="#8B7A6A" fontSize="9" fontFamily="sans-serif" opacity="0.5">40 km</text>
              </svg>

              {/* Overlay text */}
              <div className="absolute bottom-4 left-4">
                <p
                  className="text-text text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  Parking gratuit · 50 places · 90m
                </p>
              </div>
            </motion.div>

            {/* Nearby attractions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p
                className="text-stone text-xs tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                À proximité
              </p>
              <div className="flex flex-wrap gap-2">
                {nearby.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 border border-dark-border text-text-muted text-xs tracking-wide"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
