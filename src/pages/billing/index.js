import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Button, Typography, CircularProgress } from '@mui/material';
import ColoredSection from 'components/pageLayout/header/ColoredSection';
import { StripeContext } from 'context/stripe/index';

const Dashboard = () => {
  const theme = useTheme();
  const headerBgColor = `radial-gradient(circle at 2% 10%, ${theme.palette.primary.main}, transparent 100%),radial-gradient(circle at 95% 20%, ${theme.palette.primary.dark}, transparent 100%),radial-gradient(circle at 25% 90%, ${theme.palette.primary.light}, transparent 100%)`;

  const { createSubscription, cancelSubscriptions, loadingCreateSubscription, loadingCancelSubscription, hasActiveSubscription } =
    useContext(StripeContext);

  const stripeSub = async () => {
    const checkoutUrl = await createSubscription();
    window.open(checkoutUrl, '_blank', 'noreferrer');
  };
  const stripeCancelSub = async () => {
    await cancelSubscriptions();
  };

  return (
    <>
      <ColoredSection
        bgGradient={headerBgColor}
        bgColor={theme.palette.secondary.dark}
        headline={'Zahlung'}
        description="Auf dieser Seite können Sie Ihre Zahlungen verwalten."
      />
      <Grid container>
        <Grid item xs={12}>
          {hasActiveSubscription && (
            <Button
              endIcon={loadingCancelSubscription ? <CircularProgress color="inherit" size="1rem" /> : ''}
              variant="contained"
              color="primary"
              onClick={() => stripeCancelSub()}
            >
              Abo kündigen
            </Button>
          )}
          {!hasActiveSubscription && (
            <Button
              endIcon={loadingCreateSubscription ? <CircularProgress color="inherit" size="1rem" /> : ''}
              variant="contained"
              color="primary"
              onClick={() => stripeSub()}
            >
              Jetzt abonnieren
            </Button>
          )}
        </Grid>
        <Grid item>
          <Typography>Abonnement {hasActiveSubscription ? '' : 'nicht '}aktiv</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
