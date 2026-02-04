import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import MobileSection from './MobileSection';

export default function HeaderContent() {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <>
      <Box sx={{ width: '100%', ml: 1 }} />
      {downLG && <MobileSection />}
    </>
  );
}