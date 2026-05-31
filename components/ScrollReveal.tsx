"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  children: ReactNode;
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
  once?: boolean;
  className?: string;
};

export default function ScrollReveal({
  children,
  y = 24,
  duration = 0.7,
  delay = 0,
  start = "top 80%",
  once = true,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [y, duration, delay, start, once]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
