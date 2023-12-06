import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Typography, List, ListItemButton, ListItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link as RouterLink } from 'react-router-dom';

// project import
import Drawer from './Drawer';
import Header from './Header';

// types
import { NavigationContext } from 'context/navigation/index';
import Profile from './Header/HeaderContent/Profile/index';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const { setNavOpen, navOpen, useDrawerNav } = useContext(NavigationContext);

  const footerLinkStyles = {
    color: theme.palette.common.white,
    fontWeight: 300,
    fontSize: '1rem',
    padding: 0,
    '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' }
  };

  return (
    <Box
      sx={{
        overflow: 'hidden',
        background: `radial-gradient(circle at 2% 10%, ${theme.palette.common.white}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary[200]}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.grey[300]}, transparent 100%)`
      }}
    >
      <Box
        sx={{
          display: 'grid',
          width: '100%',
          maxWidth: '1920px',
          minHeight: '100vh',
          margin: '0 auto',
          gridTemplateColumns: {
            xs: `0 auto 0`,
            md: `1fr minmax(50%, 1000px) 1fr`,
            lg: `1fr minmax(50%, 1000px) .25fr`,
            xl: `1fr minmax(50%, 1000px) .5fr`
          },
          gridTemplateRows: `auto 1fr`,
          gap: theme.shape.layoutDesignGutter
        }}
      >
        <Box
          sx={{
            gridColumnStart: '2',
            gridColumnEnd: '3',
            gridRowStart: '1',
            gridRowEnd: '1',
            paddingTop: theme.shape.layoutDesignGutter
          }}
        >
          <Box sx={{ positon: 'sticky' }}>
            {useDrawerNav && (
              <Box
                sx={{
                  position: 'fixed',
                  top: '16px',
                  right: '16px',
                  backgroundColor: theme.palette.common.white,
                  boxShadow: theme.shadows[8],
                  padding: 1,
                  zIndex: '1000',
                  borderRadius: '500px',
                  display: 'flex',
                  gap: theme.spacing(1)
                }}
              >
                <Profile />
                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    height: '50px',
                    width: '50px',
                    minWidth: 'auto',
                    borderRadius: '500px',
                    border: `1px solid ${theme.palette.common.white}`,
                    padding: 1
                  }}
                  onClick={() => setNavOpen(!navOpen)}
                >
                  <MenuIcon />
                </Button>
              </Box>
            )}
            <Header />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gridColumnStart: '1',
            gridColumnEnd: '1',
            gridRowStart: '1',
            gridRowEnd: '4',
            backgroundColor: theme.palette.primary.main,
            position: 'relative',
            alignItems: 'flex-end',
            ':after': {
              content: '""',
              position: 'absolute',
              top: '0',
              right: '100%',
              backgroundColor: theme.palette.primary.main,
              height: '100%',
              width: '100vw'
            }
          }}
        >
          <Drawer />
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
            backgroundColor: 'transparent',
            marginTop: {
              sm: theme.spacing(-2),
              md: theme.spacing(-2),
              lg: theme.spacing(-8)
            }
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Box
        component="footer"
        sx={{
          backgroundColor: theme.palette.primary.main,
          padding: theme.shape.layoutDesignGutter,
          color: theme.palette.common.white,
          position: 'relative',
          zIndex: '1',
          borderTop: '1px solid white'
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
            <Stack>
              <Typography variant="h1" component="p" sx={{ fontWeight: 300, textAlign: { xs: 'center', sm: 'left' } }}>
                Kalkulatrix
              </Typography>
              <Typography sx={{ fontWeight: 700 }}>Adel Consultant</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', sm: 'flex-end' },
                gap: `${theme.spacing(1)} ${theme.spacing(3)}`
              }}
            >
              <ListItem sx={{ padding: 0, flexBasis: '0', width: 'auto' }}>
                <ListItemButton variant="subtitle2" component={RouterLink} to="#" sx={footerLinkStyles}>
                  Impressum
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ padding: 0, flexBasis: '0', width: 'auto' }}>
                <ListItemButton variant="subtitle2" component={RouterLink} to="#" sx={footerLinkStyles}>
                  Datenschutz
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainLayout;
