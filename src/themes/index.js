import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deDE as coreDeDE } from '@mui/material/locale';
import { deDE } from '@mui/x-date-pickers/locales';

// project import
import Palette from './palette';
import Typography from './typography';
import CustomShadows from './shadows';
import componentsOverride from './overrides';

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

export default function ThemeCustomization({ children }) {
  const theme = Palette('light', 'default');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = Typography(`'Red Hat Display', sans-serif`);
  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536
        }
      },
      direction: 'ltr',
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      typography: themeTypography,
      shape: {
        paddingButton: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
        paddingBoxMedium: {
          xs: `${theme.spacing(2.5)} ${theme.spacing(3)}`,
          sm: `${theme.spacing(3)} ${theme.spacing(4)}`,
          md: `${theme.spacing(5)} ${theme.spacing(6)}`,
          lg: `${theme.spacing(6)} ${theme.spacing(8)}`
        },
        paddingBoxLarge: {
          xs: `${theme.spacing(4)} ${theme.spacing(4)}`,
          sm: `${theme.spacing(6)} ${theme.spacing(7)}`,
          md: `${theme.spacing(9)} ${theme.spacing(11)}`,
          lg: `${theme.spacing(10)} ${theme.spacing(12)}`
        },
        borderRadius: theme.spacing(1),
        borderRadiusBox: theme.spacing(1),
        drawerWidth: {
          xs: '340px',
          lg: '360px',
          xl: '380px'
        },
        drawerWidthCondensed: '60px',
        layoutDesignGutter: { xs: theme.spacing(3), sm: theme.spacing(4), md: theme.spacing(5), lg: theme.spacing(7) },
        layoutDesignGutterOuter: { xs: theme.spacing(3), sm: theme.spacing(4), md: theme.spacing(4), lg: theme.spacing(5) }
      }
    }),
    [theme, themeTypography, themeCustomShadows]
  );

  const themes = createTheme(themeOptions, coreDeDE, deDE);
  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeCustomization.propTypes = {
  children: PropTypes.node
};
