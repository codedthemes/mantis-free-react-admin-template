import { UserContextProvider } from './user/user';

export const AllContextsProvider = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};
