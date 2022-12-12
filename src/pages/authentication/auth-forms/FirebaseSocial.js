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

// const authCallback = async (result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     if (result) {
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         console.log(credential.accessToken);
//     }
//     // const token = credential.accessToken;

//     // sendEmailVerification(result.user);
//     // navigate('/', { state: { access_token: token } });
// };

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

    // get current user to tell if we're already logged in
    const user = auth.getCurrentUser;
    const already_logged_in = user != null;
    console.log(already_logged_in ? 'User is already logged in' : 'User is not currently logged in');

    getRedirectResult(auth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            console.log('success');
            console.log(user);
            console.log(token);
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(errorMessage);
            console.log(errorCode);
        });

    const googleHandler = async () => {
        await signInWithPopup(auth, googleProvider);
    };

    const twitterHandler = async () => {
        await signInWithPopup(auth, twitterProvider);
    };

    const githubHandler = async () => {
        await signInWithPopup(auth, githubProvider);
    };

    // const authCallbackFailure = async (error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     // const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);

    //     // TODO: display errors
    //     console.log(errorCode);
    // };

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
