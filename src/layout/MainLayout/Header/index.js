import PropTypes from 'prop-types';

// material-ui
import { Box } from '@mui/material';

// project import
import HeaderContent from './HeaderContent';

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

const Header = () => {
  // common header
  const mainHeader = (
    <Box sx={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
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
