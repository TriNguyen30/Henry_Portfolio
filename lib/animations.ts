import type { Variants, Transition } from "motion/react";

export const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

export const SMOOTH_TRANSITION: Transition = {
  duration: 0.65,
  ease: SMOOTH_EASE,
};

export const SPRING_GENTLE: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 24,
};

export const SPRING_SNAPPY: Transition = {
  type: "spring",
  stiffness: 450,
  damping: 30,
};

// Section container animation triggered once in view
export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: SMOOTH_EASE,
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// Fade up element
export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: SMOOTH_EASE,
    },
  },
};

// Fade down element (e.g. top pill)
export const fadeInDownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: SMOOTH_EASE,
    },
  },
};

// Scale in element (e.g. avatar, badges)
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: SMOOTH_EASE,
    },
  },
};

// Stagger container for child items
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

// Fast stagger container for tags/chips
export const tagContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

// Tag/chip item variant
export const tagVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.88,
    y: 6,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: SMOOTH_EASE,
    },
  },
};

