// material-ui
import { Box, useMediaQuery } from '@mui/material';

// project import
import Profile from './Profile';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
      <Profile />
    </>
  );
};

export default HeaderContent;
