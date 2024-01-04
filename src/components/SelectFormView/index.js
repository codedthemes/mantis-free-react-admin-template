import React, { useContext, useMemo, useState } from 'react';
import dayjs from 'dayjs';

// material-ui
import {
  Alert,
  Grid,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import TextTeaserCard from 'components/TextTeaserCard/index';
import { Link, useNavigate } from 'react-router-dom';

// icons
import { Edit, ChevronRight, DeleteOutlineOutlined } from '@mui/icons-material';

// redux
import { UserContext } from 'context/user';
import { StripeContext } from 'context/stripe/index';

// eslint-disable-next-line react/prop-types
const SelectFormView = ({ formType, sections }) => {
  const theme = useTheme();
  const { createForm, formsData = {}, deleteForm } = useContext(UserContext);
  const { hasActiveSubscription } = useContext(StripeContext);
  const [openSubBanner, setOpenSubBanner] = useState(false);
  const [showMoreFormsWarning, setShowMoreFormsWarning] = useState(false);

  const navigate = useNavigate();

  const removeForm = async (formId) => {
    await deleteForm(formId);
    navigate('/office/dashboard');
  };

  const visibleForms = useMemo(() => {
    const formsToUse = {};
    let shouldSetShowWarning = false;
    Object.keys(formsData).forEach((formKey) => {
      const currentForm = formsData[formKey];
      if (currentForm.type === formType) {
        const shouldAddFormToView = hasActiveSubscription || Object.keys(formsToUse)?.length === 0;

        if (shouldAddFormToView) {
          formsToUse[formKey] = currentForm;
        } else {
          shouldSetShowWarning = true;
        }
      }
    });

    setShowMoreFormsWarning(shouldSetShowWarning);

    return formsToUse;
  }, [formType, formsData, hasActiveSubscription]);

  const addForm = () => {
    createForm({ title: `Formular vom ${dayjs(new Date()).format('DD.MM.YYYY')}`, type: formType });
  };

  const handleOpenSub = () => {
    setOpenSubBanner(true);
  };
  const handleCloseSub = () => {
    setOpenSubBanner(false);
  };

  const formCardsDom = () => {
    const formIds = Object.keys(visibleForms);
    const formCards =
      formIds
        .map((formId) => {
          const formData = visibleForms[formId];
          const sectionsDom = sections?.map((section) => {
            return (
              <Grid key={formId} item xs={12} sm={6}>
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
                      {section.title}
                      <Edit
                        sx={{
                          opacity: '0.2',
                          fontSize: { xs: 40, md: 48, lg: 55 },
                          margin: '0 -0.35em -0.2em'
                        }}
                      />
                    </Stack>
                  }
                  // prefixText={`zuletzt bearbeitet: ${dayjs(formData.creationDate).format('DD.MM.YYYY')}`}
                  prefixText={'Blatt'}
                  link={`/office/form/${formId}/${section.linkPart}`}
                  color={theme.palette.primary.light}
                />
              </Grid>
            );
          });

          console.log('formData', formData);

          return (
            <Grid key={formId} item xs={12}>
              <Stack flexDirection="column" sx={{ mb: { xs: theme.spacing(4), md: theme.spacing(5), lg: theme.spacing(6) } }}>
                <Stack
                  flexDirection="row"
                  alignItems="flex-end"
                  justifyContent="space-between"
                  sx={{ mb: { xs: 2, sm: 3 } }}
                  flexWrap="wrap"
                >
                  <Typography variant="h3" sx={{ mb: 1 }}>
                    {formData.title || 'Formular: ' + formData.id}
                  </Typography>
                  <Button startIcon={<DeleteOutlineOutlined />} color="error" variant="contained" onClick={() => removeForm(formId)}>
                    Formular Löschen
                  </Button>
                </Stack>
                <Grid spacing={{ xs: 2, lg: 3 }} container>
                  {sectionsDom}
                </Grid>
              </Stack>
            </Grid>
          );
        })
        .filter(Boolean) || [];

    return (
      <>
        <Grid container spacing={3} sx={{ marginBottom: theme.spacing(3) }}>
          {formCards}

          <Grid item xs={12} sm={6} sx={{ mt: theme.spacing(4) }}>
            {showMoreFormsWarning && (
              <Alert sx={{ mb: 2 }} severity="warning">
                Es gibt weitere Angabensets. Setzen Sie das Abonnement fort um alle Angabensets anzuzeigen.
              </Alert>
            )}
            <TextTeaserCard
              onClick={hasActiveSubscription ? addForm : handleOpenSub}
              primaryText={
                <Stack flexDirection="row" alignItems="center">
                  Neues Angabenset
                  <ChevronRight
                    sx={{
                      opacity: '0.2',
                      fontSize: 65,
                      margin: '0 -0.35em -0.35em 1rem'
                    }}
                  />
                </Stack>
              }
              prefixText="Erstellen Sie ein"
              color={theme.palette.common.white}
              light
            ></TextTeaserCard>
          </Grid>
        </Grid>
        <Dialog
          open={openSubBanner}
          onClose={handleCloseSub}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Ein neues Angabenset können Sie nur mit gültigem Abonnement erstellen.</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSub}>schließen</Button>
            <Button component={Link} to="/office/billing" autoFocus>
              Abonnement verwalten
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };

  return formCardsDom();
};

export default SelectFormView;
