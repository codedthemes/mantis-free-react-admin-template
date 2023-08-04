// ==============================|| OVERRIDES - INPUT LABEL ||============================== //

export default function TextField() {
  return {
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { shrink: false }
      }
    }
  };
}
