// ==============================|| OVERRIDES - INPUT LABEL ||============================== //

export default function MuiFormControl(theme) {
  return {
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: theme.spacing(3)
        }
      }
    }
  };
}
