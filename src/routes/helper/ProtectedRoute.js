/* eslint-disable react/prop-types */
import { UserContext } from 'context/user';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FullPageLoader from 'components/FullPageLoader/index';

const ProtectedRoute = ({ children }) => {
  const { user, requestStatusCodes } = useContext(UserContext);
  const navigate = useNavigate();

  if (user.uid) {
    return children;
  }

  if (requestStatusCodes.loadingUser === 200) {
    navigate('/login');
    return <FullPageLoader />;
  }

  if (!requestStatusCodes.loadingUser || requestStatusCodes.loadingUser === 102) {
    return <FullPageLoader />;
  }

  navigate('/');
};

export default ProtectedRoute;
