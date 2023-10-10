import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import PublicLayout from 'layout/PublicLayout';

// pages
const Start = Loadable(lazy(() => import('pages/start')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <PublicLayout />,
  children: [
    {
      path: '/',
      element: <Start />
    }
  ]
};

export default MainRoutes;
