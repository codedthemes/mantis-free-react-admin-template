const formFloat = (value, decimals = 0, fallback = 0) => {
  const valueToUse = value || fallback;

  return parseFloat(valueToUse).toFixed(decimals);
};

export default formFloat;
