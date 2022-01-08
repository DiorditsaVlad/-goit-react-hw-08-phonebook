import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistReducer,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  FLUSH,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./phonebook/phonebook-reducer";
import authSlice from "./auth/auth-slice";
import persistStore from "redux-persist/lib/persistStore";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PAUSE, REHYDRATE, PERSIST, PURGE, FLUSH],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authSlice),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
