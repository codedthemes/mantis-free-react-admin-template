// ==============================|| OVERRIDES - TABLE ROW ||============================== //

export default function TableBody(theme) {
  const hoverStyle = {
    '&:hover': {
      backgroundColor: theme.vars.palette.action.hover
    }
  };

  return {
    MuiTableBody: {
      styleOverrides: {
        root: {
          backgroundColor: theme.vars.palette.background.paper,
          '& .MuiTableRow-root': {
            ...hoverStyle
          }
        }
      }
    }
  };
}
