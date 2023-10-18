import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// project import
import config from 'config';
import { activeItem } from 'store/reducers/menu';
import { Box } from '../../../node_modules/@mui/material/index';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => {
  const { defaultId } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      component={Link}
      onClick={() => dispatch(activeItem({ openItem: [defaultId] }))}
      to={!to ? config.defaultPath : to}
      sx={sx}
    >
   <Box
  component="img"
  sx={{
    height: 50,
    width: 50,
    maxHeight: { xs: 233, md: 167 },
    maxWidth: { xs: 350, md: 250 },
  }}
  alt="Mr.Popa English Academy"
  src="https://lh3.googleusercontent.com/BQk0osbF_n6r45LMj430pdNMkm5ryLaHVfUCAt95LyfHHL8HKMZqapIGTuqTxXmuVeNb-25XN2xCgWh8eeyAfIg=w16383"
/>
<span style={{
  display: "inline-block",
  lineHeight: 1,
  maxWidth: '380px',
  outline: 'none',
  overflow: 'hidden',
  padding: '4px 4px',
  textDecoration: 'none',
  textOverflow: 'ellipsis'
}}>Mr.Popa English Academy</span>
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
