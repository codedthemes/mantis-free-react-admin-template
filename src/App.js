/* eslint-disable prettier/prettier */
// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import AuthContextProvider from 'services/AuthContext';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <AuthContextProvider>
        <ThemeCustomization>
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </ThemeCustomization>
    </AuthContextProvider>
);

export default App;
