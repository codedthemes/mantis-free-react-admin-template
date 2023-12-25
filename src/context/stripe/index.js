import { UserContext } from 'context/user/index';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
// Firebase
import { db } from 'services/firebase';

import { doc, query, where, getDocs, collection, addDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

export const StripeContext = createContext(null);

const getSubscriptions = async (userId) => {
  if (userId) {
    const checkoutSessionRef = collection(db, 'users', userId, 'subscriptions');
    const snap = await getDocs(query(checkoutSessionRef, where('status', 'in', ['trialing', 'active'])));

    console.log('snaps', snap);

    return snap;
  }
};

// eslint-disable-next-line react/prop-types
export const StripeContextProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [loadingCreateSubscription, setLoadingCreateSubscription] = useState(false);
  const [loadingCancelSubscription, setLoadingCancelSubscription] = useState(false);
  const [loadingGetSubscriptionStatus, setLoadingGetSubscriptionStatus] = useState(false);

  const [activeSubscriptions, setActiveSubscriptions] = useState(false);
  const hasActiveSubscription = useMemo(() => activeSubscriptions.length > 0, [activeSubscriptions]);

  const updateSubscriptions = useCallback(async () => {
    setLoadingGetSubscriptionStatus(true);
    const subs = await getSubscriptions(user.uid);

    setActiveSubscriptions(subs?.docs);
    setLoadingGetSubscriptionStatus(false);
  }, [user.uid]);

  const cancelSubscriptions = useCallback(async () => {
    setLoadingCancelSubscription(true);
    if (user.uid) {
      const checkoutSessionRef = collection(db, 'users', user.uid, 'subscriptions');
      const promiseArray = [];

      for (const subObj of activeSubscriptions) {
        console.log('delete', subObj.id);
        const docRef = doc(db, 'users', user.uid, 'subscriptions', subObj.id);
        await deleteDoc(docRef);
      }

      await Promise.all(promiseArray);

      await updateSubscriptions();
      setLoadingCancelSubscription(false);
    }
  }, [user.uid, activeSubscriptions, updateSubscriptions]);

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

  useEffect(() => {
    user.uid && updateSubscriptions();
  }, [user.uid, updateSubscriptions]);

  return (
    <StripeContext.Provider
      value={{
        createSubscription,
        cancelSubscriptions,
        hasActiveSubscription,
        loadingCreateSubscription,
        loadingGetSubscriptionStatus
      }}
    >
      {children}
    </StripeContext.Provider>
  );
};
