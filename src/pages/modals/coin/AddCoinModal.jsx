import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Box } from '@mui/material';
import { DatePicker } from '@mui/lab';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/base';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';

export default function AddCoinModal({ open, onClose, onAddCoin }) {
  const [coinName, setCoinName] = useState('');
  const [coinPrice, setCoinPrice] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (coinName && coinPrice) {
      onAddCoin({ name: coinName, symbol: coinPrice });
      setCoinName('');
      setCoinPrice('');
      onClose();
    }
  };

  const handleClose = () => {
    setCoinName('');
    setCoinPrice('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box sx={{ p: 1, py: 1.5 }}>
        <DialogTitle>Novo Aporte</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>Digite o nome da moeda para adicioná-la à sua lista</DialogContentText>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-name-label">Name</InputLabel>
            <Select
              labelId="Moeda"
              id="coinName"
              multiple
              value={coinName}
              onChange={(e) => setCoinName(e.target.value)}
              input={<OutlinedInput />}
            >
              {/* TODO CRIAR ENDPOINT PARA RECUPERAR TODAS AS MOEDAS CADASTRADAS NA BASE */}
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            id="price"
            label="Preço"
            placeholder="54587.69"
            value={coinPrice}
            onChange={(e) => setCoinPrice(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={date}
              onChange={(newDate) => {
                setDate(newDate);
              }}
              renderInput={(params) => <TextField {...params} helperText={params?.inputProps?.placeholder} placeholder="10/09/2024" />}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Add Coin
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

AddCoinModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddCoin: PropTypes.func.isRequired
};
