// ==============================|| OVERRIDES - Alert ||============================== //

export default function Alert(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(2)
        }
      }
    }
  };
}
