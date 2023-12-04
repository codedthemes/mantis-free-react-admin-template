import { useFormikContext } from 'formik';
import { useMemo } from 'react';
import jsonLogic from '../../../formConfigs/jsonLogic';
import conditionalRules from '../../../formConfigs/annahmen/rules/conditional/index';

// eslint-disable-next-line react/prop-types
const Conditional = ({ children, name }) => {
  const { values } = useFormikContext();

  const rule = useMemo(() => conditionalRules[name], [name]);
  const approved = useMemo(() => !rule || jsonLogic.apply(rule, values), [values, rule]);

  return approved ? children : <></>;
};

export default Conditional;
