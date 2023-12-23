import React from 'react';

// material-ui
import { Grid, TextField, Divider, Button, ButtonGroup, Typography } from '@mui/material';

// formik
import { Field, FieldArray, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import { v4 as uuid } from 'uuid';
import getInitialMitarbeiterData from '../../helper/getInitialMitarbeiterData';

const Stammdaten = () => {
  const { values, errors, isSubmitting } = useFormikContext();

  return (
    <>
      <Typography variant="h2" sx={{ mb: { sm: 2, md: 3 }, mt: { sm: 4, md: 6, lg: 8 } }}>
        Personalkosten Allgemein
      </Typography>
      <FieldArray name="pk_allgemein_mitarbeiter">
        {({ push, remove }) => (
          <>
            {values.pk_allgemein_mitarbeiter?.map((arrayField, index) => (
              <>
                <FormSection
                  key={index}
                  title={`${values.pk_allgemein_mitarbeiter?.[index]?.vorname || 'Mitarbeiter'} ${
                    values.pk_allgemein_mitarbeiter?.[index]?.nachname || ''
                  }`}
                  description="Pflegen Sie hier allgemeine Angaben zu Ihrem Mitarbeiter ein."
                  defaultOpen={index === 0 && values.pk_allgemein_mitarbeiter?.length === 1}
                >
                  <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
                    <Grid item xs={12}>
                      <Divider sx={{ mt: 2, mb: 4 }} />
                    </Grid>
                  </Grid>
                  <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
                    <>
                      <Grid item xs={12}>
                        <ReadOnlyBox alwaysOpen>
                          <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={TextField}
                                id={`pk_allgemein_mitarbeiter.${index}.S9`}
                                name={`pk_allgemein_mitarbeiter.${index}.S9`}
                                label="Anwesenheitsentgelt (gesamt, in EUR)"
                                value={values.pk_allgemein_mitarbeiter?.[index]?.S9}
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
                {index === values.pk_allgemein_mitarbeiter?.length - 1 && (
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
            {(!values.pk_allgemein_mitarbeiter || values.pk_allgemein_mitarbeiter?.length === 0) && (
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
