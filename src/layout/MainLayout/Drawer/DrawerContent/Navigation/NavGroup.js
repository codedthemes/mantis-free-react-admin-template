import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// material-ui
import { Box, List, Typography } from '@mui/material';

// project import
import NavItem from './NavItem';

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
  const menu = useSelector((state) => state.menu);
  // const { drawerOpen } = menu;
  const drawerOpen = true;

  const navItems = item.children?.map((menuItem) => {
    return <NavItem key={menuItem.id} item={menuItem} level={1} />;
  });

  return <List sx={{ mb: 2, py: 0, zIndex: 0 }}>{navItems}</List>;
};

NavGroup.propTypes = {
  item: PropTypes.object
};

export default NavGroup;
