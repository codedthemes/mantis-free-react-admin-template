import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

// ===============================|| SHADOW BOX ||=============================== //

function ShadowBox({ shadow }) {
  return (
    <MainCard border={false} shadow={shadow} boxShadow>
      <Stack sx={{ gap: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6">boxShadow</Typography>
        <Typography variant="subtitle1">{shadow}</Typography>
      </Stack>
    </MainCard>
  );
}

// ===============================|| CUSTOM - SHADOW BOX ||=============================== //

function CustomShadowBox({ shadow, label, color, bgcolor }) {
  return (
    <MainCard border={false} shadow={shadow} boxShadow sx={{ bgcolor: bgcolor || 'inherit' }}>
      <Stack sx={{ gap: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="subtitle1" color={color}>
          {label}
        </Typography>
      </Stack>
    </MainCard>
  );
}

// ============================|| COMPONENT - SHADOW ||============================ //

export default function ComponentShadow() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <MainCard title="Basic Shadow">
          <Grid container spacing={3}>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="0" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="1" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="2" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="3" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="4" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="5" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="6" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="7" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="8" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="9" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="10" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="11" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="12" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="13" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="14" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="15" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="16" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="17" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="18" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="19" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="20" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="21" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="22" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="23" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <ShadowBox shadow="24" />
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid size={12}>
        <MainCard title="Custom Shadow">
          <Grid container spacing={3}>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox shadow={theme.customShadows.z1} label="z1" color="inherit" />
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid size={12}>
        <MainCard title="Color Shadow">
          <Grid container spacing={3}>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox
                color={theme.palette.primary.contrastText}
                bgcolor={theme.palette.primary.main}
                shadow={theme.customShadows.primaryButton}
                label="primary"
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox
                color={theme.palette.secondary.contrastText}
                bgcolor={theme.palette.secondary.main}
                shadow={theme.customShadows.secondaryButton}
                label="secondary"
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox
                color={theme.palette.success.contrastText}
                bgcolor={theme.palette.success.main}
                shadow={theme.customShadows.successButton}
                label="success"
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox
                color={theme.palette.warning.contrastText}
                bgcolor={theme.palette.warning.main}
                shadow={theme.customShadows.warningButton}
                label="warning"
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox
                color={theme.palette.info.contrastText}
                bgcolor={theme.palette.info.main}
                shadow={theme.customShadows.infoButton}
                label="info"
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox
                color={theme.palette.error.contrastText}
                bgcolor={theme.palette.error.main}
                shadow={theme.customShadows.errorButton}
                label="error"
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox color={theme.palette.primary.main} shadow={theme.customShadows.primary} label="primary" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox color={theme.palette.secondary.main} shadow={theme.customShadows.secondary} label="secondary" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox color={theme.palette.success.main} shadow={theme.customShadows.success} label="success" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox color={theme.palette.warning.main} shadow={theme.customShadows.warning} label="warning" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox color={theme.palette.info.main} shadow={theme.customShadows.info} label="info" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox color={theme.palette.error.main} shadow={theme.customShadows.error} label="error" />
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
}

ShadowBox.propTypes = { shadow: PropTypes.string };

CustomShadowBox.propTypes = { shadow: PropTypes.string, label: PropTypes.string, color: PropTypes.string, bgcolor: PropTypes.string };
