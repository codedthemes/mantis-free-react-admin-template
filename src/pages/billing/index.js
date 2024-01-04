import React, { useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Grid,
  Typography,
  CircularProgress,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import ColoredSection from 'components/pageLayout/header/ColoredSection';
import { StripeContext } from 'context/stripe/index';
import TextTeaserCard from 'components/TextTeaserCard/index';
import LayoutBox from 'components/LayoutBox/index';

const iconStyles = {
  opacity: '0.2',
  fontSize: 55,
  margin: '0 -0.35em -0.2em'
};

const Dashboard = () => {
  const theme = useTheme();
  const [isLoadingSub, setIsLoadingSub] = useState();
  const headerBgColor = `radial-gradient(circle at 2% 10%, ${theme.palette.primary.main}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary.dark}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.primary.light}, transparent 100%)`;

  const { getPortalUrl, createSubscription, loadingCreateSubscription, hasActiveSubscription } = useContext(StripeContext);

  const stripeSub = async () => {
    setIsLoadingSub(true);
    const checkoutUrl = await createSubscription();
    setIsLoadingSub(false);
    window.open(checkoutUrl, '_blank', 'noreferrer');
  };
  const handleOpenCancelSub = async () => {
    setIsLoadingSub(true);
    const url = await getPortalUrl();
    setIsLoadingSub(false);
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <>
      <ColoredSection
        bgGradient={headerBgColor}
        bgColor={theme.palette.secondary.dark}
        headline={`Abonnement ${hasActiveSubscription ? '(aktiv)' : ''}`}
        description="Auf dieser Seite können Sie Ihr Abonnement verwalten."
      />
      <LayoutBox
        sx={{
          backgroundColor: theme.palette.common.white,
          padding: theme.shape.paddingBoxMedium,
          mb: { xs: 2, lg: 3 }
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6} lg={5}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              {hasActiveSubscription ? 'Sie verfügen über ein aktives Abonnement.' : 'Sie verfügen über kein aktives Abonnement'}
            </Typography>
            <Typography variant="body1">
              Mit einem Abonnement können Sie alle Features des Stundensatzkalkulators unbegrenzt nutzen.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            {!hasActiveSubscription && (
              <TextTeaserCard
                grow
                primaryText={
                  <Stack
                    sx={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}
                    component="span"
                  >
                    Jetzt abonnieren
                    {loadingCreateSubscription ? <CircularProgress color="inherit" sx={iconStyles} /> : <ChevronRight sx={iconStyles} />}
                  </Stack>
                }
                // prefixText={`zuletzt bearbeitet: ${dayjs(formData.creationDate).format('DD.MM.YYYY')}`}
                prefixText={'Alle Features freischalten'}
                onClick={stripeSub}
                color={theme.palette.primary.main}
              />
            )}
            {hasActiveSubscription && (
              <TextTeaserCard
                grow
                textAlign="right"
                primaryText={
                  <Stack
                    sx={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}
                    component="span"
                  >
                    Abonement und Zahlungsmethode
                  </Stack>
                }
                // prefixText={`zuletzt bearbeitet: ${dayjs(formData.creationDate).format('DD.MM.YYYY')}`}
                prefixText={isLoadingSub ? 'lädt...' : 'Verwalten Sie Ihr'}
                onClick={handleOpenCancelSub}
                light
                color={theme.palette.common.white}
              />
            )}
          </Grid>
        </Grid>
      </LayoutBox>
      <LayoutBox
        sx={{
          backgroundColor: theme.palette.common.white,
          padding: theme.shape.paddingBoxMedium
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid item xs={12}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Im Abonnement sind folgende Features enthalten:
            </Typography>
          </Grid>
          <Grid item xs={12} xl={8}>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <ListItemText primary="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut" />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <ListItemText
                  primary="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam"
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <ListItemText primary="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </LayoutBox>
    </>
  );
};

export default Dashboard;
