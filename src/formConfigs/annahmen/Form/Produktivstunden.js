import React from 'react';

// material-ui
import { Typography, Grid, TextField, Divider } from '@mui/material';

// formik
import { Field, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import formFloat from 'utils/formUtils/formFloat';

const Produktivstunden = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();

  return (
    <FormSection title="Produktivstunden / Anwesenheitszeit" description="Geben Sie hier Angaben zu Ihrem Mitarber an.">
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
        <Grid item xs={12}>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_G16"
            name="annahmen_G16"
            label="Wochenarbeitszeit"
            value={values.annahmen_G16}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            onWheel={(event) => event.target.blur()}
            min="0"
            max="120"
            step={0.25}
            error={touched.annahmen_G16 && Boolean(errors.annahmen_G16)}
            helperText={touched.annahmen_G16 && errors.annahmen_G16}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_G17"
            name="annahmen_G17"
            label="Wochenarbeitstage"
            type="number"
            onWheel={(event) => event.target.blur()}
            min="0"
            max="7"
            value={values.annahmen_G17}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.annahmen_G17 && Boolean(errors.annahmen_G17)}
            helperText={touched.annahmen_G17 && errors.annahmen_G17}
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
                  id="annahmen_G18"
                  name="annahmen_G18"
                  label="Ø Arbeitsstunden pro Tag"
                  value={formFloat(values.annahmen_G18, 1)}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
          </ReadOnlyBox>
        </Grid>
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Ermittlung der Anwesenheitszeit</Typography>
        </Grid>
        <Grid item xs={12}>
          <ReadOnlyBox title={'Jahresarbeitszeit gesamt'} alwaysOpen>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  id="annahmen_G22"
                  name="annahmen_G22"
                  label={`Wochenendtage im Jahr ${values.annahmen_allgemein_planjahr || ''}`}
                  value={values.annahmen_G22}
                  InputProps={{
                    readOnly: true
                  }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                &nbsp;
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  InputProps={{
                    readOnly: true
                  }}
                  id="annahmen_G23"
                  name="annahmen_G23"
                  label="Jahresarbeitszeit in Tagen"
                  value={formFloat(values.annahmen_G23, 1)}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  InputProps={{
                    readOnly: true
                  }}
                  id="annahmen_H23"
                  name="annahmen_H23"
                  label="Jahresarbeitszeit in Stunden"
                  value={formFloat(values.annahmen_H23, 1)}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
          </ReadOnlyBox>
        </Grid>
        <Grid item xs={12} sm={12}>
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_G25"
            name="annahmen_G25"
            label="Feiertage die auf Arbeitstage fallen"
            value={values.annahmen_G25}
            type="number"
            onWheel={(event) => event.target.blur()}
            min="0"
            max="365"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.annahmen_G25 && Boolean(errors.annahmen_G25)}
            helperText={touched.annahmen_G25 && errors.annahmen_G25}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_G26"
            name="annahmen_G26"
            label="Urlaubstage pro Mitarbeiter"
            value={values.annahmen_G26}
            type="number"
            onWheel={(event) => event.target.blur()}
            min="0"
            max="365"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.annahmen_G26 && Boolean(errors.annahmen_G26)}
            helperText={touched.annahmen_G26 && errors.annahmen_G26}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_G27"
            name="annahmen_G27"
            label="Krankentage pro Mitarbeiter"
            value={values.annahmen_G27}
            type="number"
            onWheel={(event) => event.target.blur()}
            min="0"
            max="365"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.annahmen_G27 && Boolean(errors.annahmen_G27)}
            helperText={touched.annahmen_G27 && errors.annahmen_G27}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_G28"
            name="annahmen_G28"
            label="Sonstige Arbeitsverhinderungen"
            value={values.annahmen_G28}
            type="number"
            onWheel={(event) => event.target.blur()}
            min="0"
            max="365"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.annahmen_G28 && Boolean(errors.annahmen_G28)}
            helperText={touched.annahmen_G28 && errors.annahmen_G28}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <ReadOnlyBox title={'Summe Nichtanwesenheit'} alwaysOpen>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  InputProps={{
                    readOnly: true
                  }}
                  id="annahmen_G29"
                  name="annahmen_G29"
                  label="Summe Nichtanwesenheit in Tagen"
                  value={formFloat(values.annahmen_G29, 1)}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  InputProps={{
                    readOnly: true
                  }}
                  id="annahmen_H29"
                  name="annahmen_H29"
                  label="Summe Nichtanwesenheit in Stunden"
                  value={formFloat(values.annahmen_H29, 1)}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
          </ReadOnlyBox>
        </Grid>
        <Grid item xs={12}>
          <ReadOnlyBox title={'Summe Anwesenheitszeit'} alwaysOpen>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  InputProps={{
                    readOnly: true
                  }}
                  id="annahmen_G31"
                  name="annahmen_G31"
                  label="Summe Anwesenheit in Tagen"
                  value={formFloat(values.annahmen_G31, 1)}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  InputProps={{
                    readOnly: true
                  }}
                  id="annahmen_H31"
                  name="annahmen_H31"
                  label="Summe Anwesenheit in Stunden"
                  value={formFloat(values.annahmen_H31, 1)}
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
