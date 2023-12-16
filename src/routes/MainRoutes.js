import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import SettingsPage from 'pages/settings/settings-page';
import FeedbackPage from 'pages/feedback/feedback-page';
// import TermsPage from 'pages/extra-pages/TermsPage';
import EpicsPage from 'pages/epics/epics-page';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('../pages/dashboard/Dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'settings-page',
      element: <SettingsPage />
    },
    {
      path: 'feedback-page',
      element: <FeedbackPage />
    },
    {
      path: 'epics-page',
      element: <EpicsPage />
    },
    // {
    //   path: 'terms-page',
    //   element: <TermsPage />
    // },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};

export default MainRoutes;
