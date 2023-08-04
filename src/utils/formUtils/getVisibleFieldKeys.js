import jsonLogic from "../../formConfigs/jsonLogic";

const getVisibleFieldKeys = (conditionalConfig, values) => {
  const visibleFieldKeys = [];

  const conditionalFieldKeys = Object.keys(conditionalConfig);
  const valueKeys = Object.keys(values);

  console.log("keys", valueKeys, conditionalFieldKeys);

  const uniqueKeys = [...new Set([...valueKeys, ...conditionalFieldKeys])];

  uniqueKeys.forEach((fieldKey) => {
    const isVisible =
      !conditionalConfig[fieldKey] ||
      jsonLogic.apply(conditionalConfig[fieldKey], values);
    if (isVisible !== false) {
      visibleFieldKeys.push(fieldKey);
    }
  });

  return visibleFieldKeys;
};

export default getVisibleFieldKeys;
