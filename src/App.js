import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import LoginRoutes from 'routes/LoginRoutes';
import MainRoutes from 'routes/MainRoutes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { AuthProvider, useAuth } from 'pages/authentication/auth-forms/AuthProvider';

const App = () => {
    return (
        <AuthProvider>
            <ThemeCustomization>
                <ScrollTop>
                    <AppRoutes />
                </ScrollTop>
            </ThemeCustomization>
        </AuthProvider>
    );
};

const AppRoutes = () => {
    const { user } = useAuth();
    return useRoutes(user ? MainRoutes : LoginRoutes);
};

export default App;
