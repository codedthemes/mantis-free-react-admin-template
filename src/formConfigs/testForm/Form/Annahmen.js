import React from 'react';

// material-ui
import { Typography, Grid, TextField, Divider } from '@mui/material';
import { DateTimePicker, Datepicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

// formik
import { Field, useFormikContext } from 'formik';

const Annahmen = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <DateTimePicker readOnly label="Letzte Änderung" value={dayjs(values.letzteAenderung)} />
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ my: 2 }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">Basisangaben</Typography>
      </Grid>
      <Grid item xs={6}>
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
      <Grid item xs={6}>
        <Field
          component={TextField}
          id="waehrung"
          name="waehrung"
          label="Währung"
          value={values.waehrung}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.waehrung && Boolean(errors.waehrung)}
          helperText={touched.waehrung && errors.waehrung}
          sx={{ mb: 2 }}
        />
      </Grid>
      <Grid item xs={12}>
        {' '}
      </Grid>
      <Grid item xs={6}>
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
      <Grid item xs={6}></Grid>
      <Grid item xs={6}>
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
      <Grid item xs={6}>
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
      <Grid item xs={6}>
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
  );
};

export default Annahmen;
