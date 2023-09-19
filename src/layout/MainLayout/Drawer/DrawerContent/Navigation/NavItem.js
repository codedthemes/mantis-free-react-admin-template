import PropTypes from 'prop-types';
import { forwardRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, ListItem } from '@mui/material';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

const NavItem = ({ item, level }) => {
  const theme = useTheme();
  console.log('item', item);
  const { pathname } = useLocation();
  // const { drawerOpen } = useSelector((state) => state.menu);
  const drawerOpen = true;
  const isActive = useMemo(() => {
    item.matchingUrlRegexp && console.log('pathname.match(item.matchingUrlRegexp)', pathname.match(item.matchingUrlRegexp));
    return pathname === item.url || (item.matchingUrlRegexp && pathname.match(item.matchingUrlRegexp));
  }, [pathname, item.url, item.matchingUrlRegexp]);

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />) };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const Icon = item.icon;
  const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : false;

  const textColor = isActive ? theme.palette.common.black : theme.palette.common.white;
  const textColorHover = textColor;
  const iconColor = isActive ? theme.palette.primary.main : theme.palette.secondary.main;
  const bgColor = isActive ? theme.palette.common.white : theme.palette.primary.main;
  const bgColorHover = isActive ? theme.palette.primary[100] : theme.palette.primary.dark;

  return (
    <ListItem sx={{ padding: 0 }}>
      <ListItemButton
        {...listItemProps}
        disabled={item.disabled}
        selected={isActive}
        sx={{
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
            backgroundColor: theme.palette.secondary.main,
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
                backgroundColor: theme.palette.secondary.main,
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
        }}
      >
        {itemIcon && (
          <ListItemIcon
            sx={{
              color: iconColor,
              marginRight: 1
            }}
          >
            {itemIcon}
          </ListItemIcon>
        )}
        {item.title}
      </ListItemButton>
    </ListItem>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
