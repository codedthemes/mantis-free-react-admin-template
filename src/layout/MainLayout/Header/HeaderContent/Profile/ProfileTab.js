import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import { LogoutOutlined, UserOutlined, WalletOutlined } from '@ant-design/icons';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

const ProfileTab = ({ handleLogout }) => {
  const theme = useTheme();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const textColor = theme.palette.common.black;
  const textColorHover = textColor;
  const bgColor = theme.palette.common.white;
  const bgColorHover = theme.palette.primary[100];

  const listItemButtonStyle = {
    bgcolor: bgColor,
    color: textColor,
    padding: theme.shape.paddingButton,
    marginBottom: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    transition: '.25s',
    '&:after': {
      content: '""',
      height: '60%',
      width: '0px',
      opacity: '0',
      position: 'absolute',
      top: '50%',
      right: '0',
      transform: 'translateY(-50%)',
      backgroundColor: theme.palette.primary[300],
      borderTopLeftRadius: '3px',
      borderBottomLeftRadius: '3px',
      transition: '.25s'
    },
    '&.Mui-selected': {
      bgcolor: bgColor,
      color: textColor,
      '&:after': {
        width: '4px',
        opacity: '1'
      },
      '&:hover': {
        bgcolor: bgColorHover,
        color: textColorHover,
        '&:after': {
          backgroundColor: theme.palette.primary[400],
          width: '6px',
          opacity: '1'
        }
      }
    },
    '&:hover': {
      bgcolor: bgColorHover,
      color: textColorHover,
      '&:after': {
        width: '3px',
        opacity: '0.5'
      }
    }
  };

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32, color: theme.palette.grey[500] } }}>
      <ListItemButton sx={listItemButtonStyle} selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 1)}>
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary="Profil" />
      </ListItemButton>
      <ListItemButton sx={listItemButtonStyle} selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 4)}>
        <ListItemIcon>
          <WalletOutlined />
        </ListItemIcon>
        <ListItemText primary="Zahlung" />
      </ListItemButton>
      <ListItemButton sx={listItemButtonStyle} selected={selectedIndex === 2} onClick={handleLogout}>
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary="Abmelden" />
      </ListItemButton>
    </List>
  );
};

ProfileTab.propTypes = {
  handleLogout: PropTypes.func
};

export default ProfileTab;
