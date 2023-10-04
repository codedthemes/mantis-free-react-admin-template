import PropTypes from 'prop-types';
import { useRef, useState, useContext } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, ClickAwayListener, Grid, IconButton, Popper, Stack, Typography } from '@mui/material';

// project import
import Transitions from 'components/@extended/Transitions';
import ProfileTab from './ProfileTab';

// assets
import { SettingsOutlined, Logout } from '@mui/icons-material';
import { UserContext } from 'context/user';
import LayoutBox from 'components/LayoutBox/index';

// tab panel wrapper
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`profile-tabpanel-${index}`} aria-labelledby={`profile-tab-${index}`} {...other}>
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `profile-tab-${index}`,
    'aria-controls': `profile-tabpanel-${index}`
  };
}

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = ({ variant }) => {
  const theme = useTheme();
  const { user, logoutUser } = useContext(UserContext);

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  console.log('update open', open);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleLogout = async () => {
    setOpen(false);
    logoutUser();
  };

  const handleClose = (event) => {
    console.log('click away');
    setOpen(false);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const iconBackColorClosed = theme.palette.primary.main;
  const iconBackColorOpen = theme.palette.primary.light;
  const iconColorClosed = theme.palette.common.white;
  const iconColorOpen = theme.palette.common.white;

  return (
    <Box sx={{ flexShrink: 0 }}>
      <ButtonBase
        sx={{
          p: 0.25,
          bgcolor: open ? iconBackColorOpen : iconBackColorClosed,
          padding: 1.5,
          borderRadius: '50%',
          boxShadow: theme.customShadows.z3,
          transition: '.25s',
          '&:hover': { bgcolor: 'secondary.lighter', transform: 'rotate(25deg)' }
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={user.uid && handleToggle}
        href={!user.uid && '/login'}
      >
        <SettingsOutlined sx={{ color: open ? iconColorOpen : iconColorClosed }} />
      </ButtonBase>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        sx={{ zIndex: 1 }}
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 9]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Transitions type="fade" in={open} {...TransitionProps}>
              {open && (
                <Box
                  sx={{
                    width: 290,
                    minWidth: 290,
                    maxWidth: 290
                  }}
                >
                  <LayoutBox
                    sx={{ px: 3, py: 2, backgroundColor: theme.palette.common.white }}
                    elevation={0}
                    border={false}
                    content={false}
                  >
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ mb: 2, backgroundColor: theme.palette.grey[300], borderRadius: '10000px', padding: 0.5 }}
                    >
                      <Grid item>
                        <Stack direction="row" spacing={2} alignItems="center" marginLeft={0.8}>
                          <Avatar
                            alt="profile user"
                            sx={{ width: 32, height: 32, bgColor: theme.palette.primary.main, color: theme.palette.common.white }}
                          >
                            {user?.initials}
                          </Avatar>
                          <Stack>
                            <Typography variant="h6">{user?.displayName}</Typography>
                            <Typography variant="body2" color="textSecondary">
                              {user?.company}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item>
                        <IconButton size="large" color="primary" onClick={handleLogout}>
                          <Logout />
                        </IconButton>
                      </Grid>
                    </Grid>
                    {open && <ProfileTab handleLogout={handleLogout} />}
                  </LayoutBox>
                </Box>
              )}
            </Transitions>
          </ClickAwayListener>
        )}
      </Popper>
    </Box>
  );
};

export default Profile;
