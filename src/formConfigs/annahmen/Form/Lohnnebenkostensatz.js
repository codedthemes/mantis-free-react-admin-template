import React from 'react';

// material-ui
import { Grid, TextField, Divider, Typography } from '@mui/material';

// formik
import { Field, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import formFloat from 'utils/formUtils/formFloat';

const Lohnnebenkostensatz = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();

  return (
    <FormSection title="Lohnnebenkostensatz" description="In diesem Abschnitt werden Sonderausgaben angegeben.">
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
        <Grid item xs={12}>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Produktive Kapazität (pro Jahr)</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Field
            component={TextField}
            id="annahmen_lohnnebenkosten_sonderzahlungen"
            name="annahmen_lohnnebenkosten_sonderzahlungen"
            label="Sonderzahlungen"
            type="number"
            min="0"
            max="5"
            value={values.annahmen_lohnnebenkosten_sonderzahlungen}
            onChange={handleChange}
            onBlur={handleBlur}
            readOnly
            error={touched.annahmen_lohnnebenkosten_sonderzahlungen && Boolean(errors.annahmen_lohnnebenkosten_sonderzahlungen)}
            helperText={touched.annahmen_lohnnebenkosten_sonderzahlungen && errors.annahmen_lohnnebenkosten_sonderzahlungen}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Field
            component={TextField}
            id="annahmen_lohnnebenkosten_svAbgabenArbeitgeber"
            name="annahmen_lohnnebenkosten_svAbgabenArbeitgeber"
            label="SV-Abgaben Arbeitgeber"
            type="number"
            min="0"
            max="100"
            value={values.annahmen_lohnnebenkosten_svAbgabenArbeitgeber}
            onChange={handleChange}
            onBlur={handleBlur}
            readOnly
            error={touched.annahmen_lohnnebenkosten_svAbgabenArbeitgeber && Boolean(errors.annahmen_lohnnebenkosten_svAbgabenArbeitgeber)}
            helperText={touched.annahmen_lohnnebenkosten_svAbgabenArbeitgeber && errors.annahmen_lohnnebenkosten_svAbgabenArbeitgeber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Field
            component={TextField}
            id="annahmen_lohnnebenkosten_sonstigeKosten"
            name="annahmen_lohnnebenkosten_sonstigeKosten"
            label="Sonstige Kosten"
            type="number"
            min="0"
            max="100"
            value={values.annahmen_lohnnebenkosten_sonstigeKosten}
            onChange={handleChange}
            onBlur={handleBlur}
            readOnly
            error={touched.annahmen_lohnnebenkosten_sonstigeKosten && Boolean(errors.annahmen_lohnnebenkosten_sonstigeKosten)}
            helperText={touched.annahmen_lohnnebenkosten_sonstigeKosten && errors.annahmen_lohnnebenkosten_sonstigeKosten}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <ReadOnlyBox title={'Lohnnebenkostensatz'}>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  InputProps={{
                    readOnly: true
                  }}
                  id="annahmen_lohnnebenkosten_lohnnebenkostensatz"
                  name="annahmen_lohnnebenkosten_lohnnebenkostensatz"
                  label="Lohnnebenkostensatz in %"
                  value={formFloat(values.annahmen_lohnnebenkosten_lohnnebenkostensatz, 1)}
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

export default Lohnnebenkostensatz;
