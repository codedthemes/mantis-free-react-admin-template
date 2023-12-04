import React from 'react';
import { combineComponents } from './combineComponents';

import { UserContextProvider } from './user';
import { NavigationContextProvider } from './navigation';

const providers = [UserContextProvider, NavigationContextProvider];
export const AppContextProvider = combineComponents(...providers);

// eslint-disable-next-line react/prop-types
export const AllContextsProvider = ({ children }) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};
