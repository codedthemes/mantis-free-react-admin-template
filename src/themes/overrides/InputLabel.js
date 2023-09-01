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
          marginBottom: theme.spacing(0.5),
          padding: 'none'
        }
      }
    }
  };
}
