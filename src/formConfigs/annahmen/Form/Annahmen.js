import React from 'react';

// material-ui
import { Grid, TextField, Divider, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

// formik
import { Field, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';

const Annahmen = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();

  return (
    <FormSection title="Allgemeine Annahmen" defaultOpen={true} description="Pflegen Sie hier allgemeine Angaben zu Ihrem Unternehmen ein.">
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
        <Grid item xs={12}>
          <Divider sx={{ mt: 2, mb: 4 }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_allgemein_planjahr"
            name="annahmen_allgemein_planjahr"
            label="Planjahr"
            value={values.annahmen_allgemein_planjahr}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            min="1900"
            max="2100"
            error={touched.annahmen_allgemein_planjahr && Boolean(errors.annahmen_allgemein_planjahr)}
            helperText={touched.annahmen_allgemein_planjahr && errors.annahmen_allgemein_planjahr}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel htmlFor="annahmen_allgemein_waehrung">Währung</InputLabel>
            <Select
              id="annahmen_allgemein_waehrung"
              name="annahmen_allgemein_waehrung"
              value={values.annahmen_allgemein_waehrung}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.annahmen_allgemein_waehrung && Boolean(errors.annahmen_allgemein_waehrung)}
              helperText={touched.annahmen_allgemein_waehrung && errors.annahmen_allgemein_waehrung}
              sx={{ mb: 2 }}
              defaultValue="euro"
            >
              <MenuItem value="euro">€ Euro</MenuItem>
              <MenuItem value="dollar">$ Dollar</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_allgemein_unternehmensname"
            name="annahmen_allgemein_unternehmensname"
            label="Unternehmensname"
            value={values.annahmen_allgemein_unternehmensname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.annahmen_allgemein_unternehmensname && Boolean(errors.annahmen_allgemein_unternehmensname)}
            helperText={touched.annahmen_allgemein_unternehmensname && errors.annahmen_allgemein_unternehmensname}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_allgemein_unternehmensstrasse"
            name="annahmen_allgemein_unternehmensstrasse"
            label="Straße, Hausnummer"
            value={values.annahmen_allgemein_unternehmensstrasse}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.annahmen_allgemein_unternehmensstrasse && Boolean(errors.annahmen_allgemein_unternehmensstrasse)}
            helperText={touched.annahmen_allgemein_unternehmensstrasse && errors.annahmen_allgemein_unternehmensstrasse}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_allgemein_unternehmensplz"
            name="annahmen_allgemein_unternehmensplz"
            label="PLZ und Ort"
            value={values.annahmen_allgemein_unternehmensplz}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.annahmen_allgemein_unternehmensplz && Boolean(errors.annahmen_allgemein_unternehmensplz)}
            helperText={touched.annahmen_allgemein_unternehmensplz && errors.annahmen_allgemein_unternehmensplz}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            id="annahmen_allgemein_planungsverantwortlicher"
            name="annahmen_allgemein_planungsverantwortlicher"
            label="Planungsverantwortlicher"
            value={values.annahmen_allgemein_planungsverantwortlicher}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.annahmen_allgemein_planungsverantwortlicher && Boolean(errors.annahmen_allgemein_planungsverantwortlicher)}
            helperText={touched.annahmen_allgemein_planungsverantwortlicher && errors.annahmen_allgemein_planungsverantwortlicher}
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>
    </FormSection>
  );
};

export default Annahmen;
