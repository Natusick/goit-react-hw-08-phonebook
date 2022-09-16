import { createSlice } from '@reduxjs/toolkit';
import {registerUser, logInUser, logOutUser, getCurrentUser} from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [registerUser.rejected](state) {
      state.user = { name: null, email: null};
      state.token = null;
      state.isLoggedIn = false;
  },

  [logInUser.fulfilled](state, action){
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
},

    [logInUser.rejected](state){
        state.user = { name: null, email: null};
        state.token = null;
        state.isLoggedIn = false;
    },

    [logOutUser.fulfilled](state){
        state.user = {name: null, email: null};
        state.token = null;
        state.isLoggedIn = false;
    },

    [getCurrentUser.pending](state) {
        state.isRefreshingUser = true;
    },

    [getCurrentUser.fulfilled](state, action){
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshingUser = false;
    },

    [getCurrentUser.pending](state){
      state.isRefreshingUser = true;
  },

    [getCurrentUser.rejected](state){
        state.isRefreshingUser = false;
    },
  },
});


export default authSlice.reducer;