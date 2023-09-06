import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, useMediaQuery } from '@mui/material';

// project import
import Drawer from './Drawer';
import Header from './Header';

// types
import { openDrawer } from 'store/reducers/menu';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const dispatch = useDispatch();

  const { drawerOpen } = useSelector((state) => state.menu);

  // drawer toggler
  const [open, setOpen] = useState(drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  // set media wise responsive drawer
  useEffect(() => {
    setOpen(!matchDownLG);
    dispatch(openDrawer({ drawerOpen: !matchDownLG }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);

  useEffect(() => {
    if (open !== drawerOpen) setOpen(drawerOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);

  return (
    <Box
      sx={{
        background: `radial-gradient(circle at 1.99% 58.05%, ${theme.palette.grey[200]}, transparent 100%),radial-gradient(circle at 98.01% 20.98%, ${theme.palette.grey[100]}, transparent 100%),radial-gradient(circle at 50% 50%, ${theme.palette.grey[300]}, ${theme.palette.common.white} 100%)`,
        display: 'grid',
        width: '100%',
        padding: 5,
        gridTemplateColumns: '260px 1fr',
        gridTemplateRows: '200px 1fr'
      }}
    >
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          width: '100%',
          flexGrow: 1,
          backgroundColor: theme.palette.common.white,
          gridColumnStart: '2',
          gridColumnEnd: '2',
          gridRowStart: '2',
          gridRowEnd: '2'
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
