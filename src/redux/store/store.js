import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./authSlice";
import propertyReducer from "./propertySlice";

// Configure redux-persist
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["status", "token", "userData"], // Persist only explicitly required fields
};

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    property: propertyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create the persistor
export const persistor = persistStore(store);
