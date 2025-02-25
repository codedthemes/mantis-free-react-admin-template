import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import MuiAvatar from '@mui/material/Avatar';

// project imports
import getColors from 'utils/getColors';

function getColorStyle({ theme, color, type }) {
  const colors = getColors(theme, color);
  const { lighter, light, main, contrastText } = colors;

  switch (type) {
    case 'filled':
      return {
        color: contrastText,
        background: main
      };
    case 'outlined':
      return {
        color: main,
        border: '1px solid',
        borderColor: main,
        background: 'transparent'
      };
    case 'combined':
      return {
        color: main,
        border: '1px solid',
        borderColor: light,
        background: lighter
      };
    default:
      return {
        color: main,
        background: lighter
      };
  }
}

// ==============================|| AVATAR - SIZE STYLE ||============================== //

function getSizeStyle(size) {
  switch (size) {
    case 'badge':
      return {
        border: '2px solid',
        fontSize: '0.675rem',
        width: 20,
        height: 20
      };
    case 'xs':
      return {
        fontSize: '0.75rem',
        width: 24,
        height: 24
      };
    case 'sm':
      return {
        fontSize: '0.875rem',
        width: 32,
        height: 32
      };
    case 'lg':
      return {
        fontSize: '1.2rem',
        width: 52,
        height: 52
      };
    case 'xl':
      return {
        fontSize: '1.5rem',
        width: 64,
        height: 64
      };
    case 'md':
    default:
      return {
        fontSize: '1rem',
        width: 40,
        height: 40
      };
  }
}

const AvatarStyle = styled(MuiAvatar, { shouldForwardProp: (prop) => prop !== 'color' && prop !== 'type' && prop !== 'size' })(
  ({ theme, size, color, type }) => ({
    ...getSizeStyle(size),
    ...getColorStyle({ theme, color, type }),
    variants: [
      {
        props: { size: 'badge' },
        style: {
          borderColor: theme.palette.background.default
        }
      }
    ]
  })
);

export default function Avatar({ children, color = 'primary', type, size = 'md', ...others }) {
  return (
    <AvatarStyle color={color} type={type} size={size} {...others}>
      {children}
    </AvatarStyle>
  );
}

getColorStyle.propTypes = { theme: PropTypes.any, color: PropTypes.any, type: PropTypes.any };

Avatar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  color: PropTypes.string,
  type: PropTypes.any,
  size: PropTypes.string,
  others: PropTypes.any
};
