import { uniqueId } from 'lodash';

const getInitialMitarbeiterData = (values) => {
  return {
    userId: uniqueId(),
    direktVerrechenbar: 100,
    sollarbeitsstdPA: values.annahmen_produktivstunden_jahresArbeitszeitInStunden || undefined,
    urlaubStd:
      (values.annahmen_produktivstunden_urlaubstageProMitarbeiter || 0) *
      (values.annahmen_produktivstunden_durchschnittArbeitsstundenProTag || 0)
  };
};

export default getInitialMitarbeiterData;
