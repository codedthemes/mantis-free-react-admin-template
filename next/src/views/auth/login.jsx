'use client';

// next
import NextLink from 'next/link';

// material-ui
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/auth-forms/AuthLogin';

export default function SignIn() {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Stack
            direction="row"
            sx={{
              alignItems: 'baseline',
              justifyContent: 'space-between',
              mb: { xs: -0.5, sm: 0.5 }
            }}
          >
            <Typography variant="h3">Login</Typography>
            <Link variant="body1" component={NextLink} href="/register" underline="none" sx={{ color: 'primary.main' }}>
              Don&apos;t have an account?
            </Link>
          </Stack>
        </Grid>
        <Grid size={12}>
          <AuthLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
