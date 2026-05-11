"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORDS = ["Élégance", "Raffinement", "Prestige", "Exception"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const wordIndexRef = useRef(0);
  const wordElRef = useRef<HTMLSpanElement>(null);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.05]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      tl.from(".hero-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".hero-title-word",
          {
            y: 80,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-line",
          {
            scaleX: 0,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.6"
        )
        .from(
          ".hero-sub",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-scroll",
          {
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!wordElRef.current) return;
    const interval = setInterval(() => {
      wordIndexRef.current = (wordIndexRef.current + 1) % WORDS.length;
      gsap.to(wordElRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (wordElRef.current) {
            wordElRef.current.textContent = WORDS[wordIndexRef.current];
          }
          gsap.fromTo(
            wordElRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
          );
        },
      });
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const handleReserve = () => {
    document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDiscover = () => {
    document.getElementById("histoire")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-svh min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Accueil"
    >
      {/* Background parallax */}
      <motion.div
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale }}
      >
        {/* Gradient hero background — themed via CSS classes */}
        <div className="absolute inset-0 hero-gradient-bg" />
        {/* Subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 40%, rgba(12,10,7,0.8) 100%)",
          }}
        />
        {/* Decorative grape/vine lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            d="M-100,450 Q200,200 400,400 T800,350 T1200,420 T1600,380"
            stroke="#C9A45E"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M-100,500 Q300,300 500,450 T900,400 T1300,470 T1700,430"
            stroke="#C9A45E"
            strokeWidth="0.5"
            fill="none"
          />
          <circle cx="400" cy="400" r="3" fill="#C9A45E" />
          <circle cx="720" cy="360" r="2" fill="#C9A45E" />
          <circle cx="1000" cy="430" r="3" fill="#C9A45E" />
          <circle cx="1200" cy="380" r="2" fill="#C9A45E" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        {/* Eyebrow */}
        <div className="hero-eyebrow flex items-center justify-center gap-4 mb-8">
          <span className="block w-12 h-px bg-gold/60" aria-hidden="true" />
          <p
            className="text-gold text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Saint-Émilion · 1882
          </p>
          <span className="block w-12 h-px bg-gold/60" aria-hidden="true" />
        </div>

        {/* Title */}
        <h1
          className="overflow-hidden"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          <div className="overflow-hidden">
            <span className="hero-title-word block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-text leading-none tracking-wide">
              Pavillon des
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-title-word block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-gold italic leading-none tracking-wide">
              Millésimes
            </span>
          </div>
        </h1>

        {/* Gold line */}
        <div className="hero-line my-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent origin-center" />

        {/* Animated descriptor */}
        <p
          className="hero-sub text-xl lg:text-2xl text-text-muted font-light tracking-widest mb-2"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Une maison d'exception &amp; SPA ·{" "}
          <span
            ref={wordElRef}
            className="text-gold-light italic inline-block"
          >
            {WORDS[0]}
          </span>
        </p>
        <p
          className="hero-sub text-sm tracking-[0.25em] text-stone uppercase mt-1"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          Lussac · Bordeaux · France
        </p>

        {/* CTAs */}
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={handleReserve}
            className="group px-10 py-4 bg-gold hover:bg-gold-light text-black text-sm tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer min-w-[200px]"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            <span className="group-hover:tracking-[0.35em] transition-all duration-300">
              Réserver
            </span>
          </button>
          <button
            onClick={handleDiscover}
            className="px-10 py-4 border border-text/30 hover:border-text/60 text-text text-sm tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer min-w-[200px]"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Découvrir
          </button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <span
          className="text-stone text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          Découvrir
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-stone to-transparent" />
      </motion.div>
    </section>
  );
}
