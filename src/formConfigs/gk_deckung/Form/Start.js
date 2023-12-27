import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Grid, TextField, Divider, Button, Stack } from '@mui/material';
import dayjs from 'dayjs';

// formik
import { Field, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import { UserContext } from 'context/user/index';
import FormReadonlyValue from 'components/formComponents/FormReadonlyValue/index';

const Annahmen = () => {
  const { values, errors, handleChange, handleBlur, touched } = useFormikContext();
  const { activeFormId, deleteForm } = useContext(UserContext);
  const navigate = useNavigate();

  const removeForm = async () => {
    await deleteForm(activeFormId);
    navigate('/office/dashboard');
  };

  return (
    <>
      <FormSection collapsable={false}>
        <Stack justifyContent="space-between" alignItems="center" direction="row" sx={{ width: '100%' }}>
          {/* <DateTimePicker readOnly label="Letzte Änderung" value={dayjs(values.letzteAenderung)} /> */}
          <FormReadonlyValue label="Letzte Änderung" value={dayjs(values.letzteAenderung).format('DD.MM.YYYY')} />
          <Button color="primary" variant="contained" onClick={removeForm}>
            Formular Löschen
          </Button>
        </Stack>
      </FormSection>
    </>
  );
};

export default Annahmen;
