"use client";

import { motion } from "framer-motion";

const awards = [
  { label: "Guests' Choice Award", sub: "Booking.com", value: "#1" },
  { label: "Travelers' Choice", sub: "TripAdvisor", value: "#1" },
  { label: "Lussac", sub: "Classement", value: "Nº 1" },
  { label: "Wi-Fi", sub: "Note hôtes", value: "10/10" },
  { label: "Propreté", sub: "Note hôtes", value: "9.7/10" },
  { label: "Confort", sub: "Note hôtes", value: "9.8/10" },
];

export default function AwardsBand() {
  return (
    <div className="relative overflow-hidden border-y border-dark-border bg-dark-card/20 py-6">
      <motion.div
        className="flex gap-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        {[...awards, ...awards].map((award, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-10 border-r border-dark-border shrink-0"
          >
            <div className="text-center">
              <p
                className="text-gold text-xl font-light"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {award.value}
              </p>
              <p
                className="text-text text-xs tracking-wide"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {award.label}
              </p>
              <p
                className="text-stone text-[10px] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {award.sub}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
