// ==============================|| OVERRIDES - INPUT LABEL ||============================== //

export default function Divider(theme) {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          height: '3px',
          borderRadius: '2px',
          backgroundColor: `${theme.palette.grey[900]}1c`
        }
      }
    }
  };
}
