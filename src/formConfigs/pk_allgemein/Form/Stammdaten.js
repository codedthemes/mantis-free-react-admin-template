import React, { useState } from 'react';

// material-ui
import {
  Grid,
  TextField,
  Divider,
  Button,
  ButtonGroup,
  Typography,
  Stack,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { DeleteOutlineOutlined } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import formFloat from 'utils/formUtils/formFloat';

// formik
import { FastField, Field, FieldArray, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import { v4 as uuid } from 'uuid';
import getInitialMitarbeiterData from '../getInitialMitarbeiterData';

const Stammdaten = () => {
  const { values, errors, isSubmitting } = useFormikContext();
  const [openedTab, setOpenedTab] = useState(0);
  const [groupToDelete, setGroupToDelete] = useState(undefined);
  const theme = useTheme();

  const changeTab = (_event, newValue) => {
    setOpenedTab(newValue);
  };

  return (
    <FormSection collapsable={true} title="Personalkosten: Gehälter allgemeiner Bereich">
      <TabContext value={openedTab.toString()}>
        <FieldArray name="pk_allgemein_mitarbeiter">
          {({ push, remove }) => (
            <>
              <Stack direction="row" flexWrap="wrap" mt={{ xs: 2, sm: 3, borderBottom: `1px solid ${theme.palette.primary.main}` }}>
                <TabList onChange={changeTab}>
                  {values.pk_allgemein_mitarbeiter?.map((category, index) => {
                    return <Tab key={index} label={category.groupTitle || `Tab ${index + 1}`} value={index.toString()} />;
                  })}
                </TabList>
                <Button
                  variant="text"
                  onClick={() => {
                    push({ categoryId: uuid(), fields: [getInitialMitarbeiterData()] });
                    changeTab(null, values.pk_allgemein_mitarbeiter.length);
                  }}
                  disabled={isSubmitting}
                  sx={{ fontWeight: 500 }}
                >
                  Neue Gruppe
                </Button>
              </Stack>
              {values.pk_allgemein_mitarbeiter?.map((outerField, outerIndex) => (
                <TabPanel key={outerIndex} value={outerIndex.toString()} sx={{ padding: 0, marginTop: 3 }}>
                  {' '}
                  <Grid container columnSpacing={2} alignItems="end">
                    <Grid item xs={12} sm={5} md={4}>
                      <FastField name={`pk_allgemein_mitarbeiter.${openedTab}.groupTitle`}>
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
                      <Button
                        variant="outlined"
                        onClick={() => setGroupToDelete(outerIndex)}
                        disabled={isSubmitting}
                        sx={{ mb: 3 }}
                        color="error"
                        startIcon={<DeleteOutlineOutlined />}
                      >
                        Gruppe löschen
                      </Button>
                    </Grid>
                  </Grid>
                  <Dialog
                    open={groupToDelete === outerIndex}
                    onClose={() => setGroupToDelete(undefined)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{outerField.groupTitle}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">Wollen Sie diese Gruppe wirklich löschen?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setGroupToDelete(undefined)}>Abbrechen</Button>
                      <Button
                        onClick={() => {
                          remove(outerIndex);
                          changeTab(null, 0);
                          setGroupToDelete(undefined);
                        }}
                        autoFocus
                      >
                        Ja, löschen
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <FieldArray name={`pk_allgemein_mitarbeiter.${outerIndex}.fields`}>
                    {({ push: innerPush, remove: innerRemove }) => (
                      <>
                        {values.pk_allgemein_mitarbeiter?.[outerIndex]?.fields?.map((innerField, innerIndex) => (
                          <FormSection
                            key={outerIndex}
                            title={`${innerField?.vorname || 'Mitarbeiter'} ${innerField?.nachname || ''}`}
                            description="Pflegen Sie hier allgemeine Angaben zu Ihrem Mitarbeiter ein."
                            defaultOpen={outerIndex === 0 && values.pk_allgemein_mitarbeiter?.length === 1}
                            backgroundColor={theme.palette.primary[50]}
                            onDelete={() => innerRemove(innerIndex)}
                            headlineVariant="h3"
                          >
                            <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
                              <Grid item xs={12}>
                                <Divider sx={{ mt: 2, mb: 4 }} />
                              </Grid>
                            </Grid>
                            <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
                              <Grid item xs={12} sm={6}>
                                <FastField name={`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.vorname`}>
                                  {({ field, meta }) => (
                                    <TextField
                                      {...field}
                                      label="Vorname"
                                      error={meta?.touched && Boolean(meta.error)}
                                      helperText={meta?.touched && meta.error}
                                      sx={{ mb: 2 }}
                                    />
                                  )}
                                </FastField>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <FastField name={`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.nachname`}>
                                  {({ field, meta }) => (
                                    <TextField
                                      {...field}
                                      label="Nachname"
                                      error={meta?.touched && Boolean(meta.error)}
                                      helperText={meta?.touched && meta.error}
                                      sx={{ mb: 2 }}
                                    />
                                  )}
                                </FastField>
                              </Grid>
                              <Grid item xs={12} sm={12}>
                                &nbsp;
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <FastField name={`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.F14`}>
                                  {({ field, meta }) => (
                                    <TextField
                                      {...field}
                                      label="Beschäftigung von (Monat)"
                                      error={meta?.touched && Boolean(meta.error)}
                                      helperText={meta?.touched && meta.error}
                                      sx={{ mb: 2 }}
                                      type="number"
                                      onWheel={(event) => event.target.blur()}
                                      min="1"
                                      max="12"
                                    />
                                  )}
                                </FastField>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <FastField name={`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.G14`}>
                                  {({ field, meta }) => (
                                    <TextField
                                      {...field}
                                      label="Beschäftigung bis (Monat)"
                                      error={meta?.touched && Boolean(meta.error)}
                                      helperText={meta?.touched && meta.error}
                                      sx={{ mb: 2 }}
                                      type="number"
                                      onWheel={(event) => event.target.blur()}
                                      min="1"
                                      max="12"
                                    />
                                  )}
                                </FastField>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <FastField name={`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.I14`}>
                                  {({ field, meta }) => (
                                    <TextField
                                      {...field}
                                      label="Bruttoeinkommen (p.m., in EUR)"
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
                                <FastField name={`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.J14`}>
                                  {({ field, meta }) => (
                                    <TextField
                                      {...field}
                                      label="Bruttoeinkommen gesamt (in EUR)"
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
                                <FastField name={`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.K14`}>
                                  {({ field, meta }) => (
                                    <TextField
                                      {...field}
                                      label="Sonderzahlungen (SZ)"
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
                              <Grid item xs={12} sm={12}>
                                &nbsp;
                              </Grid>
                              <Grid item xs={12} sm={12}>
                                <ReadOnlyBox title="Berechnungsdaten">
                                  <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
                                    <Grid item xs={12} sm={6}>
                                      <FastField name={`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.L14`}>
                                        {({ field, meta }) => (
                                          <TextField
                                            {...field}
                                            label="Brutto inkl. SZ (in EUR)"
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
                                      <Field name={`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.M14`}>
                                        {({ field, meta }) => (
                                          <TextField
                                            {...field}
                                            label={`Lohnnebenkosten ${
                                              values.pk_allgemein_K5 ? `(${values.pk_allgemein_K5}%) ` : ''
                                            }(in EUR)`}
                                            error={meta?.touched && Boolean(meta.error)}
                                            helperText={meta?.touched && meta.error}
                                            sx={{ mb: 2 }}
                                            InputProps={{
                                              readOnly: true
                                            }}
                                            type="number"
                                          />
                                        )}
                                      </Field>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <FastField name={`pk_allgemein_mitarbeiter.${outerIndex}.fields.${innerIndex}.N14`}>
                                        {({ field, meta }) => (
                                          <TextField
                                            {...field}
                                            label="Gesamtkosten (p.a., in EUR)"
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
                                </ReadOnlyBox>
                              </Grid>
                              <Grid item xs={12} sm={12}>
                                &nbsp;
                              </Grid>
                              <Grid item xs={12}>
                                <ButtonGroup columnSpacing="2">
                                  <Button variant="outlined" color="error" disabled={isSubmitting} onClick={() => innerRemove(outerIndex)}>
                                    Mitarbeiter löschen
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={() =>
                                      innerPush({ ...values.pk_allgemein_mitarbeiter?.[outerIndex]?.fields[innerIndex], userId: uuid() })
                                    }
                                  >
                                    Mitarbeiter duplizieren
                                  </Button>
                                </ButtonGroup>
                              </Grid>

                              <Grid item>
                                {typeof errors.pk_allgemein_mitarbeiter?.[outerIndex]?.fields === 'string' ? (
                                  <Typography color="error">{errors.pk_allgemein_mitarbeiter[outerIndex].fields}</Typography>
                                ) : null}
                              </Grid>
                            </Grid>
                          </FormSection>
                        ))}
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => innerPush(getInitialMitarbeiterData(values))}
                          disabled={isSubmitting}
                          sx={{ mb: 4 }}
                        >
                          Neuer Mitarbeiter
                        </Button>
                        <ReadOnlyBox title={' '} alwaysOpen>
                          <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                            <Grid item xs={12} sm={6}>
                              <FastField name={`pk_allgemein_mitarbeiter.${outerIndex}.N24`}>
                                {({ field, meta }) => (
                                  <TextField
                                    {...field}
                                    value={formFloat(field.value, 2)}
                                    label={`Summe ${outerField.groupTitle || 'Gruppe'} (in EUR)`}
                                    error={meta?.touched && Boolean(meta.error)}
                                    helperText={meta?.touched && meta.error}
                                    InputProps={{
                                      readOnly: true
                                    }}
                                    type="number"
                                    sx={{ mb: 2 }}
                                  />
                                )}
                              </FastField>
                            </Grid>
                          </Grid>
                        </ReadOnlyBox>
                      </>
                    )}
                  </FieldArray>
                </TabPanel>
              ))}
            </>
          )}
        </FieldArray>
      </TabContext>
    </FormSection>
  );
};

export default Stammdaten;
