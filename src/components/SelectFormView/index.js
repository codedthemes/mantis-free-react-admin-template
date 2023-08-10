import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Grid, Button, CardContent, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MainCard from 'components/MainCard';

// icons
import { Edit, Delete, AddToPhotos } from '@mui/icons-material';

// redux
import { createForm, activeStep, removeForm } from 'store/reducers/form';
import { useDispatch, useSelector } from 'react-redux';

const SelectFormView = () => {
  const { forms } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const theme = useTheme();
  const [addNewTitle, setAddNewTitle] = useState('');
  const addForm = () => {
    setAddNewTitle('');
    dispatch(createForm({ userTitle: addNewTitle }));
  };
  const deleteForm = (formId) => dispatch(removeForm(formId));

  const formCardsDom = () => {
    const formIds = Object.keys(forms);
    const formCards =
      formIds.map((formId) => {
        const formData = forms[formId];

        return (
          <Grid key={formId} item xs={12} sm={6} md={4}>
            <MainCard
              sx={{
                height: '100%'
              }}
              content={false}
            >
              <CardContent>
                <Typography variant="h3" paragraph>
                  {formData.userTitle || 'Formular: ' + formId}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item>
                    <Button component={RouterLink} variant="contained" startIcon={<Edit />} to={`/form/${formId}`}>
                      Bearbeiten
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button color="secondary" variant="contained" onClick={() => deleteForm(formId)}>
                      <Delete />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </MainCard>
          </Grid>
        );
      }) || [];

    return (
      <>
        <Grid container spacing={2} sx={{ marginBottom: theme.spacing(2) }}>
          {formCards}
          <Grid item xs={12} sm={6} md={8}>
            <MainCard key={'newForm'} sx={{ height: '100%' }} content={false}>
              <CardContent>
                <Typography variant="h3" paragraph>
                  Neues Formular
                </Typography>
                <Typography paragraph>Erstellen Sie ein neues Formular</Typography>
                <Grid container spacing={1}>
                  <Grid item xs>
                    <TextField
                      value={addNewTitle}
                      sx={{ width: '100%' }}
                      placeholder="Name des Formulars"
                      onChange={(e) => setAddNewTitle(e.target.value)}
                    />
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
