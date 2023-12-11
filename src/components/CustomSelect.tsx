import { Stack } from '@mui/material';
import { InputLabel, Select, SelectChangeEvent, MenuItem } from '@mui/material';

type Option = {
  id: string;
  title: string;
};

type CustomSelectProps = {
  title?: string;
  placeholder?: string;
  value?: any;
  options?: Option[];
  error?: any;
  touched?: any;
  handleBlur?: any;
  handleChange?: (e: SelectChangeEvent<HTMLInputElement>) => void;
};

export const CustomSelect = ({ title, value, options, error, touched, handleBlur, handleChange }: CustomSelectProps) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={1} padding={1}>
      {/* <InputLabel>{title}</InputLabel> */}
      <InputLabel id="demo-simple-select-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        label={title}
        value={value}
        onChange={handleChange}
        fullWidth
        // error={true}
      >
        {options &&
          options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.title}
            </MenuItem>
          ))}
      </Select>
    </Stack>
  );
};
