// ==============================|| OVERRIDES - Alert ||============================== //

export default function Popover(theme) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
          maxWidth: '320px'
        }
      }
    }
  };
}
