import React from 'react';

// material-ui
import { Grid, TextField, Divider, Button, ButtonGroup, Typography } from '@mui/material';

// formik
import { Field, FieldArray, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';

const Annahmen = () => {
  const { values, handleChange, handleBlur, touched, errors, isSubmitting } = useFormikContext();

  return (
    <FormSection title="Stammdaten" defaultOpen={true} description="Pflegen Sie hier allgemeine Angaben zu Ihrem Mitarbeiter ein.">
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
        <Grid item xs={12}>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
        <FieldArray name="mitarbeiter">
          {({ push, remove }) => (
            <>
              {values.mitarbeiter?.map((arrayField, index) => (
                <>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      id={`mitarbeiter.${index}.vorname`}
                      name={`mitarbeiter.${index}.vorname`}
                      label="Vorname"
                      value={values.mitarbeiter?.[index]?.vorname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.mitarbeiter?.[index]?.vorname && Boolean(errors.mitarbeiter?.[index]?.vorname)}
                      helperText={touched.mitarbeiter?.[index]?.vorname && errors.mitarbeiter?.[index]?.vorname}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      id={`mitarbeiter.${index}.nachname`}
                      name={`mitarbeiter.${index}.nachname`}
                      label="Nachname"
                      value={values.mitarbeiter?.[index]?.nachname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.mitarbeiter?.[index]?.nachname && Boolean(errors.mitarbeiter?.[index]?.nachname)}
                      helperText={touched.mitarbeiter?.[index]?.nachname && errors.mitarbeiter?.[index]?.nachname}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: -2 }}>
                    <ButtonGroup>
                      <Button variant="contained" color="secondary" disabled={isSubmitting} onClick={() => remove(index)}>
                        Löschen
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </>
              ))}

              <Grid item>{typeof errors.testList === 'string' ? <Typography color="error">{errors.testList}</Typography> : null}</Grid>
              <Grid item xs={12}>
                <Button variant="contained" onClick={() => push({})} disabled={isSubmitting}>
                  neuen Eintrag hinzufügen
                </Button>
              </Grid>
            </>
          )}
        </FieldArray>
      </Grid>
    </FormSection >
  );
};

export default Annahmen;
