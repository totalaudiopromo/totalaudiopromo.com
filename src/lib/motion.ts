/**
 * Framer Motion configuration and animation presets
 * Inspired by premium sites like wisprflow.ai and totalaud.io
 *
 * Usage:
 *   import { fadeInUp, staggerContainer, transitions } from '@/lib/motion';
 *   <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" />
 */

import type { Variants, Transition } from 'framer-motion';

// =============================================================================
// TIMING FUNCTIONS
// Premium easing curves for smooth, professional animations
// =============================================================================

export const easings = {
  // Smooth deceleration - great for entrances
  easeOutExpo: [0.19, 1, 0.22, 1],
  // Slight overshoot - adds life to interactions
  easeOutBack: [0.34, 1.56, 0.64, 1],
  // Smooth acceleration then deceleration
  easeInOutCubic: [0.65, 0, 0.35, 1],
  // Natural spring-like feel
  spring: { type: 'spring', stiffness: 100, damping: 15 },
  // Snappy spring for buttons
  springSnappy: { type: 'spring', stiffness: 400, damping: 25 },
} as const;

// =============================================================================
// TRANSITION PRESETS
// Reusable transition configurations
// =============================================================================

export const transitions = {
  // Default smooth transition
  default: {
    duration: 0.6,
    ease: easings.easeOutExpo,
  } as Transition,

  // Fast transition for hover states
  fast: {
    duration: 0.3,
    ease: easings.easeOutExpo,
  } as Transition,

  // Slow transition for dramatic reveals
  slow: {
    duration: 0.9,
    ease: easings.easeOutExpo,
  } as Transition,

  // Spring transition for playful elements
  spring: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  } as Transition,

  // Snappy spring for buttons and interactive elements
  springSnappy: {
    type: 'spring',
    stiffness: 400,
    damping: 25,
  } as Transition,
} as const;

// =============================================================================
// ANIMATION VARIANTS
// Ready-to-use variants for common animation patterns
// =============================================================================

/**
 * Fade in from below - the classic scroll reveal
 * Made more pronounced for better visibility
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.default,
  },
};

/**
 * Fade in from above
 */
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.default,
  },
};

/**
 * Fade in from the left
 */
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.default,
  },
};

/**
 * Fade in from the right
 */
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.default,
  },
};

/**
 * Simple fade in (no movement)
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: transitions.default,
  },
};

/**
 * Scale up with fade - more dramatic
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.default,
  },
};

/**
 * Blur in effect - premium feel, stronger blur
 */
export const blurIn: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(20px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: transitions.default,
  },
};

// =============================================================================
// STAGGER CONTAINERS
// For animating lists of children with staggered delays
// =============================================================================

/**
 * Container for staggered children animations
 * Usage: Apply to parent, use child variants on children
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Faster stagger for smaller lists
 */
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

/**
 * Slower stagger for dramatic reveals
 */
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// =============================================================================
// HOVER & INTERACTION VARIANTS
// For buttons, cards, and interactive elements
// =============================================================================

/**
 * Subtle lift on hover - great for cards
 */
export const hoverLift = {
  rest: {
    y: 0,
    transition: transitions.fast,
  },
  hover: {
    y: -4,
    transition: transitions.springSnappy,
  },
};

/**
 * Scale up slightly on hover
 */
export const hoverScale = {
  rest: {
    scale: 1,
    transition: transitions.fast,
  },
  hover: {
    scale: 1.02,
    transition: transitions.springSnappy,
  },
};

/**
 * Glow effect on hover (use with CSS glow classes)
 */
export const hoverGlow = {
  rest: {
    boxShadow: '0 0 0 rgba(37, 99, 235, 0)',
    transition: transitions.fast,
  },
  hover: {
    boxShadow: '0 0 40px rgba(37, 99, 235, 0.4)',
    transition: transitions.fast,
  },
};

/**
 * Button press effect
 */
export const tapScale = {
  tap: {
    scale: 0.97,
    transition: transitions.springSnappy,
  },
};

// =============================================================================
// VIEWPORT CONFIG
// Consistent viewport detection settings
// =============================================================================

export const viewportConfig = {
  // Trigger when 20% of element is visible
  default: { once: true, amount: 0.2 },
  // Trigger immediately when any part is visible
  eager: { once: true, amount: 0 },
  // Trigger when half the element is visible
  half: { once: true, amount: 0.5 },
  // Re-trigger on every scroll (use sparingly)
  repeat: { once: false, amount: 0.2 },
} as const;

// =============================================================================
// BRAND-SPECIFIC GLOW COLOURS
// For use with hover effects and focus states
// =============================================================================

export const brandGlows = {
  intel: {
    small: '0 0 20px rgba(37, 99, 235, 0.3)',
    medium: '0 0 40px rgba(37, 99, 235, 0.4)',
    large: '0 0 60px rgba(37, 99, 235, 0.5)',
  },
  pitch: {
    small: '0 0 20px rgba(217, 119, 6, 0.3)',
    medium: '0 0 40px rgba(217, 119, 6, 0.4)',
    large: '0 0 60px rgba(217, 119, 6, 0.5)',
  },
  tracker: {
    small: '0 0 20px rgba(13, 148, 136, 0.3)',
    medium: '0 0 40px rgba(13, 148, 136, 0.4)',
    large: '0 0 60px rgba(13, 148, 136, 0.5)',
  },
} as const;

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Create a custom stagger container with specific timing
 */
export function createStaggerContainer(
  staggerChildren: number = 0.1,
  delayChildren: number = 0.1
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}

/**
 * Create a delayed variant (useful for sequential animations)
 */
export function withDelay(variants: Variants, delay: number): Variants {
  return {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(typeof variants.visible === 'object' && 'transition' in variants.visible
          ? variants.visible.transition
          : {}),
        delay,
      },
    },
  };
}
