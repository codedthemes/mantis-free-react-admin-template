import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

let timeout = null;

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  // DGemeinkostenPlangewinn START
  useEffect(() => {
    const reCalculateDGPSValues = () => {
      const H8 = values.gemeinkosten_H49 + values.gemeinkosten_I49 || 0;
      const H9 = values.gk_deckung_H43 || 0;
      const H10 = H8 - H9 || 0;
      const H11 = values.pk_produktiv_O36;
      const H12 = H11 ? H10 / H11 : 0;
      const H15 = H11;
      const H16 = H15 ? values.gk_deckung_H14 / H15 : 0;

      if (H8 !== values.gk_stundensaetze_H8) {
        setFieldValue('gk_stundensaetze_H8', H8);
      }
      if (H9 !== values.gk_stundensaetze_H9) {
        setFieldValue('gk_stundensaetze_H9', H9);
      }
      if (H10 !== values.gk_stundensaetze_H10) {
        setFieldValue('gk_stundensaetze_H10', H10);
      }
      if (H11 !== values.gk_stundensaetze_H11) {
        setFieldValue('gk_stundensaetze_H11', H11);
      }
      if (H12 !== values.gk_stundensaetze_H12) {
        setFieldValue('gk_stundensaetze_H12', H12);
      }
      if (H15 !== values.gk_stundensaetze_H15) {
        setFieldValue('gk_stundensaetze_H15', H15);
      }
      if (H16 !== values.gk_stundensaetze_H16) {
        setFieldValue('gk_stundensaetze_H16', H16);
      }
    };

    timeout = setTimeout(() => {
      reCalculateDGPSValues();
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    setFieldValue,
    values.gemeinkosten_H49,
    values.gemeinkosten_I49,
    values.gk_deckung_H14,
    values.gk_deckung_H43,
    values.gk_stundensaetze_H10,
    values.gk_stundensaetze_H11,
    values.gk_stundensaetze_H12,
    values.gk_stundensaetze_H15,
    values.gk_stundensaetze_H16,
    values.gk_stundensaetze_H8,
    values.gk_stundensaetze_H9,
    values.pk_produktiv_O36
  ]);
  // DGemeinkostenPlangewinn ENDE

  // AufschlagssaetzePK START
  useEffect(() => {
    const reCalculateDGPSValues = () => {
      const F23 = values.std_verrechnungssaetze_I10 || 0;
      const G23 = values.pk_produktiv_O20 || 0;
      const H23 = F23 * G23;
      const H29 = ((values.gk_stundensaetze_H10 || 0) / H23) * 100;
      const H33 = F23 * values.gk_stundensaetze_H29;
      const H38 = ((values.gk_stundensaetze_H10 || 0) / H23) * 100;
      const H42 = F23 * H38;

      if (F23 !== values.gk_stundensaetze_F23) {
        setFieldValue('gk_stundensaetze_F23', F23);
        setFieldValue('gk_stundensaetze_F33', F33);
      }
      if (G23 !== values.gk_stundensaetze_G23) {
        setFieldValue('gk_stundensaetze_G23', G23);
      }
      if (H23 !== values.gk_stundensaetze_H23) {
        setFieldValue('gk_stundensaetze_H23', H23);
        setFieldValue('gk_stundensaetze_H25', H25);
      }
      if (H29 !== values.gk_stundensaetze_H29) {
        setFieldValue('gk_stundensaetze_H29', H29);
      }
      if (H33 !== values.gk_stundensaetze_H33) {
        setFieldValue('gk_stundensaetze_H33', H33);
      }
      if (H38 !== values.gk_stundensaetze_H38) {
        setFieldValue('gk_stundensaetze_H38', H38);
      }
      if (H42 !== values.gk_stundensaetze_H42) {
        setFieldValue('gk_stundensaetze_H42', H42);
      }
    };

    timeout = setTimeout(() => {
      reCalculateDGPSValues();
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    setFieldValue,
    values.gk_stundensaetze_F23,
    values.gk_stundensaetze_F33,
    values.gk_stundensaetze_G23,
    values.gk_stundensaetze_H10,
    values.gk_stundensaetze_H23,
    values.gk_stundensaetze_H29,
    values.gk_stundensaetze_H33,
    values.pk_produktiv_O20,
    values.std_verrechnungssaetze_I10
  ]);
  // AufschlagssaetzePK ENDE

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
