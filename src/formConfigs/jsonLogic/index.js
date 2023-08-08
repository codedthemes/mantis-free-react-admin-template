import jsonLogic from 'json-logic-js';

jsonLogic.add_operation('email', (value) => {
  if (!value) {
    return true;
  }

  const isValidMail = value.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  return isValidMail?.[0] ? true : 'invalidMail';
});

export default jsonLogic;
