import PropTypes from 'prop-types';
// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| STATISTICS - REPORT CARD ||============================== //

export default function ReportCard({ primary, secondary, iconPrimary, color }) {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary size={44} /> : null;

  return (
    <MainCard>
      <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid>
          <Stack sx={{ gap: 0.25 }}>
            <Typography variant="h3">{primary}</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {secondary}
            </Typography>
          </Stack>
        </Grid>
        <Grid sx={{ color: color || 'primary.main' }}>{primaryIcon}</Grid>
      </Grid>
    </MainCard>
  );
}

ReportCard.propTypes = { primary: PropTypes.any, secondary: PropTypes.any, iconPrimary: PropTypes.any, color: PropTypes.any };
