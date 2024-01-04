import React from 'react';

// material-ui
import { Grid, TextField, Divider, Button, ButtonGroup, Typography } from '@mui/material';

// formik
import { FastField, Field, FieldArray, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import { v4 as uuid } from 'uuid';
import getInitialMitarbeiterData from '../getInitialMitarbeiterData';

const Stammdaten = () => {
  const { values, errors, isSubmitting } = useFormikContext();

  return (
    <>
      <Typography variant="h2" sx={{ mb: { sm: 2, md: 3 }, mt: { sm: 4, md: 6, lg: 8 } }}>
        Personalkosten: Gehälter allgemeiner Bereich
      </Typography>
      <FieldArray name="pk_allgemein_mitarbeiter">
        {({ push, remove }) => (
          <>
            {values.pk_allgemein_mitarbeiter?.map((arrayField, index) => (
              <React.Fragment key={arrayField.userId || index}>
                <FormSection
                  key={index}
                  title={`${arrayField?.vorname || 'Mitarbeiter'} ${arrayField?.nachname || ''}`}
                  description="Pflegen Sie hier allgemeine Angaben zu Ihrem Mitarbeiter ein."
                  defaultOpen={index === 0 && values.pk_allgemein_mitarbeiter?.length === 1}
                  onDelete={() => remove(index)}
                >
                  <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
                    <Grid item xs={12}>
                      <Divider sx={{ mt: 2, mb: 4 }} />
                    </Grid>
                  </Grid>
                  <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
                    <>
                      <Grid item xs={12} sm={6}>
                        <FastField name={`pk_allgemein_mitarbeiter.${index}.vorname`}>
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
                        <FastField name={`pk_allgemein_mitarbeiter.${index}.nachname`}>
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
                        <FastField name={`pk_allgemein_mitarbeiter.${index}.F14`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Beschäftigung von (Monat)"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              sx={{ mb: 2 }}
                              type="number"
                              onWheel={(event) => event.target.blur()}
                              min="1"
                              max="12"
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField name={`pk_allgemein_mitarbeiter.${index}.G14`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Beschäftigung bis (Monat)"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              sx={{ mb: 2 }}
                              type="number"
                              onWheel={(event) => event.target.blur()}
                              min="1"
                              max="12"
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField name={`pk_allgemein_mitarbeiter.${index}.I14`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Bruttoeinkommen (p.m., in EUR)"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              sx={{ mb: 2 }}
                              type="number"
                              onWheel={(event) => event.target.blur()}
                              min="0"
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField name={`pk_allgemein_mitarbeiter.${index}.J14`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Bruttoeinkommen gesamt (in EUR)"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              sx={{ mb: 2 }}
                              InputProps={{
                                readOnly: true
                              }}
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField name={`pk_allgemein_mitarbeiter.${index}.K14`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Sonderzahlungen (SZ)"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              sx={{ mb: 2 }}
                              type="number"
                              onWheel={(event) => event.target.blur()}
                              min="0"
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        &nbsp;
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <ReadOnlyBox alwaysOpen>
                          <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
                            <Grid item xs={12} sm={6}>
                              <FastField name={`pk_allgemein_mitarbeiter.${index}.L14`}>
                                {({ field, meta }) => (
                                  <TextField
                                    {...field}
                                    label="Brutto inkl. SZ (in EUR)"
                                    error={meta?.touched && Boolean(meta.error)}
                                    helperText={meta?.touched && meta.error}
                                    sx={{ mb: 2 }}
                                    InputProps={{
                                      readOnly: true
                                    }}
                                  />
                                )}
                              </FastField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Field name={`pk_allgemein_mitarbeiter.${index}.M14`}>
                                {({ field, meta }) => (
                                  <TextField
                                    {...field}
                                    label={`Lohnnebenkosten ${values.pk_allgemein_K5 ? `(${values.pk_allgemein_K5}%) ` : ''}(in EUR)`}
                                    error={meta?.touched && Boolean(meta.error)}
                                    helperText={meta?.touched && meta.error}
                                    sx={{ mb: 2 }}
                                    InputProps={{
                                      readOnly: true
                                    }}
                                  />
                                )}
                              </Field>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <FastField name={`pk_allgemein_mitarbeiter.${index}.N14`}>
                                {({ field, meta }) => (
                                  <TextField
                                    {...field}
                                    label="Gesamtkosten (p.a., in EUR)"
                                    error={meta?.touched && Boolean(meta.error)}
                                    helperText={meta?.touched && meta.error}
                                    sx={{ mb: 2 }}
                                    InputProps={{
                                      readOnly: true
                                    }}
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
                          <Button variant="outlined" color="error" disabled={isSubmitting} onClick={() => remove(index)}>
                            Mitarbeiter löschen
                          </Button>
                          <Button
                            variant="outlined"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={() => push({ ...values.pk_allgemein_mitarbeiter?.[index], userId: uuid() })}
                          >
                            Mitarbeiter duplizieren
                          </Button>
                        </ButtonGroup>
                      </Grid>
                    </>

                    <Grid item>
                      {typeof errors.pk_allgemein_mitarbeiter === 'string' ? (
                        <Typography color="error">{errors.pk_allgemein_mitarbeiter}</Typography>
                      ) : null}
                    </Grid>
                  </Grid>
                </FormSection>
              </React.Fragment>
            ))}
            <Button
              variant="contained"
              color="success"
              onClick={() => push(getInitialMitarbeiterData(values))}
              disabled={isSubmitting}
              sx={{ mb: 4 }}
            >
              Mitarbeiter hinzufügen
            </Button>
          </>
        )}
      </FieldArray>
    </>
  );
};

export default Stammdaten;
