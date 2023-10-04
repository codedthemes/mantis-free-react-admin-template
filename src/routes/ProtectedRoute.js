import { UserContext } from 'context/user';
import { useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Stack } from '@mui/material';

const ProtectedRoute = ({ children }) => {
  const { user, requestStatusCodes } = useContext(UserContext);
  const navigate = useNavigate();
  console.log('userid', user.uid);

  const FullPageLoader = useCallback(
    () => (
      <Stack sx={{ minHeight: 'calc(90vh - 200px)' }} justifyContent="center" alignItems="center">
        <CircularProgress />
      </Stack>
    ),
    []
  );

  if (user.uid) {
    return children;
  }

  if (requestStatusCodes.loadingUser === 200) {
    console.log('should navigate to login');
    navigate('/login');
    return <FullPageLoader />;
  }

  if (!requestStatusCodes.loadingUser || requestStatusCodes.loadingUser === 102) {
    console.log('loading user');
    return <FullPageLoader />;
  }

  navigate('/');
};

export default ProtectedRoute;
