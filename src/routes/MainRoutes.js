import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render pages
const LoanMarketplace = Loadable(lazy(() => import('pages/loan-marketplace')));
const MyLoans = Loadable(lazy(() => import('pages/my-loans')));
const BillPay = Loadable(lazy(() => import('pages/bill-pay')));
const Credit = Loadable(lazy(() => import('pages/credit')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <LoanMarketplace />
        },
        {
            path: '/marketplace',
            element: <LoanMarketplace />
        },
        {
            path: '/loans',
            element: <MyLoans />
        },
        {
            path: '/bills',
            element: <BillPay />
        },
        {
            path: '/credit',
            element: <Credit />
        }
    ]
};

export default MainRoutes;
