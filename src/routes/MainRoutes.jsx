import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Overview from 'layout/Overview';

const OverviewPage = Loadable(lazy(() => import('pages/overview/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Overview />,
  children: [
    {
      path: '/',
      element: <OverviewPage />
    },
    {
      path: 'overview',
      children: [
        {
          path: 'default',
          element: <OverviewPage />
        }
      ]
    }
  ]
};

export default MainRoutes;
