// project import
import React, { useEffect } from 'react';
import Routes from 'routes';
import ThemeCustomization from 'themes';
import { login, logout, selectUser } from './store/reducers/user';
import { auth, onAuthStateChanged } from './auth/firebase';
import { useDispatch, useSelector } from 'react-redux';
import ScrollTop from 'components/ScrollTop';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log('user', user);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <ThemeCustomization>
      <ScrollTop>
        <Routes />
      </ScrollTop>
    </ThemeCustomization>
  );
};

export default App;
