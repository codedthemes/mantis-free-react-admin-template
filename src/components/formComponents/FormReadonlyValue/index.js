import { InputLabel, Typography, Stack } from '@mui/material';

const FormReadonlyValue = ({ label, value, outerProps, labelProps, valueProps }) => {
  return (
    <Stack {...outerProps}>
      <InputLabel {...labelProps} component="span">
        {label}
      </InputLabel>
      <Typography {...valueProps} sx={{ fontWeight: '700' }}>
        {value}
      </Typography>
    </Stack>
  );
};

export default FormReadonlyValue;
