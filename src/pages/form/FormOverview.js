import React from 'react';
import SelectFormView from 'components/SelectFormView/index';
import { useTheme } from '@mui/material/styles';
import ColoredSection from 'components/pageLayout/header/ColoredSection/index';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const theme = useTheme();
  return (
    <ColoredSection
      bgColor={theme.palette.primary.dark}
      headline="Formulare"
      description="asdojaosidj98 a9sudj ud 98ausd ujas98d jas9d ijoas9d9ash"
    >
      <SelectFormView />
    </ColoredSection>
  );
};

export default SamplePage;
