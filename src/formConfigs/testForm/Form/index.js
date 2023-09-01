import React, { useContext, useCallback } from 'react';

// material-ui
import { Typography, Grid, TextField, Button } from '@mui/material';

// project import
import ButtonBar from 'components/formComponents/ButtonBar/index';
import Conditional from 'components/formComponents/Conditional/index';
import { Formik, Form, FieldArray, Field } from 'formik';
import StundensatzRechnerValueUpdater from 'components/formComponents/CalculationUpdater/index';
import Annahmen from './Annahmen';
import { UserContext } from 'context/user/user';

const TestForm = () => {
  const { activeFormData } = useContext(UserContext);
  const onSubmit = useCallback(async (values, _formikBag) => {
    console.log('submit', values);
  }, []);
  const initialValues = {
    ...(activeFormData.values || {}),
    letzteAenderung: activeFormData?.values?.lastChanged
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values = {}, errors = {}, isSubmitting, handleChange, handleBlur, touched = {} }) => (
        <Form autoComplete="off">
          <StundensatzRechnerValueUpdater />
          <Annahmen />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FieldArray name="donations">
                {({ push, remove }) => (
                  <React.Fragment>
                    <Grid item>
                      <Typography variant="h5">All your donations</Typography>
                    </Grid>

                    {values.donations?.map((arrayField, index) => (
                      <Grid container item key={index} spacing={2}>
                        <Grid item xs={12} sm="auto" style={{ display: 'flex', alignItems: 'center' }}>
                          <Field
                            component={TextField}
                            name={`donations.${index}.institution`}
                            id={`donations.${index}.institution`}
                            label="Institution"
                            sx={{ mb: 3 }}
                            value={arrayField.institution}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.donations?.[index].institution && Boolean(errors.donations?.[index].institution)}
                            helperText={touched.donations?.[index].institution && errors.donations?.[index].institution}
                          />
                        </Grid>
                        <Grid item xs={12} sm="auto">
                          <Field
                            component={TextField}
                            name={`donations.${index}.donation`}
                            id={`donations.${index}.donation`}
                            label="Spende"
                            type="number"
                            sx={{ mb: 3 }}
                            value={arrayField.donation}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.donations?.[index].donation && Boolean(errors.donations?.[index].donation)}
                            helperText={touched.donations?.[index].donation && errors.donations?.[index].donation}
                          />
                        </Grid>
                        <Grid item>
                          <Button variant="contained" disabled={isSubmitting} onClick={() => remove(index)} style={{ marginTop: '10px' }}>
                            Delete
                          </Button>
                        </Grid>
                      </Grid>
                    ))}

                    <Grid item>
                      {typeof errors.donations === 'string' ? <Typography color="error">{errors.donations}</Typography> : null}
                    </Grid>

                    <Grid item>
                      <Button variant="contained" onClick={() => push({ institution: '', percentage: 0 })} disabled={isSubmitting}>
                        Add Donation
                      </Button>
                    </Grid>
                  </React.Fragment>
                )}
              </FieldArray>
            </Grid>
            <Grid item xs={12}>
              <ButtonBar />
            </Grid>
          </Grid>
          <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default TestForm;
