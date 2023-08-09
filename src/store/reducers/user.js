// features/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      const initials = action.payload.displayName
        ?.split(' ')
        .map((word) => word[0])
        .join('');
      console.log('initials', initials);
      state.user = {
        ...action.payload,
        initials
      };
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export const { login, logout } = userSlice.actions;

// selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
