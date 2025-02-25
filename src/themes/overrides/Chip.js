// project imports
import getColors from 'utils/getColors';

// ==============================|| CHIP - COLORS ||============================== //

function getColor({ color, theme }) {
  const colors = getColors(theme, color);
  const { dark } = colors;

  return {
    '&.Mui-focusVisible': {
      outline: `2px solid ${dark}`,
      outlineOffset: 2
    }
  };
}

function getColorStyle({ color, theme }) {
  const colors = getColors(theme, color);
  const { light, lighter, main, darker } = colors;

  return {
    color: main,
    backgroundColor: lighter,
    borderColor: light,
    ...theme.applyStyles('dark', { color: darker }),
    '& .MuiChip-deleteIcon': {
      color: main,
      '&:hover': {
        color: light
      }
    }
  };
}

// ==============================|| OVERRIDES - CHIP ||============================== //

export default function Chip(theme) {
  const defaultLightChip = getColorStyle({ color: 'secondary', theme });
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          '&:active': {
            boxShadow: 'none'
          },
          '&.MuiChip-colorPrimary': getColor({ color: 'primary', theme }),
          '&.MuiChip-colorSecondary': getColor({ color: 'secondary', theme }),
          '&.MuiChip-colorError': getColor({ color: 'error', theme }),
          '&.MuiChip-colorInfo': getColor({ color: 'info', theme }),
          '&.MuiChip-colorSuccess': getColor({ color: 'success', theme }),
          '&.MuiChip-colorWarning': getColor({ color: 'warning', theme })
        },
        sizeLarge: {
          fontSize: '1rem',
          height: 40
        },
        light: {
          ...defaultLightChip,
          '&.MuiChip-lightPrimary': getColorStyle({ color: 'primary', theme }),
          '&.MuiChip-lightSecondary': getColorStyle({ color: 'secondary', theme }),
          '&.MuiChip-lightError': getColorStyle({ color: 'error', theme }),
          '&.MuiChip-lightInfo': getColorStyle({ color: 'info', theme }),
          '&.MuiChip-lightSuccess': getColorStyle({ color: 'success', theme }),
          '&.MuiChip-lightWarning': getColorStyle({ color: 'warning', theme })
        },
        combined: {
          border: '1px solid',
          ...defaultLightChip,
          '&.MuiChip-combinedPrimary': getColorStyle({ color: 'primary', theme }),
          '&.MuiChip-combinedSecondary': getColorStyle({ color: 'secondary', theme }),
          '&.MuiChip-combinedError': getColorStyle({ color: 'error', theme }),
          '&.MuiChip-combinedInfo': getColorStyle({ color: 'info', theme }),
          '&.MuiChip-combinedSuccess': getColorStyle({ color: 'success', theme }),
          '&.MuiChip-combinedWarning': getColorStyle({ color: 'warning', theme })
        }
      }
    }
  };
}
