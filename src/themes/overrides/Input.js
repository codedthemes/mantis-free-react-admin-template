// ==============================|| OVERRIDES - INPUT LABEL ||============================== //

export default function InputLabel(theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-readOnly": {
            "label": {
              opacity: '0.5',
            },
            "fieldset": {
              borderStyle: 'dashed'
            }
          },
        },
      }
    }
  };
}
