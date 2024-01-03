import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

let timeout = null;

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  useEffect(() => {
    const reCalculateMzFlValues = () => {
      // Anwesenheitsentgeld (gesamt) START
      let H20 = 0;

      values.gk_deckung_zuschlaege?.forEach((category, outerIndex) => {
        let H12 = 0;

        category.fields?.forEach((item, innerIndex) => {
          const G8 = (item.E8 || 0) + ((item.E8 || 0) * (item.F8 || 0)) / 100;
          const H8 = (G8 || 0) - (item.E8 || 0);

          H12 += H8;
  
          if (G8 !== item.G8) {
            setFieldValue(`gk_deckung_zuschlaege.${outerIndex}.fields.${innerIndex}.G8`, G8);
          }
          if (H8 !== item.H8) {
            setFieldValue(`gk_deckung_zuschlaege.${outerIndex}.fields.${innerIndex}.H8`, H8);
          }
        });

        if (H12 !== category.H12) {
          setFieldValue(`gk_deckung_zuschlaege.${outerIndex}.H12`, H12);
        }

        H20 += H12;
      });

      if (H20 !== values.gk_deckung_H20) {
        setFieldValue(`gk_deckung_H20`, H20);
        setFieldValue(`gk_deckung_H43`, H20);
      }

      // Anwesenheitsentgeld (gesamt) ENDE
    };

    timeout = setTimeout(() => {
      reCalculateMzFlValues();
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [setFieldValue, values.gk_deckung_H20, values.gk_deckung_zuschlaege]);

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
