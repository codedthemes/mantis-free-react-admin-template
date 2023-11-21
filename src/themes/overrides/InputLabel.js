// ==============================|| OVERRIDES - INPUT LABEL ||============================== //

export default function InputLabel(theme) {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[900],
          fontSize: '1.1rem',
          transition: 'unset',
          fontWeight: 600,
          position: 'relative',
          transformOrigin: 'unset',
          transform: 'unset',
          top: 'unset',
          left: 'unset',
          maxWidth: '100%',
          marginBottom: theme.spacing(0.7),
          padding: 'none'
        }
      }
    }
  };
}
