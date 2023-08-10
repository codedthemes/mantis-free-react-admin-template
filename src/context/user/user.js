import { createContext, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Firebase
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  db,
  onAuthStateChanged
} from 'services/firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';

const initialUser = {
  uid: null,
  email: null,
  firstName: null,
  lastName: null,
  displayName: null,
  company: null
};
const initialFormIds = [];

export const UserContext = createContext(null);
export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialUser);
  const [formIds, setFormIds] = useState(initialFormIds);

  console.log('context user', user);

  const logoutUser = useCallback(
    ({ toPage } = {}) => {
      signOut(auth);
      setUser(initialUser);
      setFormIds(initialFormIds);
      navigate(toPage || '/');
    },
    [navigate]
  );

  const getUserDoc = useCallback(async (uid) => {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();

      return userData;
    } else {
      // docSnap.data() will be undefined in this case
      return {};
    }
  }, []);

  const loginUser = useCallback(
    async ({ uid, email, displayName }) => {
      const userDoc = await getUserDoc(uid);

      await setUser({
        email: email,
        uid: uid,
        displayName: displayName,
        ...userDoc
      });
      navigate('/');
    },
    [navigate, getUserDoc]
  );

  const authUser = useCallback(
    ({ emailCredentials }) => {
      const { email, password } = emailCredentials;
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userAuth) => {
          // store the user's information in the redux state
          await loginUser({ email: userAuth.user.email, uid: userAuth.user.uid, displayName: userAuth.user.displayName });
        })
        // display the error if any
        .catch((err) => {
          alert(err);
        });
    },
    [loginUser]
  );

  const registerUser = useCallback(
    (formData) => {
      const { email, password, firstName, lastName, company } = formData;
      createUserWithEmailAndPassword(auth, email, password)
        // returns  an auth object after a successful authentication
        // userAuth.user contains all our user details
        .then((userCredential) => {
          const displayName = `${firstName} ${lastName}`;
          return updateProfile(userCredential.user, {
            displayName: displayName
          })
            .then(() => {
              setDoc(doc(db, 'users', userCredential.user.uid), {
                firstName: firstName,
                lastName: lastName,
                company: company || ''
              });
            })
            .then(() => {
              // Dispatch the user information for persistence in the redux state
              authUser({
                emailCredentials: {
                  email: userCredential.user.email,
                  password: password
                }
              });
            });
        })
        .catch((error) => {
          console.log('user not updated', error);
        });
    },
    [authUser]
  );

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        loginUser({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName
        });
      }
    });
  }, [loginUser]);

  return (
    <UserContext.Provider
      value={{
        logoutUser,
        loginUser,
        authUser,
        registerUser,
        user,
        setUser,
        formIds,
        setFormIds
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
