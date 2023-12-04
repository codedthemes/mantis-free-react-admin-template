import { Outlet } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import PublicNav from 'components/PublicNav/index';

// ==============================|| MAIN LAYOUT ||============================== //

const PublicLayout = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `radial-gradient(circle at 2% 10%, ${theme.palette.common.white}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary[200]}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.grey[300]}, transparent 100%)`
      }}
    >
      <Box>
        <Box
          sx={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            backgroundColor: theme.palette.common.white,
            zIndex: 10000
          }}
        >
          <PublicNav />
        </Box>
        <Box
          component="main"
          sx={{
            pt: { xs: theme.spacing(14), md: theme.spacing(16) }
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default PublicLayout;
