'use client';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import MainCard from 'components/MainCard';
const GRID_COMMON_SPACING = { xs: 2, md: 2.5 };
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';

// ===============================|| COMPONENT - SKELETON ||=============================== //

export default function ComponentSkeleton({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    const skeletonCard = (
      <MainCard
        title={<Skeleton sx={{ width: { xs: 120, md: 180 } }} />}
        secondary={<Skeleton animation="wave" variant="circular" width={24} height={24} />}
      >
        <Stack sx={{ gap: 1 }}>
          <Skeleton />
          <Skeleton sx={{ height: 64 }} animation="wave" variant="rectangular" />
          <Skeleton />
          <Skeleton />
        </Stack>
      </MainCard>
    );

    return (
      <>
        <Box sx={{ pl: { xs: 3, xl: 8 } }}>
          <Stack sx={{ gap: 1.25 }}>
            <Typography variant="h2">
              <Skeleton />
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              <Skeleton />
            </Typography>
          </Stack>
          <Grid container spacing={0.75} sx={{ mt: 1.75 }}>
            <Grid size={12}>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                <Stack direction="row" sx={{ gap: 1 }}>
                  <Skeleton animation="wave" variant="circular" width={16} height={16} />
                  <Skeleton sx={{ width: { xs: 250, md: 450 } }} />
                </Stack>
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                <Stack direction="row" sx={{ gap: 1 }}>
                  <Skeleton animation="wave" variant="circular" width={16} height={16} />
                  <Skeleton sx={{ width: { xs: 250, md: 450 } }} />
                </Stack>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <ComponentWrapper>
          <Grid container spacing={GRID_COMMON_SPACING}>
            <Grid size={{ xs: 12, md: 6 }}>{skeletonCard}</Grid>
            <Grid size={{ xs: 12, md: 6 }}>{skeletonCard}</Grid>
            <Grid size={{ xs: 12, md: 6 }}>{skeletonCard}</Grid>
            <Grid size={{ xs: 12, md: 6 }}>{skeletonCard}</Grid>
          </Grid>
        </ComponentWrapper>
      </>
    );
  }

  return <>{children}</>;
}

ComponentSkeleton.propTypes = { children: PropTypes.node };
