import { v4 as uuid } from 'uuid';

const getInitialMitarbeiterData = (values) => {
  return {
    userId: uuid(),
    N9: 100,
    E9: values.annahmen_H23 || undefined,
    F9: (values.annahmen_G26 || 0) * (values.annahmen_G18 || 0),
    G9: (values.annahmen_G27 || 0) * (values.annahmen_G18 || 0),
    I9: (values.annahmen_G28 || 0) * (values.annahmen_G18 || 0)
  };
};

export default getInitialMitarbeiterData;
