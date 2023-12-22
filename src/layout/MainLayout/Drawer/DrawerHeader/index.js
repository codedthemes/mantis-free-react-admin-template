import PropTypes from 'prop-types';

// material-ui
import { Stack } from '@mui/material';

// project import
import Logo from 'components/Logo';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = () => {
  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-start" marginBottom={3}>
      <Logo color="white" />
    </Stack>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
