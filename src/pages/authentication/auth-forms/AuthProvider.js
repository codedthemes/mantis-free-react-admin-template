import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

export const AuthContext = createContext();

// the firebase auth api key is intended to be public
// https://stackoverflow.com/a/37484053
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: 'AIzaSyBQ8rb3jkIsusGKhGwGm-ri9VAjoof1OKA',
    authDomain: 'nanocryptobank.firebaseapp.com',
    projectId: 'nanocryptobank',
    storageBucket: 'nanocryptobank.appspot.com',
    messagingSenderId: '950014241040',
    appId: '1:950014241040:web:16e7f8fa0f59bcaf7b5d95',
    measurementId: 'G-H4F5Z43EKN'
};

const app = initializeApp(firebaseConfig);

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            if (!user) {
                navigate('/login');
            }
        });
    }, [auth, navigate]);

    return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
