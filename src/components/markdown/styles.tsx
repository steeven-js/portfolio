import { varAlpha } from 'minimal-shared/utils';

import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const MARGIN = '0.75em';

export const MarkdownRoot = styled('div', {
  shouldForwardProp: (prop: string) => !['firstLetter', 'sx'].includes(prop),
})<{ firstLetter?: boolean }>(({ firstLetter, theme }) => ({
  '> * + *': {
    marginTop: 0,
    marginBottom: MARGIN,
  },
  /**
   * Heading & Paragraph
   */
  h1: { ...theme.typography.h1, marginTop: 40, marginBottom: 8 },
  h2: { ...theme.typography.h2, marginTop: 40, marginBottom: 8 },
  h3: { ...theme.typography.h3, marginTop: 24, marginBottom: 8 },
  h4: { ...theme.typography.h4, marginTop: 24, marginBottom: 8 },
  h5: { ...theme.typography.h5, marginTop: 24, marginBottom: 8 },
  h6: { ...theme.typography.h6, marginTop: 24, marginBottom: 8 },
  p: { ...theme.typography.body1, marginBottom: '1.25rem' },
  /**
   * Hr Divider
   */
  hr: {
    flexShrink: 0,
    borderWidth: 0,
    margin: '2em 0',
    msFlexNegative: 0,
    WebkitFlexShrink: 0,
    borderStyle: 'solid',
    borderBottomWidth: 'thin',
    borderColor: theme.vars.palette.divider,
  },
  /**
   * Link
   */
  a: {
    textDecoration: 'none',
    color: theme.vars.palette.primary.main,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  /**
   * Image
   */
  img: {
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
  },
  /**
   * List
   */
  '& ul': {
    listStyleType: 'disc',
  },
  '& ul, & ol': {
    paddingLeft: 16,
    '& > li': {
      lineHeight: 2,
      '& > p': {
        margin: 0,
        display: 'inline-block',
      },
    },
  },
  /**
   * Blockquote
   */
  '& blockquote': {
    lineHeight: 1.5,
    fontSize: '1.5em',
    margin: '24px auto',
    position: 'relative',
    fontFamily: 'Georgia, serif',
    padding: theme.spacing(3, 3, 3, 8),
    color: theme.vars.palette.text.secondary,
    borderLeft: `solid 8px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`,
    [theme.breakpoints.up('md')]: { width: '100%', maxWidth: 640 },
    '& p': { margin: 0, fontSize: 'inherit', fontFamily: 'inherit' },
    '&::before': {
      left: 16,
      top: -8,
      display: 'block',
      fontSize: '3em',
      content: '"\\201C"',
      position: 'absolute',
      color: theme.vars.palette.text.disabled,
    },
  },
  /**
   * Table
   */
  table: {
    width: '100%',
    textAlign: 'left',
    borderCollapse: 'collapse',
    border: `1px solid ${theme.vars.palette.divider}`,
    'th, td': { padding: theme.spacing(1), border: `1px solid ${theme.vars.palette.divider}` },
    'tbody tr:nth-of-type(odd)': { backgroundColor: theme.vars.palette.background.neutral },
  },
  /**
   * Checkbox
   */
  input: {
    '&[type=checkbox]': {
      position: 'relative',
      cursor: 'pointer',
      '&:before': {
        content: '""',
        top: -2,
        left: -2,
        width: 17,
        height: 17,
        borderRadius: 3,
        position: 'absolute',
        backgroundColor: theme.vars.palette.grey[300],
        ...theme.applyStyles('dark', {
          backgroundColor: theme.vars.palette.grey[700],
        }),
      },
      '&:checked': {
        '&:before': { backgroundColor: theme.vars.palette.primary.main },
        '&:after': {
          content: '""',
          top: 1,
          left: 5,
          width: 4,
          height: 9,
          position: 'absolute',
          transform: 'rotate(45deg)',
          msTransform: 'rotate(45deg)',
          WebkitTransform: 'rotate(45deg)',
          border: `solid ${theme.vars.palette.common.white}`,
          borderWidth: '0 2px 2px 0',
        },
      },
    },
  },
  /**
   * First Letter
   */
  ...(firstLetter && {
    '& > p:first-of-type': {
      '&:first-letter': {
        float: 'left',
        fontSize: 80,
        lineHeight: 1,
        paddingRight: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
      },
    },
  }),
}));
