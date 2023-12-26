import React, { useContext, useCallback } from 'react';

// project import
import ButtonBar from 'components/formComponents/ButtonBar/index';
import { Formik, Form } from 'formik';
import CalculationUpdater from '../CalculationUpdater/index';
import Start from './Start';
import Materialgemeinkosten from './Materialgemeinkosten';
import Personalgemeinkosten from './Personalgemeinkosten';
import Sachkosten from './Sachkosten';
import Zusatzkosten from './Zusatzkosten';
import { UserContext } from 'context/user';

const TestForm = () => {
  const { activeFormData } = useContext(UserContext);
  const onSubmit = useCallback(async (values) => {
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
          <Materialgemeinkosten />
          <Personalgemeinkosten />
          <Sachkosten />
          <Zusatzkosten />
          <ButtonBar />
        </Form>
      )}
    </Formik>
  );
};

export default TestForm;
