import { createSlice } from "@reduxjs/toolkit";

import authOperations from "./auth-operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null },
    isLoggedIn: false,
    refreshing: false,
    token: null,
  },
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.signIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.signOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.refreshCurrentUser.pending](state, action) {
      state.refreshing = true;
    },

    [authOperations.refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.refreshing = false;
    },

    [authOperations.refreshCurrentUser.rejected](state, action) {
      state.refreshing = false;
    },
  },
});

export default authSlice.reducer;
