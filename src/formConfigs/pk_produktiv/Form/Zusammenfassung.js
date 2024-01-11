import React from 'react';

// material-ui
import { Grid, TextField, Typography } from '@mui/material';

// formik
import { Field, useFormikContext } from 'formik';
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
      <ReadOnlyBox alwaysOpen white title="Anwesenheitsentgelt">
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="flex-end">
          <Grid item xs={12} sm={4}>
            <Field
              component={TextField}
              id={`pk_produktiv_P40`}
              name={`pk_produktiv_P40`}
              label="Direkt verrechenbar (in EUR)"
              value={formFloat(values.pk_produktiv_P40, 2)}
              InputProps={{
                readOnly: true
              }}
              type="number"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field
              component={TextField}
              id={`pk_produktiv_Q40`}
              name={`pk_produktiv_Q40`}
              label="Nicht direkt verrechenbar (in EUR)"
              value={formFloat(values.pk_produktiv_Q40, 2)}
              InputProps={{
                readOnly: true
              }}
              type="number"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field
              component={TextField}
              id={`pk_produktiv_S40`}
              name={`pk_produktiv_S40`}
              label="Gesamtkosten (p.a., in EUR)"
              value={formFloat(values.pk_produktiv_S40, 2)}
              InputProps={{
                readOnly: true
              }}
              type="number"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id={`pk_produktiv_R40`}
              name={`pk_produktiv_R40`}
              label="Ø Kosten je Std. (inkl. Zulagen/ Zuschläge, in EUR)"
              value={formFloat(values.pk_produktiv_R40, 2)}
              InputProps={{
                readOnly: true
              }}
              type="number"
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
              id={`pk_produktiv_P41`}
              name={`pk_produktiv_P41`}
              label="Direkt verrechenbar (in EUR)"
              value={formFloat(values.pk_produktiv_P41, 2)}
              InputProps={{
                readOnly: true
              }}
              type="number"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field
              component={TextField}
              id={`pk_produktiv_Q41`}
              name={`pk_produktiv_Q41`}
              label="Nicht direkt verrechenbar (in EUR)"
              value={formFloat(values.pk_produktiv_Q41, 2)}
              InputProps={{
                readOnly: true
              }}
              type="number"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field
              component={TextField}
              id={`pk_produktiv_S41`}
              name={`pk_produktiv_S41`}
              label="Gesamtkosten (p.a., in EUR)"
              value={formFloat(values.pk_produktiv_S41, 2)}
              InputProps={{
                readOnly: true
              }}
              type="number"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id={`pk_produktiv_R41`}
              name={`pk_produktiv_R41`}
              label="Ø Kosten je Std. (inkl. Zulagen/ Zuschläge, in EUR)"
              value={formFloat(values.pk_produktiv_R41, 2)}
              InputProps={{
                readOnly: true
              }}
              type="number"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ mb: -2, mt: 2 }}>
              Berechnet: Anwesenheitsentgelt inkl. Personalnebenkosten
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field
              component={TextField}
              id={`pk_produktiv_P42`}
              name={`pk_produktiv_P42`}
              label="Direkt verrechenbar (in EUR)"
              value={formFloat(values.pk_produktiv_P42, 2)}
              InputProps={{
                readOnly: true
              }}
              type="number"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field
              component={TextField}
              id={`pk_produktiv_Q42`}
              name={`pk_produktiv_Q42`}
              label="Nicht direkt verrechenbar (in EUR)"
              value={formFloat(values.pk_produktiv_Q42, 2)}
              InputProps={{
                readOnly: true
              }}
              type="number"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field
              component={TextField}
              id={`pk_produktiv_S42`}
              name={`pk_produktiv_S42`}
              label="Gesamtkosten (p.a., in EUR)"
              value={formFloat(values.pk_produktiv_S42, 2)}
              InputProps={{
                readOnly: true
              }}
              type="number"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id={`pk_produktiv_R42`}
              name={`pk_produktiv_R42`}
              label="Ø Kosten je Std. (inkl. Zulagen/ Zuschläge, in EUR)"
              value={formFloat(values.pk_produktiv_R42, 2)}
              InputProps={{
                readOnly: true
              }}
              type="number"
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
      </ReadOnlyBox>
    </>
  );
};

export default Zusammenfassung;
