import { v4 as uuid } from 'uuid';

const getInitialMitarbeiterData = (_values) => {
  return {
    userId: uuid(),
    F14: 1,
    G14: 12,
    H14: 12,
    K14: 0
  };
};

export default getInitialMitarbeiterData;
