'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import ThemeCustomization from 'themes';

export default function ThemeRegistry({ children }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeCustomization>
        {children}
      </ThemeCustomization>
    </AppRouterCacheProvider>
  );
}
