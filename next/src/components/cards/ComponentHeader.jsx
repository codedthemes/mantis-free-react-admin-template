import PropTypes from 'prop-types';

// material-ui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// ==============================|| COMPONENT - HEADER ||============================== //

export default function ComponentHeader({ title, caption, directory }) {
  return (
    <Box sx={{ pl: { xs: 1.5, sm: 3, xl: 8 }, pr: { xs: 1.5, sm: 3 }, my: { xs: 2.5, md: 4.5 } }}>
      <Stack sx={{ gap: 1.25 }}>
        <Typography variant="h2">{title}</Typography>
        {caption && (
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            {caption}
          </Typography>
        )}
        {directory && (
          <Grid container spacing={0.75} sx={{ mt: 1.75 }}>
            <Grid item size={12}>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {directory}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Stack>
    </Box>
  );
}

ComponentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string,
  directory: PropTypes.string
};
