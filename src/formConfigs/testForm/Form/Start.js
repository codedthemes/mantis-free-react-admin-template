import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Grid, TextField, Divider, Button, Stack } from '@mui/material';
import dayjs from 'dayjs';

// formik
import { Field, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import { UserContext } from 'context/user/index';
import FormReadonlyValue from 'components/formComponents/FormReadonlyValue/index';

const Annahmen = () => {
  const { values, handleChange, handleBlur, touched } = useFormikContext();
  const { activeFormId, deleteForm } = useContext(UserContext);
  const navigate = useNavigate();

  const removeForm = async () => {
    await deleteForm(activeFormId);
    navigate('/office/form/overview');
  };

  return (
    <>
      <FormSection collapsable={false}>
        <Stack justifyContent="space-between" alignItems="center" direction="row" sx={{ width: '100%' }}>
          {/* <DateTimePicker readOnly label="Letzte Änderung" value={dayjs(values.letzteAenderung)} /> */}
          <FormReadonlyValue label="Letzte Änderung" value={dayjs(values.letzteAenderung).format('DD.MM.YYYY')} />
          <Button color="primary" variant="contained" onClick={removeForm}>
            Formular Löschen
          </Button>
        </Stack>
        <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
          <Grid item xs={12}>
            <Divider sx={{ mt: 2, mb: 4 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id="formTitle"
              name="formTitle"
              label="Formulartitel"
              value={values.formTitle}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.formTitle && Boolean(errors.formTitle)}
              helperText={touched.formTitle && errors.formTitle}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
      </FormSection>
    </>
  );
};

export default Annahmen;
