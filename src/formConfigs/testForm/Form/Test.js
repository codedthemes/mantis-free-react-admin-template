import React from 'react';

// material-ui
import { Typography, Grid, TextField, Button, Divider, ButtonGroup, CardContent } from '@mui/material';

// project import
import Conditional from 'components/formComponents/Conditional/index';
import { FieldArray, Field, useFormikContext } from 'formik';
import MainCard from 'components/MainCard';
import FormSection from 'components/formComponents/FormSection/index';

const Test = () => {
  const { values, errors, touched, handleChange, handleBlur, isSubmitting } = useFormikContext();

  return (
    <FormSection title="TEST">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Validierung von Feldern
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="email"
            name="email"
            label="E-Mail"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mb: 2, mt: 2 }}>
            Konditionelle Felder
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="conditionalControlField"
            name="conditionalControlField"
            label="Kontrollfeld"
            value={values.conditionalControlField}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.conditionalControlField && Boolean(errors.conditionalControlField)}
            helperText={
              (touched.conditionalControlField && errors.conditionalControlField) ||
              'Tragen Sie hier "show" ein, um ein weiteres Feld anzuzeigen'
            }
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Conditional name="conditionalField">
            <Field
              component={TextField}
              id="conditionalField"
              name="conditionalField"
              label="Konditionelles Feld"
              value={values.conditionalField}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.conditionalField && Boolean(errors.conditionalField)}
              helperText={touched.conditionalField && errors.conditionalField}
              sx={{ mb: 2 }}
            />
          </Conditional>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mb: 2, mt: 2 }}>
            Listenfelder
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FieldArray name="testList">
            {({ push, remove }) => (
              <React.Fragment>
                {values.testList?.map((arrayField, index) => (
                  <MainCard key={index} content={false} sx={{ mb: 2 }}>
                    <CardContent>
                      <Grid container item spacing={2}>
                        <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center' }}>
                          <Field
                            component={TextField}
                            name={`testList.${index}.feld1`}
                            id={`testList.${index}.feld1`}
                            label="Feld 1"
                            sx={{ mb: 3 }}
                            value={arrayField.feld1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.testList?.[index].feld1 && Boolean(errors.testList?.[index].feld1)}
                            helperText={touched.testList?.[index].feld1 && errors.testList?.[index].feld1}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Field
                            component={TextField}
                            name={`testList.${index}.feld2`}
                            id={`testList.${index}.feld2`}
                            label="Feld 2"
                            type="number"
                            value={arrayField.feld2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.feld2?.[index].feld2 && Boolean(errors.feld2?.[index].feld2)}
                            helperText={touched.feld2?.[index].feld2 && errors.feld2?.[index].feld2}
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: -2 }}>
                          <ButtonGroup>
                            <Button variant="contained" color="secondary" disabled={isSubmitting} onClick={() => remove(index)}>
                              Löschen
                            </Button>
                          </ButtonGroup>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </MainCard>
                ))}

                <Grid item>{typeof errors.testList === 'string' ? <Typography color="error">{errors.testList}</Typography> : null}</Grid>
                <Grid item xs={12}>
                  <Button variant="contained" onClick={() => push({ feld1: '', feld2: 0 })} disabled={isSubmitting}>
                    neuen Eintrag hinzufügen
                  </Button>
                </Grid>
              </React.Fragment>
            )}
          </FieldArray>
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ my: 4 }} />
        </Grid>
        <pre style={{ maxWidth: '100%' }}>{JSON.stringify({ values, errors }, null, 4)}</pre>
      </Grid>
    </FormSection>
  );
};

export default Test;
