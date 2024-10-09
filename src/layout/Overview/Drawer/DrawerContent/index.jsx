import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';

export default function DrawerContent() {
  return (
    <>
      <SimpleBar sx={{ '& .simplebar-content': { display: 'flex', flexDirection: 'column' } }}>
        <Navigation />
      </SimpleBar>
    </>
  );
}
