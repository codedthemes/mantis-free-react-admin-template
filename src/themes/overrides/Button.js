// project imports
import { withAlpha } from 'utils/colorUtils';
import getColors from 'utils/getColors';
import getShadow from 'utils/getShadow';

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

// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme) {
  const primaryDashed = getColorStyle({ variant: 'dashed', color: 'primary', theme });
  const primaryShadow = getColorStyle({ variant: 'shadow', color: 'primary', theme });

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

          variants: [
            { props: { variant: 'contained', color: 'primary' }, style: getColorStyle({ variant: 'contained', color: 'primary', theme }) },
            {
              props: { variant: 'contained', color: 'secondary' },
              style: getColorStyle({ variant: 'contained', color: 'secondary', theme })
            },
            { props: { variant: 'contained', color: 'error' }, style: getColorStyle({ variant: 'contained', color: 'error', theme }) },
            { props: { variant: 'contained', color: 'success' }, style: getColorStyle({ variant: 'contained', color: 'success', theme }) },
            { props: { variant: 'contained', color: 'info' }, style: getColorStyle({ variant: 'contained', color: 'info', theme }) },
            { props: { variant: 'contained', color: 'warning' }, style: getColorStyle({ variant: 'contained', color: 'warning', theme }) },
            { props: { variant: 'outlined', color: 'primary' }, style: getColorStyle({ variant: 'outlined', color: 'primary', theme }) },
            {
              props: { variant: 'outlined', color: 'secondary' },
              style: getColorStyle({ variant: 'outlined', color: 'secondary', theme })
            },
            { props: { variant: 'outlined', color: 'error' }, style: getColorStyle({ variant: 'outlined', color: 'error', theme }) },
            { props: { variant: 'outlined', color: 'success' }, style: getColorStyle({ variant: 'outlined', color: 'success', theme }) },
            { props: { variant: 'outlined', color: 'info' }, style: getColorStyle({ variant: 'outlined', color: 'info', theme }) },
            { props: { variant: 'outlined', color: 'warning' }, style: getColorStyle({ variant: 'outlined', color: 'warning', theme }) },
            { props: { variant: 'text', color: 'primary' }, style: getColorStyle({ variant: 'text', color: 'primary', theme }) },
            { props: { variant: 'text', color: 'secondary' }, style: getColorStyle({ variant: 'text', color: 'secondary', theme }) },
            { props: { variant: 'text', color: 'error' }, style: getColorStyle({ variant: 'text', color: 'error', theme }) },
            { props: { variant: 'text', color: 'success' }, style: getColorStyle({ variant: 'text', color: 'success', theme }) },
            { props: { variant: 'text', color: 'info' }, style: getColorStyle({ variant: 'text', color: 'info', theme }) },
            { props: { variant: 'text', color: 'warning' }, style: getColorStyle({ variant: 'text', color: 'warning', theme }) }
          ]
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
          ...primaryDashed,
          '&.MuiButton-dashedPrimary': getColorStyle({ variant: 'dashed', color: 'primary', theme }),
          '&.MuiButton-dashedSecondary': getColorStyle({ variant: 'dashed', color: 'secondary', theme }),
          '&.MuiButton-dashedError': getColorStyle({ variant: 'dashed', color: 'error', theme }),
          '&.MuiButton-dashedSuccess': getColorStyle({ variant: 'dashed', color: 'success', theme }),
          '&.MuiButton-dashedInfo': getColorStyle({ variant: 'dashed', color: 'info', theme }),
          '&.MuiButton-dashedWarning': getColorStyle({ variant: 'dashed', color: 'warning', theme }),
          '&.Mui-disabled': {
            color: `${theme.vars.palette.grey[300]} !important`,
            borderColor: `${theme.vars.palette.grey[400]} !important`,
            backgroundColor: `${theme.vars.palette.grey[200]} !important`
          }
        },
        shadow: {
          ...primaryShadow,
          '&.MuiButton-shadowPrimary': getColorStyle({ variant: 'shadow', color: 'primary', theme }),
          '&.MuiButton-shadowSecondary': getColorStyle({ variant: 'shadow', color: 'secondary', theme }),
          '&.MuiButton-shadowError': getColorStyle({ variant: 'shadow', color: 'error', theme }),
          '&.MuiButton-shadowSuccess': getColorStyle({ variant: 'shadow', color: 'success', theme }),
          '&.MuiButton-shadowInfo': getColorStyle({ variant: 'shadow', color: 'info', theme }),
          '&.MuiButton-shadowWarning': getColorStyle({ variant: 'shadow', color: 'warning', theme }),
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
