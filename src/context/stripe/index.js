import { UserContext } from 'context/user/index';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

// Firebase
import { db, auth, app } from 'services/firebase';

import { getFunctions, httpsCallable } from 'firebase/functions';
import { query, where, getDocs, collection, addDoc, onSnapshot } from 'firebase/firestore';

export const StripeContext = createContext(null);

const getSubscriptions = async (userId) => {
  if (userId) {
    const checkoutSessionRef = collection(db, 'users', userId, 'subscriptions');
    const allDocs = await getDocs(query(checkoutSessionRef));
    const snap = await getDocs(query(checkoutSessionRef, where('status', 'in', ['trialing', 'active'])));

    return snap;
  }
};

// eslint-disable-next-line react/prop-types
export const StripeContextProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [loadingCreateSubscription, setLoadingCreateSubscription] = useState(false);
  const [loadingGetSubscriptionStatus, setLoadingGetSubscriptionStatus] = useState(false);

  const [activeSubscriptions, setActiveSubscriptions] = useState(false);
  const hasActiveSubscription = useMemo(() => activeSubscriptions.length > 0, [activeSubscriptions]);

  const updateSubscriptions = useCallback(async () => {
    setLoadingGetSubscriptionStatus(true);
    const subs = await getSubscriptions(user.uid);

    setActiveSubscriptions(subs?.docs);
    setLoadingGetSubscriptionStatus(false);
  }, [user.uid]);

  const createSubscription = useCallback(
    async (priceId = 'price_1OQu81KhU0UrNVcbwBrW9GNg') => {
      setLoadingCreateSubscription(true);

      if (user.uid) {
        const checkoutSessionRef = collection(db, 'users', user.uid, 'checkout_sessions');

        const docRef = await addDoc(checkoutSessionRef, {
          price: priceId,
          success_url: `${window.location.origin}/office/billing`,
          cancel_url: `${window.location.origin}/office/billing`
        });

        return new Promise((resolve, reject) => {
          const unsubscribe = onSnapshot(docRef, (snap) => {
            const { error, url } = snap.data();
            if (error) {
              unsubscribe();
              reject(new Error(`An error occurred: ${error.message}`));
              setLoadingCreateSubscription(false);
            }
            if (url) {
              unsubscribe();
              resolve(url);
              setLoadingCreateSubscription(false);
            }
          });
        });
      }
    },
    [user.uid]
  );

  const getPortalUrl = async () => {
    const user = auth.currentUser;

    let dataWithUrl;
    try {
      const functions = getFunctions(app, 'europe-west3');
      const functionRef = httpsCallable(functions, 'ext-firestore-stripe-payments-createPortalLink');
      const { data } = await functionRef({
        customerId: user?.uid,
        returnUrl: window.location.origin
      });

      // Add a type to the data
      dataWithUrl = data;
    } catch (error) {
      console.error(error);
    }

    return new Promise((resolve, reject) => {
      if (dataWithUrl.url) {
        resolve(dataWithUrl.url);
      } else {
        reject(new Error('No url returned'));
      }
    });
  };

  useEffect(() => {
    user.uid && updateSubscriptions();
  }, [user.uid, updateSubscriptions]);

  return (
    <StripeContext.Provider
      value={{
        createSubscription,
        hasActiveSubscription,
        loadingCreateSubscription,
        loadingGetSubscriptionStatus,
        getPortalUrl
      }}
    >
      {children}
    </StripeContext.Provider>
  );
};
