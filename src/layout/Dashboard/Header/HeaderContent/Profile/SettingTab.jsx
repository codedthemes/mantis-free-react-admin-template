import { useState } from 'react';
import { useNavigate } from 'react-router';

// material-ui
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// assets
import CommentOutlined from '@ant-design/icons/CommentOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import UnorderedListOutlined from '@ant-design/icons/UnorderedListOutlined';

// ==============================|| HEADER PROFILE - SETTING TAB ||============================== //

export default function SettingTab() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index, route = '') => {
    setSelectedIndex(index);

    if (route && route !== '') {
      navigate(route);
    }
  };

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      <Link underline="none" sx={{ color: 'inherit' }} target="_blank" href="https://codedthemes.support-hub.io/">
        <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
          <ListItemIcon>
            <QuestionCircleOutlined />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>
      </Link>
      <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary="Account Settings" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
        <ListItemIcon>
          <LockOutlined />
        </ListItemIcon>
        <ListItemText primary="Privacy Center" />
      </ListItemButton>
      <Link underline="none" style={{ color: 'inherit' }} target="_blank" href="https://codedthemes.support-hub.io/">
        <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
          <ListItemIcon>
            <CommentOutlined />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItemButton>
      </Link>
      <ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
        <ListItemIcon>
          <UnorderedListOutlined />
        </ListItemIcon>
        <ListItemText primary="History" />
      </ListItemButton>
    </List>
  );
}
