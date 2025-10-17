import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

function ColorBox({ bgcolor, title, data, dark, main }) {
  return (
    <Card sx={{ '&.MuiPaper-root': { borderRadius: '0px' } }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 2.5,
          bgcolor,
          color: dark ? 'grey.800' : '#ffffff',
          border: main ? '1px dashed' : '1px solid transparent'
        }}
      >
        {title && (
          <Grid container sx={{ width: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <Grid>
              {data && (
                <Stack sx={{ gap: 0.75, alignItems: 'center' }}>
                  <Typography variant="subtitle2">{data.label}</Typography>
                  <Typography variant="subtitle1">{data.color}</Typography>
                </Stack>
              )}
            </Grid>
            <Grid>
              <Typography variant="subtitle1" color="inherit">
                {title}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Box>
    </Card>
  );
}

// ===============================|| COMPONENT - COLOR ||=============================== //

export default function ComponentColor() {
  const theme = useTheme();

  const currentPalette = theme.palette;
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <MainCard title="Primary Color">
          <Stack>
            <ColorBox
              bgcolor="primary.lighter"
              data={{ label: 'Blue-1', color: `${currentPalette.primary.lighter}` }}
              title="primary.lighter"
              dark
            />
            <ColorBox bgcolor="primary.100" data={{ label: 'Blue-2', color: `${currentPalette.primary[100]}` }} title="primary[100]" dark />
            <ColorBox bgcolor="primary.200" data={{ label: 'Blue-3', color: `${currentPalette.primary[200]}` }} title="primary[200]" dark />
            <ColorBox
              bgcolor="primary.light"
              data={{ label: 'Blue-4', color: `${currentPalette.primary.light}` }}
              title="primary.light"
              dark
            />
            <ColorBox bgcolor="primary.400" data={{ label: 'Blue-5', color: `${currentPalette.primary[400]}` }} title="primary[400]" />
            <ColorBox
              bgcolor="primary.main"
              data={{ label: 'Blue-6', color: `${currentPalette.primary.main}` }}
              title="primary.main"
              main
            />
            <ColorBox bgcolor="primary.dark" data={{ label: 'Blue-7', color: `${currentPalette.primary.dark}` }} title="primary.dark" />
            <ColorBox bgcolor="primary.700" data={{ label: 'Blue-8', color: `${currentPalette.primary[700]}` }} title="primary[700]" />
            <ColorBox
              bgcolor="primary.darker"
              data={{ label: 'Blue-9', color: `${currentPalette.primary.darker}` }}
              title="primary.darker"
            />
            <ColorBox bgcolor="primary.900" data={{ label: 'Blue-10', color: `${currentPalette.primary[900]}` }} title="primary.900" />
          </Stack>
        </MainCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <MainCard title="Secondary Color">
          <Stack>
            <ColorBox
              bgcolor="secondary.lighter"
              data={{ label: 'Grey-1', color: `${currentPalette.secondary.lighter}` }}
              title="secondary.lighter"
              dark
            />
            <ColorBox
              bgcolor="secondary.100"
              data={{ label: 'Grey-2', color: `${currentPalette.secondary[100]}` }}
              title="secondary[100]"
              dark
            />
            <ColorBox
              bgcolor="secondary.200"
              data={{ label: 'Grey-3', color: `${currentPalette.secondary[200]}` }}
              title="secondary[200]"
              dark
            />
            <ColorBox
              bgcolor="secondary.light"
              data={{ label: 'Grey-4', color: `${currentPalette.secondary.light}` }}
              title="secondary.light"
              dark
            />
            <ColorBox
              bgcolor="secondary.400"
              data={{ label: 'Grey-5', color: `${currentPalette.secondary[400]}` }}
              title="secondary[400]"
              dark
            />
            <ColorBox
              bgcolor="secondary.main"
              data={{ label: 'Grey-6', color: `${currentPalette.secondary.main}` }}
              title="secondary.main"
              main
            />
            <ColorBox bgcolor="secondary.600" data={{ label: 'Grey-7', color: `${currentPalette.secondary[600]}` }} title="secondary.600" />
            <ColorBox
              bgcolor="secondary.dark"
              data={{ label: 'Grey-8', color: `${currentPalette.secondary.dark}` }}
              title="secondary.dark"
            />
            <ColorBox
              bgcolor="secondary.800"
              data={{ label: 'Grey-9', color: `${currentPalette.secondary[800]}` }}
              title="secondary[800]"
            />
            <ColorBox
              bgcolor="secondary.darker"
              data={{ label: 'Grey-10', color: `${currentPalette.secondary.darker}` }}
              title="secondary.darker"
            />
          </Stack>
        </MainCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <MainCard title="Other Color">
          <Stack>
            <ColorBox
              bgcolor="secondary.A100"
              data={{ label: 'Grey-A1', color: `${currentPalette.secondary.A100}` }}
              title="secondary.A100"
              dark
            />
            <ColorBox
              bgcolor="secondary.A200"
              data={{ label: 'Grey-A2', color: `${currentPalette.secondary.A200}` }}
              title="secondary.A200"
            />
            <ColorBox
              bgcolor="secondary.A300"
              data={{ label: 'Grey-A3', color: `${currentPalette.secondary.A300}` }}
              title="secondary.A300"
            />
          </Stack>
        </MainCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <MainCard title="Success Color">
          <Stack>
            <ColorBox
              bgcolor="success.lighter"
              data={{ label: 'Green-1', color: `${currentPalette.success.lighter}` }}
              title="success.lighter"
              dark
            />
            <ColorBox
              bgcolor="success.light"
              data={{ label: 'Green-4', color: `${currentPalette.success.light}` }}
              title="success.light"
              dark
            />
            <ColorBox
              bgcolor="success.main"
              data={{ label: 'Green-6', color: `${currentPalette.success.main}` }}
              title="success.main"
              main
            />
            <ColorBox bgcolor="success.dark" data={{ label: 'Green-8', color: `${currentPalette.success.dark}` }} title="success.dark" />
            <ColorBox
              bgcolor="success.darker"
              data={{ label: 'Green-10', color: `${currentPalette.success.darker}` }}
              title="success.darker"
            />
          </Stack>
        </MainCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <MainCard title="Error Color">
          <Stack>
            <ColorBox
              bgcolor="error.lighter"
              data={{ label: 'Red-1', color: `${currentPalette.error.lighter}` }}
              title="error.lighter"
              dark
            />
            <ColorBox bgcolor="error.light" data={{ label: 'Red-4', color: `${currentPalette.error.light}` }} title="error.light" dark />
            <ColorBox bgcolor="error.main" data={{ label: 'Red-6', color: `${currentPalette.error.main}` }} title="error.main" main />
            <ColorBox bgcolor="error.dark" data={{ label: 'Red-8', color: `${currentPalette.error.dark}` }} title="error.dark" />
            <ColorBox bgcolor="error.darker" data={{ label: 'Red-10', color: `${currentPalette.error.darker}` }} title="error.darker" />
          </Stack>
        </MainCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <MainCard title="Warning Color">
          <Stack>
            <ColorBox
              bgcolor="warning.lighter"
              data={{ label: 'Gold-1', color: `${currentPalette.warning.lighter}` }}
              title="warning.lighter"
              dark
            />
            <ColorBox
              bgcolor="warning.light"
              data={{ label: 'Gold-4', color: `${currentPalette.warning.light}` }}
              title="warning.light"
              dark
            />
            <ColorBox
              bgcolor="warning.main"
              data={{ label: 'Gold-6', color: `${currentPalette.warning.main}` }}
              title="warning.main"
              main
            />
            <ColorBox bgcolor="warning.dark" data={{ label: 'Gold-8', color: `${currentPalette.warning.dark}` }} title="warning.dark" />
            <ColorBox
              bgcolor="warning.darker"
              data={{ label: 'Gold-10', color: `${currentPalette.warning.darker}` }}
              title="warning.darker"
            />
          </Stack>
        </MainCard>
      </Grid>
    </Grid>
  );
}

ColorBox.propTypes = {
  bgcolor: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object,
  dark: PropTypes.bool,
  main: PropTypes.bool
};
