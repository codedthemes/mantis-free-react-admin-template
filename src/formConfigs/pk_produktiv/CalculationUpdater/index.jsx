import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

let timeout = null;

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  useEffect(() => {
    if (!values.pk_produktiv_mitarbeiter || values.pk_produktiv_mitarbeiter?.length === 0) {
      setFieldValue('pk_produktiv_mitarbeiter.0', {});
    }

    const reCalculateMaValues = () => {
      let pk_produktiv_anwesenheitsEntgeltGesamt = 0;

      values.pk_produktiv_mitarbeiter?.forEach((ma, index) => {
        const nichtanwesenheitsstundenGesamt =
          0 + (ma.urlaubStd || 0) + (ma.krankheitStd || 0) + (ma.fortbildungStd || 0) + (ma.sonstigeAbwesenheitenStd || 0);
        const anwesenheitsStdMa = (ma.sollarbeitsstdPA || 0) - nichtanwesenheitsstundenGesamt;
        const direktVerrechnet = ((ma.sollarbeitsstdPA || 0) * (ma.direktVerrechenbar || 100)) / 100;
        const anwesenheitsentgelt = direktVerrechnet * ((ma.bruttoStundenentgeltStd || 0) + (ma.zulagenProStd || 0));

        pk_produktiv_anwesenheitsEntgeltGesamt += anwesenheitsentgelt;

        if (nichtanwesenheitsstundenGesamt !== ma.nichtanwesenheitsstundenGesamt) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.nichtanwesenheitsstundenGesamt`, nichtanwesenheitsstundenGesamt);
        }
        if (anwesenheitsStdMa !== ma.anwesenheitsStdMa) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.anwesenheitsStdMa`, anwesenheitsStdMa);
        }
        if (direktVerrechnet !== ma.direktVerrechnet) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.direktVerrechnet`, direktVerrechnet);
        }
        if (anwesenheitsentgelt !== ma.anwesenheitsentgelt) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.anwesenheitsentgelt`, anwesenheitsentgelt);
        }
      });

      if (pk_produktiv_anwesenheitsEntgeltGesamt !== values.pk_produktiv_anwesenheitsEntgeltGesamt) {
        setFieldValue(`pk_produktiv_anwesenheitsEntgeltGesamt`, pk_produktiv_anwesenheitsEntgeltGesamt);
      }
    };

    timeout = setTimeout(() => {
      reCalculateMaValues();
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [setFieldValue, values.pk_produktiv_mitarbeiter, values.pk_produktiv_anwesenheitsEntgeltGesamt, values.pk_produktiv_mitarbeiter?.length]);

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
