import jsonLogic from "json-logic-js";

jsonLogic.add_operation("email", (value) => {
  if (!value) {
    return true;
  }

  const isValidMail = value.test(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

  return isValidMail ? true : "invalidMail";
});

export default jsonLogic;
