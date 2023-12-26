import React from 'react';
import SelectFormView from 'components/SelectFormView/index';
import { useTheme } from '@mui/material/styles';
import { Typography, Stack } from '@mui/material';
import ColoredSection from 'components/pageLayout/header/ColoredSection/index';

// ==============================|| SAMPLE PAGE ||============================== //

const FormOverview = () => {
  const theme = useTheme();
  const headlineSectionStyle = {
    mb: { xs: 2, md: 2, lg: 3 },
    mt: { xs: 5, md: 6, lg: 7 }
  };

  return (
    <Stack mb={6}>
      <ColoredSection
        bgColor={theme.palette.primary.dark}
        headline="Angaben"
        description="asdojaosidj98 a9sudj ud 98ausd ujas98d jas9d ijoas9d9ash"
      />
      <Typography variant="h2" sx={headlineSectionStyle}>
        Angabensets
      </Typography>
      <SelectFormView
        formType="stundensatz"
        sections={[
          { linkPart: 'annahmen', label: 'Annahmen' },
          { linkPart: 'pk_produktiv', label: 'Personalkosten Produktiv' },
          { linkPart: 'pk_allgemein', label: 'Personalkosten Allgemein' },
          { linkPart: 'gemeinkosten', label: 'Gemeinkosten' }
        ]}
      />
      {/* <Typography variant="h2" sx={headlineSectionStyle}>
        Mitarbeiter
      </Typography>
      <SelectFormView formType="stundensatz" /> */}
    </Stack>
  );
};

export default FormOverview;
