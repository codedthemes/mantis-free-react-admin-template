import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

let timeout = null;

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  // Stundenverrechnungssatz START
  useEffect(() => {
    const reCalculateSVSValues = () => {
      const G8 = values.pk_produktiv_Q36 || 0;
      const G9 = (G8 * (values.annahmen_I46 || 0)) / 100;
      const G10 = G8 + G9 || 0;
      const G11 = values.gk_stundensaetze_H12 || 0;
      const G12 = G10 + G11 || 0;
      const G13 = values.gk_stundensaetze_H16 || 0;
      const G14 = G12 + G13 || 0;
      const G15 = G14 && G10 ? (G14 / G10) * 100 : 0;

      if (G8 !== values.std_verrechnungssaetze_G8) {
        setFieldValue('std_verrechnungssaetze_G8', G8);
      }
      if (G9 !== values.std_verrechnungssaetze_G9) {
        setFieldValue('std_verrechnungssaetze_G9', G9);
      }
      if (G10 !== values.std_verrechnungssaetze_G10) {
        setFieldValue('std_verrechnungssaetze_G10', G10);
      }
      if (G11 !== values.std_verrechnungssaetze_G11) {
        setFieldValue('std_verrechnungssaetze_G11', G11);
      }
      if (G12 !== values.std_verrechnungssaetze_G12) {
        setFieldValue('std_verrechnungssaetze_G12', G12);
      }
      if (G13 !== values.std_verrechnungssaetze_G13) {
        setFieldValue('std_verrechnungssaetze_G13', G13);
      }
      if (G14 !== values.std_verrechnungssaetze_G14) {
        setFieldValue('std_verrechnungssaetze_G14', G14);
      }
      if (G15 !== values.std_verrechnungssaetze_G15) {
        setFieldValue('std_verrechnungssaetze_G15', G15);
      }
    };

    timeout = setTimeout(() => {
      reCalculateSVSValues();
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    setFieldValue,
    values.annahmen_I46,
    values.gk_stundensaetze_H12,
    values.gk_stundensaetze_H16,
    values.pk_produktiv_Q36,
    values.std_verrechnungssaetze_G10,
    values.std_verrechnungssaetze_G11,
    values.std_verrechnungssaetze_G12,
    values.std_verrechnungssaetze_G13,
    values.std_verrechnungssaetze_G14,
    values.std_verrechnungssaetze_G15,
    values.std_verrechnungssaetze_G8,
    values.std_verrechnungssaetze_G9
  ]);
  // Stundenverrechnungssatz ENDE

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
