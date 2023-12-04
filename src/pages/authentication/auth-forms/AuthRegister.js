import { useState, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Button, FormControl, FormHelperText, Grid, Link, IconButton, InputAdornment, Typography, TextField } from '@mui/material';

// Form
import validationRules from '../../../formConfigs/authLogin/rules/validation/index';
import conditionalRules from '../../../formConfigs/authLogin/rules/conditional/index';
import validateFields from 'utils/formUtils/validateFields';
import { Formik, Form, Field } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { UserContext } from 'context/user';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = () => {
  const { registerUser } = useContext(UserContext);
  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  const handleRegister = ({ email, password, firstName, lastName, company }) => {
    // Sign in an existing user with Firebase
    registerUser({ email, password, firstName, lastName, company });
  };

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={async (values, formikBag) => {
          const { errors } = validateFields(values, conditionalRules, validationRules);
          formikBag.setErrors(errors);

          if (Object.keys(errors).length === 0) {
            handleRegister({
              email: values.email,
              password: values.password,
              firstName: values.firstName,
              lastName: values.lastName,
              company: values.company
            });
          }
          return new Promise((res) => setTimeout(res, 2500));
        }}
      >
        {({ values = {}, errors = {}, isSubmitting, handleChange, handleBlur, touched = {} }) => (
          <Form autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  id="firstName"
                  name="firstName"
                  label="Vorname"
                  required
                  fullWidth
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  id="lastName"
                  name="lastName"
                  label="Nachname"
                  required
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  id="company"
                  name="company"
                  label="Unternehmen"
                  required
                  value={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.company && Boolean(errors.company)}
                  helperText={touched.company && errors.company}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  id="email"
                  name="email"
                  label="E-Mail"
                  type="email"
                  autoComplete="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  id="password"
                  name="password"
                  label="Passwort"
                  autoComplete="password"
                  required
                  value={values.password}
                  onChange={(e) => {
                    handleChange(e);
                    changePassword(event.target.value);
                  }}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Durch die Anmeldung stimmst du unseren &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Nutzungsbedingungen
                  </Link>
                  &nbsp; und unserer &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Datenschutzrichtlinie
                  </Link>
                  &nbsp; zu.
                </Typography>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Profil erstellen
                  </Button>
                </AnimateButton>
              </Grid>
              {/*
              <Grid item xs={12}>
                <Divider>
                  <Typography variant="caption">Anmelden mit</Typography>
                </Divider>
              </Grid>
              <Grid item xs={12}>
                <FirebaseSocial />
              </Grid>
              */}
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AuthRegister;
