import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import LoginRoutes from 'routes/LoginRoutes';
import MainRoutes from 'routes/MainRoutes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import AuthProvider from 'pages/authentication/auth-forms/AuthProvider';

const App = () => {
    const publicRoutes = useRoutes(LoginRoutes);
    const privateRoutes = useRoutes(MainRoutes);

    return (
        <AuthProvider>
            <ThemeCustomization>
                <ScrollTop>
                    {publicRoutes}
                    {privateRoutes}
                </ScrollTop>
            </ThemeCustomization>
        </AuthProvider>
    );
};

export default App;
