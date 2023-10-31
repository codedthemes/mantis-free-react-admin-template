import PropTypes from 'prop-types';
import { useContext, useMemo, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';

// project import
import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';
import { UserContext } from 'context/user';
import { NavigationContext } from 'context/navigation/index';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

const MainDrawer = () => {
  const theme = useTheme();
  const { navOpen, setNavOpen, useDrawerNav } = useContext(NavigationContext);
  const { drawerStatus } = useContext(UserContext);

  const drawerWidth = useMemo(() => {
    if (drawerStatus === 'condensed') {
      return theme.shape.drawerWidthCondensed;
    }

    return theme.shape.drawerWidth;
  }, [theme.shape.drawerWidthCondensed, theme.shape.drawerWidth, drawerStatus]);

  // header content
  const drawerHeader = useMemo(() => <DrawerHeader />, []);
  const drawerContent = useMemo(() => <DrawerContent />, []);

  if (useDrawerNav) {
    return (
      <Drawer anchor={'left'} open={navOpen} onClose={() => setNavOpen(false)}>
        <Box
          component="nav"
          sx={{
            padding: {
              xs: theme.spacing(3),
              sm: theme.spacing(5)
            },
            backgroundColor: theme.palette.primary.main,
            height: '100%'
          }}
        >
          {drawerHeader}
          {drawerContent}
        </Box>
      </Drawer>
    );
  }

  return (
    <Box component="nav" sx={{ width: drawerWidth, padding: theme.shape.layoutDesignGutter, position: 'sticky', top: '0' }}>
      {drawerHeader}
      {drawerContent}
    </Box>
  );
};

MainDrawer.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  window: PropTypes.object
};

export default MainDrawer;
