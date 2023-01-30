// ==============================|| THEME CONFIG  ||============================== //

const config = {
    defaultPath: '/login',
    fontFamily: `'Public Sans', sans-serif`,
    i18n: 'en',
    miniDrawer: false,
    container: true,
    mode: 'light',
    presetColor: 'default',
    themeDirection: 'ltr'
};

export const auth0Config = {
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    domain: process.env.REACT_APP_AUTH0_DOMAIN
};

export const apiConfig = {
    api_prefix: process.env.REACT_APP_API_URL || 'api.property.eastwood.docker.localhost:8001'
};

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
};

export default config;
export const drawerWidth = 260;
