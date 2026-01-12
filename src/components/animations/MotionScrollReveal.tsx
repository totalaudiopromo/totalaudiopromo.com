'use client';

/**
 * MotionScrollReveal - Premium scroll-triggered animations using Framer Motion
 *
 * Features:
 * - Smooth fade-in animations on scroll
 * - Staggered children for lists
 * - Multiple animation variants
 * - Performance optimised with viewport detection
 *
 * Usage:
 *   <MotionScrollReveal>
 *     <YourContent />
 *   </MotionScrollReveal>
 *
 *   // With staggered children
 *   <MotionScrollReveal variant="stagger">
 *     <div>Child 1</div>
 *     <div>Child 2</div>
 *     <div>Child 3</div>
 *   </MotionScrollReveal>
 */

import { motion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeIn,
  scaleIn,
  blurIn,
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  viewportConfig,
  transitions,
} from '@/lib/motion';

// Animation variant options
type AnimationVariant =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'fade'
  | 'scale'
  | 'blur'
  | 'stagger'
  | 'staggerFast'
  | 'staggerSlow';

// Viewport trigger options
type ViewportTrigger = 'default' | 'eager' | 'half' | 'repeat';

interface MotionScrollRevealProps {
  children: ReactNode;
  /** Animation variant to use */
  variant?: AnimationVariant;
  /** When to trigger the animation */
  trigger?: ViewportTrigger;
  /** Additional delay in seconds */
  delay?: number;
  /** Custom className */
  className?: string;
  /** HTML element to render as */
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'aside' | 'main' | 'span';
}

// Map variants to their Framer Motion configurations
const variantMap: Record<string, Variants> = {
  fadeUp: fadeInUp,
  fadeDown: fadeInDown,
  fadeLeft: fadeInLeft,
  fadeRight: fadeInRight,
  fade: fadeIn,
  scale: scaleIn,
  blur: blurIn,
  stagger: staggerContainer,
  staggerFast: staggerContainerFast,
  staggerSlow: staggerContainerSlow,
};

// Child variants for staggered animations - more pronounced
const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.default,
  },
};

export function MotionScrollReveal({
  children,
  variant = 'fadeUp',
  trigger = 'default',
  delay = 0,
  className = '',
  as = 'div',
}: MotionScrollRevealProps) {
  const isStaggerVariant = variant.startsWith('stagger');
  const variants = variantMap[variant] || fadeInUp;
  const viewport = viewportConfig[trigger];

  // For stagger variants, wrap children in motion.div
  if (isStaggerVariant) {
    const MotionComponent = motion[as];

    return (
      <MotionComponent
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className={className}
        style={{ willChange: 'transform, opacity' }}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              style={{ willChange: 'transform, opacity' }}
            >
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div variants={childVariants}>{children}</motion.div>
        )}
      </MotionComponent>
    );
  }

  // For non-stagger variants
  const MotionComponent = motion[as];

  // Add delay to variants if specified
  const variantsWithDelay: Variants = delay
    ? {
        ...variants,
        visible: {
          ...(variants.visible as object),
          transition: {
            ...((variants.visible as { transition?: object })?.transition || transitions.default),
            delay,
          },
        },
      }
    : variants;

  return (
    <MotionComponent
      variants={variantsWithDelay}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * Convenience wrapper for staggered list items
 * Use inside MotionScrollReveal with variant="stagger"
 */
export function MotionStaggerChild({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={childVariants}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}

export default MotionScrollReveal;
