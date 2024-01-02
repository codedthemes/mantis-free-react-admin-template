import React, { useContext, useCallback } from 'react';

// project import
import ButtonBar from 'components/formComponents/ButtonBar/index';
import { Formik, Form } from 'formik';
import CalculationUpdater from '../CalculationUpdater/index';
import Start from './Start';
import Zuschlaege from './Zuschlaege';
import { UserContext } from 'context/user';
import { getInitialGemeinkostenCategory } from '../getInitialGemeinkostenData';
import Zusammenfassung from './Zusammenfassung';

const GKDeckung = () => {
  const { activeFormData } = useContext(UserContext);
  const onSubmit = useCallback(async (values) => {
    console.log('submit', values);
  }, []);
  const initialValues = {
    ...(activeFormData.values || {}),
    formTitle: activeFormData.title,
    letzteAenderung: activeFormData?.values?.lastChanged,
    gk_deckung_zuschlaege: activeFormData.values.gk_deckung_zuschlaege || [getInitialGemeinkostenCategory()]
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form autoComplete="off">
          <CalculationUpdater />
          <Start />
          <Zuschlaege />
          <Zusammenfassung />
          <ButtonBar />
        </Form>
      )}
    </Formik>
  );
};

export default GKDeckung;
