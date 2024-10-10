<Button variant="contained" onClick={handleClickOpen}>
  Open form dialog
</Button>
<Dialog open={open} onClose={handleClose}>
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText sx={{ mb: 2 }}>
        To subscribe to this website, please enter your email address here. We will send updates occasionally.
      </DialogContentText>
      <TextField id="name" placeholder="Email Address" type="email" fullWidth variant="outlined" />
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Subscribe
      </Button>
    </DialogActions>
  </Box>
</Dialog>