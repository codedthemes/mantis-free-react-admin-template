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
import LayoutBox from 'components/LayoutBox/index';

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
        background: `radial-gradient(circle at 2% 10%, ${theme.palette.common.white}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary[200]}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.grey[300]}, transparent 100%)`,
        display: 'grid',
        width: '100%',
        padding: theme.shape.layoutDesignGutterOuter,
        gridTemplateColumns: `auto 1fr`,
        gridTemplateRows: `auto 1fr`,
        gap: theme.shape.layoutDesignGutter
      }}
    >
      <Box sx={{ gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '1', gridRowEnd: '1' }}>
        <Box sx={{ posiiton: 'sticky' }}>
          <Header open={open} handleDrawerToggle={handleDrawerToggle} />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gridColumnStart: '1',
          gridColumnEnd: '1',
          gridRowStart: '1',
          gridRowEnd: '3'
        }}
      >
        <Box
          sx={{
            position: 'sticky',
            top: theme.shape.layoutDesignGutterOuter,
            left: '0',
            height: {
              xs: `calc(100vh - ${theme.shape.layoutDesignGutterOuter.xs} - ${theme.shape.layoutDesignGutterOuter.xs})`,
              sm: `calc(100vh - ${theme.shape.layoutDesignGutterOuter.sm} - ${theme.shape.layoutDesignGutterOuter.sm})`,
              md: `calc(100vh - ${theme.shape.layoutDesignGutterOuter.md} - ${theme.shape.layoutDesignGutterOuter.md})`,
              lg: `calc(100vh - ${theme.shape.layoutDesignGutterOuter.lg} - ${theme.shape.layoutDesignGutterOuter.lg})`
            }
          }}
        >
          <LayoutBox
            sx={{
              height: '100%',
              backgroundColor: theme.palette.primary.main
            }}
          >
            <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
          </LayoutBox>
        </Box>
      </Box>
      <Box
        component="main"
        sx={{
          width: '100%',
          flexGrow: 1,
          gridColumnStart: '2',
          gridColumnEnd: '2',
          gridRowStart: '2',
          gridRowEnd: '3',
          backgroundColor: 'transparent'
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
