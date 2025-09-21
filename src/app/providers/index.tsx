import React from 'react';
import { ThemeProvider } from '../../shared/lib/ThemeProvider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
