import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import favouriteReducer from "../reducers/favouriteReducer";
import searchJobReducer from "../reducers/searchJobReducer";

const mainReducer = combineReducers({
  favourites: favouriteReducer,
  jobs: searchJobReducer,
});

const favourites = configureStore({
  reducer: mainReducer,
});

export default favourites;
