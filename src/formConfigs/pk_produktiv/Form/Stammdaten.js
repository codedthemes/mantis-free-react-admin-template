import React from 'react';

// material-ui
import { Grid, TextField, Divider, Button, ButtonGroup, Typography } from '@mui/material';

// formik
import { FastField, FieldArray, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import { v4 as uuid } from 'uuid';
import getInitialMitarbeiterData from '../getInitialMitarbeiterData';
import formFloat from 'utils/formUtils/formFloat';

const Stammdaten = () => {
  const { values, errors, isSubmitting } = useFormikContext();

  return (
    <>
      <Typography variant="h2" sx={{ mb: { sm: 2, md: 3 }, mt: { sm: 4, md: 6, lg: 8 } }}>
        Personalkosten: Löhne Produktivbereich
      </Typography>
      <FieldArray name="pk_produktiv_mitarbeiter">
        {({ push, remove }) => (
          <>
            {values.pk_produktiv_mitarbeiter?.map((arrayField, index) => (
              <React.Fragment key={arrayField.userId || index}>
                <FormSection
                  key={index}
                  title={`${arrayField?.vorname || 'Mitarbeiter'} ${arrayField?.nachname || ''}`}
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
                        <FastField name={`pk_produktiv_mitarbeiter.${index}.vorname`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Vorname"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              sx={{ mb: 2 }}
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField name={`pk_produktiv_mitarbeiter.${index}.nachname`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Nachname"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              sx={{ mb: 2 }}
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        &nbsp;
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField name={`pk_produktiv_mitarbeiter.${index}.E9`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Sollarbeitsstunden p.a. (ohne Feiertage)"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              type="number"
                              onWheel={(event) => event.target.blur()}
                              min="0"
                              sx={{ mb: 2 }}
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        &nbsp;
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField name={`pk_produktiv_mitarbeiter.${index}.F9`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Urlaub (in Stunden)"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              type="number"
                              onWheel={(event) => event.target.blur()}
                              min="0"
                              max="8760"
                              sx={{ mb: 2 }}
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField name={`pk_produktiv_mitarbeiter.${index}.G9`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Krankheit (in Stunden)"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              type="number"
                              onWheel={(event) => event.target.blur()}
                              min="0"
                              max="8760"
                              sx={{ mb: 2 }}
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField name={`pk_produktiv_mitarbeiter.${index}.H9`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Fortbildung (in Stunden)"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              type="number"
                              onWheel={(event) => event.target.blur()}
                              min="0"
                              max="8760"
                              sx={{ mb: 2 }}
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField name={`pk_produktiv_mitarbeiter.${index}.I9`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Sonstige Abwesenheiten (in Stunden)"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              type="number"
                              onWheel={(event) => event.target.blur()}
                              min="0"
                              max="8760"
                              sx={{ mb: 2 }}
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12}>
                        <ReadOnlyBox>
                          <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                            <Grid item xs={12} sm={6}>
                              <FastField name={`pk_produktiv_mitarbeiter.${index}.M9`}>
                                {({ field, meta }) => (
                                  <TextField
                                    {...field}
                                    label="Anwesenheit (in Std.)"
                                    error={meta?.touched && Boolean(meta.error)}
                                    helperText={meta?.touched && meta.error}
                                    InputProps={{
                                      readOnly: true
                                    }}
                                    sx={{ mb: 2 }}
                                  />
                                )}
                              </FastField>
                            </Grid>
                          </Grid>
                        </ReadOnlyBox>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        &nbsp;
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField name={`pk_produktiv_mitarbeiter.${index}.N9`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Davon direkt verrechenbar (in Prozent)"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              type="number"
                              onWheel={(event) => event.target.blur()}
                              min="0"
                              max="100"
                              sx={{ mb: 2 }}
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12}>
                        <ReadOnlyBox>
                          <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                            <Grid item xs={12} sm={6}>
                              <FastField name={`pk_produktiv_mitarbeiter.${index}.O9`}>
                                {({ field, meta }) => (
                                  <TextField
                                    {...field}
                                    value={formFloat(field.value, 2)}
                                    label="Direkt verrechnet (in Std.)"
                                    error={meta?.touched && Boolean(meta.error)}
                                    helperText={meta?.touched && meta.error}
                                    InputProps={{
                                      readOnly: true
                                    }}
                                    sx={{ mb: 2 }}
                                  />
                                )}
                              </FastField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <FastField name={`pk_produktiv_mitarbeiter.${index}.P9`}>
                                {({ field, meta }) => (
                                  <TextField
                                    {...field}
                                    value={formFloat(field.value, 2)}
                                    label="Nicht direkt verrechnet (in Std.)"
                                    error={meta?.touched && Boolean(meta.error)}
                                    helperText={meta?.touched && meta.error}
                                    InputProps={{
                                      readOnly: true
                                    }}
                                    sx={{ mb: 2 }}
                                  />
                                )}
                              </FastField>
                            </Grid>
                          </Grid>
                        </ReadOnlyBox>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        &nbsp;
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField name={`pk_produktiv_mitarbeiter.${index}.Q9`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Brutto Stundenentgelt (pro Stunde, in EUR)"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              type="number"
                              onWheel={(event) => event.target.blur()}
                              min="0"
                              sx={{ mb: 2 }}
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField name={`pk_produktiv_mitarbeiter.${index}.R9`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Durchschn. Zulagen pro Stdunde (in EUR)"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              type="number"
                              onWheel={(event) => event.target.blur()}
                              min="0"
                              sx={{ mb: 2 }}
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12}>
                        <ReadOnlyBox alwaysOpen>
                          <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                            <Grid item xs={12} sm={6}>
                              <FastField name={`pk_produktiv_mitarbeiter.${index}.S9`}>
                                {({ field, meta }) => (
                                  <TextField
                                    {...field}
                                    label="Anwesenheitsentgelt (gesamt, in EUR)"
                                    error={meta?.touched && Boolean(meta.error)}
                                    helperText={meta?.touched && meta.error}
                                    InputProps={{
                                      readOnly: true
                                    }}
                                    sx={{ mb: 2 }}
                                  />
                                )}
                              </FastField>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                              &nbsp;
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <FastField name={`pk_produktiv_mitarbeiter.${index}.U9`}>
                                {({ field, meta }) => (
                                  <TextField
                                    {...field}
                                    label="Verrechenbarkeit (direkt verrechnet, in EUR)"
                                    value={formFloat(field.value, 2)}
                                    error={meta?.touched && Boolean(meta.error)}
                                    helperText={meta?.touched && meta.error}
                                    InputProps={{
                                      readOnly: true
                                    }}
                                    sx={{ mb: 2 }}
                                  />
                                )}
                              </FastField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <FastField name={`pk_produktiv_mitarbeiter.${index}.V9`}>
                                {({ field, meta }) => (
                                  <TextField
                                    {...field}
                                    label="Verrechenbarkeit (direkt verrechnet, in EUR)"
                                    value={formFloat(field.value, 2)}
                                    error={meta?.touched && Boolean(meta.error)}
                                    helperText={meta?.touched && meta.error}
                                    InputProps={{
                                      readOnly: true
                                    }}
                                    sx={{ mb: 2 }}
                                  />
                                )}
                              </FastField>
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
                            onClick={() => push({ ...values.pk_produktiv_mitarbeiter?.[index], userId: uuid() })}
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
              </React.Fragment>
            ))}
            {(!values.pk_produktiv_mitarbeiter || values.pk_produktiv_mitarbeiter?.length === 0) && (
              <Button variant="contained" onClick={() => push({ userId: uuid() })} disabled={isSubmitting} sx={{ mb: 4 }}>
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
