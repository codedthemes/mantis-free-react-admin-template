/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-catch */
import { createContext, useState } from 'react';

export const AuthContext = createContext({
    profile: {},
    adminLogin: () => {}
});

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
    const [profile, setProfile] = useState(true);

    const baseUrl = 'http://127.0.0.1:8000/api/admin';

    const adminLogin = async (data) => {
        const response = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        if (response.ok) {
            if (responseData.token) {
                setProfile({
                    token: responseData.token,
                    id: responseData.uuid
                });
                return 1;
            }
            return 0;
        }
    };

    const value = {
        profile,
        adminLogin
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
