import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useTheme } from '@mui/material/styles';

const ColoredSectionTop = ({ headline, description, headerChildren, children, bgColor, bottomBoxRendering, backLink }) => {
  const theme = useTheme();
  const fgColor = theme.palette.getContrastText(bgColor);
  const offsetConfigPadding = { xs: theme.spacing(8), md: theme.spacing(10), lg: theme.spacing(12) };
  const offsetConfigMargin = { xs: theme.spacing(-8), md: theme.spacing(-10), lg: theme.spacing(-12) };
  const bottomBoxSettings = {
    padding: { xs: 3, sm: 4, md: 5 },
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    minHeight: theme.spacing(16),
    position: 'relative'
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: bgColor,
          color: fgColor,
          py: { xs: 6, sm: theme.spacing(8), md: theme.spacing(12) },
          px: { xs: 2 }
        }}
      >
        <Grid container justifyContent="center" pb={offsetConfigPadding}>
          <Grid item xs={12} sm={10} lg={8}>
            <Stack spacing={{ xs: 2, sm: 3, md: 4 }}>
              <Stack direction="row" alignItems="center" flexWrap="wrap" useFlexGap spacing={{ xs: 1.5, sm: 2 }}>
                {backLink && (
                  <Button
                    sx={{
                      minWidth: '0px',
                      height: '2.25rem',
                      width: '2.25rem',
                      backgroundColor: fgColor,
                      '&:hover': { backgroundColor: fgColor, opacity: '0.8' }
                    }}
                    variant="contained"
                    component={Link}
                    href={backLink}
                  >
                    <ArrowBackIosNewIcon fontSize="small" sx={{ color: bgColor }} />
                  </Button>
                )}
                <Typography variant="h1">{headline}</Typography>
              </Stack>
              {description && (
                <Typography sx={{ mb: 0 }} paragraph>
                  {description}
                </Typography>
              )}
            </Stack>
            {headerChildren}
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          pb: { xs: 3, sm: 4, md: 5 },
          px: { xs: 3 },
          mt: offsetConfigMargin
        }}
      >
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={10}
            lg={8}
            sx={
              !bottomBoxRendering && {
                position: 'relative',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                  zIndex: '0',
                  filter: 'blur(18px)',
                  height: 'calc(80% - 16px)',
                  maxHeight: '200px',
                  width: '100%',
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%)'
                }
              }
            }
          >
            {bottomBoxRendering ? bottomBoxRendering(bottomBoxSettings) : <Box sx={bottomBoxSettings}>{children}</Box>}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ColoredSectionTop;
