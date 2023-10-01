// material-ui
import { createTheme } from '@mui/material/styles';

// third-party
import { presetPalettes } from '@ant-design/colors';

// project import
import ThemeOption from './theme';

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode) => {
  const colors = presetPalettes;

  const greyPrimary = [
    '#ffffff',
    '#fafafa',
    '#f5f5f5',
    '#f0f0f0',
    '#d9d9d9',
    '#bfbfbf',
    '#8c8c8c',
    '#595959',
    '#262626',
    '#141414',
    '#000000'
  ];
  const greyAscent = ['#fafafa', '#bfbfbf', '#434343', '#1f1f1f'];
  const greyConstant = ['#fafafb', '#e6ebf1'];

  colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

  const paletteColor = ThemeOption(colors);

  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

  return createTheme({
    palette: {
      mode,
      common: {
        black: '#3f333b',
        white: '#f1f4fc'
      },
      ...paletteColor,
      // primary: createColor('#007f53'),
      // secondary: createColor('#305ab7'),
      error: createColor('#d42a31'),
      warning: createColor('#ffc300'),
      primary: {
        50: '#e1eaed',
        100: '#b3cad2',
        200: '#80a6b4',
        300: '#4d8296',
        400: '#276880',
        500: '#014d69',
        600: '#014661',
        700: '#013d56',
        800: '#01344c',
        900: '#00253b',
        A100: '#71bdff',
        A200: '#3ea5ff',
        A400: '#0b8eff',
        A700: '#0081f1',
        contrastDefaultColor: 'light',
        ...createColor('#014D69')
      },
      secondary: {
        50: '#fef5ec',
        100: '#fbe7cf',
        200: '#f9d7af',
        300: '#f7c68f',
        400: '#f5ba77',
        500: '#f3ae5f',
        600: '#f1a757',
        700: '#ef9d4d',
        800: '#ed9443',
        900: '#ea8432',
        A100: '#ffffff',
        A200: '#fffdfc',
        A400: '#ffe0c9',
        A700: '#ffd1af',
        contrastDefaultColor: 'dark',
        ...createColor('#e1b382')
      },
      tertiary: {
        50: '#eaebf2',
        100: '#c9cde0',
        200: '#a7adcb',
        300: '#858db6',
        400: '#6c74a6',
        500: '#555b98',
        600: '#4e538f',
        700: '#454983',
        800: '#3e4076',
        900: '#322f5e',
        ...createColor('#3e4076')
      },
      // primary: {
      //   50: '#e5f6ee',
      //   100: '#c1e7d5',
      //   200: '#99d8ba',
      //   300: '#6dcaa0',
      //   400: '#48be8b',
      //   500: '#13b277',
      //   600: '#0aa36c',
      //   700: '#01915f',
      //   800: '#007f53',
      //   900: '#015f3d',
      //   ...createColor('#007f53')
      // },
      // secondary: {
      //   50: '#e8ebf6',
      //   100: '#c3cde9',
      //   200: '#9cadda',
      //   300: '#758ccc',
      //   400: '#5472c1',
      //   500: '#305ab7',
      //   600: '#2a52ad',
      //   700: '#1f48a1',
      //   800: '#143e95',
      //   900: '#002d7f',
      //   ...createColor('#305ab7')
      // },
      text: {
        primary: paletteColor.grey[700],
        secondary: paletteColor.grey[500],
        disabled: paletteColor.grey[400]
      },
      white: createColor('#FFFFFF'),
      action: {
        disabled: paletteColor.grey[300]
      },
      divider: paletteColor.grey[200],
      background: {
        paper: paletteColor.grey[0],
        default: paletteColor.grey[0]
      }
    }
  });
};

export default Palette;
