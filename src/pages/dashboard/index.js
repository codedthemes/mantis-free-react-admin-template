import React, { useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import ColoredSection from 'components/pageLayout/header/ColoredSection';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { BackupTableOutlined, SwitchAccountOutlined, AccountCircleOutlined } from '@mui/icons-material';
import LayoutBox from 'components/LayoutBox/index';
import { lighten } from '@mui/material/styles';
import { useLottie } from 'lottie-react';
import lottieAnimCalc from '../../assets/lotties/animation_calc_2.json';

const Dashboard = () => {
  const theme = useTheme();
  const headerBgColor = `radial-gradient(circle at 2% 10%, ${theme.palette.primary.main}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary.dark}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.primary.light}, transparent 100%)`;

  const options = {
    animationData: lottieAnimCalc,
    loop: true
  };

  const { View } = useLottie(options);

  const bottomBoxRendering = useCallback(() => {
    const renderItem = ({ primaryText, prefixText, link, color }) => {
      const textColor = theme.palette.common.white;
      const textColorHover = textColor;
      const bgColor = `linear-gradient(to right, ${color}, ${lighten(color, 0.15)})`;

      return (
        <Grid item sm={12} md={6} xl={4}>
          <Button
            component={Link}
            sx={{
              background: bgColor,
              color: textColor,
              padding: `${theme.spacing(4)} ${theme.spacing(5)}`,
              borderRadius: theme.shape.borderRadiusBox,
              width: '100%',
              transition: '.25s',
              boxShadow: theme.shadows[16],
              justifyContent: 'flex-start',
              '&:hover': {
                color: textColorHover,
                boxShadow: theme.shadows[10]
              }
            }}
            to={link}
          >
            <Stack direction="column" spacing={1}>
              {/* <Icon sx={{ fontSize: { xs: 32, md: 32, lg: 40 }, color: textColor }} /> */}
              <Typography
                paragraph
                sx={{
                  fontSize: 24,
                  lineHeight: '1em',
                  textTransform: 'none',
                  fontWeight: theme.typography.fontWeightBoldest,
                  margin: '0px',
                  color: textColor
                }}
              >
                {prefixText}
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontSize: 44,
                  lineHeight: '1em',
                  textTransform: 'none',
                  fontWeight: theme.typography.fontWeightLight,
                  margin: '0px',
                  color: textColor
                }}
              >
                {primaryText}
              </Typography>
            </Stack>
          </Button>
        </Grid>
      );
    };

    return (
      <Grid container spacing={3}>
        {renderItem({ primaryText: 'Formularen', prefixText: 'zu den', link: '/form/overview', color: theme.palette.primary.dark })}
        {renderItem({ primaryText: 'Mitarbeitern', prefixText: 'zu den', link: '/', color: theme.palette.secondary.main })}
        {renderItem({ primaryText: 'Profil', prefixText: 'zum', link: '/', color: theme.palette.primary.light })}
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
              maxWidth: { xs: '200px', md: '300px', lg: '400px' },
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
