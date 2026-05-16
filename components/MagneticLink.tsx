"use client";

import type { MouseEvent, ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function MagneticLink({
  href,
  children,
  className = "",
  ariaLabel,
}: MagneticLinkProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 130, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 130, damping: 18 });
  const x = useTransform(springX, (value) => value * 0.18);
  const y = useTransform(springY, (value) => value * 0.18);

  function onMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left - bounds.width / 2);
    pointerY.set(event.clientY - bounds.top - bounds.height / 2);
  }

  function onMouseLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      className={className}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 140, damping: 18 }}
    >
      {children}
    </motion.a>
  );
}
