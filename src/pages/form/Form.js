import React, { useContext, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// project import
import { UserContext } from 'context/user';
import ColoredSection from 'components/pageLayout/header/ColoredSection/index';
import FullPageLoader from 'components/FullPageLoader/index';
import useFormLiteral from './useFormLiteral';

// ==============================|| SAMPLE PAGE ||============================== //

const FormComponent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const formLiteral = useFormLiteral();
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
      console.log('formSection', formSection, formLiteral);
      return formLiteral[formSection] || 'Es ist ein Fehler aufgetreten.';
    }

    return <FullPageLoader />;
  }, [activeFormData, formLiteral, formSection]);

  console.log('activeFormConfig', activeFormConfig)

  return (
    <Box mb={theme.shape.layoutDesignGutterReset}>
      <ColoredSection backLink="/office/form/overview" bgColor={theme.palette.primary[800]} headline={activeFormConfig.title} />
      {activeFormConfig.content}
    </Box>
  );
};

export default FormComponent;
