import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import LoginRoutes from 'routes/LoginRoutes';
import MainRoutes from 'routes/MainRoutes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { AuthProvider, useAuth } from 'pages/authentication/auth-forms/AuthProvider';

const App = () => {
    const user = useAuth();
    const routing = useRoutes(user ? MainRoutes : LoginRoutes);

    return (
        <AuthProvider>
            <ThemeCustomization>
                <ScrollTop>
                    <Router>{routing}</Router>
                </ScrollTop>
            </ThemeCustomization>
        </AuthProvider>
    );
};

export default App;
