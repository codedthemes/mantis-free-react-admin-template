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
            id="annahmen_produktivstunden_wochenarbeitszeit"
            name="annahmen_produktivstunden_wochenarbeitszeit"
            label="Wochenarbeitszeit"
            value={values.annahmen_produktivstunden_wochenarbeitszeit}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            min="0"
            max="120"
            step={0.25}
            error={touched.annahmen_produktivstunden_wochenarbeitszeit && Boolean(errors.annahmen_produktivstunden_wochenarbeitszeit)}
            helperText={touched.annahmen_produktivstunden_wochenarbeitszeit && errors.annahmen_produktivstunden_wochenarbeitszeit}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_produktivstunden_wochenarbeitstage"
            name="annahmen_produktivstunden_wochenarbeitstage"
            label="Wochenarbeitstage"
            type="number"
            min="0"
            max="7"
            value={values.annahmen_produktivstunden_wochenarbeitstage}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.annahmen_produktivstunden_wochenarbeitstage && Boolean(errors.annahmen_produktivstunden_wochenarbeitstage)}
            helperText={touched.annahmen_produktivstunden_wochenarbeitstage && errors.annahmen_produktivstunden_wochenarbeitstage}
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
                  id="annahmen_produktivstunden_durchschnittArbeitsstundenProTag"
                  name="annahmen_produktivstunden_durchschnittArbeitsstundenProTag"
                  label="Ø Arbeitsstunden pro Tag"
                  value={formFloat(values.annahmen_produktivstunden_durchschnittArbeitsstundenProTag, 1)}
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
                  id="annahmen_produktivstunden_wochenendtageProJahr"
                  name="annahmen_produktivstunden_wochenendtageProJahr"
                  label={`Wochenendtage im Jahr ${values.annahmen_allgemein_planjahr || ''}`}
                  value={values.annahmen_produktivstunden_wochenendtageProJahr}
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
                  id="annahmen_produktivstunden_jahresarbeitszzeitInTagen"
                  name="annahmen_produktivstunden_jahresarbeitszzeitInTagen"
                  label="Jahresarbeitszeit in Tagen"
                  value={formFloat(values.annahmen_produktivstunden_jahresarbeitszzeitInTagen, 1)}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  InputProps={{
                    readOnly: true
                  }}
                  id="annahmen_produktivstunden_jahresArbeitszeitInStunden"
                  name="annahmen_produktivstunden_jahresArbeitszeitInStunden"
                  label="Jahresarbeitszeit in Stunden"
                  value={formFloat(values.annahmen_produktivstunden_jahresArbeitszeitInStunden, 1)}
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
            id="annahmen_produktivstunden_arbeitstageAlsFeiertag"
            name="annahmen_produktivstunden_arbeitstageAlsFeiertag"
            label="Feiertage die auf Arbeitstage fallen"
            value={values.annahmen_produktivstunden_arbeitstageAlsFeiertag}
            type="number"
            min="0"
            max="365"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.annahmen_produktivstunden_arbeitstageAlsFeiertag && Boolean(errors.annahmen_produktivstunden_arbeitstageAlsFeiertag)
            }
            helperText={touched.annahmen_produktivstunden_arbeitstageAlsFeiertag && errors.annahmen_produktivstunden_arbeitstageAlsFeiertag}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_produktivstunden_urlaubstageProMitarbeiter"
            name="annahmen_produktivstunden_urlaubstageProMitarbeiter"
            label="Urlaubstage pro Mitarbeiter"
            value={values.annahmen_produktivstunden_urlaubstageProMitarbeiter}
            type="number"
            min="0"
            max="365"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.annahmen_produktivstunden_urlaubstageProMitarbeiter &&
              Boolean(errors.annahmen_produktivstunden_urlaubstageProMitarbeiter)
            }
            helperText={
              touched.annahmen_produktivstunden_urlaubstageProMitarbeiter && errors.annahmen_produktivstunden_urlaubstageProMitarbeiter
            }
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_produktivstunden_krankentageProMitarbeiter"
            name="annahmen_produktivstunden_krankentageProMitarbeiter"
            label="Krankentage pro Mitarbeiter"
            value={values.annahmen_produktivstunden_krankentageProMitarbeiter}
            type="number"
            min="0"
            max="365"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.annahmen_produktivstunden_krankentageProMitarbeiter &&
              Boolean(errors.annahmen_produktivstunden_krankentageProMitarbeiter)
            }
            helperText={
              touched.annahmen_produktivstunden_krankentageProMitarbeiter && errors.annahmen_produktivstunden_krankentageProMitarbeiter
            }
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_produktivstunden_sonstigeArbeitsverhinderungen"
            name="annahmen_produktivstunden_sonstigeArbeitsverhinderungen"
            label="Sonstige Arbeitsverhinderungen"
            value={values.annahmen_produktivstunden_sonstigeArbeitsverhinderungen}
            type="number"
            min="0"
            max="365"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.annahmen_produktivstunden_sonstigeArbeitsverhinderungen &&
              Boolean(errors.annahmen_produktivstunden_sonstigeArbeitsverhinderungen)
            }
            helperText={
              touched.annahmen_produktivstunden_sonstigeArbeitsverhinderungen &&
              errors.annahmen_produktivstunden_sonstigeArbeitsverhinderungen
            }
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
                  id="annahmen_produktivstunden_summeNichtanwesenheitInTagen"
                  name="annahmen_produktivstunden_summeNichtanwesenheitInTagen"
                  label="Summe Nichtanwesenheit in Tagen"
                  value={formFloat(values.annahmen_produktivstunden_summeNichtanwesenheitInTagen, 1)}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  InputProps={{
                    readOnly: true
                  }}
                  id="annahmen_produktivstunden_summeNichtanwesenheitInStunden"
                  name="annahmen_produktivstunden_summeNichtanwesenheitInStunden"
                  label="Summe Nichtanwesenheit in Stunden"
                  value={formFloat(values.annahmen_produktivstunden_summeNichtanwesenheitInStunden, 1)}
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
                  id="annahmen_produktivstunden_anwesenheitszeitInTagen"
                  name="annahmen_produktivstunden_anwesenheitszeitInTagen"
                  label="Summe Anwesenheit in Tagen"
                  value={formFloat(values.annahmen_produktivstunden_anwesenheitszeitInTagen, 1)}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  InputProps={{
                    readOnly: true
                  }}
                  id="annahmen_produktivstunden_anwesenheitszeitInStunden"
                  name="annahmen_produktivstunden_anwesenheitszeitInStunden"
                  label="Summe Anwesenheit in Stunden"
                  value={formFloat(values.annahmen_produktivstunden_anwesenheitszeitInStunden, 1)}
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
