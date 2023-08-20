import React, { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { StatusCodes } from 'http-status-codes';

// material-ui
import { Grid, Button, CardContent, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MainCard from 'components/MainCard';

// icons
import { Edit, Delete, AddToPhotos } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';

// redux
import { UserContext } from 'context/user/user';

const SelectFormView = () => {
  const { createForm, deleteForm, formsData, requestStatusCodes } = useContext(UserContext);
  const theme = useTheme();
  const [addNewTitle, setAddNewTitle] = useState('');
  const addForm = () => {
    setAddNewTitle('');
    createForm({ title: addNewTitle });
  };
  const removeForm = (formId) => deleteForm(formId);
  const creationLoading = requestStatusCodes.loadingForm === StatusCodes.PROCESSING;

  const formCardsDom = () => {
    const formIds = Object.keys(formsData);
    const formCards =
      formIds.map((formId) => {
        const formData = formsData[formId];

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
                  {formData.title || 'Formular: ' + formData.id}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item>
                    <Button component={RouterLink} variant="contained" startIcon={<Edit />} to={`/form/${formId}`}>
                      Bearbeiten
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button color="secondary" variant="contained" onClick={() => removeForm(formId)}>
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
                      startIcon={creationLoading ? <CircularProgress size="1rem" /> : <AddToPhotos />}
                      sx={{ height: '100%' }}
                      variant="contained"
                      onClick={() => addForm(addNewTitle)}
                    >
                      {creationLoading ? 'lädt' : 'erstellen'}
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
