import React, { createContext, ReactNode } from 'react';
import { theme, Theme } from './theme';

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  customTheme?: Partial<Theme>;
}

export const ThemeProvider = ({
  children,
  customTheme,
}: ThemeProviderProps) => {
  const mergedTheme = customTheme ? { ...theme, ...customTheme } : theme;

  return (
    <ThemeContext.Provider value={{ theme: mergedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
