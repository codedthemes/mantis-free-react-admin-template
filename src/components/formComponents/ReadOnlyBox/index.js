import { Typography, Box, Button, Collapse } from '@mui/material/index';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTheme } from '@mui/material/styles';
import { UserContext } from 'context/user/index';
import { useContext, useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const ReadOnlyBox = ({ children, title = 'Berechnet:', alwaysOpen, white, headlineVariant = 'h4' }) => {
  const theme = useTheme();
  const { advancedMode } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const actuallyOpen = alwaysOpen || isOpen;

  useEffect(() => {
    setIsOpen(advancedMode);
  }, [advancedMode]);

  return (
    <>
      {!alwaysOpen && (
        <Button
          color="primary"
          variant={actuallyOpen ? 'contained' : 'outlined'}
          sx={{ minWidth: 0, display: 'inline-flex', gap: 1, alignItems: 'center' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {actuallyOpen ? <VisibilityIcon /> : <VisibilityOffIcon />} {title || 'Zusatzinformationen'}
        </Button>
      )}
      <Collapse in={actuallyOpen}>
        <Box
          sx={{
            padding: theme.shape.paddingBoxMedium,
            border: !white && `1px solid ${theme.palette.grey[300]}`,
            backgroundColor: white && theme.palette.common.white,
            borderRadius: theme.shape.borderRadiusBox,
            height: '100%',
            mt: 1
          }}
        >
          <Typography variant={headlineVariant} sx={{ mb: 2 }}>
            {title}
          </Typography>
          {children}
        </Box>
      </Collapse>
    </>
  );
};

export default ReadOnlyBox;
