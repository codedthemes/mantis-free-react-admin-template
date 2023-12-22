import { uniqueId } from 'lodash';

const getInitialMitarbeiterData = (values) => {
  return {
    userId: uniqueId(),
    N9: 100,
    E9: values.annahmen_H23 || undefined,
    F9: (values.annahmen_G26 || 0) * (values.annahmen_G18 || 0)
  };
};

export default getInitialMitarbeiterData;
