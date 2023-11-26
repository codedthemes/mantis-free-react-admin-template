import React from 'react';

// material-ui
import { Grid, TextField, Divider, Button, ButtonGroup, Typography } from '@mui/material';

// formik
import { Field, FieldArray, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';

const Stammdaten = () => {
  const { values, handleChange, handleBlur, touched, errors, isSubmitting } = useFormikContext();

  return (
    <FieldArray name="mitarbeiter">
      {({ push, remove }) => (
        <>
          {values.mitarbeiter?.map((arrayField, index) => (
            <>
              <FormSection
                key={index}
                title={`${values.mitarbeiter?.[index]?.vorname || 'Mitarbeiter'} ${values.mitarbeiter?.[index]?.nachname || ''}`}
                description="Pflegen Sie hier allgemeine Angaben zu Ihrem Mitarbeiter ein."
              >
                <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
                  <Grid item xs={12}>
                    <Divider sx={{ mt: 2, mb: 4 }} />
                  </Grid>
                </Grid>
                <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
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
                    <Grid item xs={12} sm={12}>
                      &nbsp;
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        id={`mitarbeiter.${index}.urlaubstage`}
                        name={`mitarbeiter.${index}.urlaubstage`}
                        label="Urlaubstage"
                        value={values.mitarbeiter?.[index]?.urlaubstage}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.mitarbeiter?.[index]?.urlaubstage && Boolean(errors.mitarbeiter?.[index]?.urlaubstage)}
                        helperText={touched.mitarbeiter?.[index]?.urlaubstage && errors.mitarbeiter?.[index]?.urlaubstage}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        id={`mitarbeiter.${index}.krankheitstage`}
                        name={`mitarbeiter.${index}.krankheitstage`}
                        label="Krankheitstage"
                        value={values.mitarbeiter?.[index]?.krankheitstage}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.mitarbeiter?.[index]?.krankheitstage && Boolean(errors.mitarbeiter?.[index]?.krankheitstage)}
                        helperText={touched.mitarbeiter?.[index]?.krankheitstage && errors.mitarbeiter?.[index]?.krankheitstage}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        id={`mitarbeiter.${index}.fortbildungstage`}
                        name={`mitarbeiter.${index}.fortbildungstage`}
                        label="Fortbildungstage"
                        value={values.mitarbeiter?.[index]?.fortbildungstage}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.mitarbeiter?.[index]?.fortbildungstage && Boolean(errors.mitarbeiter?.[index]?.fortbildungstage)}
                        helperText={touched.mitarbeiter?.[index]?.fortbildungstage && errors.mitarbeiter?.[index]?.fortbildungstage}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        id={`mitarbeiter.${index}.sonstigeAbwesenheiten`}
                        name={`mitarbeiter.${index}.sonstigeAbwesenheiten`}
                        label="Sonstige Abwesenheiten (in Tagen)"
                        value={values.mitarbeiter?.[index]?.sonstigeAbwesenheiten}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.mitarbeiter?.[index]?.sonstigeAbwesenheiten && Boolean(errors.mitarbeiter?.[index]?.sonstigeAbwesenheiten)
                        }
                        helperText={
                          touched.mitarbeiter?.[index]?.sonstigeAbwesenheiten && errors.mitarbeiter?.[index]?.sonstigeAbwesenheiten
                        }
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      &nbsp;
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        id={`mitarbeiter.${index}.direktVerrechenbar`}
                        name={`mitarbeiter.${index}.direktVerrechenbar`}
                        label="Direkt verrechenbar (in Prozent)"
                        value={values.mitarbeiter?.[index]?.direktVerrechenbar}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.mitarbeiter?.[index]?.direktVerrechenbar && Boolean(errors.mitarbeiter?.[index]?.direktVerrechenbar)}
                        helperText={touched.mitarbeiter?.[index]?.direktVerrechenbar && errors.mitarbeiter?.[index]?.direktVerrechenbar}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        id={`mitarbeiter.${index}.bruttoStundenentgelt`}
                        name={`mitarbeiter.${index}.bruttoStundenentgelt`}
                        label="Brutto Stundenentgelt (in EUR)"
                        value={values.mitarbeiter?.[index]?.bruttoStundenentgelt}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.mitarbeiter?.[index]?.bruttoStundenentgelt && Boolean(errors.mitarbeiter?.[index]?.bruttoStundenentgelt)
                        }
                        helperText={touched.mitarbeiter?.[index]?.bruttoStundenentgelt && errors.mitarbeiter?.[index]?.bruttoStundenentgelt}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        id={`mitarbeiter.${index}.zulagenProStd`}
                        name={`mitarbeiter.${index}.zulagenProStd`}
                        label="Zulagen pro Stdunde (in EUR)"
                        value={values.mitarbeiter?.[index]?.zulagenProStd}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.mitarbeiter?.[index]?.zulagenProStd && Boolean(errors.mitarbeiter?.[index]?.zulagenProStd)}
                        helperText={touched.mitarbeiter?.[index]?.zulagenProStd && errors.mitarbeiter?.[index]?.zulagenProStd}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}></Grid>
                    <Grid item xs={12}>
                      <ButtonGroup>
                        <Button variant="contained" color="secondary" disabled={isSubmitting} onClick={() => remove(index)}>
                          Mitarbeiter löschen
                        </Button>
                      </ButtonGroup>
                    </Grid>
                  </>

                  <Grid item>
                    {typeof errors.mitarbeiter === 'string' ? <Typography color="error">{errors.mitarbeiter}</Typography> : null}
                  </Grid>
                </Grid>
              </FormSection>
              {index === values.mitarbeiter?.length - 1 && (
                <Button variant="contained" onClick={() => push({})} disabled={isSubmitting}>
                  neuen Mitarbeiter hinzufügen
                </Button>
              )}
            </>
          ))}
          {(!values.mitarbeiter || values.mitarbeiter.length === 0) && (
            <Button variant="contained" onClick={() => push({})} disabled={isSubmitting}>
              neuen Mitarbeiter hinzufügen
            </Button>
          )}
        </>
      )}
    </FieldArray>
  );
};

export default Stammdaten;
