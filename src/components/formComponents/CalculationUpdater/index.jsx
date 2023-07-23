import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();
  console.log('values', values);
  useEffect(() => {
    if (values.firstField !== undefined && values.secondField !== undefined) {
      setFieldValue('resultField', parseInt(values.firstField || 0, 10) + parseInt(values.secondField || 0, 10));
    }
  }, [values.firstField, values.secondField]);
  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
