// ==============================|| OVERRIDES - LINK ||============================== //

export default function Link() {
  return {
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: '0px',
          paddingBottom: '0px'
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingLeft: '0px'
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          paddingRight: 4
        }
      }
    }
  };
}
