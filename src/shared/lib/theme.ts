export const colors = {
  primary: '#007AFF',
  secondary: '#F2F2F7',
  background: '#FFFFFF',
  surface: '#F8F9FA',
  text: '#333333',
  textSecondary: '#666666',
  border: '#E5E5EA',
  error: '#FF3B30',
  success: '#34C759',
  warning: '#FF9500',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const typography = {
  h1: {
    fontSize: 36,
    fontWeight: 'bold' as const,
    lineHeight: 44,
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold' as const,
    lineHeight: 36,
  },
  h3: {
    fontSize: 24,
    fontWeight: '600' as const,
    lineHeight: 32,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 18,
  },
} as const;
