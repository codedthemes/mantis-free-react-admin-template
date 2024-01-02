import { FastField } from 'formik';
import { Grid, TextField } from '@mui/material';
import FormSection from 'components/formComponents/FormSection/index';
import formFloat from 'utils/formUtils/formFloat';

const Zusammenfassung = () => {
  return (
    <FormSection collapsable={false} title="Zusammenfassung">
      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }} sx={{ mt: { xs: 1 } }}>
        <Grid item xs={12} sm={6}>
          <FastField name="gk_deckung_H20">
            {({ field, meta }) => (
              <TextField
                {...field}
                value={formFloat(field.value, 2)}
                label="Zuschlag (gesamt, in EUR)"
                error={meta?.touched && Boolean(meta.error)}
                helperText={meta?.touched && meta.error}
                sx={{ mb: 2 }}
              />
            )}
          </FastField>
        </Grid>
      </Grid>
    </FormSection>
  );
};

export default Zusammenfassung;
