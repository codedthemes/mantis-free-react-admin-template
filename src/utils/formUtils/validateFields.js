import jsonLogic from '../../formConfigs/jsonLogic/index';
import getVisibleFieldKeys from './getVisibleFieldKeys';

const validateFields = (values, conditionalRules, validationRules) => {
  const visibleKeys = getVisibleFieldKeys(conditionalRules, values);
  const errors = {};
  visibleKeys.forEach((fieldKey) => {
    const ruleSettings = validationRules[fieldKey];

    if (ruleSettings?.length > 0) {
      ruleSettings.forEach((ruleSetting) => {
        const rule = ruleSetting.rule;
        const ruleParsed = typeof rule === 'string' ? { [rule]: [values[fieldKey]] } : rule;
        console.log('ruleParsed', ruleParsed, values);
        const validatedValue = jsonLogic.apply(ruleParsed, values);
        console.log('validated', validatedValue, ruleSetting, values);

        if (validatedValue !== true && validatedValue !== undefined) {
          errors[fieldKey] = validatedValue;
        }
      });
    }
  });

  return { errors, visibleFields: visibleKeys };
};

export default validateFields;
