import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render pages
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const WalletDefault = Loadable(lazy(() => import('pages/wallet')));
const UserVerification = Loadable(lazy(() => import('pages/user-verification')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));

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
            path: 'wallets',
            element: <WalletDefault />
        },
        {
            path: 'verify',
            element: <UserVerification />
        },
        {
            path: 'marketplace',
            children: [
                {
                    path: 'loan',
                    element: <DashboardDefault />
                }
            ]
        }
    ]
};

export default MainRoutes;
