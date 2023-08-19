import React, { useCallback, useContext } from 'react';
import { useFormikContext } from 'formik';

// material-ui
import { Grid, Button } from '@mui/material';
import { UserContext } from 'context/user/user';

const ButtonBar = () => {
  const { values = {} } = useFormikContext();
  const { saveForm } = useContext(UserContext);

  const saveAction = useCallback(() => {
    saveForm(values);
  }, [values, saveForm]);
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
