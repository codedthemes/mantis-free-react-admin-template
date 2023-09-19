import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, IconButton, Toolbar, useMediaQuery, Box } from '@mui/material';

// project import
import HeaderContent from './HeaderContent';

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

const Header = ({ open }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  // common header
  const mainHeader = (
    <Box sx={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', marginTop: theme.spacing(2) }}>
      <HeaderContent />
    </Box>
  );

  return mainHeader;
};

Header.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func
};

export default Header;
