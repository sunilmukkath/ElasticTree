/** Shared Framer Motion presets for the landing page */
import { usePrefersReducedMotion } from "@/lib/useVisibleCanvas";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

export const fadeUpView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.55, ease: easeOut },
};

export const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export function useMotionSafeStagger() {
  const reduced = usePrefersReducedMotion();
  if (reduced) {
    return {
      container: { initial: {}, animate: {} },
      item: { initial: {}, animate: {} },
    };
  }
  return { container: staggerContainer, item: staggerItem };
}

export function useMotionSafeFade(initialY = 20) {
  const reduced = usePrefersReducedMotion();
  if (reduced) {
    return {
      initial: false as const,
      whileInView: undefined,
      viewport: undefined,
      transition: undefined,
    };
  }
  return {
    initial: { opacity: 0, y: initialY },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" as const },
    transition: { duration: 0.5, ease: easeOut },
  };
}
