// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: true,
    isSignout: false,
    userToken: null,
    userInfo: {}, // for user object
    resstritionMode: null,

  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isSignout = false;
      state.userToken = action.payload.userToken;
      state.userInfo = action.payload.userInfo;
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.isSignout = true;
      state.userToken = null;
    },
    logout: (state) => {
      state.isSignout = true;
      state.userToken = null;
      state.userInfo = {};
    },
    updateUserInfo: (state, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    
    toRegstriationMode: (state, action) => {
      state.resstritionMode = true;

      
    },

    // to register user details later 
    registerSuccess: (state, action) => {
      state.userToken = action.payload.userToken;
    }

    ,
    restoreToken: (state, action) => {
      state.isLoading = false;
      state.userToken = action.payload;
    },
  },
});

export const { loginSuccess,loginFailure ,logout, restoreToken, updateUserInfo, registerSuccess } = authSlice.actions;
export default authSlice.reducer;
