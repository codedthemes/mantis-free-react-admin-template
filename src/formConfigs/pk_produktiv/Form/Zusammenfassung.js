import React from 'react';

// material-ui
import { Grid, TextField, Typography } from '@mui/material';

// formik
import { Field, useFormikContext } from 'formik';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';

const Zusammenfassung = () => {
  const { values, handleChange, handleBlur, touched, errors } = useFormikContext();

  if (!values.pk_produktiv_anwesenheitsEntgeltGesamt) {
    return;
  }

  return (
    <>
      <Typography variant="h2" sx={{ mb: { sm: 2, md: 3 }, mt: { sm: 4, md: 6, lg: 8 } }}>
        Zusammenfassend
      </Typography>
      <ReadOnlyBox alwaysOpen white>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id={`pk_produktiv_anwesenheitsEntgeltGesamt`}
              name={`pk_produktiv_anwesenheitsEntgeltGesamt`}
              label="Anwesenheitsentgelt (gesamt, in EUR)"
              value={values.pk_produktiv_anwesenheitsEntgeltGesamt}
              onChange={handleChange}
              onBlur={handleBlur}
              InputProps={{
                readOnly: true
              }}
              error={touched.pk_produktiv_anwesenheitsEntgeltGesamt && Boolean(errors.pk_produktiv_anwesenheitsEntgeltGesamt)}
              helperText={touched.pk_produktiv_anwesenheitsEntgeltGesamt && errors.pk_produktiv_anwesenheitsEntgeltGesamt}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
      </ReadOnlyBox>
    </>
  );
};

export default Zusammenfassung;
