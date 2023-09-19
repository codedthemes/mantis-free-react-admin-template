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
        50: '#e0f0f6',
        100: '#c0d7dd',
        200: '#9ebbc3',
        300: '#7b9faa',
        400: '#618b96',
        500: '#467783',
        600: '#3b6873',
        700: '#2d545e',
        800: '#20414a',
        900: '#102c34',
        ...createColor('#2d545e')
      },
      complementary: {
        50: '#f2ebe3',
        100: '#d9ccc2',
        200: '#bdab9d',
        300: '#a18a77',
        400: '#8b705a',
        500: '#76583e',
        600: '#6b4f38',
        700: '#5c422e',
        800: '#4e3626',
        900: '#3f281c',
        ...createColor('#76583e')
      },
      secondary: {
        50: '#f8ede0',
        100: '#edd1b2',
        200: '#e1b382',
        300: '#d79551',
        400: '#d2802e',
        500: '#cb6d14',
        600: '#c76314',
        700: '#c05513',
        800: '#b94610',
        900: '#ae2c0c',
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
