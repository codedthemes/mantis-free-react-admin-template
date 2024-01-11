// ==============================|| OVERRIDES - INPUT LABEL ||============================== //

export default function InputLabel() {
  return {
    MuiInputBase: {
      defaultProps: {
        inputProps: {
          lang: 'de'
        }
      },
      styleOverrides: {
        root: {
          '&.Mui-readOnly': {
            label: {
              opacity: '0.5'
            },
            fieldset: {
              borderStyle: 'dashed'
            }
          }
        }
      }
    }
  };
}
