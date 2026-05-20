// material-ui
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// project imports
import ContainerWrapper from 'components/ContainerWrapper';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

export default function AuthFooter() {
  return (
    <ContainerWrapper>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ gap: 2, justifyContent: { xs: 'center', sm: 'space-between' }, textAlign: { xs: 'center', sm: 'inherit' }, py: 2 }}
      >
        <Typography variant="subtitle2" sx={{ color: 'secondary.main' }}>
          © Made with love by Team{' '}
          <Link href="https://codedthemes.com/" target="_blank" underline="hover">
            CodedThemes
          </Link>
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: { xs: 1, sm: 3 }, textAlign: { xs: 'center', sm: 'inherit' } }}>
          <Typography
            variant="subtitle2"
            component={Link}
            href="https://mui.com/store/terms/"
            target="_blank"
            underline="hover"
            sx={{ color: 'secondary.main' }}
          >
            Terms and Conditions
          </Typography>
          <Typography
            variant="subtitle2"
            component={Link}
            href="https://mui.com/legal/privacy/"
            target="_blank"
            underline="hover"
            sx={{ color: 'secondary.main' }}
          >
            Privacy Policy
          </Typography>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}
