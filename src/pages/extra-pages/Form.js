import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Typography, Grid, TextField, Button, CircularProgress } from '@mui/material';

// formik
import { Formik, Form, FieldArray, Field } from 'formik';
import FieldTemplate from '../../components/formComponents/FieldTemplate/index';
import { useTranslation } from 'react-i18next';
import StundensatzRechnerValueUpdater from '../../components/formComponents/CalculationUpdater/index';

// project import
import MainCard from 'components/MainCard';
import ButtonBar from 'components/formComponents/ButtonBar/index';
import { UserContext } from 'context/user/user';

// ==============================|| SAMPLE PAGE ||============================== //

const FormComponent = () => {
  const navigate = useNavigate();
  const { activeFormId, activeFormData, setActiveFormId } = useContext(UserContext);
  const activeFormTitle = useMemo(() => activeFormData?.title, [activeFormData]);
  const { t } = useTranslation();
  const { formId } = useParams();

  useEffect(() => {
    if (!formId) {
      navigate('/');
    } else {
      if (formId !== activeFormId) {
        setActiveFormId(formId);
      }
    }
  }, [activeFormId, formId, setActiveFormId, navigate]);

  const onSubmit = useCallback(async (values, _formikBag) => {
    console.log('submit', values);
  }, []);

  const content = useMemo(() => {
    if (activeFormData) {
      console.log('activeFormData.values', activeFormData.values);
      return (
        <MainCard>
          <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
            Basisangaben
          </Typography>
          <Formik initialValues={activeFormData.values || {}} onSubmit={onSubmit}>
            {({ values = {}, errors = {}, isSubmitting, handleChange, handleBlur, touched = {} }) => (
              <Form autoComplete="off">
                <StundensatzRechnerValueUpdater />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={'auto'}>
                    <Field
                      component={TextField}
                      id="fullName"
                      name="fullName"
                      label="Full name"
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.fullName && Boolean(errors.fullName)}
                      helperText={touched.fullName && errors.fullName}
                      sx={{ mb: 3 }}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <Field
                      component={TextField}
                      id="firstField"
                      name="firstField"
                      label="FirstField"
                      value={values.firstField}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.firstField && Boolean(errors.firstField)}
                      helperText={touched.firstField && errors.firstField}
                      sx={{ mb: 3 }}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <TextField
                      id="secondField"
                      name="secondField"
                      label="SecondField"
                      value={values.secondField}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.secondField && Boolean(errors.secondField)}
                      helperText={touched.secondField && errors.secondField}
                      sx={{ mb: 3 }}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <TextField
                      id="resultField"
                      name="resultField"
                      label="ResultField"
                      value={values.resultField}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.resultField && Boolean(errors.resultField)}
                      helperText={touched.resultField && errors.resultField}
                      InputProps={{
                        readOnly: true
                      }}
                      sx={{ mb: 3 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      sx={{ mb: 3 }}
                    />
                    <FieldTemplate name="title">
                      <Field component={TextField} id="title" name="title" sx={{ mb: 3 }} label={t('form.fields.testField.label')} />
                    </FieldTemplate>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Field
                      component={TextField}
                      sx={{ mb: 3 }}
                      id="donationsAmount"
                      name="donationsAmount"
                      type="number"
                      label="Donation"
                      style={{ width: '100%' }}
                    />
                  </Grid>

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
                              <Button
                                variant="contained"
                                disabled={isSubmitting}
                                onClick={() => remove(index)}
                                style={{ marginTop: '10px' }}
                              >
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
                  <Grid item>
                    <Button
                      disabled={isSubmitting}
                      variant="contained"
                      color="primary"
                      type="submit"
                      startIcon={isSubmitting ? <CircularProgress size="0.9rem" /> : undefined}
                    >
                      {isSubmitting ? 'Submitting' : 'Submit'}
                    </Button>
                  </Grid>
                  <Grid item>
                    <ButtonBar />
                  </Grid>
                </Grid>
                <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
              </Form>
            )}
          </Formik>
        </MainCard>
      );
    }

    return 'loading';
  }, [activeFormData, t]);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h1">Formular{activeFormTitle ? `: ${activeFormTitle}` : ''}</Typography>
      </Grid>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        {content}
      </Grid>
    </Grid>
  );
};

export default FormComponent;
