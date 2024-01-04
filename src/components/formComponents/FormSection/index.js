import LayoutBox from 'components/LayoutBox/index';
import {
  Typography,
  Stack,
  Button,
  Collapse,
  useTheme,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  ButtonGroup
} from '@mui/material/index';
import { DeleteOutlineOutlined, NoteAddOutlined, EditOutlined, ClearOutlined } from '@mui/icons-material';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const FormSection = ({
  children,
  title,
  description,
  onAdd,
  onDelete,
  defaultOpen,
  collapsable = true,
  backgroundColor,
  headlineVariant = 'h2'
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || false);
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();

  const buttonStyles = {
    aspectRatio: '1/1',
    padding: theme.spacing(1.25)
  };

  return (
    <>
      <LayoutBox
        sx={{
          backgroundColor: backgroundColor || theme.palette.common.white,
          padding: theme.shape.paddingBoxMedium,
          mb: { xs: theme.spacing(1.5), md: theme.spacing(1.75), lg: theme.spacing(2) },
          overflow: 'hidden'
        }}
      >
        <Stack gap={2} direction="row" justifyContent="space-between" flexWrap={{ xs: 'wrap', sm: 'nowrap' }} alignItems="flex-start">
          <Stack>
            <Typography variant={headlineVariant} sx={{ mr: 'auto' }}>
              {title}
            </Typography>
            {description && (
              <Typography variant="text" sx={{ mr: 'auto', mt: 1 }}>
                {description}
              </Typography>
            )}
          </Stack>
          <ButtonGroup color="primary" variant="outlined">
            {onDelete ? (
              <Button color="error" sx={{ ...buttonStyles }} onClick={() => setOpenPopup(true)}>
                <DeleteOutlineOutlined />
              </Button>
            ) : (
              ''
            )}
            {onAdd ? (
              <Button color="success" sx={{ ...buttonStyles }} onClick={onAdd}>
                <NoteAddOutlined />
              </Button>
            ) : (
              ''
            )}
            {collapsable ? (
              <Button color="primary" variant="contained" sx={{ ...buttonStyles }} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <ClearOutlined /> : <EditOutlined />}
              </Button>
            ) : (
              ''
            )}
          </ButtonGroup>
        </Stack>
        {collapsable ? <Collapse in={isOpen}>{children}</Collapse> : children}
      </LayoutBox>
      <Dialog
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Wollen Sie diesen Abschnitt wirklich löschen?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPopup(false)}>Abbrechen</Button>
          <Button onClick={onDelete} autoFocus>
            Ja, löschen
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormSection;
