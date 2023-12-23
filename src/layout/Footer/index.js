import { Box, Grid, List, ListItemButton, ListItem } from '@mui/material';
import Logo from 'components/Logo/Logo';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();

  const footerLinkStyles = {
    fontWeight: 300,
    fontSize: '1rem',
    padding: 0,
    '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'transparent',
        padding: theme.shape.layoutDesignGutter,
        position: 'relative',
        zIndex: '1',
        borderTop: `2px solid ${theme.palette.primary.main}`
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
          <Logo sx={{ maxWidth: '300px' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <List
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', sm: 'flex-end' },
              gap: `${theme.spacing(1)} ${theme.spacing(3)}`
            }}
          >
            <ListItem sx={{ padding: 0, flexBasis: '0', width: 'auto' }}>
              <ListItemButton variant="subtitle2" component={RouterLink} to="#" sx={footerLinkStyles}>
                Impressum
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 0, flexBasis: '0', width: 'auto' }}>
              <ListItemButton variant="subtitle2" component={RouterLink} to="#" sx={footerLinkStyles}>
                Datenschutz
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
