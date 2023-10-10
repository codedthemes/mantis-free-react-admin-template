import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import ProtectedRoute from './ProtectedRoute';

// pages
const FormOverview = Loadable(lazy(() => import('pages/form/FormOverview')));
const Form = Loadable(lazy(() => import('pages/form/Form')));
const Dashboard = Loadable(lazy(() => import('pages/dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const UserRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'office/dashboard',
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      )
    },
    {
      path: 'office/form/overview',
      element: (
        <ProtectedRoute>
          <FormOverview />
        </ProtectedRoute>
      )
    },
    {
      path: 'office/form/:formId',
      element: (
        <ProtectedRoute>
          <Form />
        </ProtectedRoute>
      )
    }
  ]
};

export default UserRoutes;
