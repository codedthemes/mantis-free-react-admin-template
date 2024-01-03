// ==============================|| OVERRIDES - INPUT LABEL ||============================== //

export default function MuiSelect() {
  return {
    MuiSelect: {
      defaultProps: {
        fullWidth: true,
        InputLabelProps: { shrink: false }
      },
      styleOverrides: {
        root: {
          legend: {
            display: 'none'
          },
          ".MuiOutlinedInput-notchedOutline": {
            top: '0px'
          }
        }
      }
    }
  };
}
