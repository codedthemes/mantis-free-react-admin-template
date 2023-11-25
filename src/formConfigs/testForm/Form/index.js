import React, { useContext, useCallback } from 'react';

// project import
import ButtonBar from 'components/formComponents/ButtonBar/index';
import { Formik, Form } from 'formik';
import StundensatzRechnerValueUpdater from 'components/formComponents/CalculationUpdater/index';
import Start from './Start';
import Annahmen from './Annahmen';
import { UserContext } from 'context/user';
import Test from './Test';
import Produktivstunden from './Produktivstunden';
import Lohnnebenkostensatz from './Lohnnebenkostensatz';

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
          <StundensatzRechnerValueUpdater />
          <Start />
          <Annahmen />
          <Produktivstunden />
          <Lohnnebenkostensatz />
          <Test />
          <ButtonBar />
        </Form>
      )}
    </Formik>
  );
};

export default TestForm;
