import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3;
}

export function ScrollReveal({ children, className = '', delay }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation();

  const delayClass = delay ? `scroll-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`scroll-fade-in ${isVisible ? 'visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
