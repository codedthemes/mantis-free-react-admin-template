import React from 'react';

// material-ui
import { Grid, TextField, useTheme, Divider, Typography } from '@mui/material';

// formik
import { Field, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';

const Lohnnebenkostensatz = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();
  const theme = useTheme();

  return (
    <FormSection title="Lohnnebenkostensatz">
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
        <Grid item xs={12}>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Produktive Kapazität (pro Jahr)</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Field
            component={TextField}
            id="produktiveKapazitaetTage"
            name="produktiveKapazitaetTage"
            label="Tage"
            value={values.produktiveKapazitaetTage}
            onChange={handleChange}
            onBlur={handleBlur}
            readonly
            error={touched.produktiveKapazitaetTage && Boolean(errors.produktiveKapazitaetTage)}
            helperText={touched.produktiveKapazitaetTage && errors.produktiveKapazitaetTage}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Field
            component={TextField}
            id="produktiveKapazitaetArbeitsStd"
            name="produktiveKapazitaetArbeitsStd"
            label="Arbeits-Std."
            value={values.produktiveKapazitaetArbeitsStd}
            onChange={handleChange}
            onBlur={handleBlur}
            readonly
            error={touched.produktiveKapazitaetArbeitsStd && Boolean(errors.produktiveKapazitaetArbeitsStd)}
            helperText={touched.produktiveKapazitaetArbeitsStd && errors.produktiveKapazitaetArbeitsStd}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Field
            component={TextField}
            id="produktiveKapazitaetProzent"
            name="produktiveKapazitaetProzent"
            label="Prozent"
            value={values.produktiveKapazitaetProzent}
            onChange={handleChange}
            onBlur={handleBlur}
            readonly
            error={touched.produktiveKapazitaetProzent && Boolean(errors.produktiveKapazitaetProzent)}
            helperText={touched.produktiveKapazitaetProzent && errors.produktiveKapazitaetProzent}
            sx={{ mb: 2 }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h3">Nichtanwesenheitszeit (pro Jahr)</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Field
            component={TextField}
            id="nichtanwesenheitszeitProJahrTage"
            name="nichtanwesenheitszeitProJahrTage"
            label="Tage"
            value={values.nichtanwesenheitszeitProJahrTage}
            onChange={handleChange}
            onBlur={handleBlur}
            readonly
            error={touched.nichtanwesenheitszeitProJahrTage && Boolean(errors.nichtanwesenheitszeitProJahrTage)}
            helperText={touched.nichtanwesenheitszeitProJahrTage && errors.nichtanwesenheitszeitProJahrTage}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Field
            component={TextField}
            id="nichtanwesenheitszeitProJahrArbeitsStd"
            name="nichtanwesenheitszeitProJahrArbeitsStd"
            label="Arbeits-Std."
            value={values.nichtanwesenheitszeitProJahrArbeitsStd}
            onChange={handleChange}
            onBlur={handleBlur}
            readonly
            error={touched.nichtanwesenheitszeitProJahrArbeitsStd && Boolean(errors.nichtanwesenheitszeitProJahrArbeitsStd)}
            helperText={touched.nichtanwesenheitszeitProJahrArbeitsStd && errors.nichtanwesenheitszeitProJahrArbeitsStd}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Field
            component={TextField}
            id="nichtanwesenheitszeitProJahrProzent"
            name="nichtanwesenheitszeitProJahrProzent"
            label="Prozent"
            value={values.nichtanwesenheitszeitProJahrProzent}
            onChange={handleChange}
            onBlur={handleBlur}
            readonly
            error={touched.nichtanwesenheitszeitProJahrProzent && Boolean(errors.nichtanwesenheitszeitProJahrProzent)}
            helperText={touched.nichtanwesenheitszeitProJahrProzent && errors.nichtanwesenheitszeitProJahrProzent}
            sx={{ mb: 2 }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h3">Jahresarbeitszeit für laufende Bezüge</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Field
            component={TextField}
            id="jahresarbeitszeitLaufendeBezuegeTage"
            name="jahresarbeitszeitLaufendeBezuegeTage"
            label="Tage"
            value={values.jahresarbeitszeitLaufendeBezuegeTage}
            onChange={handleChange}
            onBlur={handleBlur}
            readonly
            error={touched.jahresarbeitszeitLaufendeBezuegeTage && Boolean(errors.jahresarbeitszeitLaufendeBezuegeTage)}
            helperText={touched.jahresarbeitszeitLaufendeBezuegeTage && errors.jahresarbeitszeitLaufendeBezuegeTage}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Field
            component={TextField}
            id="jahresarbeitszeitLaufendeBezuegeArbeitsStd"
            name="jahresarbeitszeitLaufendeBezuegeArbeitsStd"
            label="Arbeits-Std."
            value={values.jahresarbeitszeitLaufendeBezuegeArbeitsStd}
            onChange={handleChange}
            onBlur={handleBlur}
            readonly
            error={touched.jahresarbeitszeitLaufendeBezuegeArbeitsStd && Boolean(errors.jahresarbeitszeitLaufendeBezuegeArbeitsStd)}
            helperText={touched.jahresarbeitszeitLaufendeBezuegeArbeitsStd && errors.jahresarbeitszeitLaufendeBezuegeArbeitsStd}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Field
            component={TextField}
            id="jahresarbeitszeitLaufendeBezuegeProzent"
            name="jahresarbeitszeitLaufendeBezuegeProzent"
            label="Prozent"
            value={values.jahresarbeitszeitLaufendeBezuegeProzent}
            onChange={handleChange}
            onBlur={handleBlur}
            readonly
            error={touched.jahresarbeitszeitLaufendeBezuegeProzent && Boolean(errors.jahresarbeitszeitLaufendeBezuegeProzent)}
            helperText={touched.jahresarbeitszeitLaufendeBezuegeProzent && errors.jahresarbeitszeitLaufendeBezuegeProzent}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ my: 4 }}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="sonderzahlungInMonaten"
            name="sonderzahlungInMonaten"
            label="Sonderzahlung (in Monaten)"
            value={values.sonderzahlungInMonaten}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            min="0"
            max="12"
            step={0.5}
            error={touched.sonderzahlungInMonaten && Boolean(errors.sonderzahlungInMonaten)}
            helperText={touched.sonderzahlungInMonaten && errors.sonderzahlungInMonaten}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ my: 4 }}/>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h3"> Zwischensumme</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Field
            component={TextField}
            id="zwischensummeTage"
            name="zwischensummeTage"
            label="Tage"
            value={values.zwischensummeTage}
            onChange={handleChange}
            onBlur={handleBlur}
            readonly
            error={touched.zwischensummeTage && Boolean(errors.zwischensummeTage)}
            helperText={touched.zwischensummeTage && errors.zwischensummeTage}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Field
            component={TextField}
            id="zwischensummeArbeitsStd"
            name="zwischensummeArbeitsStd"
            label="Arbeits-Std."
            value={values.zwischensummeArbeitsStd}
            onChange={handleChange}
            onBlur={handleBlur}
            readonly
            error={touched.zwischensummeArbeitsStd && Boolean(errors.zwischensummeArbeitsStd)}
            helperText={touched.zwischensummeArbeitsStd && errors.zwischensummeArbeitsStd}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Field
            component={TextField}
            id="zwischensummeProzent"
            name="zwischensummeProzent"
            label="Prozent"
            value={values.zwischensummeProzent}
            onChange={handleChange}
            onBlur={handleBlur}
            readonly
            error={touched.zwischensummeProzent && Boolean(errors.zwischensummeProzent)}
            helperText={touched.zwischensummeProzent && errors.zwischensummeProzent}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ my: 4 }}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="svAbgabenArbeitgeber"
            name="svAbgabenArbeitgeber"
            label="Ø SV-Abgaben Arbeitgeber"
            value={values.svAbgabenArbeitgeber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.svAbgabenArbeitgeber && Boolean(errors.svAbgabenArbeitgeber)}
            helperText={touched.svAbgabenArbeitgeber && errors.svAbgabenArbeitgeber}
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>
    </FormSection>
  );
};

export default Lohnnebenkostensatz;
