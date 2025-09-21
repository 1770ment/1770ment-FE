import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.md,
  },
  containerCentered: {
    flex: 1,
    backgroundColor: theme.colors.gray['00'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPadded: {
    flex: 1,
    backgroundColor: theme.colors.gray['00'],
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
  },

  textHeadline: {
    ...theme.typography.headline,
  },
  textSubHeadline: {
    ...theme.typography.subHeadline,
  },
  textTitleL: {
    ...theme.typography.titleL,
    color: theme.colors.text,
  },
  textTitleM: {
    ...theme.typography.titleM,
    color: theme.colors.text,
  },
  textTitleS: {
    ...theme.typography.titleS,
    color: theme.colors.text,
  },
  textBodyB: {
    ...theme.typography.bodyB,
    color: theme.colors.text,
  },
  textBodyR: {
    ...theme.typography.bodyR,
    color: theme.colors.text,
  },
  textLabelM: {
    ...theme.typography.labelM,
    color: theme.colors.text,
  },
  textLabelR: {
    ...theme.typography.labelR,
    color: theme.colors.text,
  },
  textSuit: {
    ...theme.typography.suit,
    color: theme.colors.text,
  },

  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  columnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // 마진 스타일
  marginXs: { margin: theme.spacing.xs },
  marginSm: { margin: theme.spacing.sm },
  marginMd: { margin: theme.spacing.md },
  marginLg: { margin: theme.spacing.lg },
  marginXl: { margin: theme.spacing.xl },
  marginTopXs: { marginTop: theme.spacing.xs },
  marginTopSm: { marginTop: theme.spacing.sm },
  marginTopMd: { marginTop: theme.spacing.md },
  marginTopLg: { marginTop: theme.spacing.lg },
  marginTopXl: { marginTop: theme.spacing.xl },
  marginBottomXs: { marginBottom: theme.spacing.xs },
  marginBottomSm: { marginBottom: theme.spacing.sm },
  marginBottomMd: { marginBottom: theme.spacing.md },
  marginBottomLg: { marginBottom: theme.spacing.lg },
  marginBottomXl: { marginBottom: theme.spacing.xl },
  marginHorizontalXs: { marginHorizontal: theme.spacing.xs },
  marginHorizontalSm: { marginHorizontal: theme.spacing.sm },
  marginHorizontalMd: { marginHorizontal: theme.spacing.md },
  marginHorizontalLg: { marginHorizontal: theme.spacing.lg },
  marginHorizontalXl: { marginHorizontal: theme.spacing.xl },
  marginVerticalXs: { marginVertical: theme.spacing.xs },
  marginVerticalSm: { marginVertical: theme.spacing.sm },
  marginVerticalMd: { marginVertical: theme.spacing.md },
  marginVerticalLg: { marginVertical: theme.spacing.lg },
  marginVerticalXl: { marginVertical: theme.spacing.xl },

  // 패딩 스타일
  paddingXs: { padding: theme.spacing.xs },
  paddingSm: { padding: theme.spacing.sm },
  paddingMd: { padding: theme.spacing.md },
  paddingLg: { padding: theme.spacing.lg },
  paddingXl: { padding: theme.spacing.xl },
  paddingTopXs: { paddingTop: theme.spacing.xs },
  paddingTopSm: { paddingTop: theme.spacing.sm },
  paddingTopMd: { paddingTop: theme.spacing.md },
  paddingTopLg: { paddingTop: theme.spacing.lg },
  paddingTopXl: { paddingTop: theme.spacing.xl },
  paddingBottomXs: { paddingBottom: theme.spacing.xs },
  paddingBottomSm: { paddingBottom: theme.spacing.sm },
  paddingBottomMd: { paddingBottom: theme.spacing.md },
  paddingBottomLg: { paddingBottom: theme.spacing.lg },
  paddingBottomXl: { paddingBottom: theme.spacing.xl },
  paddingHorizontalXs: { paddingHorizontal: theme.spacing.xs },
  paddingHorizontalSm: { paddingHorizontal: theme.spacing.sm },
  paddingHorizontalMd: { paddingHorizontal: theme.spacing.md },
  paddingHorizontalLg: { paddingHorizontal: theme.spacing.lg },
  paddingHorizontalXl: { paddingHorizontal: theme.spacing.xl },
  paddingVerticalXs: { paddingVertical: theme.spacing.xs },
  paddingVerticalSm: { paddingVertical: theme.spacing.sm },
  paddingVerticalMd: { paddingVertical: theme.spacing.md },
  paddingVerticalLg: { paddingVertical: theme.spacing.lg },
  paddingVerticalXl: { paddingVertical: theme.spacing.xl },

  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  absoluteFill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  absoluteCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  hidden: { display: 'none' },
  visible: { display: 'flex' },
  opacity50: { opacity: 0.5 },
  opacity75: { opacity: 0.75 },
});
