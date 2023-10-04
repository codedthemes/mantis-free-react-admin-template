import React, { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { StatusCodes } from 'http-status-codes';

// material-ui
import { Grid, Button, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LayoutBox from 'components/LayoutBox';

// icons
import { Edit, Delete, AddToPhotos } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';

// redux
import { UserContext } from 'context/user';

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
    const cardPadding = { sm: theme.spacing(2), md: theme.spacing(3), lg: theme.spacing(4), xl: theme.spacing(5) };
    const formCards =
      formIds.map((formId) => {
        const formData = formsData[formId];

        return (
          <Grid key={formId} item xs={12} sm={6} md={4}>
            <LayoutBox
              sx={{
                height: '100%',
                backgroundColor: theme.palette.common.white,
                padding: cardPadding
              }}
              content={false}
            >
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
                  <Button color="secondary" variant="contained" onClick={() => removeForm(formId)} sx={{ height: '100%' }}>
                    <Delete style={{ color: theme.palette.common.white }} />
                  </Button>
                </Grid>
              </Grid>
            </LayoutBox>
          </Grid>
        );
      }) || [];

    return (
      <>
        <Grid container spacing={3} sx={{ marginBottom: theme.spacing(3) }}>
          {formCards}
          <Grid item xs={12} sm={6} md={8}>
            <LayoutBox
              key={'newForm'}
              sx={{ height: '100%', backgroundColor: theme.palette.common.white, padding: cardPadding }}
              content={false}
            >
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
            </LayoutBox>
          </Grid>
        </Grid>
      </>
    );
  };

  return <div>{formCardsDom()}</div>;
};

export default SelectFormView;
