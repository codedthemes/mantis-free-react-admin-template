// ==============================|| OVERRIDES - INPUT LABEL ||============================== //

export default function TextField() {
  return {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        InputLabelProps: { shrink: false }
      }
    }
  };
}
