import React, { useContext, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// project import
import { UserContext } from 'context/user';
import ColoredSection from 'components/pageLayout/header/ColoredSection/index';
import Annahmen from 'formConfigs/annahmen/Form/index';
import PersonalkostenProduktiv from 'formConfigs/pk_produktiv/Form/index';
import PersonalkostenAllgemein from 'formConfigs/pk_allgemein/Form/index';
import Gemeinkosten from 'formConfigs/gemeinkosten/Form/index';
import GKDeckung from 'formConfigs/gk_deckung/Form/index';
import GKStundensaetze from 'formConfigs/gk_stundensaetze/Form/index';
import FullPageLoader from 'components/FullPageLoader/index';

// ==============================|| SAMPLE PAGE ||============================== //

const formLiteral = {
  annahmen: { content: <Annahmen />, title: 'Annahmen' },
  pk_produktiv: { content: <PersonalkostenProduktiv />, title: 'Personalkosten produktiv' },
  pk_allgemein: { content: <PersonalkostenAllgemein />, title: 'Personalkosten allgemein' },
  gemeinkosten: { content: <Gemeinkosten />, title: 'Gemeinkosten' },
  gk_deckung: { content: <GKDeckung />, title: 'Gemeinkosten-Deckung' },
  gk_stundensaetze: { content: <GKStundensaetze />, title: 'Gemeinkosten-Stundensätze' }
};

const FormComponent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { activeFormId, activeFormData, setActiveFormId } = useContext(UserContext);
  const { formId, formSection } = useParams();

  useEffect(() => {
    if (!formId) {
      navigate('/');
    } else {
      if (formId !== activeFormId) {
        setActiveFormId(formId);
      }
    }
  }, [activeFormId, formId, setActiveFormId, navigate]);

  const activeFormConfig = useMemo(() => {
    if (activeFormData) {
      return formLiteral[formSection] || 'Es ist ein Fehler aufgetreten.';
    }

    return <FullPageLoader />;
  }, [activeFormData, formSection]);

  return (
    <Box mb={theme.shape.layoutDesignGutterReset}>
      <ColoredSection backLink="/office/form/overview" bgColor={theme.palette.primary[800]} headline={activeFormConfig.title} />
      {activeFormConfig.content}
    </Box>
  );
};

export default FormComponent;
