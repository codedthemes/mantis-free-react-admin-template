// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function ButtonBase() {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          '&.MuiButtonBase-root:disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto'
          }
        }
      }
    }
  };
}
