import React from 'react';

// material-ui
import { Grid, TextField } from '@mui/material';

// formik
import { Field, useFormikContext } from 'formik';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';

const Zusammenfassung = () => {
  const { values, handleChange, handleBlur, touched, errors } = useFormikContext();

  if (!values.mitarbeiter_anwesenheitsEntgeltGesamt) {
    return;
  }

  return (
    <ReadOnlyBox alwaysOpen white>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id={`mitarbeiter_anwesenheitsEntgeltGesamt`}
            name={`mitarbeiter_anwesenheitsEntgeltGesamt`}
            label="Anwesenheitsentgelt (gesamt, in EUR)"
            value={values.mitarbeiter_anwesenheitsEntgeltGesamt}
            onChange={handleChange}
            onBlur={handleBlur}
            InputProps={{
              readOnly: true
            }}
            error={touched.mitarbeiter_anwesenheitsEntgeltGesamt && Boolean(errors.mitarbeiter_anwesenheitsEntgeltGesamt)}
            helperText={touched.mitarbeiter_anwesenheitsEntgeltGesamt && errors.mitarbeiter_anwesenheitsEntgeltGesamt}
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>
    </ReadOnlyBox>
  );
};

export default Zusammenfassung;
