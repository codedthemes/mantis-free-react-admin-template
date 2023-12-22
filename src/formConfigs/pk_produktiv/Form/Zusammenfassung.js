import React from 'react';

// material-ui
import { Grid, TextField, Typography } from '@mui/material';

// formik
import { Field, useFormikContext } from 'formik';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import formFloat from 'utils/formUtils/formFloat';

const Zusammenfassung = () => {
  const { values, handleChange, handleBlur } = useFormikContext();

  if (!values.pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt) {
    return;
  }

  return (
    <>
      <Typography variant="h2" sx={{ mb: { sm: 2, md: 3 }, mt: { sm: 4, md: 6, lg: 8 } }}>
        Zusammenfassung
      </Typography>
      <ReadOnlyBox alwaysOpen white title="Anwesenheitsentgelt">
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} sm={4}>
            <Field
              component={TextField}
              id={`pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt`}
              name={`pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt`}
              label="Verrechnet (in EUR)"
              value={formFloat(values.pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt, 1)}
              InputProps={{
                readOnly: true
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field
              component={TextField}
              id={`pk_produktiv_anwesenheitsEntgelteNichtVerrechnetGesamt`}
              name={`pk_produktiv_anwesenheitsEntgelteNichtVerrechnetGesamt`}
              label="Nicht Verrechnet (in EUR)"
              value={formFloat(values.pk_produktiv_anwesenheitsEntgelteNichtVerrechnetGesamt, 1)}
              InputProps={{
                readOnly: true
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field
              component={TextField}
              id={`pk_produktiv_anwesenheitsEntgeltGesamt`}
              name={`pk_produktiv_anwesenheitsEntgeltGesamt`}
              label="Gesamt (in EUR)"
              value={formFloat(values.pk_produktiv_anwesenheitsEntgeltGesamt, 1)}
              InputProps={{
                readOnly: true
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id={`pk_produktiv_bruttoStundenEntgeltDurchschnitt`}
              name={`pk_produktiv_bruttoStundenEntgeltDurchschnitt`}
              label="Durchschnittliches Bruttostundenentgelt (in EUR)"
              value={formFloat(values.pk_produktiv_bruttoStundenEntgeltDurchschnitt, 1)}
              InputProps={{
                readOnly: true
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ mb: -2, mt: 2 }}>
              Berechnet: Lohn-NK (auf Basis der Anwesenheitsstunden)
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field
              component={TextField}
              id={`pk_produktiv_lohnNKAnwesenheitVerrechnet`}
              name={`pk_produktiv_lohnNKAnwesenheitVerrechnet`}
              label="Verrechnet (in EUR)"
              value={formFloat(values.pk_produktiv_lohnNKAnwesenheitVerrechnet, 1)}
              onChange={handleChange}
              onBlur={handleBlur}
              InputProps={{
                readOnly: true
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field
              component={TextField}
              id={`pk_produktiv_lohnNKAnwesenheitNichtVerrechnet`}
              name={`pk_produktiv_lohnNKAnwesenheitNichtVerrechnet`}
              label="Nicht verrechnet (in EUR)"
              value={formFloat(values.pk_produktiv_lohnNKAnwesenheitNichtVerrechnet, 1)}
              onChange={handleChange}
              onBlur={handleBlur}
              InputProps={{
                readOnly: true
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field
              component={TextField}
              id={`pk_produktiv_lohnNKEntgeltGesamt`}
              name={`pk_produktiv_lohnNKEntgeltGesamt`}
              label="Gesamt"
              value={formFloat(values.pk_produktiv_lohnNKEntgeltGesamt, 1)}
              onChange={handleChange}
              onBlur={handleBlur}
              InputProps={{
                readOnly: true
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id={`pk_produktiv_lohnNKAnwesenheitStundenEntgeltDurchschnitt`}
              name={`pk_produktiv_lohnNKAnwesenheitStundenEntgeltDurchschnitt`}
              label="Durchschnittliches Bruttostundenentgelt (in EUR)"
              value={formFloat(values.pk_produktiv_lohnNKAnwesenheitStundenEntgeltDurchschnitt, 1)}
              onChange={handleChange}
              onBlur={handleBlur}
              InputProps={{
                readOnly: true
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ mb: -2, mt: 2 }}>
              Berechnet: Anwesenheitsentgelt inkl. Personalnebenkosten
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id={`pk_produktiv_awInklPersonalNKDirektVerrechenbar`}
              name={`pk_produktiv_awInklPersonalNKDirektVerrechenbar`}
              label="Verrechnet (in EUR)"
              value={formFloat(values.pk_produktiv_awInklPersonalNKDirektVerrechenbar, 1)}
              onChange={handleChange}
              onBlur={handleBlur}
              InputProps={{
                readOnly: true
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          
        </Grid>
      </ReadOnlyBox>
    </>
  );
};

export default Zusammenfassung;
