import PropTypes from 'prop-types';
import { useContext, useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';

// project import
import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';
import MiniDrawerStyled from './MiniDrawerStyled';
import { UserContext } from 'context/user/user';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

const MainDrawer = ({ open, handleDrawerToggle, window }) => {
  const theme = useTheme();
  const { drawerStatus } = useContext(UserContext);
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const drawerWidth = useMemo(() => {
    if (drawerStatus === 'condensed') {
      return theme.shape.drawerWidthCondensed;
    }

    return theme.shape.drawerWidth;
  }, [theme.shape.drawerWidthCondensed, theme.shape.drawerWidth, drawerStatus]);

  // header content
  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

  return (
    <Box component="nav" sx={{ width: drawerWidth, padding: theme.shape.layoutDesignGutter }}>
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
