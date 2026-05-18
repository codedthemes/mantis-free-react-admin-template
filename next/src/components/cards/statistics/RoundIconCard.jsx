import PropTypes from 'prop-types';
// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';

// ============================|| STATISTICS - ROUND ICON CARD ||============================ //

export default function RoundIconCard({ primary, secondary, content, iconPrimary, color, bgcolor, avatarSize = 'lg', circular }) {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary /> : null;

  return (
    <MainCard>
      <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Grid>
          <Stack sx={{ gap: 1 }}>
            <Typography variant="h5" color="inherit">
              {primary}
            </Typography>
            <Typography variant="h4">{secondary}</Typography>
            <Typography variant="subtitle2" color="inherit">
              {content}
            </Typography>
          </Stack>
        </Grid>
        <Grid>
          <Avatar type="filled" variant={circular ? 'circular' : 'rounded'} sx={{ bgcolor, color }} size={avatarSize}>
            {primaryIcon}
          </Avatar>
        </Grid>
      </Grid>
    </MainCard>
  );
}

RoundIconCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  content: PropTypes.string,
  iconPrimary: PropTypes.any,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  avatarSize: PropTypes.string,
  circular: PropTypes.bool
};
