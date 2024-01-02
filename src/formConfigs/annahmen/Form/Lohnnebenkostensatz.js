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
    <>
      <FormSection title="Angaben Lohnnebenkostensatz" description="In diesem Abschnitt werden Sonderausgaben angegeben.">
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
              id="annahmen_E39"
              name="annahmen_E39"
              label="Sonderzahlungen (in Monaten)"
              type="number"
              onWheel={(event) => event.target.blur()}
              min="0"
              max="5"
              value={values.annahmen_E39}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.annahmen_E39 && Boolean(errors.annahmen_E39)}
              helperText={touched.annahmen_E39 && errors.annahmen_E39}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              component={TextField}
              id="annahmen_E41"
              name="annahmen_E41"
              label="SV-Abgaben Arbeitgeber (in %)"
              type="number"
              onWheel={(event) => event.target.blur()}
              min="0"
              max="100"
              value={values.annahmen_E41}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.annahmen_E41 && Boolean(errors.annahmen_E41)}
              helperText={touched.annahmen_E41 && errors.annahmen_E41}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              component={TextField}
              id="annahmen_E42"
              name="annahmen_E42"
              label="Sonstige Kosten (in %)"
              type="number"
              onWheel={(event) => event.target.blur()}
              min="0"
              max="100"
              value={values.annahmen_E42}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.annahmen_E42 && Boolean(errors.annahmen_E42)}
              helperText={touched.annahmen_E42 && errors.annahmen_E42}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <ReadOnlyBox title={'Lohnnebenkostensatz'} alwaysOpen>
              <Grid container spacing={{ xs: 2, md: 4 }}>
                <Grid item xs={12} md={6}>
                  <Field
                    component={TextField}
                    InputProps={{
                      readOnly: true
                    }}
                    id="annahmen_I46"
                    name="annahmen_I46"
                    label="Lohnnebenkostensatz in %"
                    value={formFloat(values.annahmen_I46, 2)}
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </Grid>
            </ReadOnlyBox>
          </Grid>
        </Grid>
      </FormSection>
      <ReadOnlyBox white title={'Berechnet: Lohnnebenkostensatz'} alwaysOpen>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={6}>
            <Field
              component={TextField}
              InputProps={{
                readOnly: true
              }}
              id="annahmen_I46"
              name="annahmen_I46"
              label="Lohnnebenkostensatz in %"
              value={formFloat(values.annahmen_I46, 2)}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
      </ReadOnlyBox>
    </>
  );
};

export default Lohnnebenkostensatz;
