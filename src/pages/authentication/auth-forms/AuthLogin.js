import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  TextField
} from '@mui/material';

// third party
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import validationRules from '../../../formConfigs/authLogin/rules/validation/index';
import conditionalRules from '../../../formConfigs/authLogin/rules/conditional/index';
import validateFields from 'utils/formUtils/validateFields';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'auth/firebase';
import { login } from 'store/reducers/user';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
  const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = ({ email, password }) => {
    // Sign in an existing user with Firebase
    signInWithEmailAndPassword(auth, email, password)
      // returns  an auth object after a successful authentication
      // userAuth.user contains all our user details
      .then((userAuth) => {
        // store the user's information in the redux state
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL
          })
        );
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
            handleLogin({
              email: values.email,
              password: values.password
            });
          }
          return new Promise((res) => setTimeout(res, 2500));
        }}
      >
        {({ values = {}, errors = {}, isSubmitting, handleChange, handleBlur, touched = {} }) => (
          <Form autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={3}>
                  <Field
                    shrink={false}
                    component={TextField}
                    id="email"
                    name="email"
                    label="E-Mail"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    shrink={false}
                    component={TextField}
                    id="password"
                    name="password"
                    label="Passwort"
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
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={<Typography variant="h6">Keep me sign in</Typography>}
                  />
                  <Link variant="h6" component={RouterLink} to="" color="text.primary">
                    Forgot Password?
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
                    Login
                  </Button>
                </AnimateButton>
              </Grid>
              <Grid item xs={12}>
                <Divider>
                  <Typography variant="caption"> Login with</Typography>
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

export default AuthLogin;
