// material-ui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import MainCard from 'components/MainCard';

const avatar = '/assets/images/users/avatar-group.png';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

export default function NavCard() {
  return (
    <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
      <Stack alignItems="center" sx={{ gap: 2.5, alignItems: 'center' }}>
        <CardMedia component="img" image={avatar} sx={{ width: 112 }} />
        <Stack alignItems="center">
          <Typography variant="h5">Mantis Pro</Typography>
          <Typography variant="h6" sx={{ color: 'secondary.main' }}>
            Checkout pro features
          </Typography>
        </Stack>
        <AnimateButton>
          <Button component={Link} target="_blank" href="https://mantisdashboard.com" variant="contained" color="success" size="small">
            Pro
          </Button>
        </AnimateButton>
      </Stack>
    </MainCard>
  );
}
