import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Grid, TextField, Divider, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

// formik
import { Field, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import { UserContext } from 'context/user/index';

const Annahmen = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();
  const { activeFormId, deleteForm } = useContext(UserContext);
  const navigate = useNavigate();

  const removeForm = async () => {
    await deleteForm(activeFormId);
    navigate('/office/form/overview');
  };

  return (
    <>
      <FormSection collapsable={false}>
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="flex-end">
          <Grid item xs={12} sm={6}>
            <DateTimePicker readOnly label="Letzte Änderung" value={dayjs(values.letzteAenderung)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button color="primary" variant="contained" onClick={removeForm}>
              Formular Löschen
            </Button>
          </Grid>
        </Grid>
      </FormSection>
      <FormSection title="Allgemeine Annahmen" defaultOpen={true}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id="planjahr"
              name="planjahr"
              label="Planjahr"
              value={values.planjahr}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              min="1900"
              max="2100"
              error={touched.planjahr && Boolean(errors.planjahr)}
              helperText={touched.planjahr && errors.planjahr}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel for="waehrung">Währung</InputLabel>
              <Select
                id="waehrung"
                name="waehrung"
                value={values.waehrung}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.waehrung && Boolean(errors.waehrung)}
                helperText={touched.waehrung && errors.waehrung}
                sx={{ mb: 2 }}
                defaultValue="euro"
              >
                <MenuItem value="euro">€ Euro</MenuItem>
                <MenuItem value="dollar">$ Dollar</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id="unternehmensname"
              name="unternehmensname"
              label="Unternehmensname"
              value={values.unternehmensname}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.unternehmensname && Boolean(errors.unternehmensname)}
              helperText={touched.unternehmensname && errors.unternehmensname}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id="unternehmensstrasse"
              name="unternehmensstrasse"
              label="Straße, Hausnummer"
              value={values.unternehmensstrasse}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.unternehmensstrasse && Boolean(errors.unternehmensstrasse)}
              helperText={touched.unternehmensstrasse && errors.unternehmensstrasse}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id="unternehmensplz"
              name="unternehmensplz"
              label="PLZ und Ort"
              value={values.unternehmensplz}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.unternehmensplz && Boolean(errors.unternehmensplz)}
              helperText={touched.unternehmensplz && errors.unternehmensplz}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              id="planungsverantwortlicher"
              name="planungsverantwortlicher"
              label="Planungsverantwortlicher"
              value={values.planungsverantwortlicher}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.planungsverantwortlicher && Boolean(errors.planungsverantwortlicher)}
              helperText={touched.planungsverantwortlicher && errors.planungsverantwortlicher}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
      </FormSection>
    </>
  );
};

export default Annahmen;
