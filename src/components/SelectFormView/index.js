import React, { useState } from 'react';

// material-ui
import { Grid, Button, ButtonGroup, CardActions, CardContent, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MainCard from 'components/MainCard';

// icons
import { Edit, Delete, AddToPhotos } from '@mui/icons-material';

// redux
import { createForm, activeStep } from 'store/reducers/form';
import { useDispatch, useSelector } from 'react-redux';

const SelectFormView = () => {
  const { forms } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const goToForm = (formId) => dispatch(activeStep(formId));
  const theme = useTheme();
  const [addNewTitle, setAddNewTitle] = useState('');
  const addForm = () => dispatch(createForm({ userTitle: addNewTitle }));

  const formCardsDom = () => {
    const formIds = Object.keys(forms);
    const formCards =
      formIds.map((formId) => {
        const formData = forms[formId];
        console.log('formData', formData);

        return (
          <Grid key={formId} item xs={4}>
            <MainCard
              sx={{
                backgroundColor: theme.palette.grey[700],
                color: theme.palette.secondary.A100,
                height: '100%'
              }}
              content={false}
            >
              <CardContent>
                <Typography variant="h3" paragraph>
                  {formData.userTitle || 'Formular: ' + formId}
                </Typography>
                <ButtonGroup>
                  <Button color="light" startIcon={<Edit />} variant="contained" onClick={() => goToForm(formId)}>
                    Bearbeiten
                  </Button>
                  <Button sx={{ height: '100%' }} color="light" variant="contained" onClick={() => goToForm(formId)}>
                    <Delete />
                  </Button>
                </ButtonGroup>
              </CardContent>
            </MainCard>
          </Grid>
        );
      }) || [];

    return (
      <>
        <Grid container spacing={2} sx={{ marginBottom: theme.spacing(2) }}>
          {formCards}
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <MainCard key={'newForm'} sx={{ height: '100%' }} content={false}>
              <CardContent>
                <Typography variant="h3" paragraph>
                  Neues Formular
                </Typography>
                <Typography paragraph>Erstellen Sie ein neues Formular</Typography>
                <Grid container spacing={1}>
                  <Grid item xs>
                    <TextField sx={{ width: '100%' }} placeholder="Name des Formulars" onChange={(e) => setAddNewTitle(e.target.value)} />
                  </Grid>
                  <Grid item xs="auto">
                    <Button
                      disabled={!addNewTitle}
                      startIcon={<AddToPhotos />}
                      sx={{ height: '100%' }}
                      variant="contained"
                      onClick={() => addForm(addNewTitle)}
                    >
                      erstellen
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </MainCard>
          </Grid>
        </Grid>
      </>
    );
  };

  return <div>{formCardsDom()}</div>;
};

export default SelectFormView;
