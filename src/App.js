// project import
import React, { useContext } from 'react';
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { UserContext } from 'context/user/user';
import { StatusCodes } from 'http-status-codes';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  const { requestStatusCodes } = useContext(UserContext);
  console.log('requestStatusCodes', requestStatusCodes);

  return (
    <ThemeCustomization>
      <ScrollTop>
        <Routes />
      </ScrollTop>
    </ThemeCustomization>
  );
};

export default App;
