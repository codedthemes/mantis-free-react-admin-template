import React, { useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import ColoredSection from 'components/pageLayout/header/ColoredSection';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useLottie } from 'lottie-react';
import lottieAnimCalc from '../../assets/lotties/animation_calc_2.json';
import TextTeaserCard from 'components/TextTeaserCard/index';

const Dashboard = () => {
  const theme = useTheme();
  const headerBgColor = `radial-gradient(circle at 2% 10%, ${theme.palette.primary.main}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary.dark}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.primary.light}, transparent 100%)`;

  const options = {
    animationData: lottieAnimCalc,
    loop: true
  };

  const { View } = useLottie(options);

  const bottomBoxRendering = useCallback(() => {
    return (
      <Grid container spacing={3}>
        <Grid item sm={12} md={6} xl={4}>
          <TextTeaserCard primaryText="Formularen" prefixText="zu den" link="/office/form/overview" color={theme.palette.primary.dark} />
        </Grid>
        <Grid item sm={12} md={6} xl={4}>
          <TextTeaserCard primaryText="Mitarbeitern" prefixText="zu den" link="/" color={theme.palette.secondary.main} />
        </Grid>
        <Grid item sm={12} md={6} xl={4}>
          <TextTeaserCard primaryText="Profil" prefixText="zum" link="/" color={theme.palette.primary.light} />
        </Grid>
      </Grid>
      // <Grid container spacing={theme.shape.layoutDesignGutter}>
      //   <Grid xs={12} item>
      //     <LayoutBox sx={{ backgroundColor: theme.palette.common.white, padding: theme.shape.paddingBoxLarge }}>
      //       <Typography paragraph>
      //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      //         Tempor nec feugiat nisl pretium fusce id velit ut. Fames ac turpis egestas sed tempus urna et. Diam in arcu cursus euismod.
      //         Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.
      //       </Typography>
      //       <Typography paragraph>
      //         Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec
      //         feugiat nisl pretium fusce id velit ut. Fames ac turpis egestas sed tempus urna et.
      //       </Typography>
      //       <Typography paragraph>
      //         Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl
      //         pretium fusce id velit ut. Fames ac turpis egestas sed tempus urna et. Lorem ipsum dolor sit amet, consectetur adipiscing
      //         elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut.
      //         Fames ac turpis egestas sed tempus urna et. Diam in arcu cursus euismod. Phasellus faucibus scelerisque eleifend donec pretium
      //         vulputate sapien nec sagittis.
      //       </Typography>
      //     </LayoutBox>
      //   </Grid>
      // </Grid>
    );
  }, [theme]);

  return (
    <>
      <ColoredSection
        bgGradient={headerBgColor}
        bgColor={theme.palette.secondary.dark}
        headline={'Dashboard'}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut. Fames ac turpis egestas sed tempus urna et. Diam in arcu cursus euismod. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis."
        headerChildren={
          <Box
            sx={{
              marginTop: { xs: theme.spacing(-4), sm: theme.spacing(-4), lg: theme.spacing(-12) },
              marginRight: { lg: theme.spacing(-12) },
              marginLeft: { xs: theme.spacing(-4), sm: theme.spacing(-5), lg: theme.spacing(4) },
              marginBottom: { xs: 0, lg: theme.spacing(-12) },
              maxWidth: { xs: '200px', md: '300px', lg: '400px' }
            }}
          >
            {View}
          </Box>
        }
      />
      {bottomBoxRendering()}
    </>
  );
};

export default Dashboard;
