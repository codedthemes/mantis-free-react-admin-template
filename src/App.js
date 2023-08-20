// project import
import React from 'react';
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { SnackbarProvider } from 'notistack';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <SnackbarProvider>
          <Routes />
        </SnackbarProvider>
      </ScrollTop>
    </ThemeCustomization>
  );
};

export default App;
