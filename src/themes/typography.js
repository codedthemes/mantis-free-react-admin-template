// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||============================== //

import { createTheme } from '@mui/material/styles';
const theme = createTheme();

const Typography = (fontFamily) => ({
  fontFamily,
  htmlFontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  fontWeightBolder: 700,
  fontWeightBoldest: 800,
  h1: {
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.21,
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5rem'
    }
  },
  h2: {
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: 1.27,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem'
    }
  },
  h3: {
    fontWeight: 600,
    fontSize: '1.175rem',
    lineHeight: 1.2,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3rem'
    }
  },
  h4: {
    fontWeight: 600,
    fontSize: '1.1rem',
    lineHeight: 1.4,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem'
    }
  },
  h5: {
    fontWeight: 600,
    fontSize: '1.05rem',
    lineHeight: 1.5,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.1rem'
    }
  },
  h6: {
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.5
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.85rem',
    lineHeight: 1.66
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.57
  },
  body2: {
    fontSize: '1.1rem',
    lineHeight: 1.66
  },
  subtitle1: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.57
  },
  subtitle2: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.66
  },
  overline: {
    lineHeight: 1.66
  },
  button: {
    fontSize: '1rem',
    textTransform: 'initial',
    "&:first-letter": {
      textTransform: 'uppercase'
    }
  }
});

export default Typography;
