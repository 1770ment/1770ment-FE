export const colors = {
  primary: '#1E017D', // main-pupple
  primaryLight: '#7F28AF', // sub-pupple-4
  primaryDark: '#360D51', // sub-pupple-1

  pink: '#FFBBF9', // main-pink
  pinkLight: '#FF97FF', // sub-pink
  pinkGradient:
    'linear-gradient(132deg, rgba(255, 187, 249, 1) 0%, rgba(255, 142, 255, 1) 63%, rgba(255, 168, 247, 1) 100%)',

  purple: '#610096', // sub-pupple-3
  purpleLight: '#320B64', // sub-pupple-2
  purpleGradient:
    'radial-gradient(circle at 50% 50%, rgba(210, 156, 254, 1) 0%, rgba(137, 109, 241, 1) 100%)',

  gray: {
    800: '#242526', // black/800
    400: '#404040', // black/400
    300: '#525252', // black/300
    200: '#7A7A7A', // black/200
    100: '#A3A3A3', // black/100
    50: '#B8B8B8', // black/50
    20: '#F5F5F5', // black/20
    '00': '#FFFFFF', // black/00
    '03': '#EFF1FA', // gray/g-03
  },

  text: '#1F2C38', // text/titles
  textInverse: '#FFFFFF',

  background: '#FFFFFF',
  backgroundSecondary: '#F5F5F5',

  surface: '#F5F5F5',
  surfaceSecondary: '#FFFFFF',
  surfaceElevated: '#FFFFFF',

  border: '#F5F5F5', // black/20
  borderSecondary: '#B8B8B8', // black/50

  error: '#FF5959', // stroke_SLG08L
  success: '#7F28AF', // sub-pupple-4
  warning: '#FF97FF', // sub-pink
  info: '#1E017D', // main-pupple

  overlay: 'rgba(30, 1, 125, 0.5)', // primary with opacity
  overlayLight: 'rgba(30, 1, 125, 0.2)',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

export const typography = {
  // SUIT 폰트 패밀리 기반
  headline: {
    fontFamily: 'SUIT',
    fontSize: 32,
    fontWeight: '700' as const,
    lineHeight: 42,
    letterSpacing: -1.6, // -0.05em * 32px = -1.6px
    textAlign: 'left' as const,
  },

  // 서브 헤드라인 (피그마 Sub headline 스타일)
  subHeadline: {
    fontFamily: 'SUIT',
    fontSize: 26,
    fontWeight: '700' as const,
    lineHeight: 32,
    letterSpacing: -1.3,
    textAlign: 'left' as const,
  },

  titleL: {
    fontFamily: 'SUIT',
    fontSize: 22,
    fontWeight: '700' as const,
    lineHeight: 26,
    letterSpacing: -1.1,
    textAlign: 'left' as const,
  },

  titleM: {
    fontFamily: 'SUIT',
    fontSize: 18,
    fontWeight: '700' as const,
    lineHeight: 22,
    letterSpacing: -0.9, // -0.05em * 18px = -0.9px
    textAlign: 'left' as const,
  },

  titleS: {
    fontFamily: 'SUIT',
    fontSize: 16,
    fontWeight: '700' as const,
    lineHeight: 20,
    letterSpacing: -0.8, // -0.05em * 16px = -0.8px
    textAlign: 'left' as const,
  },

  // 본문 계열 (피그마 Body 스타일들)
  bodyB: {
    fontFamily: 'SUIT',
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 20,
    letterSpacing: -0.8, // -0.05em * 16px = -0.8px
    textAlign: 'left' as const,
  },

  bodyR: {
    fontFamily: 'SUIT',
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
    letterSpacing: -0.7, // -0.05em * 14px = -0.7px
    textAlign: 'left' as const,
  },

  // 라벨 계열 (피그마 Label 스타일들)
  labelM: {
    fontFamily: 'SUIT',
    fontSize: 12,
    fontWeight: '700' as const,
    lineHeight: 16,
    letterSpacing: -0.36, // -0.03em * 12px = -0.36px
    textAlign: 'left' as const,
  },

  labelR: {
    fontFamily: 'SUIT',
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
    letterSpacing: -0.42, // -0.03em * 14px = -0.42px
    textAlign: 'left' as const,
  },

  // 피그마에서 추출한 Suit 스타일
  suit: {
    fontFamily: 'SUIT',
    fontSize: 76,
    fontWeight: '500' as const,
    lineHeight: 101,
    letterSpacing: -3.8, // -0.05em * 76px = -3.8px
    textAlign: 'left' as const,
  },
} as const;

export const borderRadius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
} as const;

export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: colors.gray[800],
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: colors.gray[800],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: colors.gray[800],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
} as const;

// 피그마에서 추출한 특별한 스타일들
export const figmaStyles = {
  // 피그마에서 추출한 그라디언트들
  gradients: {
    pink: colors.pinkGradient,
    purple: colors.purpleGradient,
  },

  // 피그마에서 추출한 특별한 색상 조합
  colorCombinations: {
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
    },
    pink: {
      main: colors.pink,
      light: colors.pinkLight,
    },
    purple: {
      main: colors.purple,
      light: colors.purpleLight,
    },
  },

  // 피그마에서 추출한 텍스트 스타일 매핑
  textStyles: {
    Headline: 'headline',
    'Sub headline': 'subHeadline',
    'Title-L': 'titleL',
    'Title-M': 'titleM',
    'Title-S': 'titleS',
    'Body-B': 'bodyB',
    'Body-R': 'bodyR',
    'Label-M': 'labelM',
    'Label-R': 'labelR',
    Suit: 'suit',
  },
} as const;

// 통합 테마 객체
export const theme = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  figmaStyles,
} as const;

export type Theme = typeof theme;

// 피그마에서 추출한 디자인 토큰 정보
export const figmaDesignTokens = {
  source:
    'https://www.figma.com/design/gcQ8ymAvVviUFIxX57lMSv/1770ment_%EB%94%94%EC%9E%90%EC%9D%B8?node-id=172-1730',
  extractedAt: new Date().toISOString(),
  frameName: 'Font&Color',
  frameId: '172:1730',
  fontFamily: 'SUIT',
  colorPalette: {
    primary: colors.primary,
    pink: colors.pink,
    purple: colors.purple,
    gray: colors.gray,
  },
  typographyScale: {
    headline: typography.headline.fontSize,
    subHeadline: typography.subHeadline.fontSize,
    titleL: typography.titleL.fontSize,
    titleM: typography.titleM.fontSize,
    titleS: typography.titleS.fontSize,
    bodyB: typography.bodyB.fontSize,
    bodyR: typography.bodyR.fontSize,
    labelM: typography.labelM.fontSize,
    labelR: typography.labelR.fontSize,
  },
} as const;
