import { Typography, Box, Button, Collapse } from '@mui/material/index';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTheme } from '@mui/material/styles';
import { UserContext } from 'context/user/index';
import { useContext, useEffect, useState } from 'react';

const ReadOnlyBox = ({ children, title, alwaysOpen }) => {
  const theme = useTheme();
  const { advancedMode } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const actuallyOpen = alwaysOpen || isOpen;

  useEffect(() => {
    setIsOpen(advancedMode);
  }, [advancedMode]);

  return (
    <>
      <Button
        color="primary"
        variant={actuallyOpen ? 'contained' : 'outlined'}
        sx={{ paddingX: 1, paddingY: 0.5, minWidth: 0, display: 'inline-flex', gap: 1, alignItems: 'center' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {actuallyOpen ? <VisibilityIcon /> : <VisibilityOffIcon />} {title || 'Zusatzinformationen'}
      </Button>
      <Collapse in={actuallyOpen}>
        <Box
          sx={{
            padding: theme.shape.paddingBoxMedium,
            border: `1px solid ${theme.palette.grey[300]}`,
            borderRadius: theme.shape.borderRadiusBox,
            height: '100%',
            mt: 1
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Berechnet: {title}
          </Typography>
          {children}
        </Box>
      </Collapse>
    </>
  );
};

export default ReadOnlyBox;
