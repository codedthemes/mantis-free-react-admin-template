import { useState } from 'react';

import { Stack, Box, Popover, Button } from '@mui/material/index';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const EnrichedField = ({ children, infoText }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Stack sx={{ position: 'relative', '.MuiFormLabel-root': { paddingRight: 3.5 } }}>
      <Box sx={{ position: 'absolute', top: '0', right: '0', zIndex: '1000' }}>
        <Button
          sx={{
            padding: '0',
            borderRadius: '50000px',
            minWidth: 'auto',
            widht: '1.5em',
            height: '1.5em',
            fontWeight: 600,
            fontSize: 14,
            aspectRatio: '1/1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <QuestionMarkIcon sx={{ fontSize: 14 }} />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          elevation={16}
          slotProps={{ paper: { sx: { marginTop: -1 } } }}
        >
          {infoText}
        </Popover>
      </Box>
      {children}
    </Stack>
  );
};

export default EnrichedField;
