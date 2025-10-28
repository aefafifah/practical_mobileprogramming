// components/ui/gluestack-ui-provider/index.tsx
import React from 'react';
import { ReactNode } from 'react';

interface GluestackUIProviderProps {
  config?: any;
  children?: ReactNode;
}

export function GluestackUIProvider({
  children
}: GluestackUIProviderProps) {
  // Simple wrapper tanpa dependencies
  return <>{children}</>;
}

// Mock config
export const config = {};