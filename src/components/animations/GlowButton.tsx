'use client';

/**
 * GlowButton - Premium CTA button with brand-coloured glow effects
 *
 * Features:
 * - Animated glow on hover
 * - Brand colour variants (intel, pitch, tracker)
 * - Smooth press animations
 * - Multiple sizes
 *
 * Usage:
 *   <GlowButton variant="intel" href="/start">Start Free Trial</GlowButton>
 *   <GlowButton variant="pitch" size="lg" onClick={handleClick}>Get Started</GlowButton>
 */

import { motion, type HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { transitions, hoverScale, tapScale } from '@/lib/motion';

type GlowVariant = 'intel' | 'pitch' | 'tracker' | 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface GlowButtonBaseProps {
  children: ReactNode;
  /** Brand colour variant */
  variant?: GlowVariant;
  /** Button size */
  size?: ButtonSize;
  /** Enable animated glow pulse */
  glowPulse?: boolean;
  /** Additional className */
  className?: string;
  /** Disable the button */
  disabled?: boolean;
}

interface GlowButtonLinkProps extends GlowButtonBaseProps {
  href: string;
  onClick?: never;
}

interface GlowButtonClickProps extends GlowButtonBaseProps {
  onClick: () => void;
  href?: never;
}

type GlowButtonProps = GlowButtonLinkProps | GlowButtonClickProps;

// Variant styles
const variantStyles: Record<GlowVariant, { base: string; glow: string; glowHover: string }> = {
  intel: {
    base: 'bg-intel-600 hover:bg-intel-700 text-white border-intel-700',
    glow: 'shadow-glow-intel-sm',
    glowHover: 'hover:shadow-glow-intel',
  },
  pitch: {
    base: 'bg-pitch-600 hover:bg-pitch-700 text-white border-pitch-700',
    glow: 'shadow-glow-pitch-sm',
    glowHover: 'hover:shadow-glow-pitch',
  },
  tracker: {
    base: 'bg-tracker-600 hover:bg-tracker-700 text-white border-tracker-700',
    glow: 'shadow-glow-tracker-sm',
    glowHover: 'hover:shadow-glow-tracker',
  },
  primary: {
    base: 'bg-cyan-700 hover:bg-cyan-800 text-white border-cyan-700 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_16px_rgba(8,145,178,0.25)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_24px_rgba(8,145,178,0.35)]',
    glow: '',
    glowHover: '',
  },
  secondary: {
    base: 'bg-white hover:bg-gray-50 text-gray-900 border-gray-300',
    glow: '',
    glowHover: 'hover:border-gray-400',
  },
};

// Size styles
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

// Glow pulse animation class
const glowPulseClasses: Record<GlowVariant, string> = {
  intel: 'animate-glow-pulse-intel',
  pitch: 'animate-glow-pulse-pitch',
  tracker: 'animate-glow-pulse-tracker',
  primary: 'animate-glow-pulse',
  secondary: '',
};

export function GlowButton({
  children,
  variant = 'intel',
  size = 'md',
  glowPulse = false,
  className = '',
  disabled = false,
  ...props
}: GlowButtonProps) {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];
  const pulseClass = glowPulse ? glowPulseClasses[variant] : '';

  const buttonClasses = clsx(
    // Base styles
    'inline-flex items-center justify-center font-bold rounded-lg border-2',
    'transition-all duration-300 ease-out-expo',
    // Variant styles
    variantStyle.base,
    variantStyle.glow,
    !disabled && variantStyle.glowHover,
    // Size styles
    sizeStyle,
    // Glow pulse animation
    pulseClass,
    // Disabled styles
    disabled && 'opacity-50 cursor-not-allowed',
    // Custom className
    className
  );

  // Motion variants for hover and tap
  const motionVariants = {
    rest: { scale: 1 },
    hover: { scale: disabled ? 1 : 1.02 },
    tap: { scale: disabled ? 1 : 0.98 },
  };

  // If it's a link
  if ('href' in props && props.href) {
    return (
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={motionVariants}
        transition={transitions.springSnappy}
      >
        <Link href={props.href} className={buttonClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  // If it's a button with onClick
  return (
    <motion.button
      onClick={'onClick' in props ? props.onClick : undefined}
      disabled={disabled}
      className={buttonClasses}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={motionVariants}
      transition={transitions.springSnappy}
    >
      {children}
    </motion.button>
  );
}

/**
 * Pre-configured Intel CTA button
 */
export function IntelButton({
  children,
  href,
  size = 'md',
  glowPulse = false,
  className = '',
}: {
  children: ReactNode;
  href: string;
  size?: ButtonSize;
  glowPulse?: boolean;
  className?: string;
}) {
  return (
    <GlowButton
      variant="intel"
      href={href}
      size={size}
      glowPulse={glowPulse}
      className={className}
    >
      {children}
    </GlowButton>
  );
}

/**
 * Pre-configured Pitch CTA button
 */
export function PitchButton({
  children,
  href,
  size = 'md',
  glowPulse = false,
  className = '',
}: {
  children: ReactNode;
  href: string;
  size?: ButtonSize;
  glowPulse?: boolean;
  className?: string;
}) {
  return (
    <GlowButton
      variant="pitch"
      href={href}
      size={size}
      glowPulse={glowPulse}
      className={className}
    >
      {children}
    </GlowButton>
  );
}

/**
 * Pre-configured Tracker CTA button
 */
export function TrackerButton({
  children,
  href,
  size = 'md',
  glowPulse = false,
  className = '',
}: {
  children: ReactNode;
  href: string;
  size?: ButtonSize;
  glowPulse?: boolean;
  className?: string;
}) {
  return (
    <GlowButton
      variant="tracker"
      href={href}
      size={size}
      glowPulse={glowPulse}
      className={className}
    >
      {children}
    </GlowButton>
  );
}

export default GlowButton;
