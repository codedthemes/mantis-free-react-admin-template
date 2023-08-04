import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';

// material-ui
import { Grid, Button } from '@mui/material';

// redux
import { useDispatch } from 'react-redux';
import { setCurrentFormValues } from 'store/reducers/form';

const ButtonBar = () => {
  const dispatch = useDispatch();
  const { values = {} } = useFormikContext();
  const saveAction = useCallback(() => {
    dispatch(setCurrentFormValues(values));
  }, [dispatch, values]);
  return (
    <Grid container>
      <Grid item>
        <Button variant="contained" onClick={saveAction}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonBar;
