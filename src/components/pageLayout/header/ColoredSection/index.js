import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useTheme } from '@mui/material/styles';
import LayoutBox from 'components/LayoutBox/index';

// eslint-disable-next-line react/prop-types
const ColoredSectionTop = ({ headline, description, headerChildren, bgColor, bgGradient, backLink, noMargin }) => {
  const theme = useTheme();
  const fgColor = theme.palette.getContrastText(bgColor);

  return (
    <>
      <LayoutBox
        sx={{
          background: bgGradient || bgColor,
          color: fgColor,
          padding: theme.shape.paddingBoxLarge,
          marginBottom: noMargin ? '0' : { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={12} lg={12}>
            <Stack flexDirection={{ xs: 'column', lg: 'row' }}>
              <Stack sx={{ order: { xs: 1, lg: 0 } }} spacing={{ xs: 2, sm: 3, lg: 4 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
                  useFlexGap
                  spacing={{ xs: 1.5, sm: 2, lg: 3, xl: 4 }}
                >
                  {backLink && (
                    <Button
                      sx={{
                        aspectRatio: '1/1',
                        minWidth: '0px',
                        height: '2.75rem',
                        width: '2.75rem',
                        backgroundColor: fgColor,
                        alignSelf: 'flex-start',
                        marginTop: { xs: '0.2rem', md: '0.4rem', lg: '0.7rem' },
                        '&:hover': { backgroundColor: fgColor, opacity: '0.8' },
                        flexShrink: '0'
                      }}
                      variant="contained"
                      component={Link}
                      href={backLink}
                    >
                      <ArrowBackIosNewIcon fontSize="small" sx={{ color: bgColor }} />
                    </Button>
                  )}
                  <Typography variant="h1">
                    {headline}
                    <Box
                      sx={{
                        mt: theme.spacing(1),
                        height: '4px',
                        width: '100%',
                        display: 'block',
                        borderRadius: '1000px',
                        backgroundColor: theme.palette.secondary.main
                      }}
                    ></Box>
                  </Typography>
                </Stack>
                {description && (
                  <Typography sx={{ mb: 0 }} paragraph>
                    {description}
                  </Typography>
                )}
              </Stack>
            </Stack>
            {headerChildren}
          </Grid>
        </Grid>
      </LayoutBox>
    </>
  );
};

export default ColoredSectionTop;
