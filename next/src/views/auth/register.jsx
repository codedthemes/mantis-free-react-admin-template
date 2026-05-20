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
import AuthRegister from 'sections/auth/auth-forms/AuthRegister';

// ================================|| REGISTER ||================================ //

export default function Register() {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Stack direction="row" sx={{ alignItems: 'baseline', justifyContent: 'space-between', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Sign up</Typography>
            <Link component={NextLink} href="/login" variant="body1" underline="none" sx={{ color: 'primary.main' }}>
              Already have an account?
            </Link>
          </Stack>
        </Grid>
        <Grid size={12}>
          <AuthRegister />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
