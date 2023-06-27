// firebase
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

// the firebase auth api key is intended to be public
// https://stackoverflow.com/a/37484053
// https://firebase.google.com/docs/web/setup#available-libraries
const app = initializeApp({
    apiKey: 'AIzaSyBQ8rb3jkIsusGKhGwGm-ri9VAjoof1OKA',
    authDomain: 'nanocryptobank.firebaseapp.com',
    projectId: 'nanocryptobank',
    storageBucket: 'nanocryptobank.appspot.com',
    messagingSenderId: '950014241040',
    appId: '1:950014241040:web:16e7f8fa0f59bcaf7b5d95',
    measurementId: 'G-H4F5Z43EKN'
});

const getEmulatorAuth = () => {
    try {
        const auth = getAuth();
        const authEmulatorUrl = 'http://127.0.0.1:9099';
        connectAuthEmulator(auth, authEmulatorUrl);
        auth.useDeviceLanguage();
        console.info('Firebase Auth: emulated!');
        return auth;
    } catch (e) {
        console.info(e);
        console.info('🔥 Firebase Auth: not emulated');
    }
};

const getProductionAuth = () => {
    const auth = getAuth(app);
    auth.useDeviceLanguage();
    return auth;
};

const getAppAuth = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return getEmulatorAuth();
    } else {
        return getProductionAuth();
    }
};

export { app, getAppAuth };
