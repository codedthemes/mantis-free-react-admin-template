import { v4 as uuid } from 'uuid';

export const getInitialGemeinkostenItem = () => {
  return {
    itemid: uuid()
  };
};

export const getInitialGemeinkostenCategory = () => {
  return {
    categoryId: uuid(),
    fields: [getInitialGemeinkostenItem()]
  };
};
