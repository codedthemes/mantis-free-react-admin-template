import { useEffect, useState } from 'react';
import { Grid, Stack, Typography, SelectChangeEvent, Button } from '@mui/material';
import { CustomInput } from 'components/CustomInput';
import { useEpicStore } from 'zustand-store/EpicStore';
import { EpicStatus } from '../../Types/Epic';

type CreateEpicProps = {
  handleToggle: () => void;
};

export const CreateEpic = ({ handleToggle }: CreateEpicProps) => {
  const [epicName, setEpicName] = useState('');
  const [isEpicValid, setIsEpicValid] = useState(true);
  const { AddEpic } = useEpicStore();

  const createEpic = async () => {
    AddEpic({ title: epicName, status: EpicStatus.IN_PROGRESS, user_id: '1' });
  };

  useEffect(() => {
    if (epicName) {
      setIsEpicValid(false);
    } else {
      setIsEpicValid(true);
    }
  }, [epicName]);

  const handleEpicNameChange = (event: SelectChangeEvent<HTMLInputElement>) => {
    setEpicName(event.target.value as string);
  };

  const CreateEpic = () => {
    createEpic();
    handleToggle();
  };

  return (
    <Grid container spacing={3} padding={3} paddingTop={0}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: -1 } }}>
          <Typography variant="h3">Create an epic</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <>
          <CustomInput placeholder="Enter epic title" value={epicName} handleChange={handleEpicNameChange} />
        </>

        <Button
          disableElevation
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="primary"
          disabled={isEpicValid}
          onClick={CreateEpic}
          sx={{ mt: 3 }}
        >
          create epic
        </Button>
      </Grid>
    </Grid>
  );
};
