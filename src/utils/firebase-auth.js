// firebase
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    connectAuthEmulator
} from 'firebase/auth';

const getEmulatorAuth = () => {
    // https://firebase.google.com/docs/emulator-suite/connect_auth
    const auth = getAuth();
    connectAuthEmulator(auth, "http://localhost:9099");
    auth.useDeviceLanguage();
    return auth;
}

const getProductionAuth = () => {
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
    const auth = getAuth(app);
    auth.useDeviceLanguage();
    return auth;
}

export const getAppAuth = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return getEmulatorAuth();
    } else {
        return getProductionAuth();
    }
}
