import React from 'react';

// material-ui
import { Grid, TextField, Divider, Button, ButtonGroup, Typography } from '@mui/material';

// formik
import { FastField, FieldArray, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import { v4 as uuid } from 'uuid';
import formFloat from 'utils/formUtils/formFloat';

const MaterialzuschlagFremdleistungen = () => {
  const { values, errors, isSubmitting } = useFormikContext();

  return (
    <>
      <Typography variant="h2" sx={{ mb: { sm: 2, md: 3 }, mt: { sm: 4, md: 6, lg: 8 } }}>
        Materialzuschläge und Fremdleistungen
      </Typography>
      <FieldArray name="gk_deckung_zuschlaege">
        {({ push, remove }) => (
          <>
            {values.gk_deckung_zuschlaege?.map((arrayField, index) => (
              <React.Fragment key={arrayField.userId || index}>
                <FormSection
                  key={index}
                  title={arrayField?.D8 || 'Materialzuschlag oder Fremdleistung'}
                  description="Pflegen Sie hier Materialzuschläge und Fremdleistungszuschläge ein."
                  defaultOpen={index === 0 && values.gk_deckung_zuschlaege?.length === 1}
                >
                  <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
                    <Grid item xs={12}>
                      <Divider sx={{ mt: 2, mb: 4 }} />
                    </Grid>
                  </Grid>
                  <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
                    <Grid item xs={12} sm={6}>
                      <FastField name={`gk_deckung_zuschlaege.${index}.D8`}>
                        {({ field, meta }) => (
                          <TextField
                            {...field}
                            label="Bezeichnung"
                            error={meta?.touched && Boolean(meta.error)}
                            helperText={meta?.touched && meta.error}
                            sx={{ mb: 2 }}
                          />
                        )}
                      </FastField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      &nbsp;
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FastField name={`gk_deckung_zuschlaege.${index}.E8`}>
                        {({ field, meta }) => (
                          <TextField
                            {...field}
                            label="Einsatz  (in EUR)"
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
                      <FastField name={`gk_deckung_zuschlaege.${index}.F8`}>
                        {({ field, meta }) => (
                          <TextField
                            {...field}
                            label="Zuschlagssatz (in %)"
                            error={meta?.touched && Boolean(meta.error)}
                            helperText={meta?.touched && meta.error}
                            sx={{ mb: 2 }}
                            type="number"
                            onWheel={(event) => event.target.blur()}
                            min="0"
                            max="100"
                          />
                        )}
                      </FastField>
                    </Grid>
                    <Grid item xs={12}>
                      <ReadOnlyBox alwaysOpen>
                        <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
                          <Grid item xs={12} sm={6}>
                            <FastField name={`gk_deckung_zuschlaege.${index}.G8`}>
                              {({ field, meta }) => (
                                <TextField
                                  {...field}
                                  value={formFloat(field.value, 1)}
                                  label="Erlös (in EUR)"
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
                            <FastField name={`gk_deckung_zuschlaege.${index}.H8`}>
                              {({ field, meta }) => (
                                <TextField
                                  {...field}
                                  value={formFloat(field.value, 1)}
                                  label="Zuschlag (in EUR)"
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
                    <Grid item xs={12}>
                      &nbsp;
                    </Grid>
                  </Grid>
                  <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
                    <>
                      <Grid item xs={12}>
                        <ButtonGroup columnSpacing="2">
                          <Button variant="contained" color="primary" disabled={isSubmitting} onClick={() => remove(index)}>
                            Eintrag löschen
                          </Button>
                          <Button
                            variant="outlined"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={() => push({ ...values.gk_deckung_zuschlaege?.[index], userId: uuid() })}
                          >
                            Eintrag duplizieren
                          </Button>
                        </ButtonGroup>
                      </Grid>
                    </>

                    <Grid item>
                      {typeof errors.gk_deckung_zuschlaege === 'string' ? (
                        <Typography color="error">{errors.gk_deckung_zuschlaege}</Typography>
                      ) : null}
                    </Grid>
                  </Grid>
                </FormSection>
                {index === values.gk_deckung_zuschlaege?.length - 1 && (
                  <Button variant="contained" onClick={() => push({})} disabled={isSubmitting} sx={{ mb: 4 }}>
                    neuen Materialzuschlag oder Fremdleistung hinzufügen
                  </Button>
                )}
              </React.Fragment>
            ))}
            {(!values.gk_deckung_zuschlaege || values.gk_deckung_zuschlaege?.length === 0) && (
              <Button variant="contained" onClick={() => push({ userId: uuid() })} disabled={isSubmitting} sx={{ mb: 4 }}>
                neuen Materialzuschlag oder Fremdleistung hinzufügen
              </Button>
            )}
          </>
        )}
      </FieldArray>
    </>
  );
};

export default MaterialzuschlagFremdleistungen;
