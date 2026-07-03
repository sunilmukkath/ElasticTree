"use client";

import { RefObject, useEffect, useState } from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function useVisibleCanvas(ref: RefObject<HTMLElement | null>) {
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "80px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, reduced]);

  return !reduced && visible;
}

export function useResponsiveDensity(base: number) {
  const [density, setDensity] = useState(base);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setDensity(w < 640 ? Math.max(24, Math.floor(base * 0.45)) : w < 1024 ? Math.floor(base * 0.7) : base);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [base]);

  return density;
}
