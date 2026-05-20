import PropTypes from 'prop-types';

// project imports
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/logo';

// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }) {
  return (
    <DrawerHeaderStyled
      open={open}
      sx={{
        minHeight: '60px',
        width: 'initial',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: open ? '24px' : 0
      }}
    >
      <Logo isIcon={!open} sx={{ width: open ? 'auto' : 35, height: 35 }} />
    </DrawerHeaderStyled>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };
