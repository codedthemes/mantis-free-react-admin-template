import React, { useContext, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';

// project import
import { UserContext } from 'context/user';
import ColoredSection from 'components/pageLayout/header/ColoredSection/index';
import TestForm from 'formConfigs/testForm/Form/index';
import LayoutBox from 'components/LayoutBox/index';

// ==============================|| SAMPLE PAGE ||============================== //

const FormComponent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { activeFormId, activeFormData, setActiveFormId } = useContext(UserContext);
  const activeFormTitle = useMemo(() => activeFormData?.title, [activeFormData]);
  const { formId } = useParams();

  useEffect(() => {
    if (!formId) {
      navigate('/');
    } else {
      if (formId !== activeFormId) {
        setActiveFormId(formId);
      }
    }
  }, [activeFormId, formId, setActiveFormId, navigate]);

  const content = useMemo(() => {
    if (activeFormData) {
      return <TestForm />;
    }

    return 'loading';
  }, [activeFormData]);

  return (
    <>
      <ColoredSection
        backLink="/form/overview"
        bgColor={theme.palette.primary.light}
        headline={`Formular${activeFormTitle ? `: ${activeFormTitle}` : ''}`}
      />
      <LayoutBox
        sx={{
          backgroundColor: theme.palette.common.white,
          px: { xs: theme.spacing(4), md: theme.spacing(6), lg: theme.spacing(8) },
          py: { xs: theme.spacing(4), md: theme.spacing(6), lg: theme.spacing(8) }
        }}
      >
        {content}
      </LayoutBox>
    </>
  );
};

export default FormComponent;
