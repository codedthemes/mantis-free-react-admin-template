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
                          id={`pk_produktiv_mitarbeiter.${index}.sollarbeitsstdPA`}
                          name={`pk_produktiv_mitarbeiter.${index}.sollarbeitsstdPA`}
                          label="Sollarbeitsstunden p.a. (ohne Feiertage)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.sollarbeitsstdPA}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          error={
                            touched.pk_produktiv_mitarbeiter?.[index]?.sollarbeitsstdPA &&
                            Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.sollarbeitsstdPA)
                          }
                          helperText={
                            touched.pk_produktiv_mitarbeiter?.[index]?.sollarbeitsstdPA &&
                            errors.pk_produktiv_mitarbeiter?.[index]?.sollarbeitsstdPA
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
                          id={`pk_produktiv_mitarbeiter.${index}.urlaubStd`}
                          name={`pk_produktiv_mitarbeiter.${index}.urlaubStd`}
                          label="Urlaub (in Stunden)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.urlaubStd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          max="8760"
                          error={
                            touched.pk_produktiv_mitarbeiter?.[index]?.urlaubStd &&
                            Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.urlaubStd)
                          }
                          helperText={
                            touched.pk_produktiv_mitarbeiter?.[index]?.urlaubStd && errors.pk_produktiv_mitarbeiter?.[index]?.urlaubStd
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`pk_produktiv_mitarbeiter.${index}.krankheitStd`}
                          name={`pk_produktiv_mitarbeiter.${index}.krankheitStd`}
                          label="Krankheit (in Stunden)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.krankheitStd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          max="8760"
                          error={
                            touched.pk_produktiv_mitarbeiter?.[index]?.krankheitStd &&
                            Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.krankheitStd)
                          }
                          helperText={
                            touched.pk_produktiv_mitarbeiter?.[index]?.krankheitStd &&
                            errors.pk_produktiv_mitarbeiter?.[index]?.krankheitStd
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`pk_produktiv_mitarbeiter.${index}.fortbildungStd`}
                          name={`pk_produktiv_mitarbeiter.${index}.fortbildungStd`}
                          label="Fortbildung (in Stunden)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.fortbildungStd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          max="8760"
                          error={
                            touched.pk_produktiv_mitarbeiter?.[index]?.fortbildungStd &&
                            Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.fortbildungStd)
                          }
                          helperText={
                            touched.pk_produktiv_mitarbeiter?.[index]?.fortbildungStd &&
                            errors.pk_produktiv_mitarbeiter?.[index]?.fortbildungStd
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`pk_produktiv_mitarbeiter.${index}.sonstigeAbwesenheitenStd`}
                          name={`pk_produktiv_mitarbeiter.${index}.sonstigeAbwesenheitenStd`}
                          label="Sonstige Abwesenheiten (in Stunden)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.sonstigeAbwesenheitenStd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          max="8760"
                          error={
                            touched.pk_produktiv_mitarbeiter?.[index]?.sonstigeAbwesenheitenStd &&
                            Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.sonstigeAbwesenheitenStd)
                          }
                          helperText={
                            touched.pk_produktiv_mitarbeiter?.[index]?.sonstigeAbwesenheitenStd &&
                            errors.pk_produktiv_mitarbeiter?.[index]?.sonstigeAbwesenheitenStd
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <ReadOnlyBox>
                          <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={TextField}
                                id={`pk_produktiv_mitarbeiter.${index}.anwesenheitsStdMa`}
                                name={`pk_produktiv_mitarbeiter.${index}.anwesenheitsStdMa`}
                                label="Anwesenheit (in Std.)"
                                value={values.pk_produktiv_mitarbeiter?.[index]?.anwesenheitsStdMa}
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
                          id={`pk_produktiv_mitarbeiter.${index}.direktVerrechenbar`}
                          name={`pk_produktiv_mitarbeiter.${index}.direktVerrechenbar`}
                          label="Davon direkt verrechenbar (in Prozent)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.direktVerrechenbar}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          max="100"
                          error={
                            touched.pk_produktiv_mitarbeiter?.[index]?.direktVerrechenbar &&
                            Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.direktVerrechenbar)
                          }
                          helperText={
                            touched.pk_produktiv_mitarbeiter?.[index]?.direktVerrechenbar &&
                            errors.pk_produktiv_mitarbeiter?.[index]?.direktVerrechenbar
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <ReadOnlyBox>
                          <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={TextField}
                                id={`pk_produktiv_mitarbeiter.${index}.direktVerrechnet`}
                                name={`pk_produktiv_mitarbeiter.${index}.direktVerrechnet`}
                                label="Direkt verrechnet (in Std.)"
                                value={formFloat(values.pk_produktiv_mitarbeiter?.[index]?.direktVerrechnet, 1)}
                                InputProps={{
                                  readOnly: true
                                }}
                                sx={{ mb: 2 }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={TextField}
                                id={`pk_produktiv_mitarbeiter.${index}.nichtDirektVerrechnet`}
                                name={`pk_produktiv_mitarbeiter.${index}.nichtDirektVerrechnet`}
                                label="Nicht direkt verrechnet (in Std.)"
                                value={formFloat(values.pk_produktiv_mitarbeiter?.[index]?.nichtDirektVerrechnet, 1)}
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
                          id={`pk_produktiv_mitarbeiter.${index}.bruttoStundenentgeltStd`}
                          name={`pk_produktiv_mitarbeiter.${index}.bruttoStundenentgeltStd`}
                          label="Brutto Stundenentgelt (pro Stunde, in EUR)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.bruttoStundenentgeltStd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          error={
                            touched.pk_produktiv_mitarbeiter?.[index]?.bruttoStundenentgeltStd &&
                            Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.bruttoStundenentgeltStd)
                          }
                          helperText={
                            touched.pk_produktiv_mitarbeiter?.[index]?.bruttoStundenentgeltStd &&
                            errors.pk_produktiv_mitarbeiter?.[index]?.bruttoStundenentgeltStd
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          id={`pk_produktiv_mitarbeiter.${index}.zulagenProStd`}
                          name={`pk_produktiv_mitarbeiter.${index}.zulagenProStd`}
                          label="durchschn. Zulagen pro Stdunde (in EUR)"
                          value={values.pk_produktiv_mitarbeiter?.[index]?.zulagenProStd}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          min="0"
                          error={
                            touched.pk_produktiv_mitarbeiter?.[index]?.zulagenProStd &&
                            Boolean(errors.pk_produktiv_mitarbeiter?.[index]?.zulagenProStd)
                          }
                          helperText={
                            touched.pk_produktiv_mitarbeiter?.[index]?.zulagenProStd &&
                            errors.pk_produktiv_mitarbeiter?.[index]?.zulagenProStd
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <ReadOnlyBox alwaysOpen>
                          <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={TextField}
                                id={`pk_produktiv_mitarbeiter.${index}.anwesenheitsentgelt`}
                                name={`pk_produktiv_mitarbeiter.${index}.anwesenheitsentgelt`}
                                label="Anwesenheitsentgelt (gesamt, in EUR)"
                                value={values.pk_produktiv_mitarbeiter?.[index]?.anwesenheitsentgelt}
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
                                id={`pk_produktiv_mitarbeiter.${index}.verrechenbarkeitDirektVerreichnet`}
                                name={`pk_produktiv_mitarbeiter.${index}.verrechenbarkeitDirektVerreichnet`}
                                label="Verrechenbarkeit (direkt verrechnet, in EUR)"
                                value={formFloat(values.pk_produktiv_mitarbeiter?.[index]?.verrechenbarkeitDirektVerreichnet, 1)}
                                InputProps={{
                                  readOnly: true
                                }}
                                sx={{ mb: 2 }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={TextField}
                                id={`pk_produktiv_mitarbeiter.${index}.verrechenbarkeitNichtDirektVerreichnet`}
                                name={`pk_produktiv_mitarbeiter.${index}.verrechenbarkeitNichtDirektVerreichnet`}
                                label="Verrechenbarkeit (direkt verrechnet, in EUR)"
                                value={formFloat(values.pk_produktiv_mitarbeiter?.[index]?.verrechenbarkeitNichtDirektVerreichnet, 1)}
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
