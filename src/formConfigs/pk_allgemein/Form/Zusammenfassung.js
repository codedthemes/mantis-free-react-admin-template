import React from 'react';

// material-ui
import { Grid, TextField, Typography } from '@mui/material';

// formik
import { FastField, useFormikContext } from 'formik';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import formFloat from 'utils/formUtils/formFloat';

const Zusammenfassung = () => {
  const { values } = useFormikContext();

  if (!values.pk_produktiv_P40) {
    return;
  }

  return (
    <>
      <Typography variant="h2" sx={{ mb: { sm: 2, md: 3 }, mt: { sm: 4, md: 6, lg: 8 } }}>
        Zusammenfassung
      </Typography>
      <ReadOnlyBox alwaysOpen white>
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="flex-end">
          <Grid item xs={12} sm={6}>
            <FastField name="pk_allgemein_N53">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Gesamtsumme aller Mitarbeiter"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                />
              )}
            </FastField>
          </Grid>
        </Grid>
      </ReadOnlyBox>
    </>
  );
};

export default Zusammenfassung;
