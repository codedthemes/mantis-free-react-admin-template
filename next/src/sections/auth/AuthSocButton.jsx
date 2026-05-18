import PropTypes from 'prop-types';
// material-ui
import Button from '@mui/material/Button';

// ==============================|| AUTHENTICATION - CARD ||============================== //

export default function AuthSocButton({ children, ...other }) {
  return (
    <Button
      variant="outlined"
      fullWidth
      sx={{
        bgcolor: 'secondary.100',
        borderColor: 'secondary.200',
        color: 'secondary.main',
        '&:hover,&:focus': {
          bgcolor: 'secondary.100',
          borderColor: 'primary.main'
        }
      }}
      {...other}
    >
      {children}
    </Button>
  );
}

AuthSocButton.propTypes = { children: PropTypes.any, other: PropTypes.any };
