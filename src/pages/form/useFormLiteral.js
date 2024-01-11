import { useTheme } from '@mui/material/styles';

import Annahmen from 'formConfigs/annahmen/Form/index';
import PersonalkostenProduktiv from 'formConfigs/pk_produktiv/Form/index';
import PersonalkostenAllgemein from 'formConfigs/pk_allgemein/Form/index';
import Gemeinkosten from 'formConfigs/gemeinkosten/Form/index';
import GKDeckung from 'formConfigs/gk_deckung/Form/index';
import GKStundensaetze from 'formConfigs/gk_stundensaetze/Form/index';
import StdVerrechnungssaetze from 'formConfigs/std_verrechnungssaetze/Form/index';
import Deckungsbeitraege from 'formConfigs/deckungsbeitraege/Form/index';

const useFormLiteral = () => {
  const theme = useTheme();

  return {
    annahmen: { linkPart: 'annahmen', content: <Annahmen />, title: 'Annahmen' },
    pk_produktiv: { linkPart: 'pk_produktiv', content: <PersonalkostenProduktiv />, title: 'Personalkosten produktiv' },
    pk_allgemein: { linkPart: 'pk_allgemein', content: <PersonalkostenAllgemein />, title: 'Personalkosten allgemein' },
    gemeinkosten: { linkPart: 'gemeinkosten', content: <Gemeinkosten />, title: 'Gemeinkosten' },
    gk_deckung: { linkPart: 'gk_deckung', content: <GKDeckung />, title: 'Gemeinkosten-Deckung' },
    gk_stundensaetze: { linkPart: 'gk_stundensaetze', content: <GKStundensaetze />, title: 'Gemeinkosten-Stundensätze' },
    std_verrechnungssaetze: { linkPart: 'std_verrechnungssaetze', content: <StdVerrechnungssaetze />, title: 'Std-Verrechnungssätze' },
    deckungsbeitraege: {
      linkPart: 'deckungsbeitraege',
      content: <Deckungsbeitraege />,
      title: 'Deckungsbeiträge',
      backgroundColor: theme.palette.secondary.main
    }
  };
};

export default useFormLiteral;
