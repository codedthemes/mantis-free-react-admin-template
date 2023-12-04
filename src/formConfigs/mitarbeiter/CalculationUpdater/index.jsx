import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

let timeout = null;

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  useEffect(() => {
    if (!values.mitarbeiter_mitarbeiter || values.mitarbeiter_mitarbeiter?.length === 0) {
      setFieldValue('mitarbeiter_mitarbeiter.0', {});
    }

    const reCalculateMaValues = () => {
      let mitarbeiter_anwesenheitsEntgeltGesamt = 0;

      values.mitarbeiter_mitarbeiter?.forEach((ma, index) => {
        const nichtanwesenheitsstundenGesamt =
          0 + (ma.urlaubStd || 0) + (ma.krankheitStd || 0) + (ma.fortbildungStd || 0) + (ma.sonstigeAbwesenheitenStd || 0);
        const anwesenheitsStdMa = (ma.sollarbeitsstdPA || 0) - nichtanwesenheitsstundenGesamt;
        const direktVerrechnet = ((ma.sollarbeitsstdPA || 0) * (ma.direktVerrechenbar || 100)) / 100;
        const anwesenheitsentgelt = direktVerrechnet * ((ma.bruttoStundenentgeltStd || 0) + (ma.zulagenProStd || 0));

        mitarbeiter_anwesenheitsEntgeltGesamt += anwesenheitsentgelt;

        if (nichtanwesenheitsstundenGesamt !== ma.nichtanwesenheitsstundenGesamt) {
          setFieldValue(`mitarbeiter_mitarbeiter.${index}.nichtanwesenheitsstundenGesamt`, nichtanwesenheitsstundenGesamt);
        }
        if (anwesenheitsStdMa !== ma.anwesenheitsStdMa) {
          setFieldValue(`mitarbeiter_mitarbeiter.${index}.anwesenheitsStdMa`, anwesenheitsStdMa);
        }
        if (direktVerrechnet !== ma.direktVerrechnet) {
          setFieldValue(`mitarbeiter_mitarbeiter.${index}.direktVerrechnet`, direktVerrechnet);
        }
        if (anwesenheitsentgelt !== ma.anwesenheitsentgelt) {
          setFieldValue(`mitarbeiter_mitarbeiter.${index}.anwesenheitsentgelt`, anwesenheitsentgelt);
        }
      });

      if (mitarbeiter_anwesenheitsEntgeltGesamt !== values.mitarbeiter_anwesenheitsEntgeltGesamt) {
        setFieldValue(`mitarbeiter_anwesenheitsEntgeltGesamt`, mitarbeiter_anwesenheitsEntgeltGesamt);
      }
    };

    timeout = setTimeout(() => {
      reCalculateMaValues();
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [setFieldValue, values.mitarbeiter_mitarbeiter, values.mitarbeiter_anwesenheitsEntgeltGesamt, values.mitarbeiter_mitarbeiter?.length]);

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
