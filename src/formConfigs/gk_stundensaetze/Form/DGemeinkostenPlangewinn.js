import { FastField } from 'formik';
import { Grid, TextField, Box } from '@mui/material';
import FormSection from 'components/formComponents/FormSection/index';
import formFloat from 'utils/formUtils/formFloat';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';

const DGemeinkostenPlangewinn = () => {
  return (
    <FormSection defaultOpen title="1. Durchschnittliche Gemeinkosten und Plangewinn pro Stunde">
      <Box sx={{ mt: 1 }} />
      <ReadOnlyBox alwaysOpen title="Gemeinkostensatz">
        <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }} sx={{ mt: { xs: 1 } }} alignItems="flex-end">
          <Grid item xs={12} sm={6}>
            <FastField name="gk_stundensaetze_H8">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Gesamtsumme Gemeinkosten (fix + var, in EUR)"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                />
              )}
            </FastField>
          </Grid>
          <Grid item xs={12} sm={6}>
            &nbsp;
          </Grid>
          <Grid item xs={12} sm={6}>
            <FastField name="gk_stundensaetze_H9">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Beiträge zu Gemeinkosten"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                />
              )}
            </FastField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FastField name="gk_stundensaetze_H10">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Verbleibende Gemeinkosten (nach Abzug von GK-Beiträgen)"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                />
              )}
            </FastField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FastField name="gk_stundensaetze_H11">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Direkt verrechenbare Stunden"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                />
              )}
            </FastField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FastField name="gk_stundensaetze_H12">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Ø Gemeinkostensatz pro Stunde"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                />
              )}
            </FastField>
          </Grid>
        </Grid>
      </ReadOnlyBox>
      <Box sx={{ mt: 2 }} />
      <ReadOnlyBox alwaysOpen title="Plangewinnsatz">
        <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }} sx={{ mt: { xs: 1 } }} alignItems="flex-end">
          <Grid item xs={12} sm={6}>
            <FastField name="gk_stundensaetze_H14">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Plangewinn (in EUR)"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  type="number"
                  onWheel={(event) => event.target.blur()}
                  min="0"
                />
              )}
            </FastField>
          </Grid>
          <Grid item xs={12} sm={6}>
            &nbsp;
          </Grid>
          <Grid item xs={12} sm={6}>
            <FastField name="gk_stundensaetze_H15">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Direkt verrechenbare Stunden"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                />
              )}
            </FastField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FastField name="gk_stundensaetze_H16">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Ø Plangewinnsatz pro Stunde (in %)"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                />
              )}
            </FastField>
          </Grid>
        </Grid>
      </ReadOnlyBox>
    </FormSection>
  );
};

export default DGemeinkostenPlangewinn;
