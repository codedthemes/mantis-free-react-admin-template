import PropTypes from 'prop-types';

// material-ui
import { List } from '@mui/material';

// project import
import NavItem from './NavItem';

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
  const navItems = item.children?.map((menuItem) => {
    return <NavItem key={menuItem.id} item={menuItem} level={1} />;
  });

  return <List sx={{ mb: 2, py: 0, zIndex: 0 }}>{navItems}</List>;
};

NavGroup.propTypes = {
  item: PropTypes.object
};

export default NavGroup;
