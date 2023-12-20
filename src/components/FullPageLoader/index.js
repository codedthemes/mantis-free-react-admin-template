import { CircularProgress, Stack } from '@mui/material';

const FullPageLoader = () => (
  <Stack sx={{ minHeight: 'calc(90vh - 200px)' }} justifyContent="center" alignItems="center">
    <CircularProgress />
  </Stack>
);

export default FullPageLoader;
