// ==============================|| OVERRIDES - INPUT LABEL ||============================== //

export default function InputLabel(theme) {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[600],
          transition: 'unset',
          position: 'relative',
          transformOrigin: 'unset',
          transform: 'unset',
          top: 'unset',
          left: 'unset',
          maxWidth: '100%',
          marginBottom: theme.spacing(1),
          padding: 'none'
        },
        outlined: {
          lineHeight: '0.8em',
          '&.MuiInputLabel-sizeSmall': {
            lineHeight: '1em'
          },
          '&.MuiInputLabel-shrink': {
            background: theme.palette.background.paper,
            padding: 'none',
            margin: 'none',
            marginBottom: theme.spacing(1),
            lineHeight: '1.4375em'
          }
        }
      }
    }
  };
}
