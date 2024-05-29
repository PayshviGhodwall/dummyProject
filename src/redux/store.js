import { configureStore } from "@reduxjs/toolkit";
import getApiInfo from "./slices/getApiInfoSlice";
import { combineReducers } from "redux";
import localforage from "localforage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  timeout: 0,
  key: "root",
  version: 1,
  storage: localforage,
};

const reducer = combineReducers({
  new: getApiInfo,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk: true,
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export default store;
