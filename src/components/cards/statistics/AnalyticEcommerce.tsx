import './AnalyticEcommerce.scss';
// material-ui
import { ChipPropsColorOverrides } from '@mui/material';
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const HandleOnDrag = (e: React.DragEvent, id: string, status: string) => {
  e.dataTransfer.setData('id', id);
  e.dataTransfer.setData('status', status);
};

type AnalyticEcommerceProps = {
  color?:
    | OverridableStringUnion<'secondary' | 'default' | 'primary' | 'error' | 'info' | 'success' | 'warning', ChipPropsColorOverrides>
    | undefined;
  title?: string;
  count?: string;
  percentage?: number;
  isLoss?: boolean;
  extra?: string;
};

const AnalyticEcommerce = ({ color, title, count, percentage, isLoss, extra }: AnalyticEcommerceProps) => (
  <MainCard className="card-animation" draggable onDragStart={(e: any) => HandleOnDrag(e, count ?? '', extra ?? '')} contentSX={{ p: 2.5 }}>
    <Stack spacing={0.5}>
      <Typography variant="h6" color="textSecondary">
        {title}
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="h4" color="inherit">
            {count}
          </Typography>
        </Grid>
        {percentage && (
          <Grid item>
            <Chip
              // variant="combined"
              color={color}
              icon={
                <>
                  {!isLoss && <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                  {isLoss && <FallOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                </>
              }
              label={`${percentage}%`}
              sx={{ ml: 1.25, pl: 1 }}
              size="small"
            />
          </Grid>
        )}
      </Grid>
    </Stack>
    <Box sx={{ pt: 2.25 }}>
      <Typography variant="caption" color="textSecondary">
        You made an extra{' '}
        <Typography component="span" variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
          {extra}
        </Typography>{' '}
        this year
      </Typography>
    </Box>
  </MainCard>
);

AnalyticEcommerce.defaultProps = {
  color: 'primary'
};

export default AnalyticEcommerce;
