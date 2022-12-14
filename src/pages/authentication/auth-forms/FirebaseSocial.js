// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// assets
import Google from 'assets/images/icons/google.svg';
import Twitter from 'assets/images/icons/twitter.svg';
import Github from 'assets/images/icons/github.svg';

// firebase
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    getRedirectResult,
    sendEmailVerification,
    signInWithPopup,
    GoogleAuthProvider,
    TwitterAuthProvider,
    GithubAuthProvider
} from 'firebase/auth';

// react
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

const firebaseConfig = {
    apiKey: 'AIzaSyBQ8rb3jkIsusGKhGwGm-ri9VAjoof1OKA',
    authDomain: 'nanocryptobank.firebaseapp.com',
    projectId: 'nanocryptobank',
    storageBucket: 'nanocryptobank.appspot.com',
    messagingSenderId: '950014241040',
    appId: '1:950014241040:web:16e7f8fa0f59bcaf7b5d95',
    measurementId: 'G-H4F5Z43EKN'
};

const error_message = {
    'auth/email-already-in-use': 'Email already in use',
    'auth/invalid-email': 'Error: Invalid Email',
    'auth/wrong-password': 'Incorrect password',
    'auth/rejected-credential': 'Incorrect password',
    'auth/too-many-requests': 'Too many attempts',
    'auth/unverified-email': 'Please verify your email',
    'auth/weak-password': 'Your password must be at least 6 characters, containing letters and numbers'
};

const FirebaseSocial = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const githubProvider = new GithubAuthProvider();

    googleProvider.setCustomParameters({
        prompt: 'select_account'
    });

    twitterProvider.setCustomParameters({
        prompt: 'select_account'
    });

    githubProvider.setCustomParameters({
        prompt: 'select_account'
    });

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    auth.useDeviceLanguage();

    const handleLoginSuccess = (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        sessionStorage.setItem('idToken', credential.idToken);
        navigate('../verify');
    };

    const handleLoginFailure = (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorMessage);
        console.log(errorCode);
        // TODO: lock account after too many failed attempts?
    };

    const googleHandler = async () => {
        signInWithPopup(auth, googleProvider).then(handleLoginSuccess).catch(handleLoginFailure);
    };

    const twitterHandler = async () => {
        signInWithPopup(auth, twitterProvider).then(handleLoginSuccess).catch(handleLoginFailure);
    };

    const githubHandler = async () => {
        signInWithPopup(auth, githubProvider).then(handleLoginSuccess).catch(handleLoginFailure);
    };

    return (
        <Stack
            direction="row"
            spacing={matchDownSM ? 1 : 2}
            justifyContent={matchDownSM ? 'space-around' : 'space-between'}
            sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }}
        >
            <Button
                variant="outlined"
                color="secondary"
                fullWidth={!matchDownSM}
                startIcon={<img src={Google} alt="Google" />}
                onClick={googleHandler}
            >
                {!matchDownSM && 'Google'}
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                fullWidth={!matchDownSM}
                startIcon={<img src={Twitter} alt="Twitter" />}
                onClick={twitterHandler}
            >
                {!matchDownSM && 'Twitter'}
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                fullWidth={!matchDownSM}
                startIcon={<img src={Github} alt="Github" />}
                onClick={githubHandler}
            >
                {!matchDownSM && 'Github'}
            </Button>
        </Stack>
    );
};

export default FirebaseSocial;
