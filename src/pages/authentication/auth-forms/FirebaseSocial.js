// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// assets
import Google from 'assets/images/icons/google.svg';
import Twitter from 'assets/images/icons/twitter.svg';
import Github from 'assets/images/icons/github.svg';

// firebase
import { initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword, Auth, sendEmailVerification } from "firebase/auth";
import { getAuth, getRedirectResult, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider } from 'firebase/auth';

// react
import { useEffect } from 'react';

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

const FirebaseSocial = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

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
    const auth = getAuth(app);
    auth.useDeviceLanguage();

    const googleHandler = async () => {
        signInWithPopup(auth, new GoogleAuthProvider());
        getRedirectResult(auth).then(authCallbackSuccess).catch(authCallbackFailure);
    };

    const twitterHandler = async () => {
        signInWithPopup(auth, new TwitterAuthProvider());
        getRedirectResult(auth).then(authCallbackSuccess).catch(authCallbackFailure);
    };

    const githubHandler = async () => {
        signInWithPopup(auth, new GithubAuthProvider());
        getRedirectResult(auth).then(authCallbackSuccess).catch(authCallbackFailure);
    };

    const authCallbackSuccess = async (result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;

        // navigation.push('success', {
        //     token: token
        // });
        console.log('success');
    };

    const authCallbackFailure = async (error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log('failure');
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
