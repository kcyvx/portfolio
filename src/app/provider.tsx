"use client";
import { ThemeProvider } from 'chromatic-ui-themes';
import 'chromatic-ui-themes/dist/themes.css';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider defaultTheme="emeraude-dark">
        {children}
      </ThemeProvider>
    </>
  );
}