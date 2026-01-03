'use client';

import { RefObject, useEffect, useRef, useState } from 'react';

type Options = {
  once?: boolean;
  threshold?: number | number[];
  rootMargin?: string;
};

export function useScrollReveal<T extends HTMLElement>({
  once = true,
  threshold = 0.1,
  rootMargin = '0px 0px -10% 0px',
}: Options = {}) {
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref: ref as RefObject<T>, isRevealed };
}
