'use client';

/**
 * AnimatedCounter - Animated number counter with scroll trigger
 *
 * Features:
 * - Smooth counting animation from 0 to target
 * - Triggers on scroll into view
 * - Supports suffixes (%, +, k, etc.)
 * - Customisable duration and formatting
 *
 * Usage:
 *   <AnimatedCounter target={100} suffix="%" />
 *   <AnimatedCounter target={15} suffix=" hours" />
 *   <AnimatedCounter target={500} prefix="£" suffix="/mo" />
 */

import { useEffect, useRef, useState } from 'react';
import { useInView, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  /** The target number to count to */
  target: number;
  /** Text to display before the number */
  prefix?: string;
  /** Text to display after the number */
  suffix?: string;
  /** Animation duration in seconds */
  duration?: number;
  /** Number of decimal places */
  decimals?: number;
  /** Additional className */
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Whether to use thousands separator */
  useCommas?: boolean;
}

function useAnimatedNumber(
  target: number,
  duration: number,
  decimals: number,
  useCommas: boolean,
  isInView: boolean,
  delay: number
) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    duration: duration,
    bounce: 0,
  });

  // Subscribe to spring value changes
  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      const rounded = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest);

      if (useCommas && typeof rounded === 'number') {
        setDisplayValue(rounded.toLocaleString('en-GB'));
      } else if (useCommas && typeof rounded === 'string') {
        const [intPart, decPart] = rounded.split('.');
        const formattedInt = parseInt(intPart).toLocaleString('en-GB');
        setDisplayValue(decPart ? `${formattedInt}.${decPart}` : formattedInt);
      } else {
        setDisplayValue(String(rounded));
      }
    });

    return () => unsubscribe();
  }, [springValue, decimals, useCommas]);

  // Trigger animation when in view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timeoutId = setTimeout(() => {
        springValue.set(target);
        setHasAnimated(true);
      }, delay * 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isInView, target, springValue, delay, hasAnimated]);

  return displayValue;
}

export function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  duration = 2,
  decimals = 0,
  className = '',
  delay = 0,
  useCommas = true,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const displayValue = useAnimatedNumber(
    target,
    duration,
    decimals,
    useCommas,
    isInView,
    delay
  );

  return (
    <span ref={ref} className={className}>
      {prefix}
      <span>{displayValue}</span>
      {suffix}
    </span>
  );
}

/**
 * Pre-configured counter for time savings stats
 */
export function TimeSavedCounter({
  hours,
  className = '',
}: {
  hours: number;
  className?: string;
}) {
  return (
    <AnimatedCounter
      target={hours}
      suffix=" hours"
      duration={1.5}
      className={className}
    />
  );
}

/**
 * Pre-configured counter for percentage stats
 */
export function PercentageCounter({
  percent,
  className = '',
}: {
  percent: number;
  className?: string;
}) {
  return (
    <AnimatedCounter
      target={percent}
      suffix="%"
      duration={1.5}
      className={className}
    />
  );
}

/**
 * Pre-configured counter for price display
 */
export function PriceCounter({
  amount,
  className = '',
}: {
  amount: number;
  className?: string;
}) {
  return (
    <AnimatedCounter
      target={amount}
      prefix="£"
      duration={1.5}
      className={className}
    />
  );
}

export default AnimatedCounter;
