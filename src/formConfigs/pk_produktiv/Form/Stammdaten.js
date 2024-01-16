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

// formik
import { FastField, FieldArray, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import { v4 as uuid } from 'uuid';
import getInitialMitarbeiterData from '../getInitialMitarbeiterData';
import formFloat from 'utils/formUtils/formFloat';

const Stammdaten = () => {
  const { values, errors, isSubmitting } = useFormikContext();
  const [openedTab, setOpenedTab] = useState(0);
  const [groupToDelete, setGroupToDelete] = useState(undefined);
  const theme = useTheme();

  const changeTab = (_event, newValue) => {
    setOpenedTab(newValue);
  };

  return (
    <FormSection collapsable={true} title="Personalkosten: Löhne Produktivbereich">
      <TabContext value={openedTab.toString()}>
        <FieldArray name="pk_produktiv_mitarbeiter">
          {({ push, remove }) => (
            <>
              <Stack direction="row" flexWrap="wrap" mt={{ xs: 2, sm: 3, borderBottom: `1px solid ${theme.palette.primary.main}` }}>
                <TabList onChange={changeTab}>
                  {values.pk_produktiv_mitarbeiter?.map((category, index) => {
                    return <Tab key={index} label={category.groupTitle || `Tab ${index + 1}`} value={index.toString()} />;
                  })}
                </TabList>
                <Button
                  variant="text"
                  onClick={() => {
                    push({ categoryId: uuid(), fields: [getInitialMitarbeiterData()] });
                    changeTab(null, values.pk_produktiv_mitarbeiter.length);
                  }}
                  disabled={isSubmitting}
                  sx={{ fontWeight: 500 }}
                >
                  Neue Gruppe
                </Button>
              </Stack>
              {values.pk_produktiv_mitarbeiter?.map((outerField, outerIndex) => (
                <TabPanel key={outerIndex} value={outerIndex.toString()} sx={{ padding: 0, marginTop: 3 }}>
                  <Grid container columnSpacing={2} alignItems="end">
                    <Grid item xs={12} sm={5} md={4}>
                      <FastField name={`pk_produktiv_mitarbeiter.${openedTab}.groupTitle`}>
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
                  <FieldArray name={`pk_produktiv_mitarbeiter.${outerIndex}.fields`}>
                    {({ push: innerPush, remove: innerRemove }) => (
                      <>
                        {values.pk_produktiv_mitarbeiter?.[outerIndex]?.fields?.map((innerField, innerIndex) => {
                          const maTitle = `${innerField?.vorname || 'Mitarbeiter'} ${innerField?.nachname || ''}`;
                          return (
                            <React.Fragment key={innerField.userId || innerIndex}>
                              <FormSection
                                title={maTitle}
                                description="Pflegen Sie hier allgemeine Angaben zu Ihrem Mitarbeiter ein."
                                defaultOpen={innerIndex === 0 && values.pk_produktiv_mitarbeiter?.length === 1}
                                backgroundColor={theme.palette.primary[50]}
                                onDelete={() => innerRemove(innerIndex)}
                                headlineVariant="h3"
                              >
                                <Grid container columnSpacing={{ xs: 2, sm: 4, lg: 6 }} rowSpacing={{ xs: 1, lg: 1.5 }}>
                                  <Grid item xs={12}>
                                    <Divider sx={{ mt: 2, mb: 4 }} />
                                  </Grid>
                                </Grid>
                                <Grid
                                  container
                                  alignItems="flex-end"
                                  columnSpacing={{ xs: 2, sm: 4, lg: 6 }}
                                  rowSpacing={{ xs: 1, lg: 1.5 }}
                                >
                                  <>
                                    <Grid item xs={12} sm={6}>
                                      <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.vorname`}>
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
                                      <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.nachname`}>
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
                                      <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.E9`}>
                                        {({ field, meta }) => (
                                          <TextField
                                            {...field}
                                            label="Sollarbeitsstunden p.a. (ohne Feiertage)"
                                            error={meta?.touched && Boolean(meta.error)}
                                            helperText={meta?.touched && meta.error}
                                            type="number"
                                            onWheel={(event) => event.target.blur()}
                                            min="0"
                                            sx={{ mb: 2 }}
                                          />
                                        )}
                                      </FastField>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                      &nbsp;
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.F9`}>
                                        {({ field, meta }) => (
                                          <TextField
                                            {...field}
                                            label="Urlaub (in Stunden)"
                                            error={meta?.touched && Boolean(meta.error)}
                                            helperText={meta?.touched && meta.error}
                                            type="number"
                                            onWheel={(event) => event.target.blur()}
                                            min="0"
                                            max="8760"
                                            sx={{ mb: 2 }}
                                          />
                                        )}
                                      </FastField>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.G9`}>
                                        {({ field, meta }) => (
                                          <TextField
                                            {...field}
                                            label="Krankheit (in Stunden)"
                                            error={meta?.touched && Boolean(meta.error)}
                                            helperText={meta?.touched && meta.error}
                                            type="number"
                                            onWheel={(event) => event.target.blur()}
                                            min="0"
                                            max="8760"
                                            sx={{ mb: 2 }}
                                          />
                                        )}
                                      </FastField>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.H9`}>
                                        {({ field, meta }) => (
                                          <TextField
                                            {...field}
                                            label="Fortbildung (in Stunden)"
                                            error={meta?.touched && Boolean(meta.error)}
                                            helperText={meta?.touched && meta.error}
                                            type="number"
                                            onWheel={(event) => event.target.blur()}
                                            min="0"
                                            max="8760"
                                            sx={{ mb: 2 }}
                                          />
                                        )}
                                      </FastField>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.I9`}>
                                        {({ field, meta }) => (
                                          <TextField
                                            {...field}
                                            label="Sonstige Abwesenheiten (in Stunden)"
                                            error={meta?.touched && Boolean(meta.error)}
                                            helperText={meta?.touched && meta.error}
                                            type="number"
                                            onWheel={(event) => event.target.blur()}
                                            min="0"
                                            max="8760"
                                            sx={{ mb: 2 }}
                                          />
                                        )}
                                      </FastField>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <ReadOnlyBox>
                                        <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                                          <Grid item xs={12} sm={6}>
                                            <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.M9`}>
                                              {({ field, meta }) => (
                                                <TextField
                                                  {...field}
                                                  label="Anwesenheit (in Std.)"
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
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                      &nbsp;
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.N9`}>
                                        {({ field, meta }) => (
                                          <TextField
                                            {...field}
                                            label="Davon direkt verrechenbar (in Prozent)"
                                            error={meta?.touched && Boolean(meta.error)}
                                            helperText={meta?.touched && meta.error}
                                            type="number"
                                            onWheel={(event) => event.target.blur()}
                                            min="0"
                                            max="100"
                                            sx={{ mb: 2 }}
                                          />
                                        )}
                                      </FastField>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <ReadOnlyBox>
                                        <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                                          <Grid item xs={12} sm={6}>
                                            <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.O9`}>
                                              {({ field, meta }) => (
                                                <TextField
                                                  {...field}
                                                  value={formFloat(field.value, 2)}
                                                  label="Direkt verrechnet (in Std.)"
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
                                          <Grid item xs={12} sm={6}>
                                            <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.P9`}>
                                              {({ field, meta }) => (
                                                <TextField
                                                  {...field}
                                                  value={formFloat(field.value, 2)}
                                                  label="Nicht direkt verrechnet (in Std.)"
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
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                      &nbsp;
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.Q9`}>
                                        {({ field, meta }) => (
                                          <TextField
                                            {...field}
                                            label="Brutto Stundenentgelt (pro Stunde, in EUR)"
                                            error={meta?.touched && Boolean(meta.error)}
                                            helperText={meta?.touched && meta.error}
                                            type="number"
                                            onWheel={(event) => event.target.blur()}
                                            min="0"
                                            sx={{ mb: 2 }}
                                          />
                                        )}
                                      </FastField>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                      <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.R9`}>
                                        {({ field, meta }) => (
                                          <TextField
                                            {...field}
                                            label="Durchschn. Zulagen pro Stdunde (in EUR)"
                                            error={meta?.touched && Boolean(meta.error)}
                                            helperText={meta?.touched && meta.error}
                                            type="number"
                                            onWheel={(event) => event.target.blur()}
                                            min="0"
                                            sx={{ mb: 2 }}
                                          />
                                        )}
                                      </FastField>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <ReadOnlyBox alwaysOpen>
                                        <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                                          <Grid item xs={12} sm={6}>
                                            <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.S9`}>
                                              {({ field, meta }) => (
                                                <TextField
                                                  {...field}
                                                  label="Anwesenheitsentgelt (gesamt, in EUR)"
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
                                          <Grid item xs={12} sm={12}>
                                            &nbsp;
                                          </Grid>
                                          <Grid item xs={12} sm={6}>
                                            <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.U9`}>
                                              {({ field, meta }) => (
                                                <TextField
                                                  {...field}
                                                  label="Verrechenbarkeit (direkt verrechnet, in EUR)"
                                                  value={formFloat(field.value, 2)}
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
                                          <Grid item xs={12} sm={6}>
                                            <FastField name={`pk_produktiv_mitarbeiter.${outerIndex}.fields.${innerIndex}.V9`}>
                                              {({ field, meta }) => (
                                                <TextField
                                                  {...field}
                                                  label="Verrechenbarkeit (direkt verrechnet, in EUR)"
                                                  value={formFloat(field.value, 2)}
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
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                      &nbsp;
                                    </Grid>
                                    <Grid item xs={12}>
                                      <ButtonGroup columnSpacing="2">
                                        <Button
                                          variant="outlined"
                                          color="error"
                                          disabled={isSubmitting}
                                          onClick={() => innerRemove(innerIndex)}
                                        >
                                          {maTitle} löschen
                                        </Button>
                                        <Button
                                          variant="outlined"
                                          color="primary"
                                          disabled={isSubmitting}
                                          onClick={() =>
                                            innerPush({
                                              ...values.pk_produktiv_mitarbeiter?.[outerIndex]?.fields?.[innerIndex],
                                              userId: uuid()
                                            })
                                          }
                                        >
                                          {maTitle} duplizieren
                                        </Button>
                                      </ButtonGroup>
                                    </Grid>
                                  </>
                                  <Grid item>
                                    {typeof errors.pk_produktiv_mitarbeiter?.[outerIndex]?.fields === 'string' ? (
                                      <Typography color="error">{errors.pk_produktiv_mitarbeiter[outerIndex].fields}</Typography>
                                    ) : null}
                                  </Grid>
                                </Grid>
                              </FormSection>
                            </React.Fragment>
                          );
                        })}
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => innerPush(getInitialMitarbeiterData(values))}
                          disabled={isSubmitting}
                          sx={{ mb: 4 }}
                        >
                          Neuer Mitarbeiter
                        </Button>
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
