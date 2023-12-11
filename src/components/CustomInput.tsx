import { Stack } from '@mui/material';
import { InputLabel, OutlinedInput } from '@mui/material';
import { ChangeEvent } from 'react';

type CustomInputProps = {
  title?: string;
  placeholder?: string;
  value?: any;
  error?: any;
  touched?: any;
  handleBlur?: any;
  disabled?: boolean;
  multiline?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const CustomInput = ({
  title,
  placeholder,
  value,
  disabled,
  error,
  touched,
  handleBlur,
  handleChange,
  multiline
}: CustomInputProps) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={1} padding={1}>
      <InputLabel htmlFor="email-login">{title}</InputLabel>
      <OutlinedInput
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
        fullWidth
        disabled={disabled}
        multiline={multiline}
        // error={true}
      />
      {/* {touched.email && errors.email && (
        <FormHelperText error id="standard-weight-helper-text-email-login">
          error
        </FormHelperText>
      )} */}
    </Stack>
  );
};
