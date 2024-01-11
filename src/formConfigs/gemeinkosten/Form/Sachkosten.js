import React from 'react';

// material-ui
import { Grid, TextField, Divider, Typography } from '@mui/material';

// formik
import { FastField } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import formFloat from 'utils/formUtils/formFloat';

export const sachkosten_fieldTitles = [
  'Reisekosten',
  'Werbe- und Präsentationskosten',
  'Kosten Betriebs- und Geschäftsfahrzeuge',
  'Materialien',
  'Miete/ Grundstückskosten',
  'Energie- und Wasserkosten',
  'Raumkosten',
  'Transport und Verpackung',
  'Telefon/Fax',
  'Bürobedarf',
  'Kosten EDV',
  'Rechts- und Beratungskosten',
  'Kosten Betiebs- und Geschäftsausstattung',
  'Versicherungen, Beiträge, Gebühren',
  'Sonstige Sachkosten',
  'Sonstige Aufwendungen',
  'Forderungsverluste',
  'Sonstiges'
];
export const sachkosten_startingRow = 21;

const Sachkosten = () => {
  return (
    <FormSection title="Sachkosten" description="In diesem Abschnitt werden Angaben zu Sachkosten eingetragen.">
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
        <Grid item xs={12}>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Grid>
      </Grid>
      <Grid container alignItems="flex-end" columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
        {sachkosten_fieldTitles.map((title, index) => {
          return (
            <>
              <Grid item xs={12}>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FastField name={`gemeinkosten_sachkosten_F${sachkosten_startingRow + index}`}>
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      label="PLAN (in EUR)"
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
                <FastField name={`gemeinkosten_sachkosten_G${sachkosten_startingRow + index}`}>
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      label="Davon variabel (in %)"
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
              <Grid item xs={12}>
                <ReadOnlyBox>
                  <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
                    <Grid item xs={12} sm={6}>
                      <FastField name={`gemeinkosten_sachkosten_H${sachkosten_startingRow + index}`}>
                        {({ field, meta }) => (
                          <TextField
                            {...field}
                            value={formFloat(field.value, 2)}
                            label="Variable Kosten (in EUR)"
                            error={meta?.touched && Boolean(meta.error)}
                            helperText={meta?.touched && meta.error}
                            sx={{ mb: 2 }}
                            InputProps={{
                              readOnly: true
                            }}
                            type="number"
                          />
                        )}
                      </FastField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FastField name={`gemeinkosten_sachkosten_I${sachkosten_startingRow + index}`}>
                        {({ field, meta }) => (
                          <TextField
                            {...field}
                            value={formFloat(field.value, 2)}
                            label="Fixe Kosten (in EUR)"
                            error={meta?.touched && Boolean(meta.error)}
                            helperText={meta?.touched && meta.error}
                            sx={{ mb: 2 }}
                            InputProps={{
                              readOnly: true
                            }}
                            type="number"
                          />
                        )}
                      </FastField>
                    </Grid>
                  </Grid>
                </ReadOnlyBox>
              </Grid>
              <Grid item xs={12} sm={6}>
                &nbsp;
              </Grid>
            </>
          );
        })}
        <Grid item xs={12}>
          <ReadOnlyBox alwaysOpen title={'Materialgemeinkosten Gesamt'} headlineVariant="h3">
            <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }} alignItems="flex-end">
              <Grid item xs={12} sm={6}>
                <FastField name="gemeinkosten_F39">
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      value={formFloat(field.value, 2)}
                      label="Gesamt: PLAN-Kosten (berechnet, in EUR)"
                      error={meta?.touched && Boolean(meta.error)}
                      helperText={meta?.touched && meta.error}
                      sx={{ mb: 2 }}
                      InputProps={{
                        readOnly: true
                      }}
                      type="number"
                    />
                  )}
                </FastField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FastField name="gemeinkosten_H39">
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      value={formFloat(field.value, 2)}
                      label="Gesamt: variabele Kosten (in EUR)"
                      error={meta?.touched && Boolean(meta.error)}
                      helperText={meta?.touched && meta.error}
                      sx={{ mb: 2 }}
                      InputProps={{
                        readOnly: true
                      }}
                      type="number"
                    />
                  )}
                </FastField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FastField name="gemeinkosten_I39">
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      value={formFloat(field.value, 2)}
                      label="Gesamt: fixe Kosten (in EUR)"
                      error={meta?.touched && Boolean(meta.error)}
                      helperText={meta?.touched && meta.error}
                      sx={{ mb: 2 }}
                      InputProps={{
                        readOnly: true
                      }}
                      type="number"
                    />
                  )}
                </FastField>
              </Grid>
            </Grid>
          </ReadOnlyBox>
        </Grid>
      </Grid>
    </FormSection>
  );
};

export default Sachkosten;
