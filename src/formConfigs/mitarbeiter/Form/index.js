import React, { useContext, useCallback } from 'react';

// project import
import ButtonBar from 'components/formComponents/ButtonBar/index';
import { Formik, Form } from 'formik';
import CalculationUpdater from '../CalculationUpdater/index';
import Start from './Start';
import Stammdaten from './Stammdaten';
import { UserContext } from 'context/user';
import Test from './Test';

const TestForm = () => {
  const { activeFormData } = useContext(UserContext);
  const onSubmit = useCallback(async (values, _formikBag) => {
    console.log('submit', values);
  }, []);
  const initialValues = {
    ...(activeFormData.values || {}),
    formTitle: activeFormData.title,
    letzteAenderung: activeFormData?.values?.lastChanged
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form autoComplete="off">
          <CalculationUpdater />
          <Start />
          <Stammdaten />
          <Test />
          <ButtonBar />
        </Form>
      )}
    </Formik>
  );
};

export default TestForm;
