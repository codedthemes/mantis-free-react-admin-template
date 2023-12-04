import React from 'react';

// material-ui
import { Grid, TextField, Divider, Button, ButtonGroup, Typography } from '@mui/material';

// formik
import { Field, FieldArray, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';

const Stammdaten = () => {
  const { values, handleChange, handleBlur, touched, errors, isSubmitting } = useFormikContext();

  return (
    <>
      <Typography variant="h2" sx={{ mb: { sm: 2, md: 3 }, mt: { sm: 4, md: 6, lg: 8 } }}>
        Mitarbeiter
      </Typography>
      <FieldArray name="mitarbeiter_mitarbeiter">
        {({ push, remove }) => (
          <>
            {values.mitarbeiter_mitarbeiter?.map((arrayField, index) => (
              <>
                <FormSection
                  key={index}
                  title={`${values.mitarbeiter_mitarbeiter?.[index]?.vorname || 'Mitarbeiter'} ${values.mitarbeiter_mitarbeiter?.[index]?.nachname || ''
                    }`}
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
                          id={`mitarbeiter_mitarbeiter.${index}.vorname`}
                          name={`mitarbeiter_mitarbeiter.${index}.vorname`}
                          label="Vorname"
                          value={values.mitarbeiter_mitarbeiter?.[index]?.vorname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.mitarbeiter_mitarbeiter?.[index]?.vorname && Boolean(errors.mitarbeiter_mitarbeiter?.[index]?.vorname)
                          }
                          helperText={touched.mitarbeiter_mitarbeiter?.[index]?.vorname && errors.mitarbeiter_mitarbeiter?.[index]?.vorname}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`mitarbeiter_mitarbeiter.${index}.nachname`}
                          name={`mitarbeiter_mitarbeiter.${index}.nachname`}
                          label="Nachname"
                          value={values.mitarbeiter_mitarbeiter?.[index]?.nachname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.mitarbeiter_mitarbeiter?.[index]?.nachname && Boolean(errors.mitarbeiter_mitarbeiter?.[index]?.nachname)
                          }
                          helperText={
                            touched.mitarbeiter_mitarbeiter?.[index]?.nachname && errors.mitarbeiter_mitarbeiter?.[index]?.nachname
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
                          id={`mitarbeiter_mitarbeiter.${index}.sollarbeitsstdPA`}
                          name={`mitarbeiter_mitarbeiter.${index}.sollarbeitsstdPA`}
                          label="Sollarbeitsstunden p.a. (ohne Feiertage)"
                          value={values.mitarbeiter_mitarbeiter?.[index]?.sollarbeitsstdPA}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          error={
                            touched.mitarbeiter_mitarbeiter?.[index]?.sollarbeitsstdPA &&
                            Boolean(errors.mitarbeiter_mitarbeiter?.[index]?.sollarbeitsstdPA)
                          }
                          helperText={
                            touched.mitarbeiter_mitarbeiter?.[index]?.sollarbeitsstdPA &&
                            errors.mitarbeiter_mitarbeiter?.[index]?.sollarbeitsstdPA
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
                          id={`mitarbeiter_mitarbeiter.${index}.urlaubStd`}
                          name={`mitarbeiter_mitarbeiter.${index}.urlaubStd`}
                          label="Urlaub (in Stunden)"
                          value={values.mitarbeiter_mitarbeiter?.[index]?.urlaubStd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          max="8760"
                          error={
                            touched.mitarbeiter_mitarbeiter?.[index]?.urlaubStd &&
                            Boolean(errors.mitarbeiter_mitarbeiter?.[index]?.urlaubStd)
                          }
                          helperText={
                            touched.mitarbeiter_mitarbeiter?.[index]?.urlaubStd && errors.mitarbeiter_mitarbeiter?.[index]?.urlaubStd
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`mitarbeiter_mitarbeiter.${index}.krankheitStd`}
                          name={`mitarbeiter_mitarbeiter.${index}.krankheitStd`}
                          label="Krankheit (in Stunden)"
                          value={values.mitarbeiter_mitarbeiter?.[index]?.krankheitStd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          max="8760"
                          error={
                            touched.mitarbeiter_mitarbeiter?.[index]?.krankheitStd &&
                            Boolean(errors.mitarbeiter_mitarbeiter?.[index]?.krankheitStd)
                          }
                          helperText={
                            touched.mitarbeiter_mitarbeiter?.[index]?.krankheitStd && errors.mitarbeiter_mitarbeiter?.[index]?.krankheitStd
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`mitarbeiter_mitarbeiter.${index}.fortbildungStd`}
                          name={`mitarbeiter_mitarbeiter.${index}.fortbildungStd`}
                          label="Fortbildung (in Stunden)"
                          value={values.mitarbeiter_mitarbeiter?.[index]?.fortbildungStd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          max="8760"
                          error={
                            touched.mitarbeiter_mitarbeiter?.[index]?.fortbildungStd &&
                            Boolean(errors.mitarbeiter_mitarbeiter?.[index]?.fortbildungStd)
                          }
                          helperText={
                            touched.mitarbeiter_mitarbeiter?.[index]?.fortbildungStd &&
                            errors.mitarbeiter_mitarbeiter?.[index]?.fortbildungStd
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`mitarbeiter_mitarbeiter.${index}.sonstigeAbwesenheitenStd`}
                          name={`mitarbeiter_mitarbeiter.${index}.sonstigeAbwesenheitenStd`}
                          label="Sonstige Abwesenheiten (in Stunden)"
                          value={values.mitarbeiter_mitarbeiter?.[index]?.sonstigeAbwesenheitenStd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          max="8760"
                          error={
                            touched.mitarbeiter_mitarbeiter?.[index]?.sonstigeAbwesenheitenStd &&
                            Boolean(errors.mitarbeiter_mitarbeiter?.[index]?.sonstigeAbwesenheitenStd)
                          }
                          helperText={
                            touched.mitarbeiter_mitarbeiter?.[index]?.sonstigeAbwesenheitenStd &&
                            errors.mitarbeiter_mitarbeiter?.[index]?.sonstigeAbwesenheitenStd
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`mitarbeiter_mitarbeiter.${index}.direktVerrechenbar`}
                          name={`mitarbeiter_mitarbeiter.${index}.direktVerrechenbar`}
                          label="Davon direkt verrechenbar (in Prozent)"
                          value={values.mitarbeiter_mitarbeiter?.[index]?.direktVerrechenbar}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          max="100"
                          error={
                            touched.mitarbeiter_mitarbeiter?.[index]?.direktVerrechenbar &&
                            Boolean(errors.mitarbeiter_mitarbeiter?.[index]?.direktVerrechenbar)
                          }
                          helperText={
                            touched.mitarbeiter_mitarbeiter?.[index]?.direktVerrechenbar &&
                            errors.mitarbeiter_mitarbeiter?.[index]?.direktVerrechenbar
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
                          id={`mitarbeiter_mitarbeiter.${index}.bruttoStundenentgeltStd`}
                          name={`mitarbeiter_mitarbeiter.${index}.bruttoStundenentgeltStd`}
                          label="Brutto Stundenentgelt (pro Stunde, in EUR)"
                          value={values.mitarbeiter_mitarbeiter?.[index]?.bruttoStundenentgeltStd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          error={
                            touched.mitarbeiter_mitarbeiter?.[index]?.bruttoStundenentgeltStd &&
                            Boolean(errors.mitarbeiter_mitarbeiter?.[index]?.bruttoStundenentgeltStd)
                          }
                          helperText={
                            touched.mitarbeiter_mitarbeiter?.[index]?.bruttoStundenentgeltStd &&
                            errors.mitarbeiter_mitarbeiter?.[index]?.bruttoStundenentgeltStd
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`mitarbeiter_mitarbeiter.${index}.zulagenProStd`}
                          name={`mitarbeiter_mitarbeiter.${index}.zulagenProStd`}
                          label="durchschn. Zulagen pro Stdunde (in EUR)"
                          value={values.mitarbeiter_mitarbeiter?.[index]?.zulagenProStd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          error={
                            touched.mitarbeiter_mitarbeiter?.[index]?.zulagenProStd &&
                            Boolean(errors.mitarbeiter_mitarbeiter?.[index]?.zulagenProStd)
                          }
                          helperText={
                            touched.mitarbeiter_mitarbeiter?.[index]?.zulagenProStd &&
                            errors.mitarbeiter_mitarbeiter?.[index]?.zulagenProStd
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <ReadOnlyBox alwaysOpen>
                          <Grid container spacing={{ xs: 2, md: 4 }}>
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={TextField}
                                id={`mitarbeiter_mitarbeiter.${index}.anwesenheitsentgelt`}
                                name={`mitarbeiter_mitarbeiter.${index}.anwesenheitsentgelt`}
                                label="Anwesenheitsentgelt (gesamt)"
                                value={values.mitarbeiter_mitarbeiter?.[index]?.anwesenheitsentgelt}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                InputProps={{
                                  readOnly: true
                                }}
                                error={
                                  touched.mitarbeiter_mitarbeiter?.[index]?.anwesenheitsentgelt &&
                                  Boolean(errors.mitarbeiter_mitarbeiter?.[index]?.anwesenheitsentgelt)
                                }
                                helperText={
                                  touched.mitarbeiter_mitarbeiter?.[index]?.anwesenheitsentgelt &&
                                  errors.mitarbeiter_mitarbeiter?.[index]?.anwesenheitsentgelt
                                }
                                sx={{ mb: 2 }}
                              />
                            </Grid>
                          </Grid>
                        </ReadOnlyBox>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        &nbsp;
                      </Grid>
                      <Grid item xs={12}>
                        <ButtonGroup columnSpacing="2">
                          <Button variant="contained" color="primary" disabled={isSubmitting} onClick={() => remove(index)}>
                            Mitarbeiter löschen
                          </Button>
                          <Button
                            variant="outlined"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={() => push(values.mitarbeiter_mitarbeiter?.[index])}
                          >
                            Mitarbeiter duplizieren
                          </Button>
                        </ButtonGroup>
                      </Grid>
                    </>

                    <Grid item>
                      {typeof errors.mitarbeiter_mitarbeiter === 'string' ? (
                        <Typography color="error">{errors.mitarbeiter_mitarbeiter}</Typography>
                      ) : null}
                    </Grid>
                  </Grid>
                </FormSection>
                {index === values.mitarbeiter_mitarbeiter?.length - 1 && (
                  <Button variant="contained" onClick={() => push({})} disabled={isSubmitting} sx={{ mb: 4 }}>
                    neuen Mitarbeiter hinzufügen
                  </Button>
                )}
              </>
            ))}
            {(!values.mitarbeiter_mitarbeiter || values.mitarbeiter_mitarbeiter?.length === 0) && (
              <Button variant="contained" onClick={() => push({})} disabled={isSubmitting} sx={{ mb: 4 }}>
                neuen Mitarbeiter hinzufügen
              </Button>
            )}
          </>
        )}
      </FieldArray>
    </>
  );
};

export default Stammdaten;
