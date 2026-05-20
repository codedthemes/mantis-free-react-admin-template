import PropTypes from 'prop-types';
// material-ui
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

export default function RoundIconCard({ primary, secondary, content, iconPrimary, color, bgcolor }) {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

  return (
    <MainCard>
      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Stack sx={{ gap: 1 }}>
          <Typography variant="h5" sx={{ color: 'inherit' }}>
            {primary}
          </Typography>
          <Typography variant="h3">{secondary}</Typography>
          <Typography variant="subtitle2" sx={{ color: 'secondary.main' }}>
            {content}
          </Typography>
        </Stack>
        <Avatar variant="rounded" sx={{ bgcolor, color, '& .MuiSvgIcon-root': { fontSize: '1.5rem' } }}>
          {primaryIcon}
        </Avatar>
      </Stack>
    </MainCard>
  );
}

RoundIconCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  content: PropTypes.string,
  iconPrimary: PropTypes.any,
  color: PropTypes.string,
  bgcolor: PropTypes.string
};
