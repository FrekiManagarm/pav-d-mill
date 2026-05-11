"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ChefHat, Leaf, Wine } from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Table privée",
    desc: "La Table du Pavillon n'est pas ouverte au public. David cuisine exclusivement pour ses hôtes.",
  },
  {
    icon: Leaf,
    title: "Produits du terroir",
    desc: "Cuisine de marché, simple et savoureuse, sublimant les produits régionaux de qualité.",
  },
  {
    icon: Wine,
    title: "Accords millésimés",
    desc: "Vins des vignobles locaux sélectionnés avec soin pour accompagner chaque plat.",
  },
];

export default function Dining() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      id="table"
      ref={ref}
      className="relative py-28 lg:py-40 overflow-hidden"
      aria-labelledby="dining-title"
    >
      {/* Full-bleed background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 dining-gradient-bg" />
        {/* Decorative pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 800 800" aria-hidden="true">
          <defs>
            <pattern id="diamond" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20,2 L38,20 L20,38 L2,20 Z" fill="none" stroke="#C9A45E" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diamond)" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative aspect-square overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-l border-t border-gold/50 z-10" aria-hidden="true" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r border-b border-gold/50 z-10" aria-hidden="true" />

              {/* Visual representing fine dining */}
              <div
                className="w-full h-full relative"
                style={{
                  background:
                    "linear-gradient(145deg, #1E0E0A 0%, #2E1810 40%, #200E08 80%, #180A06 100%)",
                }}
              >
                {/* Plate/food silhouette */}
                <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full opacity-15" aria-hidden="true">
                  <circle cx="250" cy="250" r="180" fill="none" stroke="#C9A45E" strokeWidth="0.8" />
                  <circle cx="250" cy="250" r="140" fill="none" stroke="#C9A45E" strokeWidth="0.4" />
                  <circle cx="250" cy="250" r="80" fill="rgba(201,164,94,0.05)" stroke="#C9A45E" strokeWidth="0.6" />
                  <path d="M250,170 C280,170 300,200 300,250 C300,300 280,330 250,330 C220,330 200,300 200,250 C200,200 220,170 250,170 Z" fill="rgba(201,164,94,0.08)" />
                  <path d="M200,150 L200,100 M250,140 L250,90 M300,150 L300,100" stroke="#C9A45E" strokeWidth="0.6" />
                </svg>

                {/* Price tag */}
                <div className="absolute bottom-8 left-8">
                  <p
                    className="text-gold text-4xl font-light"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    59€
                  </p>
                  <p
                    className="text-stone text-xs tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    par personne
                  </p>
                </div>

                {/* Award */}
                <div className="absolute top-8 right-8 text-right">
                  <p
                    className="text-gold text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    Booking.com
                  </p>
                  <p
                    className="text-text text-2xl"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    9.8 / 10
                  </p>
                  <p
                    className="text-stone text-[10px] tracking-widest"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    Cuisine
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="w-10 h-px bg-gold" aria-hidden="true" />
              <span
                className="text-gold text-xs tracking-[0.35em] uppercase"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Gastronomie
              </span>
            </motion.div>

            <motion.h2
              id="dining-title"
              className="text-4xl lg:text-5xl xl:text-6xl font-light text-text leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              La Table du
              <br />
              <em className="text-gold italic">Pavillon</em>
            </motion.h2>

            <motion.p
              className="text-text-muted leading-relaxed mb-3"
              style={{ fontFamily: "var(--font-jost)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Chef David Chambaud vous invite à sa table privée pour une expérience
              culinaire exclusive. Cuisine du marché, produits régionaux d'exception
              et vins des vignobles de Saint-Émilion.
            </motion.p>

            <motion.p
              className="text-cream italic text-xl font-light leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-cormorant)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              « High class cuisine, beautifully presented. »
              <span className="block text-stone text-sm not-italic mt-1" style={{ fontFamily: "var(--font-jost)" }}>
                — Andrew, UK
              </span>
            </motion.p>

            {/* Features */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="mt-0.5 p-2 border border-gold/20 bg-gold/5 shrink-0">
                    <f.icon size={14} className="text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p
                      className="text-text text-sm font-medium mb-1"
                      style={{ fontFamily: "var(--font-jost)" }}
                    >
                      {f.title}
                    </p>
                    <p
                      className="text-stone text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-jost)" }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Formulas strip */}
            <motion.div
              className="mt-10 pt-8 border-t border-dark-border grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { label: "Petit-déjeuner", price: "Inclus" },
                { label: "Dîner", price: "59€/pers." },
                { label: "Buffet traiteur", price: "dès 75€" },
              ].map((f) => (
                <div key={f.label} className="text-center">
                  <p
                    className="text-gold text-lg font-light"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {f.price}
                  </p>
                  <p
                    className="text-stone text-[10px] tracking-widest uppercase mt-0.5"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {f.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
