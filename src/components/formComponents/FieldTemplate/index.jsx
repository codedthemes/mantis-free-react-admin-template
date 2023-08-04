import { useField } from "formik";
import { useMemo } from "react";
import Conditional from "../Conditional";

const FieldTemplate = ({ name, children }) => {
  const [, meta] = useField(name);
  const errorStatus = useMemo(() => meta && meta.touched && meta.error, [meta]);

  return (
    <div>
      <Conditional name={name}>
        <div>
          {children}
          {errorStatus}
        </div>
      </Conditional>
    </div>
  );
};

export default FieldTemplate;
