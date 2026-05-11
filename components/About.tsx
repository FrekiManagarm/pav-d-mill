"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "1882", label: "Année de fondation" },
  { value: "800m²", label: "De splendeur" },
  { value: "9.5", label: "Sur Booking.com" },
  { value: "7", label: "Suites & Chambres" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      id="histoire"
      ref={ref}
      className="relative py-28 lg:py-40 px-6 overflow-hidden"
      aria-labelledby="about-title"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 about-gradient-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text column */}
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
                Notre histoire
              </span>
            </motion.div>

            <motion.h2
              id="about-title"
              className="text-4xl lg:text-5xl xl:text-6xl font-light text-text leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Une ancienne mairie
              <br />
              <em className="text-gold italic">devenue</em> maison
              <br />
              d'hôtes de caractère
            </motion.h2>

            <motion.div
              className="space-y-5 text-text-muted leading-relaxed"
              style={{ fontFamily: "var(--font-jost)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <p>
                Construit en <strong className="text-cream">1882</strong> en pierre de
                Bordeaux, cet hôtel particulier de 800m² fut tour à tour mairie,
                tribunal, école privée et forge avant d'être sublimé par{" "}
                <strong className="text-cream">Nathalie et David Chambaud</strong>.
              </p>
              <p>
                Au cœur de l'appellation Lussac Saint-Émilion, à quelques minutes
                du village médiéval classé au patrimoine de l'UNESCO, le Pavillon des
                Millésimes incarne l'alliance parfaite entre l'authenticité du terroir
                et le raffinement contemporain.
              </p>
              <p className="text-cream font-light italic text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>
                « Notre amour du beau et du bon nous a poussé à proposer
                un service complet et maîtrisé. »
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-12 pt-10 border-t border-dark-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat) => (
                <div key={stat.value}>
                  <p
                    className="text-3xl lg:text-4xl text-gold font-light"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-stone text-xs tracking-widest uppercase mt-1"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="relative aspect-[3/4] overflow-hidden"
              style={{ y: imgY }}
            >
              {/* Decorative gold frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-gold/40 z-10" aria-hidden="true" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-gold/40 z-10" aria-hidden="true" />

              {/* Visual gradient representing the stone building */}
              <div
                className="w-full h-full"
                style={{
                  background: `
                    radial-gradient(ellipse 80% 60% at 40% 30%, rgba(201,164,94,0.12) 0%, transparent 60%),
                    radial-gradient(ellipse 60% 80% at 60% 70%, rgba(107,45,62,0.2) 0%, transparent 70%),
                    linear-gradient(145deg, #1E1A14 0%, #2A2218 40%, #1A1410 70%, #0E0C08 100%)
                  `,
                }}
              >
                {/* Building silhouette SVG */}
                <svg
                  viewBox="0 0 400 533"
                  className="absolute inset-0 w-full h-full opacity-20"
                  aria-hidden="true"
                >
                  <rect x="60" y="200" width="280" height="280" fill="none" stroke="#C9A45E" strokeWidth="0.5" />
                  <rect x="80" y="220" width="60" height="80" fill="none" stroke="#C9A45E" strokeWidth="0.5" />
                  <rect x="170" y="220" width="60" height="80" fill="none" stroke="#C9A45E" strokeWidth="0.5" />
                  <rect x="260" y="220" width="60" height="80" fill="none" stroke="#C9A45E" strokeWidth="0.5" />
                  <rect x="150" y="370" width="100" height="110" fill="none" stroke="#C9A45E" strokeWidth="0.5" />
                  <path d="M60,200 L200,80 L340,200" fill="none" stroke="#C9A45E" strokeWidth="0.5" />
                  <line x1="200" y1="80" x2="200" y2="50" stroke="#C9A45E" strokeWidth="0.5" />
                  <line x1="200" y1="50" x2="200" y2="30" stroke="#C9A45E" strokeWidth="1" />
                </svg>

                {/* Year overlay */}
                <div className="absolute bottom-8 left-8">
                  <p
                    className="text-7xl lg:text-8xl text-gold/20 font-light select-none"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    1882
                  </p>
                </div>

                {/* Label */}
                <div className="absolute top-8 right-8 text-right">
                  <p
                    className="text-gold text-xs tracking-[0.3em] uppercase"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    Lussac
                  </p>
                  <p
                    className="text-text-muted text-xs tracking-widest"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    Saint-Émilion
                  </p>
                </div>

                {/* Vignobles label */}
                <div className="absolute bottom-8 right-8">
                  <p className="text-stone text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-jost)" }}>
                    Vignobles &amp; Découvertes
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
