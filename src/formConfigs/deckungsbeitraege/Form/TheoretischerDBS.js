import { FastField, useFormikContext } from 'formik';
import { Grid, TextField, Box, Typography, Chip } from '@mui/material';
import FormSection from 'components/formComponents/FormSection/index';
import formFloat from 'utils/formUtils/formFloat';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';

const DGemeinkostenPlangewinn = () => {
  const { values } = useFormikContext();

  return (
    <>
      <FormSection collapsable={false} title="Theoretischer erzielbarer Deckungsbeitrag pro Stunde">
        <Box sx={{ mt: 3 }} />
        <Grid
          container
          columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
          rowSpacing={{ xs: 1, lg: 1.5 }}
          sx={{ mb: { xs: -2 } }}
          alignItems="flex-end"
        >
          <Grid item xs={12} sm={6}>
            <FastField name="deckungsbeitraege_J25">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Erzielbarer Nettoverkaufspreis pro Std. (ohne USt., in EUR)"
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
            <FastField name="deckungsbeitraege_J26">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Grenzkosten pro Stunde (in EUR)"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                  type="number"
                />
              )}
            </FastField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FastField name="deckungsbeitraege_J27">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  value={formFloat(field.value, 2)}
                  label="Deckungsbeitrag pro Stunde (in EUR)"
                  error={meta?.touched && Boolean(meta.error)}
                  helperText={meta?.touched && meta.error}
                  sx={{ mb: 2 }}
                  InputProps={{
                    readOnly: true
                  }}
                  type="number"
                />
              )}
            </FastField>
          </Grid>
        </Grid>
        <ReadOnlyBox alwaysOpen headlineVariant="none" sx={{ mt: { md: 2, lg: 3 }, mb: 1 }}>
          <Grid
            container
            columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
            rowSpacing={{ xs: 1, lg: 1.5 }}
            sx={{ mb: { xs: -2 } }}
            alignItems="flex-end"
          >
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" sx={{ mb: 1 }}>
                Deckungsbeitragsziel 1
              </Typography>
              <Chip
                color={values.deckungsbeitraege_J29 ? 'success' : 'error'}
                label={values.deckungsbeitraege_J29 ? 'erreicht' : 'nicht erreicht'}
              ></Chip>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" sx={{ mb: 1 }}>
                Deckungsbeitragsziel 2
              </Typography>
              <Chip
                color={values.deckungsbeitraege_J31 ? 'success' : 'error'}
                label={values.deckungsbeitraege_J31 ? 'erreicht' : 'nicht erreicht'}
              ></Chip>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" sx={{ mb: 1 }}>
                Deckungsbeitragsziel 3
              </Typography>
              <Chip
                color={values.deckungsbeitraege_J33 ? 'success' : 'error'}
                label={values.deckungsbeitraege_J33 ? 'erreicht' : 'nicht erreicht'}
              ></Chip>
            </Grid>
          </Grid>
        </ReadOnlyBox>
      </FormSection>
    </>
  );
};

export default DGemeinkostenPlangewinn;
