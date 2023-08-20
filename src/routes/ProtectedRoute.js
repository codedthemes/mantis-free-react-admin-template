import { UserContext } from 'context/user/user';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const ProtectedRoute = ({ children }) => {
  const { user, requestStatusCodes } = useContext(UserContext);
  const navigate = useNavigate();
  console.log('userid', user.uid);

  if (user.uid) {
    return children;
  }

  if (requestStatusCodes.loadingUser === 200) {
    console.log('should navigate to login');
    navigate('/login');
    return <CircularProgress />;
  }

  if (!requestStatusCodes.loadingUser || requestStatusCodes.loadingUser === 102) {
    console.log('loading user');
    return <CircularProgress />;
  }

  navigate('/');
};

export default ProtectedRoute;
