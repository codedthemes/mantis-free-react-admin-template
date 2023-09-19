// material-ui
import { alpha } from '@mui/material/styles';

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const CustomShadows = (theme) => ({
  button: `0 2px #0000000b`,
  text: `0 -1px 0 rgb(0 0 0 / 12%)`,
  z1: `0px 2px 8px ${alpha(theme.palette.grey[900], 0.15)}`,
  z2: `0px 2px 16px ${alpha(theme.palette.grey[900], 0.2)}`,
  z3: `0px 3px 24px ${alpha(theme.palette.grey[900], 0.25)}`
  // only available in paid version
});

export default CustomShadows;
