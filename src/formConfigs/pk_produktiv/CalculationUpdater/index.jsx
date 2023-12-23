import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import getInitialMitarbeiterData from './getInitialMitarbeiterData';

let timeout = null;

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  useEffect(() => {
    if (!values.pk_produktiv_mitarbeiter || values.pk_produktiv_mitarbeiter?.length === 0) {
      setFieldValue('pk_produktiv_mitarbeiter.0', getInitialMitarbeiterData(values));
    }
  }, [setFieldValue, values]);

  useEffect(() => {
    const reCalculateMaValues = () => {
      let pk_produktiv_P40 = 0;
      let pk_produktiv_Q40 = 0;
      let pk_produktiv_Q9_SUMME = 0;

      values.pk_produktiv_mitarbeiter?.forEach((ma, index) => {
        // Anwesenheitsentgeld (gesamt) START
        const J9 = 0 + (ma.F9 || 0) + (ma.G9 || 0) + (ma.H9 || 0) + (ma.I9 || 0);
        const M9 = (ma.E9 || 0) - J9;
        const O9 = (M9 * (ma.N9 || 100)) / 100;
        const P9 = M9 - O9;
        const S9 = M9 * ((ma.Q9 || 0) + (ma.R9 || 0));
        const U9 = O9 * ((ma.Q9 || 0) + (ma.R9 || 0));
        const V9 = P9 * ((ma.Q9 || 0) + (ma.R9 || 0));

        pk_produktiv_P40 += U9;
        pk_produktiv_Q40 += V9;
        pk_produktiv_Q9_SUMME += ma.Q9 || 0;

        if (J9 !== ma.J9) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.J9`, J9);
        }
        if (M9 !== ma.M9) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.M9`, M9);
        }
        if (O9 !== ma.O9) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.O9`, O9);
        }
        if (P9 !== ma.P9) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.P9`, P9);
        }
        if (S9 !== ma.S9) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.S9`, S9);
        }
        if (U9 !== ma.U9) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.U9`, U9);
        }
        if (V9 !== ma.V9) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.V9`, V9);
        }
      });

      const pk_produktiv_R40 = values.pk_produktiv_mitarbeiter.length ? pk_produktiv_Q9_SUMME / values.pk_produktiv_mitarbeiter.length : 0;

      const pk_produktiv_S40 = (pk_produktiv_P40 || 0) + (pk_produktiv_Q40 || 0);

      if (pk_produktiv_P40 !== values.pk_produktiv_P40) {
        setFieldValue(`pk_produktiv_P40`, pk_produktiv_P40);
      }
      if (pk_produktiv_Q40 !== values.pk_produktiv_Q40) {
        setFieldValue(`pk_produktiv_Q40`, pk_produktiv_Q40);
      }
      if (pk_produktiv_Q9_SUMME !== values.pk_produktiv_Q9_SUMME) {
        setFieldValue(`pk_produktiv_Q9_SUMME`, pk_produktiv_Q9_SUMME);
      }
      if (pk_produktiv_R40 !== values.pk_produktiv_R40) {
        setFieldValue(`pk_produktiv_R40`, pk_produktiv_R40);
      }
      if (pk_produktiv_S40 !== values.pk_produktiv_S40) {
        setFieldValue(`pk_produktiv_S40`, pk_produktiv_S40);
      }
      // Anwesenheitsentgeld (gesamt) ENDE
    };

    timeout = setTimeout(() => {
      reCalculateMaValues();
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    setFieldValue,
    values.pk_produktiv_mitarbeiter,
    values.pk_produktiv_P40,
    values.pk_produktiv_mitarbeiter.length,
    values.pk_produktiv_Q40,
    values.pk_produktiv_Q9_SUMME,
    values.pk_produktiv_R40,
    values.pk_produktiv_S40
  ]);

  useEffect(() => {
    const reCalculateLohnNKValues = () => {
      const P41 = ((values.annahmen_I46 || 0) / 100) * (values.pk_produktiv_P40 || 0);
      const Q41 = ((values.annahmen_I46 || 0) / 100) * (values.pk_produktiv_Q40 || 0);
      const R41 = ((values.annahmen_I46 || 0) / 100) * (values.pk_produktiv_R40 || 0);
      const S41 = (P41 || 0) + (Q41 || 0);
      const P42 = (P41 || 0) + (values.pk_produktiv_P40 || 0);
      const Q42 = (Q41 || 0) + (values.pk_produktiv_Q40 || 0);
      const R42 = (R41 || 0) + (values.pk_produktiv_R40 || 0);
      const S42 = (S41 || 0) + (values.pk_produktiv_S40 || 0);

      if (!values.pk_produktiv_P41 !== P41) {
        setFieldValue('pk_produktiv_P41', P41);
      }
      if (values.pk_produktiv_Q41 !== Q41) {
        setFieldValue('pk_produktiv_Q41', Q41);
      }
      if (values.pk_produktiv_R41 !== R41) {
        setFieldValue('pk_produktiv_R41', R41);
      }
      if (values.pk_produktiv_S41 !== S41) {
        setFieldValue('pk_produktiv_S41', S41);
      }
      if (values.pk_produktiv_P42 !== P42) {
        setFieldValue('pk_produktiv_P42', P42);
      }
      if (values.pk_produktiv_Q42 !== Q42) {
        setFieldValue('pk_produktiv_Q42', Q42);
      }
      if (values.pk_produktiv_R42 !== R42) {
        setFieldValue('pk_produktiv_R42', R42);
      }
      if (values.pk_produktiv_S42 !== S42) {
        setFieldValue('pk_produktiv_S42', S42);
      }
    };

    timeout = setTimeout(() => {
      reCalculateLohnNKValues();
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    setFieldValue,
    values.annahmen_I46,
    values.pk_produktiv_Q40,
    values.pk_produktiv_P40,
    values.pk_produktiv_P42,
    values.pk_produktiv_R40,
    values.pk_produktiv_Q41,
    values.pk_produktiv_R41,
    values.pk_produktiv_P41,
    values.pk_produktiv_S41,
    values.pk_produktiv_Q42,
    values.pk_produktiv_R42,
    values.pk_produktiv_S40,
    values.pk_produktiv_S42
  ]);

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
