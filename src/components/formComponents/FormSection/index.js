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

const FormSection = ({ children, title, onAdd, onDelete, defaultOpen, collapsable = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || false);
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();

  const buttonStyles = {
    aspectRatio: '1/1'
  }

  return (
    <>
      <LayoutBox
        sx={{
          backgroundColor: theme.palette.common.white,
          px: { xs: theme.spacing(4), md: theme.spacing(6), lg: theme.spacing(8) },
          py: { xs: theme.spacing(3), md: theme.spacing(5), lg: theme.spacing(6) },
          mb: { xs: theme.spacing(2), md: theme.spacing(2.5), lg: theme.spacing(3) },
          overflow: 'hidden'
        }}
      >
        <Stack gap={2} direction="row" justifyContent="space-between" flexWrap="wrap" alignItems="center" >
          <Typography variant="h2" sx={{ mr: 'auto' }}>
            {title}
          </Typography>
          <ButtonGroup color="primary" variant="outlined">
            {onDelete ? (
              <Button sx={{ ...buttonStyles }} onClick={() => setOpenPopup(true)}>
                <DeleteOutlineOutlined />
              </Button>
            ) : (
              ''
            )}
            {onAdd ? (
              <Button sx={{ ...buttonStyles }} onClick={onAdd}>
                <NoteAddOutlined />
              </Button>
            ) : (
              ''
            )}
            {collapsable ? <Button sx={{ ...buttonStyles }} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <ClearOutlined /> : <EditOutlined />}</Button> : ''}
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
