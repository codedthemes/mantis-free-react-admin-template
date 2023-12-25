import React from 'react';

// material-ui
import { Grid, TextField, Divider } from '@mui/material';

// formik
import { FastField } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';

const Stammdaten = () => {
  return (
    <FormSection
      title="Allgemeine Angaben"
      description="In diesem Abschnitt werden allgemeine Angaben für die PK-allgemein eingetragen."
      defaultOpen={true}
    >
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
        <Grid item xs={12}>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Grid>
      </Grid>
      <Grid container alignItems="flex-end" columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
        <Grid item xs={12} sm={6}>
          <FastField name="pk_allgemein_K5">
            {({ field, meta }) => (
              <TextField
                {...field}
                label="Lohnnebenkosten (bis Beitragsbemessungsgrenze, in %)"
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
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={6}>
          <FastField name="pk_allgemein_K6">
            {({ field, meta }) => (
              <TextField
                {...field}
                label="Beitragsbemessungsgrenze (in EUR, p.m.)"
                error={meta?.touched && Boolean(meta.error)}
                helperText={meta?.touched && meta.error}
                sx={{ mb: 2 }}
                type="number"
                onWheel={(event) => event.target.blur()}
                min="0"
              />
            )}
          </FastField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FastField name="pk_allgemein_K7">
            {({ field, meta }) => (
              <TextField
                {...field}
                label="Lohnnebenkosten (oberhalb Beitragsbemessungsgrenze, in %)"
                error={meta?.touched && Boolean(meta.error)}
                helperText={meta?.touched && meta.error}
                sx={{ mb: 2 }}
                type="number"
                onWheel={(event) => event.target.blur()}
                min="0"
                max="100"
              />
            )}
          </FastField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FastField name="pk_allgemein_K78">
            {({ field, meta }) => (
              <TextField
                {...field}
                label="Anzahl der Gehälter p.a."
                error={meta?.touched && Boolean(meta.error)}
                helperText={meta?.touched && meta.error}
                sx={{ mb: 2 }}
                type="number"
                onWheel={(event) => event.target.blur()}
                min="0"
              />
            )}
          </FastField>
        </Grid>
      </Grid>
    </FormSection>
  );
};

export default Stammdaten;
