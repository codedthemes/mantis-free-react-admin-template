import React from 'react';
import SelectFormView from 'components/SelectFormView/index';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import ColoredSection from 'components/pageLayout/header/ColoredSection/index';

// ==============================|| SAMPLE PAGE ||============================== //

const FormOverview = () => {
  const theme = useTheme();
  const headlineSectionStyle = {
    mb: { xs: 1, md: 2, lg: 3 },
    mt: { xs: 3, md: 4, lg: 6 }
  };

  return (
    <>
      <ColoredSection
        bgColor={theme.palette.primary.dark}
        headline="Formularübersicht"
        description="asdojaosidj98 a9sudj ud 98ausd ujas98d jas9d ijoas9d9ash"
      />
      <Typography variant="h2" sx={headlineSectionStyle}>
        Annahmen
      </Typography>
      <SelectFormView formType="annahmen" />
      <Typography variant="h2" sx={headlineSectionStyle}>
        Mitarbeiter
      </Typography>
      <SelectFormView formType="mitarbeiter" />
    </>
  );
};

export default FormOverview;
