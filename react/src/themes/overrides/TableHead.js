// ==============================|| OVERRIDES - TABLE CELL ||============================== //

export default function TableHead(theme) {
  return {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: theme.vars.palette.grey[50],
          borderTop: '1px solid',
          borderTopColor: theme.vars.palette.divider,
          borderBottom: '2px solid',
          borderBottomColor: theme.vars.palette.divider
        }
      }
    }
  };
}
