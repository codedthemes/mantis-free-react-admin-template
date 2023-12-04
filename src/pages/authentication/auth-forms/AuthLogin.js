import React, { useContext, useCallback, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material-ui
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  TextField,
  CircularProgress
} from '@mui/material';

// third party
import { Formik, Form, Field } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

// Form
import validationRules from '../../../formConfigs/authLogin/rules/validation/index';
import conditionalRules from '../../../formConfigs/authLogin/rules/conditional/index';
import validateFields from 'utils/formUtils/validateFields';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { UserContext } from 'context/user';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
  const { user, authUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (user.uid) {
      console.log('navigate', user.uid);
      navigate('/office/dashboard');
    }
  }, [user.uid, navigate]);

  const handleLogin = useCallback(
    async ({ email, password, keepSignedIn }) => {
      // Sign in an existing user with Firebase
      await authUser({
        emailCredentials: {
          email: email,
          password: password,
          keepSignedIn: keepSignedIn
        }
      });

      navigate('/office/dashboard');
    },
    [navigate, authUser]
  );

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={async (values, formikBag) => {
          const { errors } = validateFields(values, conditionalRules, validationRules);
          formikBag.setErrors(errors);

          console.log('login values', values);

          if (Object.keys(errors).length === 0) {
            await handleLogin({
              email: values.email,
              password: values.password,
              keepSignedIn: values.keepSignedIn
            });
          }
          return;
        }}
      >
        {({ values = {}, errors = {}, isSubmitting, handleChange, handleBlur, touched = {}, setFieldValue }) => (
          <Form autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={3}>
                  {console.log('values', values)}
                  <Field
                    component={TextField}
                    id="email"
                    name="email"
                    label="E-Mail"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    component={TextField}
                    id="password"
                    name="password"
                    label="Passwort"
                    autoComplete="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Stack>
              </Grid>

              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="keepSignedIn"
                        name="keepSignedIn"
                        checked={values.keepSignedIn}
                        onChange={() => setFieldValue('keepSignedIn', !values.keepSignedIn)}
                        color="primary"
                        size="small"
                      />
                    }
                    label={<Typography variant="h6">Angemeldet bleiben</Typography>}
                  />
                  <Link variant="h6" component={RouterLink} to="" color="text.primary">
                    Passwort vergessen?
                  </Link>
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    {isSubmitting ? <CircularProgress size="1rem" color="inherit" sx={{ mr: '0.5rem' }} /> : ''}Login
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

export default AuthLogin;
