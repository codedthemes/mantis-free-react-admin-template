// material-ui
import { useMediaQuery, Container, Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? 'column' : 'row'}
        justifyContent={matchDownSM ? 'center' : 'space-between'}
        spacing={2}
        textAlign={matchDownSM ? 'center' : 'inherit'}
      >
        <Typography variant="subtitle2" color="secondary" component="span">
          &copy; Mantis React Dashboard Template By&nbsp;
          <Typography component={Link} variant="subtitle2" href="https://codedthemes.com" target="_blank" underline="hover">
            CodedThemes
          </Typography>
        </Typography>

        <Stack direction={matchDownSM ? 'column' : 'row'} spacing={matchDownSM ? 1 : 3} textAlign={matchDownSM ? 'center' : 'inherit'}>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://material-ui.com/store/contributors/codedthemes/"
            target="_blank"
            underline="hover"
          >
            MUI Templates
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://codedthemes.com"
            target="_blank"
            underline="hover"
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://codedthemes.support-hub.io/"
            target="_blank"
            underline="hover"
          >
            Support
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AuthFooter;
