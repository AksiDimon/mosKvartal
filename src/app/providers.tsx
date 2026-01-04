'use client';

import { LikeProvider } from '@/contexts/LikeContext';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return <LikeProvider>{children}</LikeProvider>;
}
