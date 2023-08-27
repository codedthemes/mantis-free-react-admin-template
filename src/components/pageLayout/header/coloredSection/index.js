import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const ColoredSectionTop = ({ headline, description, headerChildren, children, bgColor, bottomBoxRendering }) => {
  const theme = useTheme();
  const fgColor = theme.palette.getContrastText(bgColor);
  const offsetConfigPadding = { xs: theme.spacing(8), md: theme.spacing(10), lg: theme.spacing(12) };
  const offsetConfigMargin = { xs: theme.spacing(-8), md: theme.spacing(-10), lg: theme.spacing(-12) };
  const bottomBoxSettings = {
    padding: { xs: 3, sm: 4, md: 5 },
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    minHeight: theme.spacing(16)
  };

  return (
    <>
      <Box sx={{ backgroundColor: bgColor, color: fgColor, py: { xs: 4, sm: theme.spacing(7), md: theme.spacing(10) }, px: { xs: 2 } }}>
        <Grid container justifyContent="center" pb={offsetConfigPadding}>
          <Grid item xs={12} sm={10} lg={8}>
            <Typography variant="h1">{headline}</Typography>
            {description && (
              <Typography paragraph sx={{ mb: 0 }}>
                {description}
              </Typography>
            )}
            {headerChildren}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ pb: { xs: 3, sm: 4, md: 5 }, px: { xs: 2 }, mt: offsetConfigMargin }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} lg={8}>
            {bottomBoxRendering ? bottomBoxRendering(bottomBoxSettings) : <Box sx={bottomBoxSettings}>{children}</Box>}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ColoredSectionTop;
