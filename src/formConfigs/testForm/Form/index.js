import React, { useContext, useCallback } from 'react';

// material-ui
import { Grid, Divider } from '@mui/material';

// project import
import ButtonBar from 'components/formComponents/ButtonBar/index';
import { Formik, Form, FieldArray, Field } from 'formik';
import StundensatzRechnerValueUpdater from 'components/formComponents/CalculationUpdater/index';
import Annahmen from './Annahmen';
import { UserContext } from 'context/user/user';
import Test from './Test';

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
      {() => (
        <Form autoComplete="off">
          <StundensatzRechnerValueUpdater />
          <Annahmen />
          <Divider sx={{ my: 4 }} />
          <ButtonBar />
          <Divider sx={{ my: 4 }} />
          <Test />
        </Form>
      )}
    </Formik>
  );
};

export default TestForm;
