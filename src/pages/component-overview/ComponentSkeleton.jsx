import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';
import ComponentWrapper from './ComponentWrapper';

// ===============================|| COMPONENT - SKELETON ||=============================== //

export default function ComponentSkeleton({ children }) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const skeletonCard = (
    <MainCard
      title={<Skeleton sx={{ width: { xs: 120, md: 180 } }} />}
      secondary={<Skeleton animation="wave" variant="circular" width={24} height={24} />}
    >
      <Stack spacing={1}>
        <Skeleton />
        <Skeleton sx={{ height: 64 }} animation="wave" variant="rectangular" />
        <Skeleton />
        <Skeleton />
      </Stack>
    </MainCard>
  );

  return (
    <>
      {isLoading && (
        <>
          <Box sx={{ pl: 2.5 }}>
            <Stack spacing={1.25}>
              <Typography variant="h2">
                <Skeleton />
              </Typography>
              <Typography variant="h6" color="text.secondary">
                <Skeleton />
              </Typography>
            </Stack>
            <Grid container spacing={0.75} sx={{ mt: 1.75 }}>
              <Grid item xs={12}>
                <Typography variant="caption" color="text.secondary">
                  <Stack direction="row" spacing={1}>
                    <Skeleton animation="wave" variant="circular" width={16} height={16} />
                    <Skeleton sx={{ width: { xs: 250, md: 450 } }} />
                  </Stack>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" color="text.secondary">
                  <Stack direction="row" spacing={1}>
                    <Skeleton animation="wave" variant="circular" width={16} height={16} />
                    <Skeleton sx={{ width: { xs: 250, md: 450 } }} />
                  </Stack>
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <ComponentWrapper>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                {skeletonCard}
              </Grid>
              <Grid item xs={12} md={6}>
                {skeletonCard}
              </Grid>
              <Grid item xs={12} md={6}>
                {skeletonCard}
              </Grid>
              <Grid item xs={12} md={6}>
                {skeletonCard}
              </Grid>
            </Grid>
          </ComponentWrapper>
        </>
      )}
      {!isLoading && children}
    </>
  );
}

ComponentSkeleton.propTypes = { children: PropTypes.node };
