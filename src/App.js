import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import LoginRoutes from 'routes/LoginRoutes';
import MainRoutes from 'routes/MainRoutes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import AuthProvider, { useAuth } from 'pages/authentication/auth-forms/AuthProvider';

const App = () => {
    const { user } = useAuth();

    const element = user ? (
        <AuthProvider>
            <MainRoutes />
        </AuthProvider>
    ) : (
        <LoginRoutes />
    );

    return (
        <ThemeCustomization>
            <ScrollTop>
                <Router>{element}</Router>
            </ScrollTop>
        </ThemeCustomization>
    );
};

export default App;
