import React, { useCallback, useContext } from 'react';
import { useFormikContext } from 'formik';
import { useSnackbar } from 'notistack';
import { StatusCodes } from 'http-status-codes';
import { Button, Stack, CircularProgress } from '@mui/material';
import { Save } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { UserContext } from 'context/user';

import validateFields from 'utils/formUtils/validateFields';
import validationRules from 'formConfigs/annahmen/rules/validation/index';
import conditionalRules from 'formConfigs/annahmen/rules/conditional/index';

const ButtonBar = () => {
  const { values = {}, setErrors } = useFormikContext();
  const { saveForm, requestStatusCodes } = useContext(UserContext);
  const isSaving = requestStatusCodes.saveForm === StatusCodes.PROCESSING;
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();

  const saveAction = useCallback(async () => {
    const { errors } = validateFields(values, conditionalRules, validationRules);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      await saveForm(values);
      enqueueSnackbar('Formular erfolgreich gespeichert.', { variant: 'success' });
    }
  }, [values, saveForm, setErrors, enqueueSnackbar]);

  const barWidth = {
    xs: `calc(100% + ${theme.spacing(2)})`,
    sm: `calc(100% + ${theme.spacing(4)})`,
    md: `calc(100% + ${theme.spacing(6)})`
  };
  const barMarginReset = { xs: theme.spacing(-1), sm: theme.spacing(-2), md: theme.spacing(-3) };

  return (
    <Stack
      direction="row"
      justifyContent="end"
      sx={{
        position: 'sticky',
        mt: { xs: 4, md: 6, lg: 8 },
        ml: barMarginReset,
        borderTopRightRadius: theme.shape.borderRadius * 4,
        borderTopLeftRadius: theme.shape.borderRadius * 4,
        bottom: '0',
        right: '0',
        paddingX: { xs: theme.spacing(1.5), sm: theme.spacing(3) },
        paddingY: { xs: theme.spacing(1.5), sm: theme.spacing(2) },
        backgroundColor: theme.palette.primary.main,
        width: barWidth,
        zIndex: '1000',
        boxShadow: theme.customShadows.z2
      }}
    >
      <Button startIcon={isSaving ? <CircularProgress size="1rem" /> : <Save />} variant="contained" color="white" onClick={saveAction}>
        {isSaving ? 'lädt' : 'speichern'}
      </Button>
    </Stack>
  );
};

export default ButtonBar;
