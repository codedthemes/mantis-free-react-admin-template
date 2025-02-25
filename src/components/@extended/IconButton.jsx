import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import MuiIconButton from '@mui/material/IconButton';
import { alpha, styled } from '@mui/material/styles';

// project imports
import getColors from 'utils/getColors';
import getShadow from 'utils/getShadow';

function getColorStyle({ variant, theme, color }) {
  const colors = getColors(theme, color);
  const { lighter, light, dark, main, contrastText } = colors;

  const buttonShadow = `${color}Button`;
  const shadows = getShadow(theme, buttonShadow);

  const commonShadow = {
    '&::after': {
      boxShadow: `0 0 6px 6px ${alpha(main, 0.9)}`
    },
    '&:active::after': {
      boxShadow: `0 0 0 0 ${alpha(main, 0.9)}`
    },
    '&:focus-visible': {
      outline: `2px solid ${dark}`,
      outlineOffset: 2
    }
  };

  switch (variant) {
    case 'contained':
      return {
        color: contrastText,
        background: main,
        '&:hover': {
          background: dark
        },
        ...commonShadow
      };
    case 'light':
      return {
        color: main,
        background: lighter,
        '&:hover': {
          background: alpha(light, 0.5)
        },
        ...commonShadow
      };
    case 'shadow':
      return {
        boxShadow: shadows,
        color: contrastText,
        background: main,
        '&:hover': {
          boxShadow: 'none',
          background: dark
        },
        ...commonShadow
      };
    case 'outlined':
      return {
        '&:hover': {
          background: 'transparent',
          color: dark,
          borderColor: dark
        },
        ...commonShadow
      };
    case 'dashed':
      return {
        background: lighter,
        '&:hover': {
          color: dark,
          borderColor: dark
        },
        ...commonShadow
      };
    case 'text':
    default:
      return {
        '&:hover': {
          color: dark,
          background: color === 'secondary' ? alpha(light, 0.1) : lighter
        },
        ...commonShadow
      };
  }
}

const IconButtonStyle = styled(MuiIconButton, { shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'shape' })(
  ({ theme, color, variant }) => ({
    position: 'relative',
    '::after': {
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

    ':active::after': {
      position: 'absolute',
      borderRadius: 4,
      left: 0,
      top: 0,
      opacity: 1,
      transition: '0s'
    },

    ...getColorStyle({ variant, theme, color }),

    variants: [
      {
        props: { shape: 'rounded' },
        style: {
          borderRadius: '50%',
          '::after': { borderRadius: '50%' },
          ':active::after': { borderRadius: '50%' }
        }
      },
      {
        props: { variant: 'outlined' },
        style: {
          border: '1px solid',
          borderColor: 'inherit'
        }
      },
      {
        props: { variant: 'dashed' },
        style: {
          border: '1px dashed',
          borderColor: 'inherit'
        }
      },
      {
        props: ({ variant }) => variant !== 'text',
        style: {
          '&.Mui-disabled': {
            background: theme.palette.grey[200],
            '&:hover': {
              background: theme.palette.grey[200],
              color: theme.palette.grey[300],
              borderColor: 'inherit'
            }
          }
        }
      }
    ]
  })
);

function IconButton({ variant = 'text', shape = 'square', children, color = 'primary', ...others }, ref) {
  return (
    <IconButtonStyle ref={ref} disableRipple variant={variant} shape={shape} color={color} {...others}>
      {children}
    </IconButtonStyle>
  );
}

IconButton.displayName = 'IconButton';

export default forwardRef(IconButton);

getColorStyle.propTypes = { variant: PropTypes.any, theme: PropTypes.any, color: PropTypes.any };

IconButton.propTypes = {
  variant: PropTypes.string,
  shape: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  others: PropTypes.any
};
