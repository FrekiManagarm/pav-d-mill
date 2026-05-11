"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "From the moment of arrival it was just magnifique! The building has been decorated so tastefully, it is sophisticated yet relaxing. Some of the most delicious French cuisine with such a great selection of wine.",
    author: "Gabriella",
    country: "Royaume-Uni",
    rating: 10,
    platform: "Booking.com",
  },
  {
    id: 2,
    text: "Astonishing, marvellous property, the owners welcomed us so well that we felt immediately at home. The property comes just of a design catalogue with an excellent pool as an extra. St Emilion is just around the corner.",
    author: "Kirsten",
    country: "Belgique",
    rating: 10,
    platform: "Booking.com",
  },
  {
    id: 3,
    text: "We couldn't believe how beautiful this B and B was. Nothing from the outside could have told us how gorgeous it was inside. Jaw dropping experience.",
    author: "Wilson",
    country: "Australie",
    rating: 10,
    platform: "Booking.com",
  },
  {
    id: 4,
    text: "Excellent facility with beautiful decor and inner yards. The owners are beautiful people who make your stay unforgettable. They cook and serve dinner for you which is high class.",
    author: "Ivan",
    country: "Allemagne",
    rating: 10,
    platform: "Booking.com",
  },
  {
    id: 5,
    text: "Such a lovely place to stay. Nathalie and David could not have been more helpful and accommodating. The property and decor was stunning too. We hope to return!",
    author: "Monaghan",
    country: "Royaume-Uni",
    rating: 10,
    platform: "Booking.com",
  },
  {
    id: 6,
    text: "Impressive property being beautifully renovated by the owners. Spacious rooms, decorated with a lot of taste. Great buffet breakfast; we had a delicious gourmet dinner by the owner.",
    author: "Marie",
    country: "Allemagne",
    rating: 10,
    platform: "Booking.com",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section
      ref={ref}
      className="py-28 lg:py-40 px-6 overflow-hidden relative"
      aria-labelledby="testimonials-title"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 testimonials-gradient-bg" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
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
              Témoignages
            </span>
            <span className="w-10 h-px bg-gold" aria-hidden="true" />
          </motion.div>

          <motion.h2
            id="testimonials-title"
            className="text-4xl lg:text-5xl font-light text-text"
            style={{ fontFamily: "var(--font-cormorant)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Ce que disent nos{" "}
            <em className="text-gold italic">hôtes</em>
          </motion.h2>

          {/* Score badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { label: "Booking.com", score: "9.5 / 10" },
              { label: "TripAdvisor", score: "4.9 / 5" },
              { label: "Staycation", score: "9.9 / 10" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-gold text-xl font-light"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {s.score}
                </p>
                <p
                  className="text-stone text-[10px] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Main testimonial */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Large decorative quote */}
          <div
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-gold/10 select-none pointer-events-none"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "200px", lineHeight: 1 }}
            aria-hidden="true"
          >
            "
          </div>

          <div className="relative border border-dark-border bg-dark-card/30 p-10 lg:p-16 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-gold fill-gold"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p
                  className="text-xl lg:text-2xl xl:text-3xl text-text font-light leading-relaxed mb-8 italic"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  « {testimonials[current].text} »
                </p>

                <div>
                  <p
                    className="text-cream font-medium text-sm"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {testimonials[current].author}
                  </p>
                  <p
                    className="text-stone text-xs tracking-widest uppercase mt-1"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {testimonials[current].country} · {testimonials[current].platform}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="p-3 border border-dark-border hover:border-gold/40 text-stone hover:text-gold transition-all duration-300 cursor-pointer"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="cursor-pointer transition-all duration-300"
                  aria-label={`Témoignage ${i + 1}`}
                >
                  <span
                    className={`block h-px transition-all duration-300 ${
                      i === current ? "w-8 bg-gold" : "w-4 bg-dark-border"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 border border-dark-border hover:border-gold/40 text-stone hover:text-gold transition-all duration-300 cursor-pointer"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
