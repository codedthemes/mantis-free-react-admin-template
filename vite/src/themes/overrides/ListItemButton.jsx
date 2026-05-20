// ==============================|| OVERRIDES - LIST ITEM ICON ||============================== //

export default function ListItemButton(theme) {
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: theme.vars.palette.primary.main,
            '& .MuiListItemIcon-root': {
              color: theme.vars.palette.primary.main
            }
          }
        }
      }
    }
  };
}
