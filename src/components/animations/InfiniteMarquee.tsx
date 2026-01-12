'use client';

/**
 * InfiniteMarquee - Seamless infinite scrolling content
 *
 * Features:
 * - Smooth infinite scroll animation
 * - Pause on hover option
 * - Configurable speed and direction
 * - Duplicates content for seamless loop
 *
 * Usage:
 *   <InfiniteMarquee>
 *     <Logo1 />
 *     <Logo2 />
 *     <Logo3 />
 *   </InfiniteMarquee>
 */

import { ReactNode, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import clsx from 'clsx';

interface InfiniteMarqueeProps {
  children: ReactNode;
  /** Speed multiplier (1 = 30s, 2 = 15s, 0.5 = 60s) */
  speed?: number;
  /** Direction of scroll */
  direction?: 'left' | 'right';
  /** Pause animation on hover */
  pauseOnHover?: boolean;
  /** Gap between items (Tailwind spacing) */
  gap?: string;
  /** Additional className for the container */
  className?: string;
  /** Additional className for each item wrapper */
  itemClassName?: string;
}

export function InfiniteMarquee({
  children,
  speed = 1,
  direction = 'left',
  pauseOnHover = true,
  gap = 'gap-8',
  className = '',
  itemClassName = '',
}: InfiniteMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  // Calculate duration based on speed (base is 30s)
  const duration = 30 / speed;

  // Animation direction
  const translateX = direction === 'left' ? [0, -100] : [-100, 0];

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      controls.start({
        x: `${translateX[1]}%`,
        transition: {
          duration,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    }
  };

  // Convert children to array for duplication
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div
      ref={containerRef}
      className={clsx('overflow-hidden', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={clsx('flex', gap)}
        animate={{
          x: [`${translateX[0]}%`, `${translateX[1]}%`],
        }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {/* First set of items */}
        {childArray.map((child, index) => (
          <div
            key={`original-${index}`}
            className={clsx('flex-shrink-0', itemClassName)}
          >
            {child}
          </div>
        ))}

        {/* Duplicate for seamless loop */}
        {childArray.map((child, index) => (
          <div
            key={`duplicate-${index}`}
            className={clsx('flex-shrink-0', itemClassName)}
            aria-hidden="true"
          >
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Pre-configured marquee for client/partner logos
 */
export function LogoMarquee({
  logos,
  className = '',
}: {
  logos: { src: string; alt: string; width?: number; height?: number }[];
  className?: string;
}) {
  return (
    <InfiniteMarquee
      speed={0.8}
      pauseOnHover={true}
      gap="gap-12"
      className={className}
      itemClassName="flex items-center"
    >
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          width={logo.width || 120}
          height={logo.height || 40}
          className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
        />
      ))}
    </InfiniteMarquee>
  );
}

/**
 * Pre-configured marquee for testimonial snippets
 */
export function TestimonialMarquee({
  testimonials,
  className = '',
}: {
  testimonials: { quote: string; author: string; role?: string }[];
  className?: string;
}) {
  return (
    <InfiniteMarquee
      speed={0.5}
      pauseOnHover={true}
      gap="gap-6"
      className={className}
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-80 p-4 bg-white rounded-xl border border-gray-200 shadow-soft"
        >
          <p className="text-sm text-gray-600 italic mb-2">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p className="text-sm font-semibold text-gray-900">
            {testimonial.author}
          </p>
          {testimonial.role && (
            <p className="text-xs text-gray-500">{testimonial.role}</p>
          )}
        </div>
      ))}
    </InfiniteMarquee>
  );
}

export default InfiniteMarquee;
