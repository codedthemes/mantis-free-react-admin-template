import React, { useContext, useMemo } from 'react';
import dayjs from 'dayjs';

// material-ui
import { Grid, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// icons
import { Edit, ChevronRight } from '@mui/icons-material';

// redux
import { UserContext } from 'context/user';
import TextTeaserCard from 'components/TextTeaserCard/index';

// eslint-disable-next-line react/prop-types
const SelectFormView = ({ formType }) => {
  const { createForm, formsData = {} } = useContext(UserContext);
  const visibleForms = useMemo(() => {
    const formsToUse = {};
    Object.keys(formsData).forEach((formKey) => {
      const currentForm = formsData[formKey];
      console.log('type', currentForm.type, formType);
      if (currentForm.type === formType) {
        formsToUse[formKey] = currentForm;
      }
    });

    return formsToUse;
  }, [formType, formsData]);
  const theme = useTheme();
  const addForm = () => {
    createForm({ title: `Formular vom ${dayjs(new Date()).format('DD.MM.YYYY')}`, type: formType });
  };

  const formCardsDom = () => {
    const formIds = Object.keys(visibleForms);
    const formCards =
      formIds.map((formId) => {
        const formData = visibleForms[formId];

        return (
          <Grid key={formId} item xs={12} sm={6}>
            <TextTeaserCard
              grow
              primaryText={
                <Stack
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                  component="span"
                >
                  {formData.title || 'Formular: ' + formData.id}
                  <Edit
                    sx={{
                      opacity: '0.2',
                      fontSize: 55,
                      margin: '0 -0.35em -0.35em'
                    }}
                  />
                </Stack>
              }
              prefixText={`zuletzt bearbeitet: ${dayjs(formData.creationDate).format('DD.MM.YYYY')}`}
              link={`/office/form/${formId}`}
              color={theme.palette.primary.light}
            />
          </Grid>
        );
      }) || [];

    return (
      <>
        <Grid container spacing={3} sx={{ marginBottom: theme.spacing(3) }}>
          {formCards}
          <Grid item xs={12} sm={6}>
            <TextTeaserCard
              onClick={addForm}
              primaryText={
                <Stack flexDirection="row" alignItems="center">
                  Neues Formular <ChevronRight fontSize="large" />
                </Stack>
              }
              prefixText="Erstellen Sie ein"
              color={theme.palette.common.white}
              light
            ></TextTeaserCard>
          </Grid>
        </Grid>
      </>
    );
  };

  return <div>{formCardsDom()}</div>;
};

export default SelectFormView;
