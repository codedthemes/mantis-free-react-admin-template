import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  useEffect(() => {
    if (values.mitarbeiter.length === 0) {
      setFieldValue('mitarbeiter.0', {});
    }
  }, [setFieldValue, values.mitarbeiter]);

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
