import React from 'react';

// material-ui
import { Grid, TextField, Divider, Button, ButtonGroup, Typography, Tab, Stack } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTheme } from '@mui/material/styles';

// formik
import { FastField, FieldArray, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import { v4 as uuid } from 'uuid';
import formFloat from 'utils/formUtils/formFloat';

const MaterialzuschlagFremdleistungen = () => {
  const { values, errors, isSubmitting } = useFormikContext();
  const [openedTab, setOpenedTab] = React.useState(0);
  const theme = useTheme();

  const changeTab = (_event, newValue) => {
    setOpenedTab(newValue);
  };

  return (
    <>
      <ReadOnlyBox title="Angabe Gemeinkosten" headlineVariant="h2" white alwaysOpen>
        <TabContext value={openedTab}>
          <FieldArray name="gk_deckung_zuschlaege">
            {({ push, remove }) => (
              <>
                <Stack direction="row" flexWrap="wrap">
                  <TabList onChange={changeTab} aria-label="lab API tabs example">
                    {values.gk_deckung_zuschlaege?.map((category, index) => {
                      return <Tab key={index} label={category.groupTitle || `Tab ${index + 1}`} value={index} />;
                    })}
                  </TabList>
                  <Button
                    variant="text"
                    onClick={() => {
                      push({ categoryId: uuid() });
                      changeTab(null, values.gk_deckung_zuschlaege.length);
                    }}
                    disabled={isSubmitting}
                    sx={{ fontWeight: 500 }}
                  >
                    Neue Gruppe
                  </Button>
                </Stack>
                {values.gk_deckung_zuschlaege?.map((outerField, outerIndex) => (
                  <TabPanel key={outerIndex} value={outerIndex} sx={{ padding: 0, marginTop: 3 }}>
                    <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} alignItems="end">
                      <Grid item xs={12} sm={6}>
                        <FastField name={`gk_deckung_zuschlaege.${openedTab}.groupTitle`}>
                          {({ field, meta }) => (
                            <TextField
                              {...field}
                              label="Gruppenbezeichnung"
                              error={meta?.touched && Boolean(meta.error)}
                              helperText={meta?.touched && meta.error}
                              sx={{ mb: 3 }}
                            />
                          )}
                        </FastField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button variant="contained" onClick={() => remove(outerIndex)} disabled={isSubmitting} sx={{ mb: 3 }}>
                          Gruppe löschen
                        </Button>
                      </Grid>
                    </Grid>
                    <FieldArray name={`gk_deckung_zuschlaege.${outerIndex}.fields`}>
                      {({ push: innerPush, remove: innerRemove }) => (
                        <>
                          {values.gk_deckung_zuschlaege[outerIndex].fields?.map((innerField, innerIndex) => (
                            <React.Fragment key={innerField.itemId || innerIndex}>
                              <FormSection
                                key={innerIndex}
                                title={innerField?.D8 || 'Neues Element'}
                                description="Pflegen Sie hier Einträge für Gemeinkosten ein."
                                backgroundColor={theme.palette.primary[50]}
                                onDelete={() => innerRemove(innerIndex)}
                              >
                                <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
                                  <Grid item xs={12}>
                                    <Divider sx={{ mt: 2, mb: 4 }} />
                                  </Grid>
                                </Grid>
                                <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
                                  <Grid item xs={12} sm={6}>
                                    <FastField name={`gk_deckung_zuschlaege.${outerIndex}.fields.${innerIndex}.D8`}>
                                      {({ field, meta }) => (
                                        <TextField
                                          {...field}
                                          label="Bezeichnung"
                                          error={meta?.touched && Boolean(meta.error)}
                                          helperText={meta?.touched && meta.error}
                                          sx={{ mb: 2 }}
                                        />
                                      )}
                                    </FastField>
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    &nbsp;
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    <FastField name={`gk_deckung_zuschlaege.${outerIndex}.fields.${innerIndex}.E8`}>
                                      {({ field, meta }) => (
                                        <TextField
                                          {...field}
                                          label="Einsatz  (in EUR)"
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
                                    <FastField name={`gk_deckung_zuschlaege.${outerIndex}.fields.${innerIndex}.F8`}>
                                      {({ field, meta }) => (
                                        <TextField
                                          {...field}
                                          label="Zuschlagssatz (in %)"
                                          error={meta?.touched && Boolean(meta.error)}
                                          helperText={meta?.touched && meta.error}
                                          sx={{ mb: 2 }}
                                          type="number"
                                          onWheel={(event) => event.target.blur()}
                                          min="0"
                                          max="100"
                                        />
                                      )}
                                    </FastField>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <ReadOnlyBox alwaysOpen>
                                      <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
                                        <Grid item xs={12} sm={6}>
                                          <FastField name={`gk_deckung_zuschlaege.${outerIndex}.fields.${innerIndex}.G8`}>
                                            {({ field, meta }) => (
                                              <TextField
                                                {...field}
                                                value={formFloat(field.value, 1)}
                                                label="Erlös (in EUR)"
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
                                          <FastField name={`gk_deckung_zuschlaege.${outerIndex}.fields.${innerIndex}.H8`}>
                                            {({ field, meta }) => (
                                              <TextField
                                                {...field}
                                                value={formFloat(field.value, 1)}
                                                label="Zuschlag (in EUR)"
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
                                  </Grid>
                                  <Grid item xs={12}>
                                    &nbsp;
                                  </Grid>
                                </Grid>
                                <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 2 }}>
                                  <>
                                    <Grid item xs={12}>
                                      <ButtonGroup columnSpacing="2">
                                        <Button
                                          variant="contained"
                                          color="primary"
                                          disabled={isSubmitting}
                                          onClick={() => innerRemove(innerIndex)}
                                        >
                                          Eintrag löschen
                                        </Button>
                                        <Button
                                          variant="outlined"
                                          color="primary"
                                          disabled={isSubmitting}
                                          onClick={() => innerPush({ ...values.gk_deckung_zuschlaege?.[innerIndex], itemId: uuid() })}
                                        >
                                          Eintrag duplizieren
                                        </Button>
                                      </ButtonGroup>
                                    </Grid>
                                  </>

                                  <Grid item>
                                    {typeof errors.gk_deckung_zuschlaege === 'string' ? (
                                      <Typography color="error">{errors.gk_deckung_zuschlaege}</Typography>
                                    ) : null}
                                  </Grid>
                                </Grid>
                              </FormSection>
                              {innerIndex === values.gk_deckung_zuschlaege?.length - 1 && (
                                <Button
                                  variant="contained"
                                  onClick={() => innerPush({ itemId: uuid() })}
                                  disabled={isSubmitting}
                                  sx={{ mb: 4 }}
                                >
                                  Neuer Eintrag
                                </Button>
                              )}
                            </React.Fragment>
                          ))}
                          {(!values.gk_deckung_zuschlaege[outerIndex].fields ||
                            values.gk_deckung_zuschlaege[outerIndex].fields?.length === 0) && (
                            <Button
                              variant="contained"
                              onClick={() => innerPush({ itemId: uuid() })}
                              disabled={isSubmitting}
                              sx={{ mb: 4 }}
                            >
                              Neuer Eintrag
                            </Button>
                          )}
                        </>
                      )}
                    </FieldArray>
                  </TabPanel>
                ))}
              </>
            )}
          </FieldArray>
        </TabContext>
      </ReadOnlyBox>
    </>
  );
};

export default MaterialzuschlagFremdleistungen;
