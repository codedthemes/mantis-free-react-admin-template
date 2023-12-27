import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

let timeout = null;

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  useEffect(() => {
    const reCalculateMzFlValues = () => {
      // Anwesenheitsentgeld (gesamt) START
      values.gk_deckung_zuschlaege?.forEach((mz_fl, index) => {
        const G8 = (mz_fl.E8 || 0) + ((mz_fl.E8 || 0) * (mz_fl.F8 || 0)) / 100;
        const H8 = (G8 || 0) - (mz_fl.E8 || 0);

        if (G8 !== mz_fl.G8) {
          setFieldValue(`gk_deckung_zuschlaege.${index}.G8`, G8);
        }
        if (H8 !== mz_fl.H8) {
          setFieldValue(`gk_deckung_zuschlaege.${index}.H8`, H8);
        }
      });
      // Anwesenheitsentgeld (gesamt) ENDE
    };

    timeout = setTimeout(() => {
      reCalculateMzFlValues();
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [setFieldValue, values.gk_deckung_zuschlaege]);

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
