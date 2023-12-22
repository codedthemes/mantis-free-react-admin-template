import React from 'react';

// material-ui
import { Grid, TextField, Divider, Button, ButtonGroup, Typography } from '@mui/material';

// formik
import { Field, FieldArray, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import { uniqueId } from 'lodash';
import getInitialMitarbeiterData from '../CalculationUpdater/getInitialMitarbeiterData';
import formFloat from 'utils/formUtils/formFloat';

const Stammdaten = () => {
  const { values, handleChange, handleBlur, touched, errors, isSubmitting } = useFormikContext();

  return (
    <>
      <Typography variant="h2" sx={{ mb: { sm: 2, md: 3 }, mt: { sm: 4, md: 6, lg: 8 } }}>
        Personalkosten Produktiv
      </Typography>
      <FieldArray name="pk_produktiv_mitarbeiter">
        {({ push, remove }) => (
          <>
            {values.pk_produktiv_mitarbeiter?.map((arrayField, index) => (
              <>
                <FormSection
                  key={index}
                  title={`${values.pk_produktiv_mitarbeiter?.[index]?.vorname || 'Mitarbeiter'} ${
                    values.pk_produktiv_mitarbeiter?.[index]?.nachname || ''
                  }`}
                  description="Pflegen Sie hier allgemeine Angaben zu Ihrem Mitarbeiter ein."
                  defaultOpen={index === 0 && values.pk_produktiv_mitarbeiter?.length === 1}
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
                          id={`pk_produktiv_mitarbeiter.${index}.vorname`}
                          name={`pk_produktiv_mitarbeiter.${index}.vorname`}
                          label="Vorname"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.vorname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.pk_produktiv_mitarbeiter?.[index]?.vorname && Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.vorname)
                          }
                          helperText={
                            touched.pk_produktiv_mitarbeiter?.[index]?.vorname && errors.pk_produktiv_mitarbeiter?.[index]?.vorname
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`pk_produktiv_mitarbeiter.${index}.nachname`}
                          name={`pk_produktiv_mitarbeiter.${index}.nachname`}
                          label="Nachname"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.nachname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.pk_produktiv_mitarbeiter?.[index]?.nachname &&
                            Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.nachname)
                          }
                          helperText={
                            touched.pk_produktiv_mitarbeiter?.[index]?.nachname && errors.pk_produktiv_mitarbeiter?.[index]?.nachname
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
                          id={`pk_produktiv_mitarbeiter.${index}.E9`}
                          name={`pk_produktiv_mitarbeiter.${index}.E9`}
                          label="Sollarbeitsstunden p.a. (ohne Feiertage)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.E9}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          onWheel={(event) => event.target.blur()}
                          min="0"
                          error={touched.pk_produktiv_mitarbeiter?.[index]?.E9 && Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.E9)}
                          helperText={touched.pk_produktiv_mitarbeiter?.[index]?.E9 && errors.pk_produktiv_mitarbeiter?.[index]?.E9}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        &nbsp;
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`pk_produktiv_mitarbeiter.${index}.F9`}
                          name={`pk_produktiv_mitarbeiter.${index}.F9`}
                          label="Urlaub (in Stunden)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.F9}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          onWheel={(event) => event.target.blur()}
                          min="0"
                          max="8760"
                          error={touched.pk_produktiv_mitarbeiter?.[index]?.F9 && Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.F9)}
                          helperText={touched.pk_produktiv_mitarbeiter?.[index]?.F9 && errors.pk_produktiv_mitarbeiter?.[index]?.F9}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`pk_produktiv_mitarbeiter.${index}.G9`}
                          name={`pk_produktiv_mitarbeiter.${index}.G9`}
                          label="Krankheit (in Stunden)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.G9}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          onWheel={(event) => event.target.blur()}
                          min="0"
                          max="8760"
                          error={touched.pk_produktiv_mitarbeiter?.[index]?.G9 && Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.G9)}
                          helperText={touched.pk_produktiv_mitarbeiter?.[index]?.G9 && errors.pk_produktiv_mitarbeiter?.[index]?.G9}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`pk_produktiv_mitarbeiter.${index}.H9`}
                          name={`pk_produktiv_mitarbeiter.${index}.H9`}
                          label="Fortbildung (in Stunden)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.H9}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          onWheel={(event) => event.target.blur()}
                          min="0"
                          max="8760"
                          error={touched.pk_produktiv_mitarbeiter?.[index]?.H9 && Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.H9)}
                          helperText={touched.pk_produktiv_mitarbeiter?.[index]?.H9 && errors.pk_produktiv_mitarbeiter?.[index]?.H9}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`pk_produktiv_mitarbeiter.${index}.I9`}
                          name={`pk_produktiv_mitarbeiter.${index}.I9`}
                          label="Sonstige Abwesenheiten (in Stunden)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.I9}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          onWheel={(event) => event.target.blur()}
                          min="0"
                          max="8760"
                          error={touched.pk_produktiv_mitarbeiter?.[index]?.I9 && Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.I9)}
                          helperText={touched.pk_produktiv_mitarbeiter?.[index]?.I9 && errors.pk_produktiv_mitarbeiter?.[index]?.I9}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <ReadOnlyBox>
                          <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={TextField}
                                id={`pk_produktiv_mitarbeiter.${index}.M9`}
                                name={`pk_produktiv_mitarbeiter.${index}.M9`}
                                label="Anwesenheit (in Std.)"
                                value={values.pk_produktiv_mitarbeiter?.[index]?.M9}
                                InputProps={{
                                  readOnly: true
                                }}
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
                          id={`pk_produktiv_mitarbeiter.${index}.N9`}
                          name={`pk_produktiv_mitarbeiter.${index}.N9`}
                          label="Davon direkt verrechenbar (in Prozent)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.N9}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          onWheel={(event) => event.target.blur()}
                          min="0"
                          max="100"
                          error={touched.pk_produktiv_mitarbeiter?.[index]?.N9 && Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.N9)}
                          helperText={touched.pk_produktiv_mitarbeiter?.[index]?.N9 && errors.pk_produktiv_mitarbeiter?.[index]?.N9}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <ReadOnlyBox>
                          <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={TextField}
                                id={`pk_produktiv_mitarbeiter.${index}.O9`}
                                name={`pk_produktiv_mitarbeiter.${index}.O9`}
                                label="Direkt verrechnet (in Std.)"
                                value={formFloat(values.pk_produktiv_mitarbeiter?.[index]?.O9, 1)}
                                InputProps={{
                                  readOnly: true
                                }}
                                sx={{ mb: 2 }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={TextField}
                                id={`pk_produktiv_mitarbeiter.${index}.P9`}
                                name={`pk_produktiv_mitarbeiter.${index}.P9`}
                                label="Nicht direkt verrechnet (in Std.)"
                                value={formFloat(values.pk_produktiv_mitarbeiter?.[index]?.P9, 1)}
                                InputProps={{
                                  readOnly: true
                                }}
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
                          id={`pk_produktiv_mitarbeiter.${index}.Q9`}
                          name={`pk_produktiv_mitarbeiter.${index}.Q9`}
                          label="Brutto Stundenentgelt (pro Stunde, in EUR)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.Q9}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          onWheel={(event) => event.target.blur()}
                          min="0"
                          error={touched.pk_produktiv_mitarbeiter?.[index]?.Q9 && Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.Q9)}
                          helperText={touched.pk_produktiv_mitarbeiter?.[index]?.Q9 && errors.pk_produktiv_mitarbeiter?.[index]?.Q9}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`pk_produktiv_mitarbeiter.${index}.R9`}
                          name={`pk_produktiv_mitarbeiter.${index}.R9`}
                          label="durchschn. Zulagen pro Stdunde (in EUR)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.R9}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          onWheel={(event) => event.target.blur()}
                          min="0"
                          error={touched.pk_produktiv_mitarbeiter?.[index]?.R9 && Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.R9)}
                          helperText={touched.pk_produktiv_mitarbeiter?.[index]?.R9 && errors.pk_produktiv_mitarbeiter?.[index]?.R9}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <ReadOnlyBox alwaysOpen>
                          <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={TextField}
                                id={`pk_produktiv_mitarbeiter.${index}.S9`}
                                name={`pk_produktiv_mitarbeiter.${index}.S9`}
                                label="Anwesenheitsentgelt (gesamt, in EUR)"
                                value={values.pk_produktiv_mitarbeiter?.[index]?.S9}
                                InputProps={{
                                  readOnly: true
                                }}
                                sx={{ mb: 2 }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                              &nbsp;
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={TextField}
                                id={`pk_produktiv_mitarbeiter.${index}.U9`}
                                name={`pk_produktiv_mitarbeiter.${index}.U9`}
                                label="Verrechenbarkeit (direkt verrechnet, in EUR)"
                                value={formFloat(values.pk_produktiv_mitarbeiter?.[index]?.U9, 1)}
                                InputProps={{
                                  readOnly: true
                                }}
                                sx={{ mb: 2 }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={TextField}
                                id={`pk_produktiv_mitarbeiter.${index}.V9`}
                                name={`pk_produktiv_mitarbeiter.${index}.V9`}
                                label="Verrechenbarkeit (direkt verrechnet, in EUR)"
                                value={formFloat(values.pk_produktiv_mitarbeiter?.[index]?.V9, 1)}
                                InputProps={{
                                  readOnly: true
                                }}
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
                            onClick={() => push({ ...values.pk_produktiv_mitarbeiter?.[index], userId: uniqueId() })}
                          >
                            Mitarbeiter duplizieren
                          </Button>
                        </ButtonGroup>
                      </Grid>
                    </>

                    <Grid item>
                      {typeof errors.pk_produktiv_mitarbeiter === 'string' ? (
                        <Typography color="error">{errors.pk_produktiv_mitarbeiter}</Typography>
                      ) : null}
                    </Grid>
                  </Grid>
                </FormSection>
                {index === values.pk_produktiv_mitarbeiter?.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={() => push(getInitialMitarbeiterData(values))}
                    disabled={isSubmitting}
                    sx={{ mb: 4 }}
                  >
                    neuen Mitarbeiter hinzufügen
                  </Button>
                )}
              </>
            ))}
            {(!values.pk_produktiv_mitarbeiter || values.pk_produktiv_mitarbeiter?.length === 0) && (
              <Button variant="contained" onClick={() => push({ userId: uniqueId() })} disabled={isSubmitting} sx={{ mb: 4 }}>
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
