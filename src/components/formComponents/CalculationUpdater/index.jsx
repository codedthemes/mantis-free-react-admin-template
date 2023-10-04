import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();
  useEffect(() => {
    if (values.wochenarbeitszeit !== undefined && values.wochenarbeitstage !== undefined) {
      const durchschnittArbeitsstundenProTag = values.wochenarbeitszeit / values.wochenarbeitstage;
      setFieldValue('durchschnittArbeitsstundenProTag', durchschnittArbeitsstundenProTag);
    }
  }, [values.wochenarbeitszeit, values.wochenarbeitstage, setFieldValue]);
  useEffect(() => {
    if (
      values.wochenarbeitszeit !== undefined &&
      values.wochenarbeitstage !== undefined &&
      values.durchschnittArbeitsstundenProTag !== undefined &&
      values.tageProJahr !== undefined &&
      values.wochenendtageProJahr !== undefined
    ) {
      const arbeitsstundenProJahr = values.tageProJahr * values.durchschnittArbeitsstundenProTag;
      const wochenendArbeitsstundenProJahr = values.wochenendtageProJahr * values.durchschnittArbeitsstundenProTag;
      const jahresarbeitszzeitInTagen = values.tageProJahr - values.wochenendtageProJahr;
      const jahresArbeitszeitInStunden = arbeitsstundenProJahr - wochenendArbeitsstundenProJahr;

      setFieldValue('jahresArbeitszeitInStunden', jahresarbeitszzeitInTagen);
      setFieldValue('jahresarbeitszzeitInTagen', jahresArbeitszeitInStunden);
    }
  }, [
    values.wochenarbeitszeit,
    values.wochenarbeitstage,
    values.durchschnittArbeitsstundenProTag,
    values.tageProJahr,
    values.wochenendtageProJahr,
    setFieldValue
  ]);
  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
