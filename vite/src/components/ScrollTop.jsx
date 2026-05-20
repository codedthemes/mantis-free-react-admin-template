import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ==============================|| NAVIGATION - SCROLL TO TOP ||============================== //

export default function ScrollTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return null;
}
