"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const rooms = [
  {
    id: "marie-jeanne",
    name: "Suite Marie-Jeanne",
    type: "Suite",
    size: "32 m²",
    price: "dès 139€",
    desc: "Tons crème et colorés, lumineuse, avec baignoire. Une chambre aux tons pastel qui évoque les matins de printemps.",
    accent: "#E8B4A0",
    gradientDark:  "linear-gradient(145deg, #2A1A15 0%, #3D2218 50%, #1E140F 100%)",
    gradientLight: "linear-gradient(145deg, #F8EDE8 0%, #F0D8CC 50%, #F5E5DD 100%)",
  },
  {
    id: "melchior",
    name: "Suite Melchior",
    type: "Suite familiale",
    size: "30 m²",
    price: "dès 214€",
    desc: "Teintes bleues profondes, jusqu'à 6 personnes avec dortoir attenant. Idéale pour les familles et groupes d'amis.",
    accent: "#7BA3C0",
    gradientDark:  "linear-gradient(145deg, #101820 0%, #1A2C3A 50%, #0C1420 100%)",
    gradientLight: "linear-gradient(145deg, #EBF2F8 0%, #D5E5F5 50%, #E5EFF8 100%)",
  },
  {
    id: "magnum",
    name: "Chambre Magnum",
    type: "Chambre",
    size: "28 m²",
    price: "dès 159€",
    desc: "Gris baroque, élégance brute et raffinée. Un espace pensé pour les amoureux du détail architectural.",
    accent: "#A8A8A8",
    gradientDark:  "linear-gradient(145deg, #1A1A1A 0%, #2C2C2C 50%, #141414 100%)",
    gradientLight: "linear-gradient(145deg, #F0F0F0 0%, #E4E4E4 50%, #EBEBEB 100%)",
  },
  {
    id: "imperiale",
    name: "Chambre Impériale",
    type: "Chambre",
    size: "28 m²",
    price: "dès 169€",
    desc: "Or brun et touches dorées, vue sur le jardin. Une chambre qui rend hommage à l'architecture napoléonienne.",
    accent: "#C9913A",
    gradientDark:  "linear-gradient(145deg, #1E1408 0%, #2E1E0E 50%, #180E04 100%)",
    gradientLight: "linear-gradient(145deg, #F8F0DF 0%, #F0DFC0 50%, #F5EDD4 100%)",
  },
  {
    id: "balthazar",
    name: "Chambre Balthazar",
    type: "Chambre",
    size: "26 m²",
    price: "dès 149€",
    desc: "Vert sauge et naturel, sérénité absolue. Inspirée des jardins à la française, une parenthèse végétale.",
    accent: "#7A9A72",
    gradientDark:  "linear-gradient(145deg, #101A10 0%, #1C2A1A 50%, #0C1408 100%)",
    gradientLight: "linear-gradient(145deg, #EBF3EB 0%, #D8EAD8 50%, #E5F0E5 100%)",
  },
  {
    id: "muscadelle",
    name: "Studio Muscadelle",
    type: "Studio avec cuisine",
    size: "35 m²",
    price: "dès 179€",
    desc: "Style fleuri et kitchenette complète, pour 3 personnes. L'indépendance d'un appartement dans un cadre d'exception.",
    accent: "#D4A0B0",
    gradientDark:  "linear-gradient(145deg, #1E1018 0%, #2E1828 50%, #180C14 100%)",
    gradientLight: "linear-gradient(145deg, #F8ECF4 0%, #F0D8EC 50%, #F5E5F0 100%)",
  },
  {
    id: "cabernet",
    name: "Studio Cabernet",
    type: "Studio Duplex",
    size: "38 m²",
    price: "dès 189€",
    desc: "Ocre chaleureux, dernier étage, vue panoramique sur Lussac. Le summum du confort avec cuisine équipée.",
    accent: "#C07840",
    gradientDark:  "linear-gradient(145deg, #1E1208 0%, #2E1C10 50%, #180E04 100%)",
    gradientLight: "linear-gradient(145deg, #F8EDD8 0%, #F0D8B8 50%, #F5E5CC 100%)",
  },
];

export default function Rooms() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const { theme } = useTheme();

  return (
    <section
      id="chambres"
      ref={ref}
      className="py-28 lg:py-40 px-6 overflow-hidden"
      aria-labelledby="rooms-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="w-10 h-px bg-gold" aria-hidden="true" />
              <span
                className="text-gold text-xs tracking-[0.35em] uppercase"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Hébergement
              </span>
            </motion.div>
            <motion.h2
              id="rooms-title"
              className="text-4xl lg:text-5xl xl:text-6xl font-light text-text leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Suites & Chambres
              <br />
              <em className="text-gold italic">aux noms de millésimes</em>
            </motion.h2>
          </div>

          <motion.p
            className="text-text-muted max-w-sm leading-relaxed"
            style={{ fontFamily: "var(--font-jost)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            7 espaces uniques baptisés d'après des formats de bouteilles et cépages,
            chacun doté d'une personnalité propre et d'un confort irréprochable.
          </motion.p>
        </div>

        {/* Rooms grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {rooms.map((room, i) => (
            <RoomCard
              key={room.id}
              room={room}
              index={i}
              isInView={isInView}
              theme={theme}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#reservation"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-3 px-10 py-4 border border-gold/50 hover:border-gold hover:bg-gold/5 text-gold text-sm tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Vérifier les disponibilités
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function RoomCard({
  room,
  index,
  isInView,
  theme,
}: {
  room: (typeof rooms)[0];
  index: number;
  isInView: boolean;
  theme: "dark" | "light";
}) {
  const gradient = theme === "light" ? room.gradientLight : room.gradientDark;

  return (
    <motion.article
      className="group relative overflow-hidden border border-dark-border hover:border-gold/30 transition-all duration-500 cursor-pointer"
      style={{ background: gradient }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07 }}
      whileHover={{ y: -4 }}
    >
      {/* Color accent top */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: room.accent }}
        aria-hidden="true"
      />

      <div className="p-6 pt-7">
        {/* Type badge */}
        <span
          className="inline-block text-[10px] tracking-[0.3em] uppercase mb-4 opacity-60"
          style={{ fontFamily: "var(--font-jost)", color: room.accent }}
        >
          {room.type}
        </span>

        {/* Name */}
        <h3
          className="text-xl lg:text-2xl font-light text-text mb-3 leading-tight"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {room.name}
        </h3>

        {/* Description */}
        <p
          className="text-stone text-sm leading-relaxed mb-6"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          {room.desc}
        </p>

        {/* Footer */}
        <div className="flex items-end justify-between pt-4 border-t border-dark-border/60">
          <div>
            <p
              className="text-text-muted text-xs tracking-widest uppercase mb-1"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              {room.size}
            </p>
            <p
              className="text-gold text-lg font-light"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {room.price}
            </p>
          </div>
          <ArrowRight
            size={16}
            className="text-stone group-hover:text-gold group-hover:translate-x-1 transition-all duration-300"
            aria-hidden="true"
          />
        </div>
      </div>
    </motion.article>
  );
}
