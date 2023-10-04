import { createContext, useState, useEffect, useRef } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

export const NavigationContext = createContext(null);
export const NavigationContextProvider = ({ children }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const mounted = useRef();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!matchDownMD) {
      setNavOpen(false);
    }
  }, [matchDownMD]);

  return (
    <NavigationContext.Provider
      value={{
        navOpen,
        setNavOpen,
        useDrawerNav: matchDownMD
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
