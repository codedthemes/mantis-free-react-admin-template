// material-ui
// import { useMediaQuery } from '@mui/material';
import './HeaderContent.scss';
// project import
// import Search from './Search';
// import Profile from './Profile';
// import Notification from './Notification';
// import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  // const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <div className="header-wrapper">
      {/* {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />} */}

      {/* <div className="header-right">
        <Notification />
        {!matchesXs && <Profile />}
        {matchesXs && <MobileSection />}
      </div> */}
    </div>
  );
};

export default HeaderContent;
