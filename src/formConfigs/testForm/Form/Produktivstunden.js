import React from 'react';

// material-ui
import { Typography, Grid, TextField, useTheme, Divider } from '@mui/material';

// formik
import { Field, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';

const Produktivstunden = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();
  const theme = useTheme();

  return (
    <FormSection title="Produktivstunden / Anwesenheitszeit">
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
        <Grid item xs={12}>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="wochenarbeitszeit"
            name="wochenarbeitszeit"
            label="Wochenarbeitszeit"
            value={values.wochenarbeitszeit}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            min="0"
            max="120"
            step={0.25}
            error={touched.wochenarbeitszeit && Boolean(errors.wochenarbeitszeit)}
            helperText={touched.wochenarbeitszeit && errors.wochenarbeitszeit}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="wochenarbeitstage"
            name="wochenarbeitstage"
            label="Wochenarbeitstage"
            value={values.wochenarbeitstage}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.wochenarbeitstage && Boolean(errors.wochenarbeitstage)}
            helperText={touched.wochenarbeitstage && errors.wochenarbeitstage}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <ReadOnlyBox>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  InputProps={{
                    readOnly: true
                  }}
                  id="durchschnittArbeitsstundenProTag"
                  name="durchschnittArbeitsstundenProTag"
                  label="Ø Arbeitsstunden pro Tag"
                  value={values.durchschnittArbeitsstundenProTag}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
          </ReadOnlyBox>
        </Grid>
        <Grid item xs={12} sm={6}>&nbsp;</Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Ermittlung der Anwesenheitszeit</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="tageProJahr"
            name="tageProJahr"
            label="Tage pro Jahr"
            value={values.tageProJahr}
            type="number"
            min="0"
            max="365"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.tageProJahr && Boolean(errors.tageProJahr)}
            helperText={touched.tageProJahr && errors.tageProJahr}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="wochenendtageProJahr"
            name="wochenendtageProJahr"
            label="Davon Wochenendtage"
            value={values.wochenendtageProJahr}
            type="number"
            min="0"
            max="365"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.wochenendtageProJahr && Boolean(errors.wochenendtageProJahr)}
            helperText={touched.wochenendtageProJahr && errors.wochenendtageProJahr}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <ReadOnlyBox title={"Jahresarbeitszeit gesamt"}>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  InputProps={{
                    readOnly: true
                  }}
                  id="jahresarbeitszzeitInTagen"
                  name="jahresarbeitszzeitInTagen"
                  label="Jahresarbeitszeit in Tagen"
                  value={values.jahresarbeitszzeitInTagen}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  InputProps={{
                    readOnly: true
                  }}
                  id="jahresArbeitszeitInStunden"
                  name="jahresArbeitszeitInStunden"
                  label="Jahresarbeitszeit in Stunden"
                  value={values.jahresArbeitszeitInStunden}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
          </ReadOnlyBox>
        </Grid>
      </Grid>
    </FormSection>
  );
};

export default Produktivstunden;
