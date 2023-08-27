import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import ProtectedRoute from './ProtectedRoute';
const Dashboard = Loadable(lazy(() => import('pages/dashboard')));
const Graphs = Loadable(lazy(() => import('pages/graphs')));

// render - sample page
const FormOverview = Loadable(lazy(() => import('pages/form/FormOverview')));
const Form = Loadable(lazy(() => import('pages/form/Form')));

// render - utilities
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      )
    },
    {
      path: '/form/overview',
      element: (
        <ProtectedRoute>
          <FormOverview />
        </ProtectedRoute>
      )
    },
    {
      path: 'form/:formId',
      element: (
        <ProtectedRoute>
          <Form />
        </ProtectedRoute>
      )
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <Dashboard />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <Graphs />
    },
    {
      path: 'shadow',
      element: <Shadow />
    }
  ]
};

export default MainRoutes;
