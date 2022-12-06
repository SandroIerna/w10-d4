import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import favouriteReducer from "../reducers/favouriteReducer";
import searchJobReducer from "../reducers/searchJobReducer";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const mainReducer = combineReducers({
  favourites: favouriteReducer,
  jobs: searchJobReducer,
});

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};
const persistedReducer = persistReducer(persistConfig, mainReducer);

export const favourites = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(favourites);
