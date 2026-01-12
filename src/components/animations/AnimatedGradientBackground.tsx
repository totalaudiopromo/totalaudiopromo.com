'use client';

/**
 * AnimatedGradientBackground - Premium animated gradient backgrounds
 *
 * Features:
 * - Smooth gradient colour transitions
 * - Radial gradient overlays for depth
 * - Configurable colour schemes
 * - Performance optimised
 *
 * Usage:
 *   <AnimatedGradientBackground variant="intel">
 *     <YourContent />
 *   </AnimatedGradientBackground>
 */

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type GradientVariant =
  | 'intel'
  | 'pitch'
  | 'tracker'
  | 'dark'
  | 'light'
  | 'hero'
  | 'subtle';

interface AnimatedGradientBackgroundProps {
  children: ReactNode;
  /** Colour scheme variant */
  variant?: GradientVariant;
  /** Enable gradient animation */
  animated?: boolean;
  /** Show radial gradient overlay for depth */
  withRadialOverlay?: boolean;
  /** Additional className */
  className?: string;
  /** HTML element to render as */
  as?: 'div' | 'section' | 'header' | 'footer';
}

// Gradient colour configurations
const gradientConfigs: Record<
  GradientVariant,
  {
    background: string;
    radialOverlay?: string;
    animatedGradient?: string;
  }
> = {
  intel: {
    background: 'bg-gradient-to-br from-intel-50 via-white to-intel-100',
    radialOverlay:
      'radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.1), transparent 50%)',
    animatedGradient:
      'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(59, 130, 246, 0.15) 50%, rgba(37, 99, 235, 0.1) 100%)',
  },
  pitch: {
    background: 'bg-gradient-to-br from-pitch-50 via-white to-pitch-100',
    radialOverlay:
      'radial-gradient(circle at 80% 20%, rgba(217, 119, 6, 0.1), transparent 50%)',
    animatedGradient:
      'linear-gradient(135deg, rgba(217, 119, 6, 0.1) 0%, rgba(245, 158, 11, 0.15) 50%, rgba(217, 119, 6, 0.1) 100%)',
  },
  tracker: {
    background: 'bg-gradient-to-br from-tracker-50 via-white to-tracker-100',
    radialOverlay:
      'radial-gradient(circle at 20% 80%, rgba(13, 148, 136, 0.1), transparent 50%)',
    animatedGradient:
      'linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(20, 184, 166, 0.15) 50%, rgba(13, 148, 136, 0.1) 100%)',
  },
  dark: {
    background: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
    radialOverlay:
      'radial-gradient(circle at 30% 20%, rgba(37, 99, 235, 0.15), transparent 40%)',
    animatedGradient:
      'linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(37, 99, 235, 0.2) 100%)',
  },
  light: {
    background: 'bg-gradient-to-br from-gray-50 via-white to-gray-100',
    radialOverlay:
      'radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.05), transparent 50%)',
  },
  hero: {
    background: 'bg-white',
    radialOverlay:
      'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 235, 0.15), transparent 50%)',
    animatedGradient:
      'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(217, 119, 6, 0.08) 33%, rgba(13, 148, 136, 0.08) 66%, rgba(37, 99, 235, 0.08) 100%)',
  },
  subtle: {
    background: 'bg-gray-50',
    radialOverlay:
      'radial-gradient(circle at 100% 100%, rgba(37, 99, 235, 0.03), transparent 30%)',
  },
};

export function AnimatedGradientBackground({
  children,
  variant = 'hero',
  animated = true,
  withRadialOverlay = true,
  className = '',
  as = 'div',
}: AnimatedGradientBackgroundProps) {
  const config = gradientConfigs[variant];
  const Component = as;

  return (
    <Component className={clsx('relative overflow-hidden', config.background, className)}>
      {/* Animated gradient layer */}
      {animated && config.animatedGradient && (
        <motion.div
          className="absolute inset-0 opacity-60"
          style={{
            background: config.animatedGradient,
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 8,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      )}

      {/* Radial overlay for depth */}
      {withRadialOverlay && config.radialOverlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: config.radialOverlay,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </Component>
  );
}

/**
 * Hero section with premium gradient background
 */
export function HeroGradient({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <AnimatedGradientBackground
      variant="hero"
      animated={true}
      withRadialOverlay={true}
      as="section"
      className={className}
    >
      {children}
    </AnimatedGradientBackground>
  );
}

/**
 * Dark premium section background
 */
export function DarkGradient({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <AnimatedGradientBackground
      variant="dark"
      animated={true}
      withRadialOverlay={true}
      as="section"
      className={clsx('text-white', className)}
    >
      {children}
    </AnimatedGradientBackground>
  );
}

/**
 * Glassmorphism card with gradient background
 */
export function GlassCard({
  children,
  variant = 'intel',
  className = '',
}: {
  children: ReactNode;
  variant?: 'intel' | 'pitch' | 'tracker';
  className?: string;
}) {
  const glowClasses = {
    intel: 'shadow-glow-intel-sm hover:shadow-glow-intel',
    pitch: 'shadow-glow-pitch-sm hover:shadow-glow-pitch',
    tracker: 'shadow-glow-tracker-sm hover:shadow-glow-tracker',
  };

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-2xl',
        'bg-white/80 backdrop-blur-lg',
        'border border-gray-200/50',
        'transition-all duration-300 ease-out-expo',
        glowClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
}

export default AnimatedGradientBackground;
