import React, { useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import ColoredSection from 'components/pageLayout/header/ColoredSection';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ViewAgenda, Groups, Person } from '@mui/icons-material';

const Dashboard = () => {
  const theme = useTheme();
  const headerBgColor = theme.palette.primary.main;

  const bottomBoxRendering = useCallback(
    (boxSettings = {}) => {
      const renderItem = ({ Icon, text, link, color }) => {
        return (
          <Grid item md={4}>
            <Button
              sx={{
                ...boxSettings,
                display: 'block',
                width: '100%',
                minHeight: 'initial',
                transition: '0.2s',
                '&:hover': {
                  boxShadow: theme.shadows[3]
                }
              }}
              href={link}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Stack
                  sx={{
                    borderRadius: '10000px',
                    padding: theme.spacing(1),
                    backgroundColor: color,
                    color: theme.palette.common.white,
                    flexGrow: 0
                  }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon sx={{ fontSize: { xs: 32, md: 32, lg: 40 } }} />
                </Stack>
                <Typography paragraph sx={{ marginBottom: '0px', color: theme.palette.text.primary }}>
                  {text}
                </Typography>
              </Stack>
            </Button>
          </Grid>
        );
      };

      return (
        <Grid container spacing={2}>
          {renderItem({ Icon: ViewAgenda, text: 'Formulare', link: '/form/overview', color: theme.palette.primary.dark })}
          {renderItem({ Icon: Groups, text: 'Mitarbeiter', link: '/', color: theme.palette.warning.main })}
          {renderItem({ Icon: Person, text: 'Profil', link: '/', color: theme.palette.info.main })}
          <Grid xs={12} item>
            <Divider sx={{ my: 2 }} />
          </Grid>
          <Grid xs={12} item sx={{ mt: 2 }}>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tempor nec feugiat nisl pretium fusce id velit ut. Fames ac turpis egestas sed tempus urna et. Diam in arcu cursus euismod.
              Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.
            </Typography>
            <Typography paragraph>
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec
              feugiat nisl pretium fusce id velit ut. Fames ac turpis egestas sed tempus urna et.
            </Typography>
            <Typography paragraph>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl
              pretium fusce id velit ut. Fames ac turpis egestas sed tempus urna et. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut.
              Fames ac turpis egestas sed tempus urna et. Diam in arcu cursus euismod. Phasellus faucibus scelerisque eleifend donec pretium
              vulputate sapien nec sagittis.
            </Typography>
          </Grid>
        </Grid>
      );
    },
    [theme]
  );

  return (
    <>
      <ColoredSection
        bgColor={headerBgColor}
        headline={'Dashboard'}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut. Fames ac turpis egestas sed tempus urna et. Diam in arcu cursus euismod. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis."
      >
        {bottomBoxRendering()}
      </ColoredSection>
    </>
  );
};

export default Dashboard;
