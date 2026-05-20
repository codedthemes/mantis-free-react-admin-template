import PropTypes from 'prop-types';

// material-ui
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

// assets
import RiseOutlined from '@ant-design/icons/RiseOutlined';
import FallOutlined from '@ant-design/icons/FallOutlined';

const iconSX = { fontSize: '0.75rem', color: 'inherit', marginLeft: 0, marginRight: 0 };

export default function AnalyticEcommerce({ color = 'primary', title, count, percentage, isLoss, extra }) {
  return (
    <MainCard contentSX={{ p: 2.25 }}>
      <Stack sx={{ gap: 0.5 }}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
          {title}
        </Typography>
        <Stack direction="row" sx={{ alignItems: 'center' }}>
          <Typography variant="h4" sx={{ color: 'inherit' }}>
            {count}
          </Typography>
          {percentage && (
            <Chip
              variant="combined"
              color={color}
              icon={isLoss ? <FallOutlined style={iconSX} /> : <RiseOutlined style={iconSX} />}
              label={`${percentage}%`}
              sx={{ ml: 1.25, pl: 1 }}
              size="small"
            />
          )}
        </Stack>
      </Stack>
      <Box sx={{ pt: 2.25 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          You made an extra{' '}
          <Typography variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
            {extra}
          </Typography>{' '}
          this year
        </Typography>
      </Box>
    </MainCard>
  );
}

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.string
};
