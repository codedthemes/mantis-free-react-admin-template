import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  Typography,
  TextField
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { auth, createUserWithEmailAndPassword, updateProfile } from 'auth/firebase';

// Form
import validationRules from '../../../formConfigs/authLogin/rules/validation/index';
import conditionalRules from '../../../formConfigs/authLogin/rules/conditional/index';
import validateFields from 'utils/formUtils/validateFields';
import { Formik, Form, Field } from 'formik';
import { login } from 'store/reducers/user';

// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  useEffect(() => {
    if (user?.uid) {
      navigate('/');
    }
  }, [user?.uid]);

  useEffect(() => {
    changePassword('');
  }, []);

  const handleRegister = ({ email, password, firstName, lastName }) => {
    // Sign in an existing user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      // returns  an auth object after a successful authentication
      // userAuth.user contains all our user details
      .then((userCredential) => {
        console.log('userCredential', userCredential);
        const displayName = `${firstName} ${lastName}`;
        updateProfile(userCredential.user, {
          displayName: displayName
        })
          .then(() => {
            // Dispatch the user information for persistence in the redux state
            dispatch(
              login({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
                displayName: displayName
              })
            );
          })
          .catch((error) => {
            console.log('user not updated');
          });
      })
      // display the error if any
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={async (values, formikBag) => {
          console.log('submit start', values);
          const { errors } = validateFields(values, conditionalRules, validationRules);
          console.log('submit', errors, values);
          formikBag.setErrors(errors);

          if (Object.keys(errors).length === 0) {
            handleRegister({
              email: values.email,
              password: values.password,
              firstName: values.firstName,
              lastName: values.lastName
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
                  shrink={false}
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
                  shrink={false}
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
                  shrink={false}
                  component={TextField}
                  id="email"
                  name="email"
                  label="E-Mail"
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
                  shrink={false}
                  component={TextField}
                  id="password"
                  name="password"
                  label="Passwort"
                  required
                  value={values.password}
                  onChange={handleChange}
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
              <Grid item xs={12}>
                <Divider>
                  <Typography variant="caption">Anmelden mit</Typography>
                </Divider>
              </Grid>
              <Grid item xs={12}>
                <FirebaseSocial />
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AuthRegister;
