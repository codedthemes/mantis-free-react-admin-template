// ==============================|| OVERRIDES - Alert ||============================== //

export default function Alert(theme) {
  return {
    MuiStepper: {
      styleOverrides: {
        root: {
          '&.bright': {
            '.MuiStepIcon-root': {
              color: theme.palette.primary[300],
              "&.Mui-active": {
                color: theme.palette.common.white,
                ".MuiStepIcon-text": {
                  fill: theme.palette.common.black
                }
              },
              "&.Mui-completed": {
                color: theme.palette.secondary.main,
              }
            },
            '.MuiStepLabel-label': {
              color: theme.palette.common.white
            },
          }
        }
      }
    }
  };
}
