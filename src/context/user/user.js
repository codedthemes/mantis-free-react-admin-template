import { createContext, useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import { StatusCodes } from 'http-status-codes';
import dayjs from 'dayjs';

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
import { setDoc, doc, getDoc, getDocs, addDoc, collection, query, where, documentId, deleteDoc } from 'firebase/firestore';

const initialUser = {
  uid: null,
  email: null,
  firstName: null,
  lastName: null,
  displayName: null,
  company: null,
  userFormIds: []
};

const initialFormsData = {};
const initialStatusCodes = {
  loadingUser: null,
  createUser: null,
  setUser: null,
  loadingForm: null,
  createForm: null,
  setForm: null,
  saveForm: null
};

const initialLayout = {
  drawerStatus: null,
}

export const UserContext = createContext(null);
export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const mounted = useRef();
  const [user, setUser] = useState(initialUser);
  const [formsData, setFormsData] = useState(initialFormsData);
  const [activeFormId, setActiveFormId] = useState(initialFormsData);
  const activeFormData = useMemo(() => formsData[activeFormId], [activeFormId, formsData]);
  
  const [drawerStatus, setDrawerStatus] = useState(initialLayout.drawerStatus);

  const [status_loadingUser, setLoadingUser] = useState(initialStatusCodes.loadingUser);
  const [status_createUser, setCreateUser] = useState(initialStatusCodes.createUser);
  const [status_authUser, setAuthUser] = useState(initialStatusCodes.setUser);
  const [status_loadingForm, setLoadingForm] = useState(initialStatusCodes.loadingForm);
  const [status_createForm, setCreateForm] = useState(initialStatusCodes.createForm);
  const [status_saveForm, setSaveForm] = useState(initialStatusCodes.saveForm);
  const [status_setForm, setSetForm] = useState(initialStatusCodes.setForm);

  const requestStatusCodes = useMemo(() => {
    return {
      loadingUser: status_loadingUser,
      createUser: status_createUser,
      authUser: status_authUser,
      loadingForm: status_loadingForm,
      createForm: status_createForm,
      setForm: status_setForm,
      saveForm: status_saveForm
    };
  }, [status_loadingUser, status_saveForm, status_createUser, status_authUser, status_loadingForm, status_createForm, status_setForm]);

  const logoutUser = useCallback(
    ({ toPage } = {}) => {
      signOut(auth);
      setUser(initialUser);
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
        ...initialUser,
        email: email,
        uid: uid,
        displayName: displayName,
        ...userDoc
      });
    },
    [getUserDoc]
  );

  const reloadUser = useCallback(async () => {
    const userDoc = await getUserDoc(user.uid);

    await setUser({
      email: user.email,
      uid: user.uid,
      displayName: user.displayName,
      ...userDoc
    });
  }, [user.email, user.uid, user.displayName, getUserDoc]);

  const authUser = useCallback(
    async ({ emailCredentials }) => {
      const { email, password } = emailCredentials;
      setAuthUser(StatusCodes.PROCESSING);
      await signInWithEmailAndPassword(auth, email, password)
        .then(async (userAuth) => {
          // store the user's information in the redux state
          await loginUser({ email: userAuth.user.email, uid: userAuth.user.uid, displayName: userAuth.user.displayName });
        })
        // display the error if any
        .catch((err) => {
          alert(err);
        });
      setAuthUser(StatusCodes.PROCESSING);
    },
    [loginUser]
  );

  const registerUser = useCallback(
    async (formData) => {
      const { email, password, firstName, lastName, company } = formData;
      setCreateUser(StatusCodes.PROCESSING);
      await createUserWithEmailAndPassword(auth, email, password)
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
                  email: email,
                  password: password
                }
              });
            });
        })
        .catch((error) => {
          console.log('user not updated', error);
        });
      setCreateUser(StatusCodes.OK);
    },
    [authUser]
  );

  const addUserForm = useCallback(
    async (formId) => {
      if (user.uid) {
        await setDoc(
          doc(db, 'users', user.uid),
          {
            userFormIds: [...user.userFormIds, formId]
          },
          { merge: true }
        );
      }
    },
    [user.uid, user.userFormIds]
  );

  const removeUserForm = useCallback(
    async (formId) => {
      if (user.uid) {
        await setDoc(
          doc(db, 'users', user.uid),
          {
            userFormIds: [...user.userFormIds.filter((id) => id !== formId)]
          },
          { merge: true }
        );

        await reloadUser();
      }
    },
    [user.uid, user.userFormIds, reloadUser]
  );

  // FORMS

  const deleteForm = useCallback(
    async (formId) => {
      await deleteDoc(doc(db, 'forms', formId));
      await removeUserForm(formId);
    },
    [removeUserForm]
  );

  const getForms = useCallback(async (formIds) => {
    const tmpForms = {};
    const snap = await getDocs(query(collection(db, 'forms'), where(documentId(), 'in', formIds)));

    snap.docs.forEach((doc) => {
      const docData = doc.data();
      tmpForms[doc.id] = {
        id: docData.id,
        title: docData.title,
        values: docData.values ? JSON.parse(docData.values) : {},
        creationDate: docData.creationDate
      };
    });
    return tmpForms;
  }, []);

  const createForm = useCallback(
    async ({ title }) => {
      setCreateForm(StatusCodes.PROCESSING);
      const docRef = await addDoc(collection(db, 'forms'), {
        title: title,
        creationDate: dayjs().valueOf(),
        values: JSON.stringify({})
      });

      await addUserForm(docRef.id);
      await reloadUser();
      setCreateForm(StatusCodes.OK);
    },
    [addUserForm, reloadUser]
  );

  const saveForm = useCallback(
    async (values) => {
      setSaveForm(StatusCodes.PROCESSING);
      if (activeFormId) {
        await setDoc(
          doc(db, 'forms', activeFormId),
          {
            values: JSON.stringify({ ...values, lastChanged: dayjs().valueOf() }) || ''
          },
          { merge: true }
        );
      }
      setSaveForm(StatusCodes.OK);
    },
    [activeFormId]
  );

  useEffect(() => {
    const initialize = async () => {
      await onAuthStateChanged(auth, async (userAuth) => {
        setLoadingUser(StatusCodes.PROCESSING);
        const enable = true;
        if (enable && userAuth) {
          await loginUser({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName
          });
        }
        setLoadingUser(StatusCodes.OK);
      });
    };

    initialize();
  }, [loginUser]);

  useEffect(() => {
    const updateForms = async () => {
      setLoadingForm(StatusCodes.PROCESSING);
      if (user.userFormIds.length > 0) {
        const forms = await getForms(user.userFormIds);
        setFormsData(forms);
      } else {
        setFormsData({});
      }
      setLoadingForm(StatusCodes.OK);
    };

    updateForms();
  }, [user.userFormIds, getForms]);

  useEffect(() => {
    if (matchDownMD) {
      setDrawerStatus('closed');
    } else {
      setDrawerStatus('opened');
    }
  }, [matchDownMD]);

  useEffect(() => {
    mounted.current = true;

    return () => (mounted.current = false);
  }, [mounted]);

  return (
    <UserContext.Provider
      value={{
        logoutUser,
        loginUser,
        authUser,
        registerUser,
        user,
        setUser,
        addUserForm,
        reloadUser,
        formsData,
        createForm,
        deleteForm,
        saveForm,
        activeFormId,
        activeFormData,
        setActiveFormId,
        requestStatusCodes,
        drawerStatus,
        setDrawerStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
