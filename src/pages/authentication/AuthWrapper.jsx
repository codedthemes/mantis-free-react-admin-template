import PropTypes from 'prop-types';

// material-ui
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// project import
import AuthFooter from 'components/cards/AuthFooter';
import Logo from 'components/logo';
import AuthCard from './AuthCard';

// assets
import AuthBackground from 'assets/images/auth/AuthBackground';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

export default function AuthWrapper({ children }) {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AuthBackground />
      <Stack justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Box sx={{ ml: 3, mt: 3 }}>
          <Logo />
        </Box>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
        >
          <AuthCard>{children}</AuthCard>
        </Stack>
        <Box size={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Box>
      </Stack>
    </Box>
  );
}

AuthWrapper.propTypes = { children: PropTypes.node };
