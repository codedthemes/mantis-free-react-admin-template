import React, { useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import ColoredSection from 'components/pageLayout/header/ColoredSection';
import { Grid } from '@mui/material';
import TextTeaserCard from 'components/TextTeaserCard/index';

const Dashboard = () => {
  const theme = useTheme();
  const headerBgColor = `radial-gradient(circle at 2% 10%, ${theme.palette.primary.main}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary.dark}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.primary.light}, transparent 100%)`;

  const bottomBoxRendering = useCallback(() => {
    return (
      <Grid container spacing={3} mb={6}>
        <Grid item xs={12} sm={6} xl={4}>
          <TextTeaserCard primaryText="Angaben" prefixText="zu den" link="/office/form/overview" color={theme.palette.primary.dark} />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <TextTeaserCard primaryText="Profil" prefixText="zum" link="/" color={theme.palette.primary.light} />
        </Grid>
      </Grid>
    );
  }, [theme]);

  return (
    <>
      <ColoredSection
        bgGradient={headerBgColor}
        bgColor={theme.palette.secondary.dark}
        headline={'Dashboard'}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut. Fames ac turpis egestas sed tempus urna et. Diam in arcu cursus euismod. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis."
      />
      {bottomBoxRendering()}
    </>
  );
};

export default Dashboard;
