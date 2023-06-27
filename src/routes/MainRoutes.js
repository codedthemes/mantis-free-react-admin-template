import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import PrivateRoute from 'routes/PrivateRoutes';

const LoanMarketplace = Loadable(lazy(() => import('pages/loan-marketplace')));
const MyLoans = Loadable(lazy(() => import('pages/my-loans')));
const BillPay = Loadable(lazy(() => import('pages/bill-pay')));
const Credit = Loadable(lazy(() => import('pages/credit')));

const MainRoutes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: (
                    <PrivateRoute>
                        <LoanMarketplace />
                    </PrivateRoute>
                )
            },
            {
                path: 'marketplace',
                element: (
                    <PrivateRoute>
                        <LoanMarketplace />
                    </PrivateRoute>
                )
            },
            {
                path: 'loans',
                element: (
                    <PrivateRoute>
                        <MyLoans />
                    </PrivateRoute>
                )
            },
            {
                path: 'bills',
                element: (
                    <PrivateRoute>
                        <BillPay />
                    </PrivateRoute>
                )
            },
            {
                path: 'credit',
                element: (
                    <PrivateRoute>
                        <Credit />
                    </PrivateRoute>
                )
            }
        ]
    }
];

export default MainRoutes;
