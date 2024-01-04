import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

let timeout = null;

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  // Stundenverrechnungssatz START
  useEffect(() => {
    const reCalculateDBZValues = () => {
      const J10 = values.pk_produktiv_O36 || 0;
      const I12 = values.pk_produktiv_P42 || 0;
      const J12 = I12 && J10 ? I12 / J10 : 0;
      const I13 = values.gemeinkosten_H49 || 0;
      const J13 = I13 && J10 ? I13 / J10 : 0;
      const I14 = I12 + I13;
      const J14 = J12 + J13;
      const I15 = values.gemeinkosten_I53 || 0;
      const J15 = I15 && J10 ? I15 / J10 : 0;
      const I16 = values.gk_stundensaetze_H9 || 0;
      const J16 = I16 && J10 ? I16 / J10 : 0;
      const I17 = I14 + I15 - I16;
      const J17 = J14 + J15 - J16;
      const L17 = J15 - J16;
      const I18 = values.gemeinkosten_I51 || 0;
      const J18 = I18 && J10 ? I18 / J10 : 0;
      const I19 = I17 + I18;
      const J19 = J17 + J18;
      const L19 = L17 + J18;
      const I20 = values.gk_stundensaetze_H14 || 0;
      const J20 = I20 && J10 ? I20 / J10 : 0;
      const I21 = I19 * I20;
      const J21 = J19 + J20;
      const L21 = L19 + J20;
      const J26 = J14;
      const J27 = values.deckungsbeitraege_J25 - J26;
      const J29 = J27 && L17 && J27 >= L17;
      const J31 = J27 && L19 && J27 >= L19;
      const J33 = J27 && L21 && J27 >= L21;

      if (J10 !== values.deckungsbeitraege_J10) {
        setFieldValue('deckungsbeitraege_J10', J10);
      }
      if (I12 !== values.deckungsbeitraege_I12) {
        setFieldValue('deckungsbeitraege_I12', I12);
      }
      if (J12 !== values.deckungsbeitraege_J12) {
        setFieldValue('deckungsbeitraege_J12', J12);
      }
      if (I13 !== values.deckungsbeitraege_I13) {
        setFieldValue('deckungsbeitraege_I13', I13);
      }
      if (J13 !== values.deckungsbeitraege_J13) {
        setFieldValue('deckungsbeitraege_J13', J13);
      }
      if (I14 !== values.deckungsbeitraege_I14) {
        setFieldValue('deckungsbeitraege_I14', I14);
      }
      if (J14 !== values.deckungsbeitraege_J14) {
        setFieldValue('deckungsbeitraege_J14', J14);
        setFieldValue('deckungsbeitraege_J26', J26);
      }
      if (I15 !== values.deckungsbeitraege_I15) {
        setFieldValue('deckungsbeitraege_I15', I15);
      }
      if (J15 !== values.deckungsbeitraege_J15) {
        setFieldValue('deckungsbeitraege_J15', J15);
      }
      if (I16 !== values.deckungsbeitraege_I16) {
        setFieldValue('deckungsbeitraege_I16', I16);
      }
      if (J16 !== values.deckungsbeitraege_J16) {
        setFieldValue('deckungsbeitraege_J16', J16);
      }
      if (I17 !== values.deckungsbeitraege_I17) {
        setFieldValue('deckungsbeitraege_I17', I17);
      }
      if (J17 !== values.deckungsbeitraege_J17) {
        setFieldValue('deckungsbeitraege_J17', J17);
      }
      if (L17 !== values.deckungsbeitraege_L17) {
        setFieldValue('deckungsbeitraege_L17', L17);
      }
      if (I18 !== values.deckungsbeitraege_I18) {
        setFieldValue('deckungsbeitraege_I18', I18);
      }
      if (J18 !== values.deckungsbeitraege_J18) {
        setFieldValue('deckungsbeitraege_J18', J18);
      }
      if (I19 !== values.deckungsbeitraege_I19) {
        setFieldValue('deckungsbeitraege_I19', I19);
      }
      if (J19 !== values.deckungsbeitraege_J19) {
        setFieldValue('deckungsbeitraege_J19', J19);
      }
      if (L19 !== values.deckungsbeitraege_L19) {
        setFieldValue('deckungsbeitraege_L19', L19);
      }
      if (I20 !== values.deckungsbeitraege_I20) {
        setFieldValue('deckungsbeitraege_I20', I20);
      }
      if (J20 !== values.deckungsbeitraege_J20) {
        setFieldValue('deckungsbeitraege_J20', J20);
      }
      if (I21 !== values.deckungsbeitraege_I21) {
        setFieldValue('deckungsbeitraege_I21', I21);
      }
      if (J21 !== values.deckungsbeitraege_J21) {
        setFieldValue('deckungsbeitraege_J21', J21);
      }
      if (L21 !== values.deckungsbeitraege_L21) {
        setFieldValue('deckungsbeitraege_L21', L21);
      }
      if (J26 !== values.deckungsbeitraege_J26) {
        setFieldValue('deckungsbeitraege_J26', J26);
      }
      if (J27 !== values.deckungsbeitraege_J27) {
        setFieldValue('deckungsbeitraege_J27', J27);
      }
      if (J29 !== values.deckungsbeitraege_J29) {
        setFieldValue('deckungsbeitraege_J29', J29);
      }
      if (J31 !== values.deckungsbeitraege_J31) {
        setFieldValue('deckungsbeitraege_J31', J31);
      }
      if (J33 !== values.deckungsbeitraege_J33) {
        setFieldValue('deckungsbeitraege_J33', J33);
      }
    };

    timeout = setTimeout(() => {
      reCalculateDBZValues();
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line prettier/prettier
  }, [setFieldValue, values.deckungsbeitraege_I12, values.deckungsbeitraege_I13, values.deckungsbeitraege_I14, values.deckungsbeitraege_I15, values.deckungsbeitraege_I16, values.deckungsbeitraege_I17, values.deckungsbeitraege_I18, values.deckungsbeitraege_I19, values.deckungsbeitraege_I20, values.deckungsbeitraege_I21, values.deckungsbeitraege_J10, values.deckungsbeitraege_J12, values.deckungsbeitraege_J13, values.deckungsbeitraege_J14, values.deckungsbeitraege_J15, values.deckungsbeitraege_J16, values.deckungsbeitraege_J17, values.deckungsbeitraege_J18, values.deckungsbeitraege_J19, values.deckungsbeitraege_J20, values.deckungsbeitraege_J21, values.deckungsbeitraege_J25, values.deckungsbeitraege_J26, values.deckungsbeitraege_J27, values.deckungsbeitraege_J29, values.deckungsbeitraege_J31, values.deckungsbeitraege_J33, values.deckungsbeitraege_L17, values.deckungsbeitraege_L19, values.deckungsbeitraege_L21, values.gemeinkosten_H49, values.gemeinkosten_I51, values.gemeinkosten_I53, values.gk_stundensaetze_H14, values.gk_stundensaetze_H9, values.pk_produktiv_O36, values.pk_produktiv_P42]);
  // Stundenverrechnungssatz ENDE

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
