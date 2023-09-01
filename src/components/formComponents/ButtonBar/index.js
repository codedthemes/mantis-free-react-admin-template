import React, { useCallback, useContext } from 'react';
import { useFormikContext } from 'formik';
import { useSnackbar } from 'notistack';
import { StatusCodes } from 'http-status-codes';
import { Grid, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Save } from '@mui/icons-material';
import { UserContext } from 'context/user/user';

import validateFields from 'utils/formUtils/validateFields';
import validationRules from 'formConfigs/testForm/rules/validation/index';
import conditionalRules from 'formConfigs/testForm/rules/conditional/index';

const ButtonBar = () => {
  const { values = {}, setErrors } = useFormikContext();
  const { saveForm, requestStatusCodes } = useContext(UserContext);
  const isSaving = requestStatusCodes.saveForm === StatusCodes.PROCESSING;
  const { enqueueSnackbar } = useSnackbar();

  const saveAction = useCallback(async () => {
    const { errors } = validateFields(values, conditionalRules, validationRules);
    setErrors(errors);
    console.log('errors', errors);

    if (Object.keys(errors).length === 0) {
      await saveForm(values);
      enqueueSnackbar('Formular erfolgreich gespeichert.', { variant: 'success' });
    }
  }, [values, saveForm, setErrors, enqueueSnackbar]);
  return (
    <Grid container>
      <Grid item>
        <Button startIcon={isSaving ? <CircularProgress size="1rem" /> : <Save />} variant="contained" onClick={saveAction}>
          {isSaving ? 'lädt' : 'speichern'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonBar;
