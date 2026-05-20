// project imports
import { withAlpha } from 'utils/colorUtils';
import getColors from 'utils/getColors';
import getShadow from 'utils/getShadow';

const BUTTON_COLORS = ['primary', 'secondary', 'error', 'info', 'success', 'warning'];
const BUTTON_VARIANTS = ['contained', 'outlined', 'text', 'dashed', 'shadow'];

function getColorStyle({ variant, color, theme }) {
  const colors = getColors(theme, color);
  const { lighter, main, dark, darker, contrastText } = colors;

  const buttonShadow = `${color}Button`;
  const shadows = getShadow(theme, buttonShadow);

  const commonShadow = {
    '&::after': {
      boxShadow: `0 0 5px 5px ${withAlpha(main, 0.9)}`
    },
    '&:active::after': {
      boxShadow: `0 0 0 0 ${withAlpha(main, 0.9)}`
    },
    '&:focus-visible': {
      outline: `2px solid ${dark}`,
      outlineOffset: 2
    }
  };

  switch (variant) {
    case 'contained':
      return {
        '&:hover': {
          backgroundColor: dark
        },
        ...commonShadow
      };
    case 'shadow':
      return {
        color: contrastText,
        backgroundColor: main,
        boxShadow: shadows,
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: dark
        },
        ...commonShadow
      };
    case 'outlined':
      return {
        borderColor: main,
        '&:hover': {
          color: dark,
          backgroundColor: 'transparent',
          borderColor: dark
        },
        ...commonShadow
      };
    case 'dashed':
      return {
        color: main,
        borderColor: main,
        backgroundColor: lighter,
        '&:hover': {
          color: dark,
          borderColor: dark
        },
        ...commonShadow
      };
    case 'text':
    default:
      return {
        color: dark,
        '&:hover': {
          color: darker,
          backgroundColor: lighter
        },
        ...commonShadow
      };
  }
}

/**
 * Generate color variant styles for a given variant type
 * @param theme - MUI theme object
 * @param variantType - Type of variant (e.g., 'contained', 'outlined', 'text', 'dashed', 'shadow')
 * @returns Object with color-specific selectors and their styles
 */
function generateColorVariants(theme, variantType) {
  return BUTTON_COLORS.reduce((acc, color) => {
    const capitalizedColor = color.charAt(0).toUpperCase() + color.slice(1);
    const className = `&.MuiButton-${variantType}${capitalizedColor}`;

    acc[className] = getColorStyle({ variant: variantType, color: color, theme });
    return acc;
  }, {});
}

// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme) {
  const disabledStyle = {
    backgroundColor: theme.vars.palette.grey[200],
    '&:hover': {
      backgroundColor: theme.vars.palette.grey[200]
    }
  };

  const iconStyle = {
    '&>*:nth-of-type(1)': {
      fontSize: 'inherit'
    }
  };

  // Generate variants array programmatically
  const variants = BUTTON_VARIANTS.flatMap((variant) =>
    BUTTON_COLORS.map((color) => ({
      props: { variant, color },
      style: getColorStyle({ variant: variant, color: color, theme })
    }))
  );

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          fontWeight: 400,
          '&::after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            borderRadius: 4,
            opacity: 0,
            transition: 'all 0.5s'
          },

          '&:active::after': {
            position: 'absolute',
            borderRadius: 4,
            left: 0,
            top: 0,
            opacity: 1,
            transition: '0s'
          },

          variants
        },
        contained: {
          '&.Mui-disabled': {
            ...disabledStyle
          }
        },
        outlined: {
          '&.Mui-disabled': {
            ...disabledStyle,
            '&:hover': {
              backgroundColor: theme.vars.palette.grey[200],
              color: `${theme.vars.palette.grey[300]} !important`,
              borderColor: 'inherit'
            }
          }
        },
        text: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        },
        endIcon: {
          ...iconStyle
        },
        startIcon: {
          ...iconStyle
        },
        dashed: {
          border: '1px dashed',
          ...generateColorVariants(theme, 'dashed'),
          '&.Mui-disabled': {
            color: `${theme.vars.palette.grey[300]} !important`,
            borderColor: `${theme.vars.palette.grey[400]} !important`,
            backgroundColor: `${theme.vars.palette.grey[200]} !important`
          }
        },
        shadow: {
          ...generateColorVariants(theme, 'shadow'),
          '&.Mui-disabled': {
            color: `${theme.vars.palette.grey[300]} !important`,
            borderColor: `${theme.vars.palette.grey[400]} !important`,
            backgroundColor: `${theme.vars.palette.grey[200]} !important`
          }
        },
        sizeExtraSmall: {
          minWidth: 56,
          fontSize: '0.625rem',
          padding: '2px 8px'
        },
        loading: {
          pointerEvents: 'none !important',
          '& svg': {
            width: 'inherit',
            height: 'inherit'
          },
          '&.MuiButton-loadingPositionCenter': {
            color: 'transparent !important'
          }
        }
      }
    }
  };
}
