import { Box, Stack, Button, useTheme } from '@mui/material';

const PublicNav = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: `${theme.spacing(4)} ${theme.spacing(5)}`
      }}
    >
      <Stack justifyContent="space-between" direction="row">
        <div>Logo</div>
        <Button href="/login" color="primary" variant="filled">
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default PublicNav;
