import React, { useState } from 'react';

// material-ui
import {
  Grid,
  TextField,
  Divider,
  Button,
  ButtonGroup,
  Typography,
  Tab,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTheme } from '@mui/material/styles';
import { DeleteOutlineOutlined } from '@mui/icons-material';

// formik
import { FastField, FieldArray, useFormikContext } from 'formik';
import FormSection from 'components/formComponents/FormSection/index';
import ReadOnlyBox from 'components/formComponents/ReadOnlyBox/index';
import { v4 as uuid } from 'uuid';
import formFloat from 'utils/formUtils/formFloat';
import { getInitialGemeinkostenItem } from '../getInitialGemeinkostenData';

const MaterialzuschlagFremdleistungen = () => {
  const { values, errors, isSubmitting } = useFormikContext();
  const [openedTab, setOpenedTab] = useState(0);
  const [groupToDelete, setGroupToDelete] = useState(undefined);
  const theme = useTheme();

  const changeTab = (_event, newValue) => {
    setOpenedTab(newValue);
  };

  return (
    <>
      <FormSection collapsable={false} title="Angabe Gemeinkosten">
        <TabContext value={openedTab.toString()}>
          <FieldArray name="gk_deckung_zuschlaege">
            {({ push, remove }) => (
              <>
                <Stack direction="row" flexWrap="wrap" mt={{ xs: 2, sm: 3 }}>
                  <TabList onChange={changeTab} aria-label="lab API tabs example">
                    {values.gk_deckung_zuschlaege?.map((category, index) => {
                      return <Tab key={index} label={category.groupTitle || `Tab ${index + 1}`} value={index.toString()} />;
                    })}
                  </TabList>
                  <Button
                    variant="text"
                    onClick={() => {
                      push({ categoryId: uuid(), fields: [getInitialGemeinkostenItem()] });
                      changeTab(null, values.gk_deckung_zuschlaege.length);
                    }}
                    disabled={isSubmitting}
                    sx={{ fontWeight: 500 }}
                  >
                    Neue Gruppe
                  </Button>
                </Stack>
                {values.gk_deckung_zuschlaege?.map((outerField, outerIndex) => (
                  <TabPanel key={outerIndex} value={outerIndex.toString()} sx={{ padding: 0, marginTop: 3 }}>
                    <Grid container columnSpacing={2} alignItems="end">
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
                    <FieldArray name={`gk_deckung_zuschlaege.${outerIndex}.fields`}>
                      {({ push: innerPush, remove: innerRemove }) => (
                        <>
                          {values.gk_deckung_zuschlaege[outerIndex].fields?.map((innerField, innerIndex) => (
                            <React.Fragment key={innerField.itemId || innerIndex}>
                              <FormSection
                                key={innerIndex}
                                title={innerField?.D8 || 'Neues Element'}
                                description="Angaben zu Gemeinkosten"
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
                                      <ButtonGroup>
                                        <Button
                                          variant="outlined"
                                          color="error"
                                          disabled={isSubmitting}
                                          onClick={() => innerRemove(innerIndex)}
                                        >
                                          Eintrag löschen
                                        </Button>
                                        <Button
                                          variant="outlined"
                                          color="primary"
                                          disabled={isSubmitting}
                                          onClick={() => innerPush({ ...innerField, itemId: uuid() })}
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
                            </React.Fragment>
                          ))}
                          <Button
                            variant="contained"
                            color="success"
                            onClick={() => innerPush({ itemId: uuid() })}
                            disabled={isSubmitting}
                            sx={{ mb: 4 }}
                          >
                            Neuer Eintrag
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
    </>
  );
};

export default MaterialzuschlagFremdleistungen;
