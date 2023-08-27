import React, { useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import ColoredSection from 'components/pageLayout/header/coloredSection';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
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
          <Grid item sm={6}>
            <Button
              sx={{
                ...boxSettings,
                boxShadow: theme.shadows[3],
                display: 'block',
                width: '100%',
                minHeight: 'initial',
                transition: '0.2s',
                '&:hover': {
                  backgroundColor: boxSettings.backgroundColor,
                  boxShadow: theme.shadows[5],
                  transform: 'scale(1.005)'
                }
              }}
              href={link}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{
                  margin: theme.spacing(-1.5)
                }}
              >
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
                  <Icon sx={{ fontSize: 40 }} />
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
        </Grid>
      );
    },
    [theme]
  );

  return (
    <ColoredSection
      bgColor={headerBgColor}
      headline={'Start'}
      description="asdojaosidj98 a9sudj ud 98ausd ujas98d jas9d ijoas9d9ash "
      bottomBoxRendering={bottomBoxRendering}
    />
  );
};

export default Dashboard;
