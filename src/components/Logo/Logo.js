/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

import { Typography, Box } from '@mui/material';
// import kalkulatrixLogo from '../../assets/images/kalkulatrix_logo.png';

// eslint-disable-next-line react/prop-types
const Logo = ({ color = 'currentColor', ...otherProps }) => {
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    // <>
    //   <img
    //     src={kalkulatrixLogo}
    //     alt="Kalkulatrix - Adel Consultant - Logo"
    //     width="469"
    //     height="185"
    //     style={{ width: '100%', height: 'auto' }}
    //   />
    // </>
    <Box
      component="svg"
      viewBox="0 0 240 76"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ width: '100%', color: color + ' !important', ...(otherProps.sx || {}) }}
      {...otherProps}
    >
      <Typography
        x="-3"
        y="44"
        variant="h1"
        component="text"
        sx={{ fontWeight: 300, textAlign: { xs: 'center', sm: 'left' }, fontSize: '58px !important', fill: 'currentColor' }}
      >
        Kalkulatrix
      </Typography>
      <Typography x="0" y="70" component="text" sx={{ fontWeight: 700, fontSize: '18px !important', fill: 'currentColor' }}>
        Adel Consultant
      </Typography>
    </Box>
  );
};

export default Logo;
