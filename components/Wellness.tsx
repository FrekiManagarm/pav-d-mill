"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Waves, Thermometer, Dumbbell, Circle, Droplets, GlassWater } from "lucide-react";

const amenities = [
  { icon: Waves, label: "Piscine chauffée", sub: "Eau salée · Mai–Sept." },
  { icon: Thermometer, label: "Sauna & Hammam", sub: "Grotte de sel · Infrarouge" },
  { icon: Droplets, label: "Jacuzzi privatif", sub: "Terrasse jardin" },
  { icon: Dumbbell, label: "Salle de fitness", sub: "Équipement professionnel" },
  { icon: Circle, label: "Salle de massage", sub: "Sur réservation" },
  { icon: GlassWater, label: "Billard & Bar à vin", sub: "Vendredi soir offert" },
];

export default function Wellness() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="bien-etre"
      ref={ref}
      className="relative py-28 lg:py-40 px-6 overflow-hidden"
      aria-labelledby="wellness-title"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 wellness-gradient-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Full-bleed title section */}
        <div className="text-center mb-20 lg:mb-24">
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
              Bien-être & Détente
            </span>
            <span className="w-10 h-px bg-gold" aria-hidden="true" />
          </motion.div>

          <motion.h2
            id="wellness-title"
            className="text-4xl lg:text-5xl xl:text-7xl font-light text-text leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Un{" "}
            <em className="text-gold italic">oasis</em>
            <br />
            de sérénité
          </motion.h2>

          <motion.p
            className="text-text-muted max-w-xl mx-auto mt-6 leading-relaxed"
            style={{ fontFamily: "var(--font-jost)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Plongez dans un espace dédié au ressourcement. Piscine, SPA, sauna, hammam :
            le Pavillon vous offre tous les attributs d'un hôtel 5 étoiles dans
            l'intimité d'une maison d'hôtes.
          </motion.p>
        </div>

        {/* Main visual: pool panoramic */}
        <motion.div
          className="relative mb-16 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="aspect-[21/9] w-full relative pool-visual-bg">
            {/* Pool visual with SVG */}
            <svg viewBox="0 0 1440 620" className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              {/* Water surface */}
              <defs>
                <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4A9AB8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#2A6A88" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C9A45E" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Pool rectangle */}
              <rect x="280" y="280" width="880" height="240" fill="url(#water)" rx="4" />
              {/* Water ripples */}
              <ellipse cx="720" cy="400" rx="400" ry="8" fill="none" stroke="#7AC0D8" strokeWidth="0.5" opacity="0.4" />
              <ellipse cx="720" cy="420" rx="300" ry="6" fill="none" stroke="#7AC0D8" strokeWidth="0.3" opacity="0.3" />
              <ellipse cx="720" cy="440" rx="200" ry="5" fill="none" stroke="#7AC0D8" strokeWidth="0.3" opacity="0.2" />
              {/* Pool surround / tiles */}
              <rect x="275" y="275" width="890" height="250" fill="none" stroke="#C9A45E" strokeWidth="0.5" rx="4" opacity="0.3" />
              {/* Garden / trees silhouettes */}
              <ellipse cx="150" cy="300" rx="60" ry="120" fill="#0A1408" opacity="0.6" />
              <rect x="140" y="300" width="20" height="200" fill="#0A1408" opacity="0.4" />
              <ellipse cx="1300" cy="280" rx="70" ry="140" fill="#0A1408" opacity="0.6" />
              <rect x="1290" y="280" width="20" height="200" fill="#0A1408" opacity="0.4" />
            </svg>

            {/* Pool quote overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <p
                className="text-text text-2xl lg:text-3xl xl:text-4xl font-light italic leading-relaxed max-w-2xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                « The lovely garden with pool and hot tub make it an{" "}
                <span className="text-gold">oasis</span>... »
              </p>
              <p
                className="text-stone text-sm tracking-widest mt-3 uppercase"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                — Andrew, Royaume-Uni
              </p>
            </div>
          </div>
        </motion.div>

        {/* Amenities grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {amenities.map((item, i) => (
            <motion.div
              key={item.label}
              className="group p-6 border border-dark-border hover:border-gold/30 bg-dark-card/30 hover:bg-dark-card/60 transition-all duration-400"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
            >
              <item.icon
                size={20}
                className="text-gold mb-4"
                aria-hidden="true"
              />
              <p
                className="text-text text-sm font-medium mb-1"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {item.label}
              </p>
              <p
                className="text-stone text-xs tracking-wide"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certification */}
        <motion.div
          className="mt-12 pt-10 border-t border-dark-border flex flex-col sm:flex-row items-center gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div
            className="text-center text-stone text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Label
          </div>
          <div className="w-px h-6 bg-dark-border hidden sm:block" aria-hidden="true" />
          <div
            className="text-text text-lg font-light"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Vignobles &amp; Découvertes
          </div>
          <div className="w-px h-6 bg-dark-border hidden sm:block" aria-hidden="true" />
          <div
            className="text-gold text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Chambres d'hôtes référence
          </div>
        </motion.div>
      </div>
    </section>
  );
}
